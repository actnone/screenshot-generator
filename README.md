# Screenshot Generator

Generates App Store and Google Play screenshots for Act None's Eldrum games: Black Dust, Untold and Red Tide. Each screenshot is a React component, served by Vite and captured at the exact store sizes with Playwright.

## Getting started

- `yarn install`
- `yarn dev` opens a preview at http://localhost:3000, where you can pick a project, store, language, scale and color scheme and see every screen for each device class.

## Projects

Each game has a folder in `src/projects/{projectKey}` with:

- `config.ts`: the languages, output sizes and screens (see [Project config](#project-config-shared-vs-store-specific)).
- `translations.ts`: the headline for each screen in each language.
- `components/`: one React component per screen.
- `assets/`: artwork and in-game screenshots used by the screens.

A new project also needs to be added to the `projects` list in `src/config.ts`.

To add a language to a project, add its headlines to `translations.ts` and its code to `languages` in `config.ts`.

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

Screenshots are written to the `screenshots` folder, laid out the way fastlane reads them, so the [store publisher](../store-publisher) can upload them as they are:

- App Store: `screenshots/{projectKey}/appStore/{language}/{outputSizeKey}_{index}_{screenKey}.png`. All sizes share one folder, because the App Store tells devices apart by image size.
- Google Play: `screenshots/{projectKey}/googlePlay/{language}/{slot}/{index}_{screenKey}.png`. The slot (`phoneScreenshots`, `sevenInchScreenshots` or `tenInchScreenshots`) is the output size's `googlePlaySlot` in `src/config.ts`.

Examples:

- `screenshots/eldrum-red-tide/appStore/en/iphone69-portrait_1_torturer.png`
- `screenshots/eldrum-red-tide/googlePlay/en/tenInchScreenshots/1_torturer.png`

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

## License

Based on [snailmail-screenshot-generator](https://github.com/uebelack/snailmail-screenshot-generator) by David Übelacker, available under the MIT license. See `LICENSE.txt`.
