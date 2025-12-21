import { ScreenComponentProps } from "../../../../config";
import translations from "../../translations";
import TopBackground from "../TopBackground";
import Phone from "../../../../components/Phone";
import Image from "../../../../components/Image";
import Background from "../../../../components/Background";

// ...FROM THE UNDERWORLD
// Layout: Phone screenshot on left, Apostle character on right, ravens flying
function Underworld({ language, width }: ScreenComponentProps) {
  const scale = width / 1284; // Base scale on 6.5" width
  const assetPath = "/src/projects/eldrum-black-dust/assets";

  return (
    <Background
      className="eldrum-screen"
      src={`${assetPath}/6225b4cd7f1afe001c91a0d7.png`}
      objectFit="cover"
      objectPosition="left center"
      left={-100 * scale}
      top={200 * scale}
      width={1000 * scale}
      height="auto"
    >
      <TopBackground
        width={width}
        headline={translations[language].underworld.headline}
      />
      <TopBackground
        width={width}
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

      {/* Phone with combat screenshot - positioned left */}
      <Phone
        screenshot={`${assetPath}/simulator_screenshot_A756B468-F391-478F-9DEE-1AADC2AA3FD4 4.png`}
        width={520 * scale}
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
