export interface ScreenTranslation {
  headline: string;
}

export interface Translation {
  exploreDeadlands: ScreenTranslation;
  darkRpgAdventure: ScreenTranslation;
  secretEndings: ScreenTranslation;
  desertCity: ScreenTranslation;
  fightArena: ScreenTranslation;
  characterPortrait: ScreenTranslation;
  underworld: ScreenTranslation;
  chooseClass: ScreenTranslation;
}

const translations: Record<string, Translation> = {
  "en-US": {
    exploreDeadlands: {
      headline: "EXPLORE THE\nDEADLANDS",
    },
    darkRpgAdventure: {
      headline: "A DARK RPG\nADVENTURE",
    },
    secretEndings: {
      headline: "DISCOVER\nSECRET ENDINGS",
    },
    desertCity: {
      headline: "SAVE THE\nDESERT CITY...",
    },
    fightArena: {
      headline: "FIGHT IN THE\nARENA",
    },
    characterPortrait: {
      headline: "",
    },
    underworld: {
      headline: "...FROM THE\nUNDERWORLD",
    },
    chooseClass: {
      headline: "CHOOSE YOUR\nCLASS",
    },
  },
};

export default translations;
