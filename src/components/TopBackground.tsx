import { CSSProperties } from "react";
import { useDevice } from "../context/DeviceContext";
import { useScale } from "../hooks/useScale";

interface TopBackgroundProps {
  headline?: string;
  zIndex?: number;
  fillColor?: string;
  textColor?: string;
  bottomBorderOffset?: number;
}

function TopBackground({
  headline,
  zIndex,
  fillColor = "#161617",
  textColor = "white",
  bottomBorderOffset = 0,
}: TopBackgroundProps) {
  const scale = useScale();
  const { isMobile, width } = useDevice();
  const borderBottomHeight = 72;

  // Strip newlines from headlines for non-mobile devices (tablet/desktop)
  const displayHeadline =
    headline && !isMobile ? headline.replace(/\n/g, " ") : headline;

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
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: borderBottomHeight / 2,
    paddingTop: borderBottomHeight / 2,
    minHeight: 200 * scale,
  };

  const headlineStyle: CSSProperties = {
    fontFamily: "'Nocturne Serif', Georgia, serif",
    textTransform: "uppercase",
    fontSize: width > 1750 ? 55 : 50,
    color: textColor,
    textAlign: "center",
    letterSpacing: "0.05em",
    lineHeight: 1.15,
    zIndex: 2,
    margin: 0,
    padding: `0px ${30 * scale}px 0px`,
    whiteSpace: "pre-line",
  };

  const svgScale = scale * 0.8;
  const svgContainerStyle: CSSProperties = {
    marginTop: -borderBottomHeight,
    pointerEvents: "none",
    flexGrow: 0,
    marginLeft: bottomBorderOffset,
    transform: `scaleX(${svgScale})`,
    transformOrigin: "center top",
  };

  return (
    <div style={containerStyle} className="eldrum-top-bg">
      <div style={innerContainerStyle}>
        {displayHeadline && <p style={headlineStyle}>{displayHeadline}</p>}
      </div>
      {fillColor !== "transparent" && (
        <div style={svgContainerStyle}>
          <svg
            width="2623px"
            height={borderBottomHeight}
            viewBox={`0 0 2623 ${borderBottomHeight}`}
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g stroke="none" fill="none">
              <path
                d="M2622.79291,0 L2622.79291,24.8801581 L2616.21838,49.523554 L2568.18952,54.35653 L2549.17375,54.35653 L2542.24196,35.9823335 L2536.65207,54.35653 L2509.27778,54.35653 L2467.14077,57.189506 L2466.93608,56.3287799 C2466.01809,52.5876459 2462.09726,37.844144 2456.90085,35.9823335 C2456.08946,35.69162 2454.70344,38.9759728 2453.21378,42.8466712 L2451.46431,47.4325499 C2449.95544,51.333966 2448.52625,54.6573464 2447.65677,54.35653 C2440.51504,51.8856904 2431.68539,57.189506 2429.66397,57.189506 C2426.79554,57.189506 2419.30429,43.8795413 2416.67577,44.1456347 C2404.5117,45.3770422 2400.52344,42.0745131 2394.48966,47.339399 C2390.08709,51.771948 2383.48323,55.219485 2375.41185,57.189506 L2357.80158,61.129549 L2304.23698,63.099571 L2251.40614,66.547108 L2198.57531,67.532119 L2145.74447,69.994646 C2128.09879,61.949401 2110.48851,57.681022 2092.91364,57.189506 C2075.33877,56.697991 2057.72849,59.98136 2040.0828,67.039613 L1987.25197,66.054603 L1964.56912,47.339399 L1934.42113,64.084581 L1881.5903,69.009635 L1828.0257,58.174517 C1810.41542,54.72698 1790.60386,57.189506 1775.92863,64.577087 L1723.09779,67.039613 L1670.26696,66.547108 L1616.70236,66.547108 L1563.87152,71.472162 L1511.04069,70.487151 L1469.779,67.025 L1442.57531,67.532119 L1389.74447,69.994646 C1385.13572,67.8933668 1380.52939,66.049732 1375.92547,64.4637414 L1352.54818,63.592076 L1299.71735,70.487151 L1290.66681,65.562097 C1287.16908,66.6651864 1279.26819,66.1319177 1275.76768,67.532119 C1273.434,68.4655865 1258.59543,67.9730812 1231.25197,66.054603 L1229.261,64.412 L1194.05568,63.099571 L1141.22484,71.964667 L1088.39401,66.054603 L1034.82941,66.054603 L1021.13964,63.9841365 C1020.73225,64.1781161 1020.32853,64.3757729 1019.92863,64.577087 L967.097792,67.039613 L914.266957,66.547108 C906.476224,70.0906686 899.800173,70.1575282 894.238803,66.7476869 L893.919192,66.547108 C885.482258,61.129549 880.679346,66.547108 875.988535,66.547108 L860.70236,66.547108 L807.871525,71.472162 C804.740952,69.0274511 798.295318,67.7141035 788.534623,67.532119 C778.773929,67.3501345 767.609284,68.3351452 755.04069,70.487151 L702.20985,66.054603 L673.247307,61.129549 L649.37902,65.562097 L596.54818,63.592076 L543.71735,70.487151 L536.314611,58.174517 L521.054819,57.189506 L506.592559,43.4481305 L490.88651,65.069592 L438.05568,63.099571 L385.22484,71.964667 L332.39401,66.054603 L304.62193,66.054603 L300.867917,58.174517 L296.416059,66.054603 L278.82941,66.054603 L258.88088,57.189506 L226.73234,58.174517 L176.10279,47.339399 L125.434015,58.174517 L85.85011,51.386509 L37.0179812,47.339399 L2.04636308e-12,49.523554 L2.04636308e-12,0.488162 L1866.79291,0 L1866.792,0.198 L2622.79291,0 Z"
                id="Path"
                fill="#161617"
              ></path>
            </g>
          </svg>
        </div>
      )}
    </div>
  );
}

export default TopBackground;
