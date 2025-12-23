import { ScreenComponentProps } from "../../../../config";
import translations from "../../translations";
import TopBackground from "../../../../components/TopBackground";
import DeviceFrame from "../../../../components/DeviceFrame";
import Image from "../../../../components/Image";
import Background from "../../../../components/Background";
import { useScale } from "../../../../hooks/useScale";

export function Fight({ language }: ScreenComponentProps) {
  const scale = useScale();
  const assetPath = "/src/projects/eldrum-red-tide/assets";

  return (
    <Background
      className="eldrum-screen"
      src={`${assetPath}/bg - forest.jpg`}
      objectFit="cover"
    >
      <TopBackground
        headline={translations[language].fight.headline}
        zIndex={2}
      />
      <TopBackground
        headline={translations[language].fight.headline}
        zIndex={6}
        fillColor="transparent"
      />

      <DeviceFrame
        screenshot={{
          mobile: `${assetPath}/simulator_screenshot_A756B468-F391-478F-9DEE-1AADC2AA3FD4 2.png`,
          tablet: `${assetPath}/simulator_screenshot_A756B4 tablet.png`,
        }}
        horizontalAlign="center"
        top={350 * scale}
        zIndex={1}
        borderRadius={40 * scale}
        screenRadius={32 * scale}
      />

      <Image
        src={`${assetPath}/c - archer.png`}
        width={700 * scale}
        right={-300 * scale}
        top={20 * scale}
        zIndex={3}
      />
    </Background>
  );
}
