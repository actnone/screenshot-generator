import Background from "../../../../components/Background";
import TopBackground from "../../../../components/TopBackground";
import { ScreenComponentProps } from "../../../../config";
import { useDevice } from "../../../../context/DeviceContext";
import { useScale } from "../../../../hooks/useScale";
import translations from "../../translations";

const assetPath = "/src/projects/eldrum-black-dust/assets";

export function AppStoreDarkRpgAdventure({ language }: ScreenComponentProps) {
  const scale = useScale();
  const deviceClass = useDevice();

  return (
    <Background
      src={`${assetPath}/${deviceClass.isMobile ? "04C9E14E-4735-4A48-99CD-77AA44884CA8_4_5005_c.png" : "screenshot desert tablet.png"}`}
      className="eldrum-screen"
      objectFit="cover"
      top={deviceClass.isMobile ? 200 * scale : 150 * scale}
    >
      <TopBackground
        headline={translations[language].darkRpgAdventure.headline}
        bottomBorderOffset={-300 * scale}
      />
    </Background>
  );
}

export function AppStoreChooseClass({ language }: ScreenComponentProps) {
  return (
    <Background
      className="eldrum-screen eldrum-split-bg"
      src={`${assetPath}/6.5 inch Screen 3 bg.png`}
      top={100}
    >
      <TopBackground headline={translations[language].chooseClass.headline} />
    </Background>
  );
}

export function AppStoreFightArena({ language }: ScreenComponentProps) {
  const scale = useScale();
  const deviceClass = useDevice();

  return (
    <Background
      className="eldrum-screen"
      src={`${assetPath}/${deviceClass.isMobile ? "simulator_screenshot_A756B468-F391-478F-9DEE-1AADC2AA3FD4.png" : "Screenshot Arena Tablet.png"}`}
      top={deviceClass.isMobile ? 50 * scale : 125 * scale}
      objectFit="cover"
    >
      <TopBackground
        headline={translations[language].fightArena.headline}
        bottomBorderOffset={-150 * scale}
      />
    </Background>
  );
}

export function AppStoreSecretEndings({ language }: ScreenComponentProps) {
  const scale = useScale();
  const deviceClass = useDevice();

  return (
    <Background
      className="eldrum-screen"
      src={`${assetPath}/${deviceClass.isMobile ? "simulator_screenshot_A756B468-F391-478F-9DEE-1AADC2AA3FD4 2.png" : "Screenshot Endings Tablet.png"}`}
      objectFit="cover"
      objectPosition="left center"
      top={200 * scale}
      height="auto"
    >
      <TopBackground
        headline={translations[language].secretEndings.headline}
        zIndex={2}
      />
      <TopBackground
        headline={translations[language].secretEndings.headline}
        zIndex={6}
        fillColor="transparent"
      />
    </Background>
  );
}

export function AppStoreExploreDeadlands({ language }: ScreenComponentProps) {
  const scale = useScale();

  return (
    <Background
      src={`${assetPath}/EndingUnseenCrimeLord.png`}
      className="eldrum-screen"
      objectFit="cover"
      objectPosition="center center"
    >
      <TopBackground
        headline={translations[language].exploreDeadlands.headline}
        zIndex={2}
        bottomBorderOffset={400 * scale}
      />
      <TopBackground
        headline={translations[language].exploreDeadlands.headline}
        zIndex={6}
        fillColor="transparent"
      />
    </Background>
  );
}

export function AppStoreDesertCity({ language }: ScreenComponentProps) {
  const scale = useScale();
  const deviceClass = useDevice();

  return (
    <Background
      className="eldrum-screen"
      src={`${assetPath}/${deviceClass.isMobile ? "simulator_screenshot_A756B468-F391-478F-9DEE-1AADC2AA3FD4 3.png" : "Screenshot Caravan Tablet.png"}`}
      objectFit="cover"
      top={deviceClass.isMobile ? 150 * scale : 125 * scale}
      height="auto"
    >
      <TopBackground
        headline={translations[language].desertCity.headline}
        bottomBorderOffset={-100 * scale}
      />
    </Background>
  );
}

export function AppStoreUnderworld({ language }: ScreenComponentProps) {
  const scale = useScale();
  const deviceClass = useDevice();

  return (
    <Background
      className="eldrum-screen"
      src={`${assetPath}/${deviceClass.isMobile ? "simulator_screenshot_A756B468-F391-478F-9DEE-1AADC2AA3FD4 4.png" : "Screenshot Woe Tablet.png"}`}
      objectFit="cover"
      top={deviceClass.isMobile ? 50 * scale : 150 * scale}
      height="auto"
    >
      <TopBackground headline={translations[language].underworld.headline} />
      <TopBackground
        headline={translations[language].underworld.headline}
        fillColor="transparent"
        zIndex={13}
      />
    </Background>
  );
}
