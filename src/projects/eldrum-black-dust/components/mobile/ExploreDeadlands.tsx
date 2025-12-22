import { ScreenComponentProps } from "../../../../config";
import translations from "../../translations";
import TopBackground from "../../../../components/TopBackground";
import Image from "../../../../components/Image";
import Background from "../../../../components/Background";
import { useScale } from "../../../../hooks/useScale";

// EXPLORE THE DEADLANDS
// Layout: White-robed woman with spear in center, map background on left
function ExploreDeadlands({ language }: ScreenComponentProps) {
  const scale = useScale();
  const assetPath = "/src/projects/eldrum-black-dust/assets";

  return (
    <Background
      src={`${assetPath}/EndingUnseenCrimeLord.png`}
      className="eldrum-screen"
      objectFit="cover"
      objectPosition="center center"
    >
      <TopBackground
        headline={translations[language].exploreDeadlands.headline}
        zIndex={2}
        bottomBorderOffset={400 * scale}
      />
      <TopBackground
        headline={translations[language].exploreDeadlands.headline}
        zIndex={6}
        fillColor="transparent"
      />

      {/* White-robed woman with spear - centered */}
      <Image
        src={`${assetPath}/White Fae.png`}
        style={{ transform: "scale(-1, 1)" }}
        alt="Character"
        width={600 * scale}
        right={-100 * scale}
        top={100}
        zIndex={5}
      />
    </Background>
  );
}

export default ExploreDeadlands;
