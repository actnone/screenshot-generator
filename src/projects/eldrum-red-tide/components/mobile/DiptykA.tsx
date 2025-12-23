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
        src={`${assetPath}/c - merc b.png`}
        alt="Character"
        width={700 * scale}
        left={-250 * scale}
        top={280 * scale}
        zIndex={4}
      />
      <Image
        src={`${assetPath}/c - merc a.png`}
        alt="Character"
        width={1100 * scale}
        left={-150 * scale}
        top={170 * scale}
        zIndex={5}
      />
    </Background>
  );
}
