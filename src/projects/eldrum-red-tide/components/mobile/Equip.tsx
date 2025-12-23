import { ScreenComponentProps } from "../../../../config";
import translations from "../../translations";
import TopBackground from "../../../../components/TopBackground";
import DeviceFrame from "../../../../components/DeviceFrame";
import Background from "../../../../components/Background";
import { useScale } from "../../../../hooks/useScale";

export function Equip({ language }: ScreenComponentProps) {
  const scale = useScale();
  const assetPath = "/src/projects/eldrum-red-tide/assets";

  return (
    <Background
      className="eldrum-screen"
      src={`${assetPath}/bg - equip.jpg`}
      top={100 * scale}
    >
      <TopBackground
        headline={translations[language].equip.headline}
        bottomBorderOffset={-150 * scale}
      />

      <DeviceFrame
        screenshot={{
          mobile: `${assetPath}/simulator_screenshot_A756B468-F391-478F-9DEE-1AADC2AA3FD4 3.png`,
          tablet: `${assetPath}/simulator_screenshot_A756B4 tablet 2.png`,
        }}
        horizontalAlign="center"
        top={350 * scale}
        zIndex={1}
      />
    </Background>
  );
}
