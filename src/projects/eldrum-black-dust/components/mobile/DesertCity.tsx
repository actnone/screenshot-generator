import { ScreenComponentProps } from "../../../../config";
import translations from "../../translations";
import TopBackground from "../TopBackground";
import DeviceFrame from "../../../../components/DeviceFrame";
import Image from "../../../../components/Image";
import Background from "../../../../components/Background";
import { useScale } from "../../../../hooks/useScale";

// SAVE THE DESERT CITY...
// Layout: Desert Fighter on left, phone screenshot on right
function DesertCity({ language }: ScreenComponentProps) {
  const scale = useScale();
  const assetPath = "/src/projects/eldrum-black-dust/assets";

  return (
    <Background
      className="eldrum-screen"
      src={`${assetPath}/60990a76a74f82ce97649269.png`}
    >
      <TopBackground
        headline={translations[language].desertCity.headline}
        bottomBorderOffset={-100 * scale}
      />
      <TopBackground
        headline={translations[language].desertCity.headline}
        fillColor="transparent"
        zIndex={13}
      />

      {/* Device frame with app screenshot - positioned right */}
      <DeviceFrame
        screenshot={{
          mobile: `${assetPath}/simulator_screenshot_A756B468-F391-478F-9DEE-1AADC2AA3FD4 3.png`,
          tablet: `${assetPath}/Screenshot Caravan Tablet.png`,
        }}
        right={-40 * scale}
        top={350 * scale}
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
