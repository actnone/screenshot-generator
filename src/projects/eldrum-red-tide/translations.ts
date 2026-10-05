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
  en: {
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
  pt: {
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
  de: {
    diptykA: {
      headline: "Bestimme\ndeinen Weg",
    },
    diptykB: {
      headline: "Bestimme\ndeinen Weg",
    },
    fight: {
      headline: "Kämpfe und\nwähle eine Seite",
    },
    equip: {
      headline: "Ausrüsten &\nentwickeln",
    },
    secretEndings: {
      headline: "Geheime Enden\nentdecken",
    },
    explore: {
      headline: "Ferne Länder\nerkunden",
    },
    saveFamily: {
      headline: "Rette deine\nFamilie…",
    },
    fromJaws: {
      headline: "…aus den Klauen\ndes Todes",
    },
  },
  es: {
    diptykA: {
      headline: "Elige y moldea\ntu camino",
    },
    diptykB: {
      headline: "Elige y moldea\ntu camino",
    },
    fight: {
      headline: "Lucha y elige\nun bando",
    },
    equip: {
      headline: "Equípate\ny evoluciona",
    },
    secretEndings: {
      headline: "Descubre finales\nsecretos",
    },
    explore: {
      headline: "Explora tierras\nlejanas",
    },
    saveFamily: {
      headline: "Salva a tu\nfamilia…",
    },
    fromJaws: {
      headline: "…de las garras\nde la muerte",
    },
  },
};

export default translations;
