import { ScreenComponentProps } from "../../../../config";
import translations from "../../translations";
import TopBackground from "../TopBackground";
import Background from "../../../../components/Background";

// CHOOSE YOUR CLASS
// Layout: Two characters side by side - Archer on left, another class on right
function ChooseClass({ language, width }: ScreenComponentProps) {
  const assetPath = "/src/projects/eldrum-black-dust/assets";

  return (
    <Background
      className="eldrum-screen eldrum-split-bg"
      src={`${assetPath}/6.5 inch Screen 3 bg.png`}
    >
      <TopBackground
        width={width}
        headline={translations[language].chooseClass.headline}
      />
    </Background>
  );
}

export default ChooseClass;
