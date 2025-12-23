import { ScreenComponentProps } from "../../../../config";
import translations from "../../translations";
import TopBackground from "../../../../components/TopBackground";
import DeviceFrame from "../../../../components/DeviceFrame";
import Image from "../../../../components/Image";
import Background from "../../../../components/Background";
import { useDevice } from "../../../../context/DeviceContext";
import { useScale } from "../../../../hooks/useScale";

export function Fight({ language }: ScreenComponentProps) {
  const scale = useScale();
  const assetPath = "/src/projects/eldrum-untold/assets";
  const deviceClass = useDevice();

  const isSmall = deviceClass.isMobile && deviceClass.height < 2300;

  return (
    <Background
      className="eldrum-screen"
      src={`${assetPath}/fight bg.png`}
      objectFit="cover"
      objectPosition="left center"
      height="auto"
    >
      <TopBackground
        headline={translations[language].fight.headline}
        zIndex={2}
      />
      <TopBackground
        headline={translations[language].fight.headline}
        zIndex={6}
        fillColor="transparent"
      />

      <DeviceFrame
        screenshot={{
          mobile: `${assetPath}/screenshot fight mobile.png`,
          tablet: `${assetPath}/screenshot fight tablet.png`,
        }}
        horizontalAlign="center"
        top={350 * scale}
        zIndex={1}
        borderRadius={40 * scale}
        screenRadius={32 * scale}
      />

      <Image
        src={`${assetPath}/Assassin.png`}
        width={1000 * scale}
        left={-450 * scale}
        top={350 * scale}
        zIndex={3}
      />
    </Background>
  );
}
