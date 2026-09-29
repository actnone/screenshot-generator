// Renders store screenshots with Playwright.
//
// Starts the Vite dev server, reads the project configs through it, and captures every
// screen at its exact output size. See the README for the available options.
import { mkdir, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { parseArgs } from 'node:util';
import { chromium } from 'playwright';
import { PNG } from 'pngjs';
import { createServer } from 'vite';

const { values: options } = parseArgs({
  options: {
    store: { type: 'string', multiple: true },
    project: { type: 'string', multiple: true },
    language: { type: 'string', multiple: true },
    out: { type: 'string', default: 'screenshots' },
    concurrency: { type: 'string', default: String(Math.min(4, os.cpus().length)) },
  },
});

// Accept both `--store a --store b` and `--store a,b`.
function listOption(value) {
  return value?.flatMap((item) => item.split(/[,|]/)).map((item) => item.trim()).filter(Boolean);
}

function pickOrThrow(requested, available, name) {
  if (!requested) {
    return available;
  }
  const unknown = requested.filter((item) => !available.includes(item));
  if (unknown.length > 0) {
    throw new Error(`Unknown ${name}: ${unknown.join(', ')}. Use one of: ${available.join(', ')}`);
  }
  return requested;
}

// Crops a PNG to the given size from the top left corner.
function cropPng(buffer, width, height) {
  const source = PNG.sync.read(buffer);
  if (source.width === width && source.height === height) {
    return buffer;
  }
  if (source.width < width || source.height < height) {
    throw new Error(`Rendered ${source.width}×${source.height}, smaller than ${width}×${height}`);
  }
  const target = new PNG({ width, height });
  PNG.bitblt(source, target, 0, 0, width, height, 0, 0);
  return PNG.sync.write(target);
}

async function launchBrowser() {
  try {
    return await chromium.launch({ channel: 'chrome' });
  } catch {
    try {
      return await chromium.launch();
    } catch {
      throw new Error(
        'No browser found. Install Google Chrome, or run `yarn playwright install chromium`.',
      );
    }
  }
}

// Waits until fonts, <img> elements and CSS background images have loaded.
async function waitForAssets(page) {
  await page.waitForSelector('.screen');
  await page.evaluate(async () => {
    const loadImage = (src) => new Promise((resolve) => {
      const image = new Image();
      image.onload = resolve;
      image.onerror = resolve;
      image.src = src;
    });
    const backgroundImages = [...document.querySelectorAll('*')]
      .flatMap((element) => [...getComputedStyle(element).backgroundImage.matchAll(/url\("?(.*?)"?\)/g)])
      .map((match) => match[1]);
    await Promise.all([
      document.fonts.ready,
      ...[...document.images].map((image) => (image.complete ? null : loadImage(image.currentSrc || image.src))),
      ...backgroundImages.map(loadImage),
    ]);
    await new Promise((resolve) => { requestAnimationFrame(() => requestAnimationFrame(resolve)); });
  });
}

const server = await createServer({
  logLevel: 'warn',
  server: { port: 0, strictPort: false, open: false },
});

let browser;

try {
  await server.listen();
  const baseUrl = server.resolvedUrls.local[0].replace(/\/$/, '');
  browser = await launchBrowser();

  // Read the project configs in the browser, where Vite serves the app's TypeScript modules.
  const configPage = await browser.newPage();
  await configPage.goto(baseUrl);
  const { stores: availableStores, projects } = await configPage.evaluate(async () => {
    const config = await import('/src/config.ts');
    return {
      stores: config.STORES,
      projects: config.default.map((project) => ({
        key: project.key,
        languages: project.languages,
        sizesByStore: Object.fromEntries(config.STORES.map((store) => [
          store,
          config.getProjectOutputSizeKeysForStore(project, store).map((key) => {
            const deviceClass = config.getDeviceClassForSize(key);
            const { width, height } = config.getOutputSize(key);
            const screens = (config.getProjectScreensForStore(project, store, deviceClass) ?? []).map((screen, index) => ({
              key: screen.key,
              file: config.getScreenshotFileName(store, key, index + 1, screen.key),
            }));
            return { key, deviceClass, width, height, screens };
          }),
        ])),
      })),
    };
  });
  await configPage.close();

  const stores = pickOrThrow(listOption(options.store), availableStores, 'store');
  const projectKeys = pickOrThrow(listOption(options.project), projects.map((p) => p.key), 'project');
  const requestedLanguages = listOption(options.language);

  const jobs = [];
  for (const project of projects.filter((p) => projectKeys.includes(p.key))) {
    const languages = requestedLanguages
      ? project.languages.filter((language) => requestedLanguages.includes(language))
      : project.languages;
    for (const store of stores) {
      for (const outputSize of project.sizesByStore[store]) {
        for (const screen of outputSize.screens) {
          for (const language of languages) {
            jobs.push({
              url: `${baseUrl}/screens/${project.key}/${outputSize.deviceClass}/${screen.key}/${language}/${outputSize.key}?store=${store}`,
              file: path.join(options.out, project.key, store, language, screen.file),
              outputSize,
            });
          }
        }
      }
    }
  }

  if (jobs.length === 0) {
    throw new Error('Nothing to render with the given options.');
  }
  const concurrency = Math.max(1, Number(options.concurrency) || 1);
  let next = 0;
  let done = 0;

  // The screens are laid out at half their output size, so a device scale factor of 2
  // produces the store dimensions.
  const worker = async () => {
    const context = await browser.newContext({ deviceScaleFactor: 2 });
    const page = await context.newPage();
    const pageErrors = [];
    page.on('pageerror', (error) => pageErrors.push(error.message));

    while (next < jobs.length) {
      const job = jobs[next];
      next += 1;
      const { width, height } = job.outputSize;
      pageErrors.length = 0;

      await page.setViewportSize({ width: Math.ceil(width / 2), height: Math.ceil(height / 2) });
      await page.goto(job.url, { waitUntil: 'load' });
      await waitForAssets(page);
      if (pageErrors.length > 0) {
        throw new Error(`${job.url}: ${pageErrors.join('; ')}`);
      }

      // Browsers round screenshots to whole CSS pixels, so odd output widths (such as 1179)
      // are captured one pixel wider and cropped.
      const buffer = cropPng(await page.screenshot(), width, height);

      await mkdir(path.dirname(job.file), { recursive: true });
      await writeFile(job.file, buffer);
      done += 1;
      process.stdout.write(`\r${done}/${jobs.length} ${path.relative(options.out, job.file)}\x1b[K`);
    }

    await context.close();
  };

  await Promise.all(Array.from({ length: Math.min(concurrency, jobs.length) }, worker));
  process.stdout.write(`\nSaved ${done} screenshots to ${path.resolve(options.out)}\n`);
} finally {
  await browser?.close();
  await server.close();
}

