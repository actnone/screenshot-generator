export interface ScreenTranslation {
  headline: string;
}

export interface Translation {
  torturer: ScreenTranslation;
  torturerB: ScreenTranslation;
  explore: ScreenTranslation;
  fight: ScreenTranslation;
  remember: ScreenTranslation;
  equip: ScreenTranslation;
  revenge: ScreenTranslation;
  secrets: ScreenTranslation;
}

const translations: Record<string, Translation> = {
  "en": {
    torturer: {
      headline: "Choices shape\n your path",
    },
    torturerB: {
      headline: "Choices shape\n your path",
    },
    explore: {
      headline: "Travel distant\nlands",
    },
    fight: {
      headline: "Fight ancient\nforces",
    },
    remember: {
      headline: "Remember\n your past…",
    },
    equip: {
      headline: "Equip &\nevolve",
    },
    revenge: {
      headline: "…and avenge\nyour kin",
    },
    secrets: {
      headline: "Uncover\nsecrets",
    },
  },
  "de": {
    torturer: {
      headline: "Wahlen formen\ndeinen Weg",
    },
    torturerB: {
      headline: "Wahlen formen\ndeinen Weg",
    },
    explore: {
      headline: "Ferne Länder\nbereisen",
    },
    fight: {
      headline: "Kämpfe gegen\nuralte Mächte",
    },
    remember: {
      headline: "Erinnere dich\nan früher…",
    },
    equip: {
      headline: "Ausrüsten &\nEntwickeln",
    },
    revenge: {
      headline: "...und räche\ndeine Sippe",
    },
    secrets: {
      headline: "Geheimnisse\naufdecken",
    },
  },
  "fr": {
    torturer: {
      headline: "Tes choix\ntracent ta voie",
    },
    torturerB: {
      headline: "Tes choix\ntracent ta voie",
    },
    explore: {
      headline: "Explorez des\nterres lointaines",
    },
    fight: {
      headline: "Combattez des\nforces anciennes",
    },
    remember: {
      headline: "Souviens-toi\ndu passé…",
    },
    equip: {
      headline: "Équipez-vous\net évoluez",
    },
    revenge: {
      headline: "…et vengez\nvotre famille",
    },
    secrets: {
      headline: "Découvrez\ndes secrets",
    },
  },
  "ja": {
    torturer: {
      headline: "選んだ道が、\n物語を導く",
    },
    torturerB: {
      headline: "選んだ道が、\n物語を導く",
    },
    explore: {
      headline: "遥かなる地へ\n旅立て",
    },
    fight: {
      headline: "古の力に\n挑め",
    },
    remember: {
      headline: "記憶を\n取り戻せ…",
    },
    equip: {
      headline: "装備し、\n進化せよ",
    },
    revenge: {
      headline: "…そして夜を\n終わらせろ",
    },
    secrets: {
      headline: "秘密を\n暴け",
    },
  },
  "pt": {
    torturer: {
      headline: "Escolhas moldam\nseu rumo",
    },
    torturerB: {
      headline: "Escolhas moldam\nseu rumo",
    },
    explore: {
      headline: "Viaje por\nterras distantes",
    },
    fight: {
      headline: "Lute forças\nancestrais",
    },
    remember: {
      headline: "Lembre-se do\nseu passado…",
    },
    equip: {
      headline: "Equipe-se\ne evolua",
    },
    revenge: {
      headline: "...e vingue\nsua família",
    },
    secrets: {
      headline: "Desvende\nsegredos",
    },
  },
};

export default translations;
