import Background from "../../../../components/Background";
import Image from "../../../../components/Image";

// For Google Play's promotional content about the Spanish release. Google allows no text, so
// it's only art: the Torturer in front of the burning town, with his face
// inside Google's safe zone (15% from the top, 20% from the bottom and 10% from the sides).
// It's laid out in CSS pixels at half of 1920 × 1080.
export function SpanishReleaseTorturer() {
  const assetPath = "/src/projects/eldrum-untold/assets";

  return (
    <Background
      src={`${assetPath}/bg burning city.png`}
      className="eldrum-screen"
      objectFit="cover"
      objectPosition="center 24%"
    >
      <Image
        src={`${assetPath}/Torturer.png`}
        alt="The Torturer"
        height={600}
        left={110}
        top={95}
        zIndex={2}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 3,
          pointerEvents: "none",
          background: "linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent 35%), radial-gradient(ellipse at center, transparent 55%, rgba(0, 0, 0, 0.45))",
        }}
      />
    </Background>
  );
}
