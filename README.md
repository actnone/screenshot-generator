<div id="top"></div>

[![Build][build-shield]][build-url]
[![Language][language-shield]][build-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]


<br />
<div align="center">
  <a href="https://github.com/uebelack/snailmail-screenshot-generator">
    <img src="public/logo.svg" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Snailmail Screenshot Generator</h3>
  <p align="center">
    Generator based on React and Playwright to generate nice App Store screenshots for my [Letter app](https://briefe.app).
  </p>
</div>

### Built With

* [React](https://react.dev/)
* [Playwright](https://playwright.dev/)


## License

MIT License. See `LICENSE.txt` for more information.

## Screenshot Generation

`yarn generate` starts the dev server, renders every screen with Google Chrome and stops again when it's done. Without Chrome, run `yarn playwright install chromium` once to use Playwright's own browser.

Generate everything (both stores, all projects and languages):

- `yarn generate` (or `yarn generate:all`)

Generate screenshots for one store at a time:

- `yarn generate:app-store`
- `yarn generate:google-play`

Generate screenshots for a specific app:

- App Store:
  - `yarn generate:app-store:black-dust`
  - `yarn generate:app-store:untold`
  - `yarn generate:app-store:red-tide`
- Google Play:
  - `yarn generate:google-play:black-dust`
  - `yarn generate:google-play:untold`
  - `yarn generate:google-play:red-tide`

Options can be combined and passed to any of the commands above. Each takes one or more comma-separated values:

- `--store appStore,googlePlay`
- `--project eldrum-untold`
- `--language es,pt`
- `--out <folder>`: where to write the screenshots (default `screenshots`)
- `--concurrency <n>`: how many screens to render at once (default 4)

For example, `yarn generate:app-store:untold --language es` renders only the Spanish App Store screenshots for Untold.

Every screenshot is checked against its output size, so a file with the wrong dimensions stops the run with an error.

### Output structure

Screenshots are written to the `screenshots` folder under a store-specific path:

`screenshots/{projectKey}/{store}/{language}/{outputSizeKey}/{index}_{screenKey}.png`

Example:

`screenshots/eldrum-red-tide/appStore/en/iphone69-portrait/1_torturer.png`

Existing files are overwritten; other files in the folder are left alone.

### Project config: shared vs store-specific

Project configs support both shared defaults and store-specific overrides.

Shared defaults:

```ts
const config: ProjectConfig = {
  outputSizes: ["iphone69-portrait", "android-phone-portrait"],
  screens: {
    mobile: [
      { key: "screen-a", component: ScreenA },
      { key: "screen-b", component: ScreenB },
    ],
  },
};
```

Store-specific sizing (with shared `screens` fallback):

```ts
const config: ProjectConfig = {
  outputSizes: ["iphone69-portrait", "android-phone-portrait"],
  outputSizesByStore: {
    appStore: ["iphone69-portrait"],
    googlePlay: ["android-phone-portrait"],
  },
  screens: {
    mobile: [
      { key: "screen-a", component: ScreenA },
      { key: "screen-b", component: ScreenB },
    ],
  },
};
```

Store-specific screen overrides (optional):

```ts
const config: ProjectConfig = {
  outputSizes: ["iphone69-portrait", "android-phone-portrait"],
  screens: {
    mobile: [{ key: "shared", component: SharedScreen }],
  },
  screensByStore: {
    appStore: {
      mobile: [{ key: "ios-only", component: IosOnlyScreen }],
    },
    googlePlay: {
      mobile: [{ key: "android-only", component: AndroidOnlyScreen }],
    },
  },
};
```

Fallback behavior for generation:

1. Use store-specific config (`outputSizesByStore` / `screensByStore`) if present.
2. Otherwise use shared config (`outputSizes` / `screens`).


[build-shield]: https://img.shields.io/github/workflow/status/uebelack/snailmail-screenshot-generator/Build.svg?style=for-the-badge
[build-url]: https://github.com/uebelack/snailmail-screenshot-generator/actions/workflows/ci.yaml
[language-shield]: https://img.shields.io/github/languages/top/uebelack/snailmail-screenshot-generator.svg?style=for-the-badge
[language-url]: https://github.com/uebelack/snailmail-screenshot-generator
[coverage-shield]: https://img.shields.io/coveralls/github/uebelack/snailmail-screenshot-generator.svg?style=for-the-badge
[coverage-url]: https://coveralls.io/github/uebelack/snailmail-screenshot-generator
[license-shield]: https://img.shields.io/github/license/uebelack/snailmail-screenshot-generator.svg?style=for-the-badge
[license-url]: https://github.com/uebelack/snailmail-screenshot-generator/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/david-übelacker-600262222
