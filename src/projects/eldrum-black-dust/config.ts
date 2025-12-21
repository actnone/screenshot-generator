import { ProjectConfig } from "../../config";

// Mobile screens
import ExploreDeadlands from "./components/mobile/ExploreDeadlands";
import DarkRpgAdventure from "./components/mobile/DarkRpgAdventure";
import SecretEndings from "./components/mobile/SecretEndings";
import DesertCity from "./components/mobile/DesertCity";
import FightArena from "./components/mobile/FightArena";
import CharacterPortrait from "./components/mobile/CharacterPortrait";
import Underworld from "./components/mobile/Underworld";
import ChooseClass from "./components/mobile/ChooseClass";

const config: ProjectConfig = {
  key: "eldrum-black-dust",
  name: "Eldrum: Black Dust",
  languages: ["en-US"],
  outputSizes: [
    "iphone69-portrait",
    "iphone65-portrait",
    "iphone63-portrait",
    "iphone55-portrait",
    "android-phone-portrait",
  ],
  screens: {
    mobile: [
      { key: "character-portrait", component: CharacterPortrait },
      { key: "dark-rpg-adventure", component: DarkRpgAdventure },
      { key: "choose-class", component: ChooseClass },
      { key: "fight-arena", component: FightArena },
      { key: "secret-endings", component: SecretEndings },
      { key: "explore-deadlands", component: ExploreDeadlands },
      { key: "desert-city", component: DesertCity },
      { key: "underworld", component: Underworld },
    ],
  },
};

export default config;
