import { ProjectConfig } from "../../config";

import { DiptykA } from "./components/mobile/DiptykA";
import { DiptykB } from "./components/mobile/DiptykB";
import { SecretEndings } from "./components/mobile/SecretEndings";
import { Equip } from "./components/mobile/Equip";
import { Fight } from "./components/mobile/Fight";
import { Explore } from "./components/mobile/Explore";
import { SaveFamily } from "./components/mobile/SaveFamily";
import { FromJaws } from "./components/mobile/FromJaws";

const config: ProjectConfig = {
  key: "eldrum-red-tide",
  name: "Eldrum: Red Tide",
  languages: ["en", "pt"],
  outputSizes: [
    "iphone69-portrait",
    "iphone65-portrait",
    "iphone63-portrait",
    "iphone55-portrait",
    "android-phone-portrait",
    "ipad129-portrait",
    "ipad11-portrait",
  ],
  screens: {
    mobile: [
      { key: "torturer", component: DiptykA },
      { key: "dark-rpg-adventure", component: DiptykB },
      { key: "fight", component: Fight },
      { key: "equip", component: Equip },
      { key: "secrets", component: SecretEndings },
      { key: "explore", component: Explore },
      { key: "saveFamily", component: SaveFamily },
      { key: "fromJaws", component: FromJaws },
    ],
    tablet: [
      { key: "torturer", component: DiptykA },
      { key: "dark-rpg-adventure", component: DiptykB },
      { key: "fight", component: Fight },
      { key: "equip", component: Equip },
      { key: "secrets", component: SecretEndings },
      { key: "explore", component: Explore },
      { key: "saveFamily", component: SaveFamily },
      { key: "fromJaws", component: FromJaws },
    ],
  },
};

export default config;
