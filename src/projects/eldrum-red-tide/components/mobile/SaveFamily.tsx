import { ScreenComponentProps } from "../../../../config";
import translations from "../../translations";
import TopBackground from "../../../../components/TopBackground";
import Image from "../../../../components/Image";
import Background from "../../../../components/Background";
import { useScale } from "../../../../hooks/useScale";
import DeviceFrame from "../../../../components/DeviceFrame";

export function SaveFamily({ language }: ScreenComponentProps) {
  const scale = useScale();
  const assetPath = "/src/projects/eldrum-red-tide/assets";

  return (
    <Background
      className="eldrum-screen"
      src={`${assetPath}/bg - infirmary.jpg`}
    >
      <TopBackground
        headline={translations[language].saveFamily.headline}
        bottomBorderOffset={-100 * scale}
      />
      <TopBackground
        headline={translations[language].saveFamily.headline}
        fillColor="transparent"
        zIndex={13}
      />

      <DeviceFrame
        screenshot={{
          mobile: `${assetPath}/simulator_screenshot_A756B468-F391-478F-9DEE-1AADC2AA3FD4 5.png`,
          tablet: `${assetPath}/simulator_screenshot_A756B46 tablet.png`,
        }}
        right={-50 * scale}
        top={350 * scale}
        zIndex={1}
        borderRadius={40 * scale}
        screenRadius={32 * scale}
      />

      <Image
        src={`${assetPath}/c - soldier.png`}
        width={700 * scale}
        left={-290 * scale}
        top={330 * scale}
        zIndex={12}
      />
    </Background>
  );
}
