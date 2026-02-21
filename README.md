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
    Generator based on React and Cypress to generate nice App Store screenshots for my [Letter app](https://briefe.app).
  </p>
</div>

### Built With

* [React](https://react.dev/)
* [Cypress](https://www.cypress.io/)


## License

MIT License. See `LICENSE.txt` for more information.

## Screenshot Generation

Generate screenshots for one store at a time:

- `yarn generate:app-store`
- `yarn generate:google-play`

Generate both stores:

- `yarn generate:all`

The default `yarn generate` command now maps to `yarn generate:app-store`.

### Output structure

Screenshots are written under a store-specific path:

`{projectKey}/{store}/{language}/{outputSizeKey}/{index}_{screenKey}.png`

Example:

`eldrum-red-tide/appStore/en/iphone69-portrait/1_torturer.png`

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
