import { ScreenComponentProps } from "../../../../config";
import translations from "../../translations";
import TopBackground from "../../../../components/TopBackground";
import Image from "../../../../components/Image";
import Background from "../../../../components/Background";
import { useScale } from "../../../../hooks/useScale";
import DeviceFrame from "../../../../components/DeviceFrame";

export function FromJaws({ language }: ScreenComponentProps) {
  const scale = useScale();
  const assetPath = "/src/projects/eldrum-red-tide/assets";

  return (
    <Background
      className="eldrum-screen"
      src={`${assetPath}/bg - sickle.jpg`}
      objectFit="cover"
    >
      <TopBackground headline={translations[language].fromJaws.headline} />

      <DeviceFrame
        screenshot={{
          mobile: `${assetPath}/simulator_screenshot_A756B468-F391-478F-9DEE-1AADC2AA3FD4 6.png`,
          tablet: `${assetPath}/simulator_screenshot_A756B46 tablet 2.png`,
        }}
        left={-50 * scale}
        top={350 * scale}
        zIndex={1}
      />

      <Image
        src={`${assetPath}/c - enforcer b.png`}
        width={600 * scale}
        right={-220 * scale}
        top={530 * scale}
        zIndex={2}
        style={{
          filter: "brightness(80%) saturate(120%)",
        }}
      />

      <Image
        src={`${assetPath}/c - enforcer a.png`}
        width={800 * scale}
        right={-150 * scale}
        top={530 * scale}
        zIndex={3}
        style={{
          filter: "brightness(90%) saturate(120%)",
        }}
      />
    </Background>
  );
}
