import { ScreenComponentProps } from "../../../../config";
import translations from "../../translations";
import TopBackground from "../../../../components/TopBackground";
import DeviceFrame from "../../../../components/DeviceFrame";
import Background from "../../../../components/Background";
import Image from "../../../../components/Image";
import { useScale } from "../../../../hooks/useScale";
import { useDevice } from "../../../../context/DeviceContext";

export function TorturerB({ language }: ScreenComponentProps) {
  const scale = useScale();
  const assetPath = "/src/projects/eldrum-untold/assets";
  const deviceClass = useDevice();

  return (
    <Background
      src={`${assetPath}/torturer bg 2.png`}
      className="eldrum-screen"
      objectFit="cover"
    >
      <TopBackground
        headline={translations[language].torturerB.headline}
        textColor="transparent"
        bottomBorderOffset={-300 * scale}
      />

      {/* Device frame with app screenshot */}
      <DeviceFrame
        screenshot={{
          mobile: `${assetPath}/torturer 2 screenshot.png`,
          tablet: `${assetPath}/torturer b screenshot tablet.png`,
        }}
        horizontalAlign="center"
        top={350 * scale}
        zIndex={2}
        borderRadius={40 * scale}
        screenRadius={32 * scale}
      />
      {deviceClass.isMobile && (
        <Image
          src={`${assetPath}/Torturer.png`}
          alt="Character"
          width={700 * scale}
          left={-630 * scale}
          top={200 * scale}
          zIndex={5}
        />
      )}
    </Background>
  );
}
