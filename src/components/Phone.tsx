import { CSSProperties } from "react";

type HorizontalAlign = "left" | "center" | "right";
type VerticalAlign = "top" | "center" | "bottom";

interface PhoneProps {
  // Screenshot image to display inside the phone
  screenshot: string;
  alt?: string;

  // Phone dimensions - width controls size, height auto-calculates based on aspect ratio
  width: number;

  // Aspect ratio of the screen (height/width) - defaults to iPhone-like 19.5:9
  aspectRatio?: number;

  // Bezel size in pixels
  bezelSize?: number;

  // Corner radius of the phone frame
  borderRadius?: number;

  // Corner radius of the screen (inner)
  screenRadius?: number;

  // Positioning - can be pixels (number) or percentage (string like "50%")
  top?: number | string;
  bottom?: number | string;
  left?: number | string;
  right?: number | string;

  // Alignment helpers
  horizontalAlign?: HorizontalAlign;
  verticalAlign?: VerticalAlign;

  // Rotation in degrees
  rotation?: number;

  // Z-index for layering
  zIndex?: number;

  // Phone frame color
  frameColor?: string;

  // Additional style overrides
  style?: CSSProperties;

  // Optional className
  className?: string;
}

function Phone({
  screenshot,
  alt = "App screenshot",
  width,
  aspectRatio = 19.5 / 9, // iPhone aspect ratio
  bezelSize = 20,
  borderRadius = 40,
  screenRadius = 32,
  top,
  bottom,
  left,
  right,
  horizontalAlign,
  verticalAlign,
  rotation,
  zIndex,
  frameColor = "#1a1a1a",
  style: customStyle,
  className,
}: PhoneProps) {
  const screenWidth = width - bezelSize * 2;
  const screenHeight = screenWidth * aspectRatio;
  const phoneHeight = screenHeight + bezelSize * 2;

  const containerStyle: CSSProperties = {
    position: "absolute",
    width: `${width}px`,
    height: `${phoneHeight}px`,
    ...customStyle,
  };

  // Handle vertical positioning
  if (top !== undefined) {
    containerStyle.top = typeof top === "number" ? `${top}px` : top;
  }
  if (bottom !== undefined) {
    containerStyle.bottom = typeof bottom === "number" ? `${bottom}px` : bottom;
  }

  // Handle horizontal positioning
  if (left !== undefined) {
    containerStyle.left = typeof left === "number" ? `${left}px` : left;
  }
  if (right !== undefined) {
    containerStyle.right = typeof right === "number" ? `${right}px` : right;
  }

  // Handle alignment shortcuts
  let transform = "";

  if (horizontalAlign === "center") {
    containerStyle.left = "50%";
    transform += "translateX(-50%) ";
  } else if (horizontalAlign === "left") {
    containerStyle.left = 0;
  } else if (horizontalAlign === "right") {
    containerStyle.right = 0;
  }

  if (verticalAlign === "center") {
    containerStyle.top = "50%";
    transform = transform.includes("translateX")
      ? transform.replace("translateX(-50%)", "translate(-50%, -50%)")
      : "translateY(-50%) " + transform;
  } else if (verticalAlign === "top") {
    containerStyle.top = 0;
  } else if (verticalAlign === "bottom") {
    containerStyle.bottom = 0;
  }

  // Handle rotation
  if (rotation !== undefined) {
    transform += `rotate(${rotation}deg) `;
  }

  if (transform) {
    containerStyle.transform = transform.trim();
  }

  // Handle z-index
  if (zIndex !== undefined) {
    containerStyle.zIndex = zIndex;
  }

  const frameStyle: CSSProperties = {
    width: "100%",
    height: "100%",
    backgroundColor: frameColor,
    borderRadius: `${borderRadius}px`,
    padding: `${bezelSize}px`,
    boxSizing: "border-box",
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
  };

  const screenStyle: CSSProperties = {
    width: "100%",
    height: "100%",
    borderRadius: `${screenRadius}px`,
    overflow: "hidden",
    position: "relative",
  };

  const imageStyle: CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  };

  return (
    <div style={containerStyle} className={className}>
      <div style={frameStyle}>
        <div style={screenStyle}>
          <img src={screenshot} alt={alt} style={imageStyle} />
        </div>
      </div>
    </div>
  );
}

export default Phone;
