import { ScreenComponentProps } from "../../../../config";
import translations from "../../translations";
import TopBackground from "../TopBackground";
import DeviceFrame from "../../../../components/DeviceFrame";
import Image from "../../../../components/Image";
import Background from "../../../../components/Background";
import { useScale } from "../../../../hooks/useScale";

// FIGHT IN THE ARENA
// Layout: Phone screenshot on left, Fighter with hammer on right
function FightArena({ language }: ScreenComponentProps) {
  const scale = useScale();
  const assetPath = "/src/projects/eldrum-black-dust/assets";

  return (
    <Background
      className="eldrum-screen"
      src={`${assetPath}/65a26e852e4ca0729dbbd45c.jpg`}
      top={100 * scale}
    >
      <TopBackground
        headline={translations[language].fightArena.headline}
        bottomBorderOffset={-150 * scale}
      />

      {/* Device frame with combat screenshot - positioned left */}
      <DeviceFrame
        screenshot={{
          mobile: `${assetPath}/simulator_screenshot_A756B468-F391-478F-9DEE-1AADC2AA3FD4.png`,
          tablet: `${assetPath}/Screenshot Arena Tablet.png`,
        }}
        horizontalAlign="center"
        top={350 * scale}
        zIndex={1}
      />

      {/* Fighter with hammer - positioned right */}
      <Image
        src={`${assetPath}/Fighter with hammer.png`}
        style={{ transform: "scale(-1, 1)" }}
        alt="Fighter"
        width={1000 * scale}
        right={-350 * scale}
        bottom={-50 * scale}
        zIndex={12}
      />
    </Background>
  );
}

export default FightArena;
