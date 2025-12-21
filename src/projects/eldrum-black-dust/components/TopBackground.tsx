import { CSSProperties } from "react";
import { useDevice } from "../../../context/DeviceContext";

interface TopBackgroundProps {
  width: number;
  headline?: string;
  zIndex?: number;
  fillColor?: string;
  textColor?: string;
}

function TopBackground({
  width,
  headline,
  zIndex,
  fillColor = "#161617",
  textColor = "white",
}: TopBackgroundProps) {
  const scale = width / 1284; // Base scale on 6.5" width
  const deviceClass = useDevice();
  const isSmallScreen = deviceClass.height < 2300;

  const containerStyle: CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: zIndex || 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const innerContainerStyle: CSSProperties = {
    backgroundColor: fillColor,
    flex: 1,
    width: "100%",
    padding: isSmallScreen
      ? `${60 * scale}px ${20 * scale}px ${20 * scale}px`
      : `${80 * scale}px ${20 * scale}px ${20 * scale}px`,
  };

  const headlineStyle: CSSProperties = {
    fontFamily: "'Nocturne Serif', Georgia, serif",
    fontSize: isSmallScreen ? 45 * scale : 55 * scale,
    fontWeight: 400,
    color: textColor,
    textAlign: "center",
    letterSpacing: "0.05em",
    lineHeight: 1.15,
    whiteSpace: "pre-line",
    zIndex: 2,
  };

  const svgContainerStyle: CSSProperties = {
    pointerEvents: "none",
    flexGrow: 0,
    marginTop: -1,
    marginLeft:
      Math.random() > 0.5
        ? Math.random() * 300 + "px"
        : -Math.random() * 300 + "px",
  };

  return (
    <div style={containerStyle} className="eldrum-top-bg">
      <div style={innerContainerStyle}>
        {headline && <div style={headlineStyle}>{headline}</div>}
      </div>
      {fillColor !== "transparent" && (
        <div style={svgContainerStyle}>
          <svg
            width="1784px"
            height="72px"
            viewBox="0 0 1784 72"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Path</title>
            <g
              id="Page-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g id="Path" transform="translate(0, -592)" fill="#161617">
                <path
                  d="M1783.0406,663.964638 L1783.0406,614.929246 L1742.68371,631.28899 L1697.19049,613.066291 L1659.03489,626.471002 L1606.93781,617.113401 L1556.30826,606.278283 L1504.21119,598.398197 L1450.64659,598.398197 L1397.81576,592.488133 L1344.98492,601.353229 L1292.15409,599.383208 L1266.37328,631.888561 L1239.32325,593.965649 L1186.49242,600.860724 L1133.66158,598.890703 L1080.83075,598.398197 L1027.99991,593.965649 L975.169075,592.980638 L922.33824,597.905692 L868.773643,597.905692 L815.942808,597.413187 L763.111973,599.875713 C748.436741,607.263294 728.625178,609.72582 711.014899,606.278283 L657.450303,595.443165 L604.619467,600.368219 L574.471477,617.113401 L551.788632,598.398197 L498.957797,597.413187 C481.312112,604.47144 463.701834,607.754809 446.126962,607.263294 C428.55209,606.771778 410.941812,602.503399 393.296127,594.458154 L340.465292,596.920681 L287.634457,597.905692 L234.803622,601.353229 L181.239025,603.323251 L163.628747,607.263294 C155.557369,609.233315 148.953515,612.680852 144.550945,617.113401 C137.213329,623.51597 124.739382,627.948518 108.596627,627.948518 C104.194057,627.948518 83.6487323,631.888561 83.6487323,631.888561 L38.8892747,610.09627 L-9.00000001e-05,634.229032 L-9.00000001e-05,663.964638 L1783.0406,663.964638 Z"
                  transform="translate(891.5203, 628.2264) rotate(-180) translate(-891.5203, -628.2264)"
                ></path>
              </g>
            </g>
          </svg>
        </div>
      )}
    </div>
  );
}

export default TopBackground;
