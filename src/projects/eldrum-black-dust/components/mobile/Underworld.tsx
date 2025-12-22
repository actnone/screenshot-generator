import { ScreenComponentProps } from "../../../../config";
import translations from "../../translations";
import TopBackground from "../TopBackground";
import DeviceFrame from "../../../../components/DeviceFrame";
import Image from "../../../../components/Image";
import Background from "../../../../components/Background";
import { useScale } from "../../../../hooks/useScale";

// ...FROM THE UNDERWORLD
// Layout: Phone screenshot on left, Apostle character on right, ravens flying
function Underworld({ language }: ScreenComponentProps) {
  const scale = useScale();
  const assetPath = "/src/projects/eldrum-black-dust/assets";

  return (
    <Background
      className="eldrum-screen"
      src={`${assetPath}/6225b4cd7f1afe001c91a0d7.png`}
      objectFit="cover"
      objectPosition="left center"
      top={200 * scale}
      width={1000 * scale}
      height="auto"
    >
      <TopBackground headline={translations[language].underworld.headline} />
      <TopBackground
        headline={translations[language].underworld.headline}
        fillColor="transparent"
        zIndex={13}
      />

      <Image
        src={`${assetPath}/Raven A.png`}
        alt="Raven"
        width={500 * scale}
        left={-170 * scale}
        top={180 * scale}
        zIndex={11}
      />

      <Image
        src={`${assetPath}/Raven B.png`}
        alt="Raven"
        width={600 * scale}
        right={-250 * scale}
        top={-50 * scale}
        zIndex={11}
      />

      {/* Device frame with combat screenshot - positioned left */}
      <DeviceFrame
        screenshot={{
          mobile: `${assetPath}/simulator_screenshot_A756B468-F391-478F-9DEE-1AADC2AA3FD4 4.png`,
          tablet: `${assetPath}/Screenshot Woe Tablet.png`,
        }}
        left={20 * scale}
        top={350 * scale}
        zIndex={1}
        borderRadius={40 * scale}
        screenRadius={32 * scale}
      />

      {/* Apostle of Woe - positioned right */}
      <Image
        src={`${assetPath}/Apostle of Woe A.png`}
        alt="Apostle"
        width={600 * scale}
        right={-250 * scale}
        bottom={-250 * scale}
        zIndex={12}
      />
    </Background>
  );
}

export default Underworld;
