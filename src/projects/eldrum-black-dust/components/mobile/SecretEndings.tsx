import { ScreenComponentProps } from "../../../../config";
import translations from "../../translations";
import TopBackground from "../../../../components/TopBackground";
import DeviceFrame from "../../../../components/DeviceFrame";
import Image from "../../../../components/Image";
import Background from "../../../../components/Background";
import { useDevice } from "../../../../context/DeviceContext";
import { useScale } from "../../../../hooks/useScale";

// DISCOVER SECRET ENDINGS
// Layout: Character (Negusa) on left, phone screenshot on right
function SecretEndings({ language }: ScreenComponentProps) {
  const scale = useScale();
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
      top={250 * scale}
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

      {/* Device frame with app screenshot - positioned right */}
      <DeviceFrame
        screenshot={{
          mobile: `${assetPath}/simulator_screenshot_A756B468-F391-478F-9DEE-1AADC2AA3FD4 2.png`,
          tablet: `${assetPath}/Screenshot Endings Tablet.png`,
        }}
        horizontalAlign="center"
        top={350 * scale}
        zIndex={1}
        borderRadius={40 * scale}
        screenRadius={32 * scale}
      />

      {/* Negusa character - positioned left */}
      {!isSmall && (
        <Image
          src={`${assetPath}/Negusa.png`}
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
