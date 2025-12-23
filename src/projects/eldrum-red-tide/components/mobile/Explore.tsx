import { ScreenComponentProps } from "../../../../config";
import translations from "../../translations";
import TopBackground from "../../../../components/TopBackground";
import Background from "../../../../components/Background";
import { useScale } from "../../../../hooks/useScale";

export function Explore({ language }: ScreenComponentProps) {
  const scale = useScale();
  const assetPath = "/src/projects/eldrum-untold/assets";

  return (
    <Background
      src={`${assetPath}/map.png`}
      width={1200 * scale}
      className="eldrum-screen"
      objectFit="cover"
      objectPosition="center center"
    >
      <TopBackground
        headline={translations[language].explore.headline}
        zIndex={2}
        bottomBorderOffset={400 * scale}
      />
    </Background>
  );
}
