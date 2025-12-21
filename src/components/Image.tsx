import { CSSProperties } from "react";

type HorizontalAlign = "left" | "center" | "right";
type VerticalAlign = "top" | "center" | "bottom";

interface ImageProps {
  src: string;
  alt?: string;

  // Positioning - can be pixels (number) or percentage (string like "50%")
  top?: number | string;
  bottom?: number | string;
  left?: number | string;
  right?: number | string;

  // Alignment helpers (shortcuts for common positioning)
  horizontalAlign?: HorizontalAlign;
  verticalAlign?: VerticalAlign;

  // Scaling - either as ratio (0-1) or fixed width in pixels
  scale?: number; // 0-1 ratio to scale proportionally
  width?: number | string; // Fixed width (height auto-adjusts)
  height?: number | string; // Fixed height (width auto-adjusts)

  // Z-index for layering
  zIndex?: number;

  // Additional style overrides
  style?: CSSProperties;

  // Optional className
  className?: string;
}

function Image({
  src,
  alt = "",
  top,
  bottom,
  left,
  right,
  horizontalAlign,
  verticalAlign,
  scale,
  width,
  height,
  zIndex,
  style: customStyle,
  className,
}: ImageProps) {
  const style: CSSProperties = {
    position: "absolute",
    ...customStyle,
  };

  // Handle vertical positioning
  if (top !== undefined) {
    style.top = typeof top === "number" ? `${top}px` : top;
  }
  if (bottom !== undefined) {
    style.bottom = typeof bottom === "number" ? `${bottom}px` : bottom;
  }

  // Handle horizontal positioning
  if (left !== undefined) {
    style.left = typeof left === "number" ? `${left}px` : left;
  }
  if (right !== undefined) {
    style.right = typeof right === "number" ? `${right}px` : right;
  }

  // Handle alignment shortcuts
  if (horizontalAlign === "center") {
    style.left = "50%";
    style.transform = `translateX(-50%)${
      style.transform ? ` ${style.transform}` : ""
    }`;
  } else if (horizontalAlign === "left") {
    style.left = 0;
  } else if (horizontalAlign === "right") {
    style.right = 0;
  }

  if (verticalAlign === "center") {
    style.top = "50%";
    const existingTransform = style.transform || "";
    style.transform = existingTransform.includes("translateX")
      ? existingTransform.replace("translateX(-50%)", "translate(-50%, -50%)")
      : `translateY(-50%)${existingTransform ? ` ${existingTransform}` : ""}`;
  } else if (verticalAlign === "top") {
    style.top = 0;
  } else if (verticalAlign === "bottom") {
    style.bottom = 0;
  }

  // Handle scaling
  if (scale !== undefined) {
    style.transform = `${style.transform || ""} scale(${scale})`.trim();
    style.transformOrigin = style.transformOrigin || "center center";
  }

  if (width !== undefined) {
    style.width = typeof width === "number" ? `${width}px` : width;
    style.height = "auto";
  }

  if (height !== undefined) {
    style.height = typeof height === "number" ? `${height}px` : height;
    style.width = "auto";
  }

  // Handle z-index
  if (zIndex !== undefined) {
    style.zIndex = zIndex;
  }

  return <img src={src} alt={alt} style={style} className={className} />;
}

export default Image;
