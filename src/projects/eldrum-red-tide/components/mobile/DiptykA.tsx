import Background from "../../../../components/Background";
import Image from "../../../../components/Image";
import TopBackground from "../../../../components/TopBackground";
import translations from "../../translations";
import { ScreenComponentProps } from "../../../../config";
import { useScale } from "../../../../hooks/useScale";

export function DiptykA({ language }: ScreenComponentProps) {
  const assetPath = "/src/projects/eldrum-red-tide/assets";
  const scale = useScale();

  return (
    <Background
      src={`${assetPath}/bg diptyk.png`}
      className="eldrum-screen eldrum-no-headline"
      objectFit="cover"
      objectPosition="center center"
      width={1300 * scale}
    >
      <TopBackground
        headline={translations[language].diptykA.headline}
        zIndex={2}
        bottomBorderOffset={-500 * scale}
        textColor="transparent"
      />
      <Image
        src={`${assetPath}/c - drummer.png`}
        alt="Character"
        width={1600 * scale}
        left={-650 * scale}
        top={-200 * scale}
        zIndex={4}
      />
      <Image
        src={`${assetPath}/c - harvester.png`}
        alt="Character"
        width={1500 * scale}
        left={-150 * scale}
        top={-150 * scale}
        zIndex={5}
      />
    </Background>
  );
}
