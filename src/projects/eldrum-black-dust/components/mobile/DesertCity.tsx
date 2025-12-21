import { ScreenComponentProps } from "../../../../config";
import translations from "../../translations";
import TopBackground from "../TopBackground";
import Phone from "../../../../components/Phone";
import Image from "../../../../components/Image";
import Background from "../../../../components/Background";

// SAVE THE DESERT CITY...
// Layout: Desert Fighter on left, phone screenshot on right
function DesertCity({ language, width }: ScreenComponentProps) {
  const scale = width / 1284; // Base scale on 6.5" width
  const assetPath = "/src/projects/eldrum-black-dust/assets";

  return (
    <Background
      className="eldrum-screen"
      src={`${assetPath}/60990a76a74f82ce97649269.png`}
    >
      <TopBackground
        width={width}
        headline={translations[language].desertCity.headline}
        bottomBorderOffset={-100 * scale}
      />
      <TopBackground
        width={width}
        headline={translations[language].desertCity.headline}
        fillColor="transparent"
        zIndex={13}
      />

      {/* Phone with app screenshot - positioned right */}
      <Phone
        screenshot={`${assetPath}/simulator_screenshot_A756B468-F391-478F-9DEE-1AADC2AA3FD4 3.png`}
        width={580 * scale}
        right={-40 * scale}
        top={380 * scale}
        zIndex={1}
        borderRadius={40 * scale}
        screenRadius={32 * scale}
      />

      {/* Desert Fighter character - positioned left */}
      <Image
        src={`${assetPath}/Desert Fighter.png`}
        alt="Desert Fighter"
        width={600 * scale}
        left={-250 * scale}
        bottom={-100 * scale}
        zIndex={12}
      />
    </Background>
  );
}

export default DesertCity;
