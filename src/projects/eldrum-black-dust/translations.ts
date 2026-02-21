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
  "en": {
    darkRpgAdventure: {
      headline: "Make your\nchoices",
    },
    exploreDeadlands: {
      headline: "EXPLORE THE\nDEADLANDS",
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
      headline: "...FROM THE\n UNDERWORLD",
    },
    chooseClass: {
      headline: "CHOOSE YOUR\n CLASS",
    },
  },
};

export default translations;
