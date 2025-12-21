import { ScreenComponentProps } from "../../../../config";
import translations from "../../translations";
import TopBackground from "../TopBackground";
import Phone from "../../../../components/Phone";
import Background from "../../../../components/Background";
import Image from "../../../../components/Image";

// A DARK RPG ADVENTURE
// Layout: Phone screenshot in center with desert sand background
function DarkRpgAdventure({ language, width }: ScreenComponentProps) {
  const scale = width / 1284; // Base scale on 6.5" width
  const assetPath = "/src/projects/eldrum-black-dust/assets";

  return (
    <Background
      src={`${assetPath}/6.9 inch Screen 2.png`}
      className="eldrum-screen"
      objectFit="cover"
    >
      <TopBackground
        width={width}
        headline={translations[language].darkRpgAdventure.headline}
      />

      {/* Phone with app screenshot */}
      <Phone
        screenshot={`${assetPath}/04C9E14E-4735-4A48-99CD-77AA44884CA8_4_5005_c.png`}
        width={550 * scale}
        horizontalAlign="center"
        top={380 * scale}
        zIndex={2}
        borderRadius={40 * scale}
        screenRadius={32 * scale}
      />
      <Image
        src={`${assetPath}/Bey.png`}
        alt="Character"
        bottom={-100 * scale}
        width={920 * scale}
        left={-780 * scale}
        zIndex={5}
      />
    </Background>
  );
}

export default DarkRpgAdventure;
