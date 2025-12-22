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

// Tablet screens
import TabletCharacterPortrait from "./components/tablet/CharacterPortrait";
import TabletDarkRpgAdventure from "./components/tablet/DarkRpgAdventure";
import TabletChooseClass from "./components/tablet/ChooseClass";
import TabletFightArena from "./components/tablet/FightArena";
import TabletSecretEndings from "./components/tablet/SecretEndings";
import TabletExploreDeadlands from "./components/tablet/ExploreDeadlands";
import TabletDesertCity from "./components/tablet/DesertCity";
import TabletUnderworld from "./components/tablet/Underworld";

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
    "ipad129-portrait",
    "ipad11-portrait",
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
    tablet: [
      { key: "character-portrait", component: TabletCharacterPortrait },
      { key: "dark-rpg-adventure", component: TabletDarkRpgAdventure },
      { key: "choose-class", component: TabletChooseClass },
      { key: "fight-arena", component: TabletFightArena },
      { key: "secret-endings", component: TabletSecretEndings },
      { key: "explore-deadlands", component: TabletExploreDeadlands },
      { key: "desert-city", component: TabletDesertCity },
      { key: "underworld", component: TabletUnderworld },
    ],
  },
};

export default config;
