import { ScreenComponentProps } from "../../../../config";
import translations from "../../translations";
import TopBackground from "../TopBackground";
import Phone from "../../../../components/Phone";
import Image from "../../../../components/Image";
import Background from "../../../../components/Background";

// FIGHT IN THE ARENA
// Layout: Phone screenshot on left, Fighter with hammer on right
function FightArena({ language, width }: ScreenComponentProps) {
  const scale = width / 1284; // Base scale on 6.5" width
  const assetPath = "/src/projects/eldrum-black-dust/assets";

  return (
    <Background
      className="eldrum-screen"
      src={`${assetPath}/65a26e852e4ca0729dbbd45c.jpg`}
      top={100 * scale}
    >
      <TopBackground
        width={width}
        headline={translations[language].fightArena.headline}
      />

      {/* Phone with combat screenshot - positioned left */}
      <Phone
        screenshot={`${assetPath}/simulator_screenshot_A756B468-F391-478F-9DEE-1AADC2AA3FD4.png`}
        width={550 * scale}
        horizontalAlign="center"
        top={390 * scale}
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
