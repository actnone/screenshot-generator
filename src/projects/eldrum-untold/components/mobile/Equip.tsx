import { ScreenComponentProps } from "../../../../config";
import translations from "../../translations";
import TopBackground from "../../../../components/TopBackground";
import DeviceFrame from "../../../../components/DeviceFrame";
import Image from "../../../../components/Image";
import Background from "../../../../components/Background";
import { useScale } from "../../../../hooks/useScale";

export function Equip({ language }: ScreenComponentProps) {
  const scale = useScale();
  const assetPath = "/src/projects/eldrum-untold/assets";

  return (
    <Background
      className="eldrum-screen"
      src={`${assetPath}/roe grasslands.png`}
      top={100 * scale}
    >
      <TopBackground
        headline={translations[language].equip.headline}
        bottomBorderOffset={-150 * scale}
      />

      <DeviceFrame
        screenshot={{
          mobile: `${assetPath}/screenshot equip.png`,
          tablet: `${assetPath}/screenshot equip tablet.png`,
        }}
        right={-50 * scale}
        top={350 * scale}
        zIndex={1}
      />

      <Image
        src={`${assetPath}/Soldier.png`}
        style={{ transform: "scale(-1, 1)" }}
        width={730 * scale}
        left={-270 * scale}
        top={200 * scale}
        zIndex={12}
      />
    </Background>
  );
}
