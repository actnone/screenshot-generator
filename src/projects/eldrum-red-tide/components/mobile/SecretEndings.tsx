import { ScreenComponentProps } from "../../../../config";
import translations from "../../translations";
import TopBackground from "../../../../components/TopBackground";
import DeviceFrame from "../../../../components/DeviceFrame";
import Image from "../../../../components/Image";
import Background from "../../../../components/Background";
import { useDevice } from "../../../../context/DeviceContext";
import { useScale } from "../../../../hooks/useScale";

export function SecretEndings({ language }: ScreenComponentProps) {
  const scale = useScale();
  const assetPath = "/src/projects/eldrum-red-tide/assets";
  const deviceClass = useDevice();

  console.log(deviceClass);

  const isSmall = deviceClass.isMobile && deviceClass.height < 2300;

  return (
    <Background
      className="eldrum-screen"
      src={`${assetPath}/bg - burning city.jpg`}
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

      <DeviceFrame
        screenshot={{
          mobile: `${assetPath}/simulator_screenshot_A756B468-F391-478F-9DEE-1AADC2AA3FD4 4.png`,
          tablet: `${assetPath}/simulator_screenshot_A756B4 tablet 3.png`,
        }}
        right={-50 * scale}
        top={350 * scale}
        zIndex={1}
        borderRadius={40 * scale}
        screenRadius={32 * scale}
      />

      {!isSmall && (
        <Image
          src={`${assetPath}/c - knifer.png`}
          width={700 * scale}
          left={-350 * scale}
          bottom={-200}
          zIndex={3}
        />
      )}
    </Background>
  );
}
