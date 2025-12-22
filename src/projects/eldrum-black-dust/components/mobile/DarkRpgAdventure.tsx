import { ScreenComponentProps } from "../../../../config";
import translations from "../../translations";
import TopBackground from "../TopBackground";
import DeviceFrame from "../../../../components/DeviceFrame";
import Background from "../../../../components/Background";
import Image from "../../../../components/Image";
import { useScale } from "../../../../hooks/useScale";
import { useDevice } from "../../../../context/DeviceContext";

// A DARK RPG ADVENTURE
// Layout: Phone screenshot in center with desert sand background
function DarkRpgAdventure({ language }: ScreenComponentProps) {
  const scale = useScale();
  const assetPath = "/src/projects/eldrum-black-dust/assets";
  const deviceClass = useDevice();

  return (
    <Background
      src={`${assetPath}/6.9 inch Screen 2.png`}
      className="eldrum-screen"
      objectFit="cover"
    >
      <TopBackground
        headline={translations[language].darkRpgAdventure.headline}
        bottomBorderOffset={-300 * scale}
      />
      <TopBackground
        headline={translations[language].darkRpgAdventure.headline}
        fillColor="transparent"
        zIndex={16}
      />

      {/* Device frame with app screenshot */}
      <DeviceFrame
        screenshot={{
          mobile: `${assetPath}/04C9E14E-4735-4A48-99CD-77AA44884CA8_4_5005_c.png`,
          tablet: `${assetPath}/screenshot desert tablet.png`,
        }}
        horizontalAlign="center"
        top={350 * scale}
        zIndex={2}
        borderRadius={40 * scale}
        screenRadius={32 * scale}
      />
      {deviceClass.isMobile && (
        <Image
          src={`${assetPath}/Bey.png`}
          alt="Character"
          top={100 * scale}
          width={920 * scale}
          left={-780 * scale}
          zIndex={5}
        />
      )}
      {deviceClass.isTablet && (
        <Image
          src={`${assetPath}/Archer.png`}
          style={{ transform: "scale(-1, 1)" }}
          alt="Character"
          top={150 * scale}
          width={500 * scale}
          right={-200 * scale}
          zIndex={15}
        />
      )}
    </Background>
  );
}

export default DarkRpgAdventure;
