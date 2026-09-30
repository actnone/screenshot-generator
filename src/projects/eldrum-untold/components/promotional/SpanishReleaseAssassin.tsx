import Background from "../../../../components/Background";
import Image from "../../../../components/Image";

// For Google Play's promotional content about the Spanish release. Google allows no text, so
// it's only art: the Assassin in the underground halls, with the torch-lit doorway beside her.
// Her mask is inside Google's safe zone (15% from the top, 20% from the bottom and 10% from the
// sides), and she's sized so both daggers stay above the tagline Google Play puts over the
// bottom of the image, which leaves the tip of her hood just above the zone. It's laid out in
// CSS pixels at half of 1920 × 1080.
export function SpanishReleaseAssassin() {
  const assetPath = "/src/projects/eldrum-untold/assets";

  return (
    <Background
      src={`${assetPath}/fight bg.png`}
      className="eldrum-screen"
      objectFit="cover"
      objectPosition="center 55%"
    >
      <Image
        src={`${assetPath}/Assassin.png`}
        alt="The Assassin"
        height={740}
        left={36}
        top={62}
        zIndex={2}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 3,
          pointerEvents: "none",
          background: "linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent 30%)",
        }}
      />
    </Background>
  );
}
