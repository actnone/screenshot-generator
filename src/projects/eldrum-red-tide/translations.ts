export interface ScreenTranslation {
  headline: string;
}

export interface Translation {
  diptykA: ScreenTranslation;
  diptykB: ScreenTranslation;
  fight: ScreenTranslation;
  equip: ScreenTranslation;
  secretEndings: ScreenTranslation;
  explore: ScreenTranslation;
  saveFamily: ScreenTranslation;
  fromJaws: ScreenTranslation;
}

const translations: Record<string, Translation> = {
  "en": {
    diptykA: {
      headline: "Choices shape\n your path",
    },
    diptykB: {
      headline: "Choices shape\n your path",
    },
    fight: {
      headline: "Fight and\nchoose sides",
    },
    equip: {
      headline: "Equip &\nevolve",
    },
    secretEndings: {
      headline: "Discover\n secret endings",
    },
    explore: {
      headline: "Explore\n distant lands",
    },
    saveFamily: {
      headline: "Save your\nfamily…",
    },
    fromJaws: {
      headline: "…From the\nJaws of Death",
    },
  },
  "pt": {
    diptykA: {
      headline: "Escolhas moldam\nseu rumo",
    },
    diptykB: {
      headline: "Escolhas moldam\nseu rumo",
    },
    fight: {
      headline: "Lute e escolha\num lado",
    },
    equip: {
      headline: "Equipe-se\ne evolua",
    },
    secretEndings: {
      headline: "Descubra finais\nsecretos",
    },
    explore: {
      headline: "Explore terras\ndistantes",
    },
    saveFamily: {
      headline: "Salve sua\nfamília…",
    },
    fromJaws: {
      headline: "…Das garras\nda morte",
    },
  },
};

export default translations;
