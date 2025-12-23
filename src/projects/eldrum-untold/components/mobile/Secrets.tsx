import { ScreenComponentProps } from "../../../../config";
import translations from "../../translations";
import TopBackground from "../../../../components/TopBackground";
import Background from "../../../../components/Background";
import { useScale } from "../../../../hooks/useScale";
import DeviceFrame from "../../../../components/DeviceFrame";
import Image from "../../../../components/Image";

export function Secrets({ language }: ScreenComponentProps) {
  const assetPath = "/src/projects/eldrum-untold/assets";
  const scale = useScale();

  return (
    <Background
      className="eldrum-screen eldrum-split-bg"
      src={`${assetPath}/set longhouse.png`}
      top={100}
    >
      <TopBackground headline={translations[language].secrets.headline} />

      <DeviceFrame
        screenshot={{
          mobile: `${assetPath}/secrets screenshot mobile.png`,
          tablet: `${assetPath}/screenshot secrets tablet.png`,
        }}
        top={350 * scale}
        left={-50 * scale}
        zIndex={1}
        borderRadius={40 * scale}
        screenRadius={32 * scale}
      />

      <Image
        src={`${assetPath}/Whore.png`}
        width={575 * scale}
        right={-200 * scale}
        top={280 * scale}
        zIndex={10}
      />
    </Background>
  );
}
