import { ScreenComponentProps } from "../../../../config";
import translations from "../../translations";
import TopBackground from "../../../../components/TopBackground";
import DeviceFrame from "../../../../components/DeviceFrame";
import Background from "../../../../components/Background";
import { useScale } from "../../../../hooks/useScale";
import Image from "../../../../components/Image";
import { useDevice } from "../../../../context/DeviceContext";

export function DiptykB({ language }: ScreenComponentProps) {
  const scale = useScale();
  const deviceClass = useDevice();
  const assetPath = "/src/projects/eldrum-red-tide/assets";

  return (
    <Background
      src={`${assetPath}/bg diptyk.png`}
      className="eldrum-screen"
      objectFit="cover"
      width={1300 * scale}
      objectPosition="center center"
      left={-200 * scale}
    >
      <TopBackground
        headline={translations[language].diptykB.headline}
        bottomBorderOffset={-300 * scale}
      />

      {/* Device frame with app screenshot */}
      <DeviceFrame
        screenshot={{
          mobile: `${assetPath}/simulator_screenshot_A756B468-F391-478F-9DEE-1AADC2AA3FD4.png`,
          tablet: `${assetPath}/simulator_screenshot_A756 tablet.png`,
        }}
        horizontalAlign="center"
        top={350 * scale}
        zIndex={2}
        borderRadius={40 * scale}
        screenRadius={32 * scale}
      />

      {deviceClass.isMobile && (
        <Image
          src={`${assetPath}/c - harvester.png`}
          alt="Character"
          width={1500 * scale}
          left={-860 * scale}
          top={-150 * scale}
          zIndex={5}
        />
      )}
    </Background>
  );
}
