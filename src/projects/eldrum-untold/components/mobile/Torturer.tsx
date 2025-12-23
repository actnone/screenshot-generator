import Background from "../../../../components/Background";
import Image from "../../../../components/Image";
import TopBackground from "../../../../components/TopBackground";
import translations from "../../translations";
import { ScreenComponentProps } from "../../../../config";
import { useScale } from "../../../../hooks/useScale";

export function Torturer({ language }: ScreenComponentProps) {
  const assetPath = "/src/projects/eldrum-untold/assets";
  const scale = useScale();

  return (
    <Background
      src={`${assetPath}/torturer bg 1.png`}
      className="eldrum-screen eldrum-no-headline"
      objectFit="cover"
      objectPosition="center center"
    >
      <TopBackground
        headline={translations[language].torturer.headline}
        zIndex={2}
        bottomBorderOffset={-500 * scale}
      />
      <TopBackground
        headline={translations[language].torturer.headline}
        zIndex={6}
        fillColor="transparent"
        bottomBorderOffset={-500 * scale}
      />
      <Image
        src={`${assetPath}/Torturer.png`}
        alt="Character"
        width={700 * scale}
        left={50 * scale}
        top={200 * scale}
        zIndex={5}
      />
    </Background>
  );
}
