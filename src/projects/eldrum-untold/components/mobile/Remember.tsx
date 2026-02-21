import { ScreenComponentProps } from "../../../../config";
import translations from "../../translations";
import TopBackground from "../../../../components/TopBackground";
import Image from "../../../../components/Image";
import Background from "../../../../components/Background";
import { useScale } from "../../../../hooks/useScale";

// SAVE THE DESERT CITY...
// Layout: Desert Fighter on left, phone screenshot on right
export function Remember({ language }: ScreenComponentProps) {
  const scale = useScale();
  const assetPath = "/src/projects/eldrum-untold/assets";

  return (
    <Background className="eldrum-screen" src={`${assetPath}/bg graefir.png`}>
      <TopBackground
        headline={translations[language].remember.headline}
        bottomBorderOffset={-100 * scale}
      />
      <TopBackground
        headline={translations[language].remember.headline}
        fillColor="transparent"
        zIndex={13}
      />

      <Image
        src={`${assetPath}/Madam Brimstone.png`}
        width={450 * scale}
        left={-120 * scale}
        top={250 * scale}
        zIndex={12}
      />

      <Image
        src={`${assetPath}/Father.png`}
        width={450 * scale}
        right={-120 * scale}
        top={250 * scale}
        style={{ transform: "scale(-1, 1)" }}
        zIndex={12}
      />
    </Background>
  );
}
