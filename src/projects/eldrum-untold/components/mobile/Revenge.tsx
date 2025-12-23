import { ScreenComponentProps } from "../../../../config";
import translations from "../../translations";
import TopBackground from "../../../../components/TopBackground";
import Image from "../../../../components/Image";
import Background from "../../../../components/Background";
import { useScale } from "../../../../hooks/useScale";

export function Revenge({ language }: ScreenComponentProps) {
  const scale = useScale();
  const assetPath = "/src/projects/eldrum-untold/assets";

  return (
    <Background
      className="eldrum-screen"
      src={`${assetPath}/bg burning city.png`}
      objectFit="cover"
    >
      <TopBackground headline={translations[language].revenge.headline} />

      <Image
        src={`${assetPath}/Mantis.png`}
        width={920 * scale}
        right={-220 * scale}
        top={350 * scale}
        zIndex={1}
      />

      <Image
        src={`${assetPath}/Cartel Bruiser.png`}
        width={600 * scale}
        left={-20 * scale}
        top={550 * scale}
        zIndex={2}
        style={{
          transform: "scale(-1, 1)",
          filter: "brightness(80%) saturate(120%)",
        }}
      />

      <Image
        src={`${assetPath}/Cartel Knife Thug.png`}
        width={700 * scale}
        right={-150 * scale}
        top={630 * scale}
        zIndex={3}
        style={{
          transform: "scale(-1, 1)",
          filter: "brightness(90%) saturate(120%)",
        }}
      />
    </Background>
  );
}
