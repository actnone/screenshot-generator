import { ScreenComponentProps } from "../../../../config";
import translations from "../../translations";
import TopBackground from "../TopBackground";
import Image from "../../../../components/Image";
import Background from "../../../../components/Background";
import { useDevice } from "../../../../context/DeviceContext";

// EXPLORE THE DEADLANDS
// Layout: White-robed woman with spear in center, map background on left
function ExploreDeadlands({ language, width }: ScreenComponentProps) {
  const scale = width / 1284; // Base scale on 6.5" width
  const assetPath = "/src/projects/eldrum-black-dust/assets";
  const deviceClass = useDevice();

  return (
    <Background
      src={`${assetPath}/EndingUnseenCrimeLord.png`}
      className="eldrum-screen"
      objectFit="cover"
      objectPosition="left center"
      left={-100 * scale}
      top={200 * scale}
      width={1000 * scale}
      height="auto"
    >
      <TopBackground
        width={width}
        headline={translations[language].exploreDeadlands.headline}
        zIndex={2}
      />
      <TopBackground
        width={width}
        headline={translations[language].exploreDeadlands.headline}
        zIndex={6}
        fillColor="transparent"
      />

      {/* White-robed woman with spear - centered */}
      <Image
        src={`${assetPath}/White Fae.png`}
        style={{ transform: "scale(-1, 1)" }}
        alt="Character"
        width={650 * scale}
        right={-200 * scale}
        bottom={deviceClass.height < 2300 ? -250 * scale : -450 * scale}
        zIndex={5}
      />
    </Background>
  );
}

export default ExploreDeadlands;
