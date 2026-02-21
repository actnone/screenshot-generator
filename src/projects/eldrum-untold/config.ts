import { ProjectConfig } from "../../config";

import { Torturer } from "./components/mobile/Torturer";
import { TorturerB } from "./components/mobile/TorturerB";
import { Secrets } from "./components/mobile/Secrets";
import { Equip } from "./components/mobile/Equip";
import { Fight } from "./components/mobile/Fight";
import { Explore } from "./components/mobile/Explore";
import { Remember } from "./components/mobile/Remember";
import { Revenge } from "./components/mobile/Revenge";

const config: ProjectConfig = {
  key: "eldrum-untold",
  name: "Eldrum: Untold",
  languages: ["en", "de", "fr", "ja", "pt"],
  outputSizes: [
    "iphone69-portrait",
    "iphone65-portrait",
    "iphone63-portrait",
    "iphone55-portrait",
    "android-phone-portrait",
    "ipad129-portrait",
    "ipad11-portrait",
  ],
  outputSizesByStore: {
    appStore: [
      "iphone69-portrait",
      "iphone65-portrait",
      "iphone63-portrait",
      "iphone55-portrait",
      "ipad129-portrait",
      "ipad11-portrait",
    ],
    googlePlay: [
      "iphone69-portrait",
      "iphone65-portrait",
      "iphone63-portrait",
      "iphone55-portrait",
      "android-phone-portrait",
      "android-tablet-portrait",
      "android-tablet-landscape",
    ],
  },
  screens: {
    mobile: [
      { key: "torturer", component: Torturer },
      { key: "dark-rpg-adventure", component: TorturerB },
      { key: "secrets", component: Secrets },
      { key: "fight-arena", component: Equip },
      { key: "secret-endings", component: Fight },
      { key: "explore", component: Explore },
      { key: "desert-city", component: Remember },
      { key: "underworld", component: Revenge },
    ],
    tablet: [
      { key: "torturer", component: Torturer },
      { key: "dark-rpg-adventure", component: TorturerB },
      { key: "secrets", component: Secrets },
      { key: "fight-arena", component: Equip },
      { key: "secret-endings", component: Fight },
      { key: "explore", component: Explore },
      { key: "desert-city", component: Remember },
      { key: "underworld", component: Revenge },
    ],
  },
};

export default config;
