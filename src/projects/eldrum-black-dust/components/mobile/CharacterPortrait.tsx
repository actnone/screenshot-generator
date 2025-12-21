import Background from "../../../../components/Background";
import Image from "../../../../components/Image";
import TopBackground from "../TopBackground";
import { ScreenComponentProps } from "../../../../config";

// Character portrait (no headline)
// Layout: Full character portrait - EndingUnseenCrimeLord
function CharacterPortrait({ width }: ScreenComponentProps) {
  const assetPath = "/src/projects/eldrum-black-dust/assets";
  const scale = width / 1284; // Base scale on 6.5" width

  return (
    <Background
      src={`${assetPath}/6.9 inch Screen 1.png`}
      className="eldrum-screen eldrum-no-headline"
      objectFit="cover"
      objectPosition="center center"
    >
      <TopBackground
        headline="dsajkdja sdjask djjaksd kas kd"
        width={width}
        zIndex={2}
        textColor="#161617"
      />
      <Image
        src={`${assetPath}/Bey.png`}
        alt="Character"
        bottom={-100 * scale}
        width={920 * scale}
        left={-100 * scale}
        zIndex={5}
      />
    </Background>
  );
}

export default CharacterPortrait;
