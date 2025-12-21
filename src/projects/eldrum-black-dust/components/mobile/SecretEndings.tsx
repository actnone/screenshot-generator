import { ScreenComponentProps } from "../../../../config";
import translations from "../../translations";
import TopBackground from "../TopBackground";
import Phone from "../../../../components/Phone";
import Image from "../../../../components/Image";
import Background from "../../../../components/Background";
import { useDevice } from "../../../../context/DeviceContext";

// DISCOVER SECRET ENDINGS
// Layout: Character (Negusa) on left, phone screenshot on right
function SecretEndings({ language, width }: ScreenComponentProps) {
  const scale = width / 1284; // Base scale on 6.5" width
  const assetPath = "/src/projects/eldrum-black-dust/assets";
  const deviceClass = useDevice();

  console.log(deviceClass);

  const isSmall = deviceClass.isMobile && deviceClass.height < 2300;

  return (
    <Background
      className="eldrum-screen"
      src={`${assetPath}/66d6bc1b330ff56c8417f4aa.png`}
      objectFit="cover"
      objectPosition="left center"
      left={-100 * scale}
      top={200 * scale}
      width={1000 * scale}
      height="auto"
    >
      <TopBackground
        width={width}
        headline={translations[language].secretEndings.headline}
        zIndex={2}
      />

      {/* Phone with app screenshot - positioned right */}
      <Phone
        screenshot={`${assetPath}/simulator_screenshot_A756B468-F391-478F-9DEE-1AADC2AA3FD4 2.png`}
        width={600 * scale}
        right={!isSmall ? -100 * scale : "3%"}
        top={350 * scale}
        zIndex={1}
        borderRadius={40 * scale}
        screenRadius={32 * scale}
      />

      {/* Negusa character - positioned left */}
      {!isSmall && (
        <Image
          src={`${assetPath}/Negusa.png`}
          alt="Negusa"
          width={1000 * scale}
          left={-300 * scale}
          bottom={-100}
          zIndex={3}
          style={{ transform: "scale(-1, 1)" }}
        />
      )}
    </Background>
  );
}

export default SecretEndings;
