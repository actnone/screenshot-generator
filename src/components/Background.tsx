import { CSSProperties, ReactNode } from "react";

type ObjectFit = "cover" | "contain" | "fill" | "none" | "scale-down";
type ObjectPosition =
  | "center"
  | "top"
  | "bottom"
  | "left"
  | "right"
  | "top left"
  | "top right"
  | "bottom left"
  | "bottom right";

interface BackgroundProps {
  // Background image source (optional - if not provided, just acts as a wrapper)
  src?: string;
  alt?: string;

  // Children rendered on top of the background (optional)
  children?: ReactNode;

  // Container className for styling
  className?: string;

  // Image positioning - can be pixels (number) or percentage (string like "50%")
  top?: number | string;
  bottom?: number | string;
  left?: number | string;
  right?: number | string;

  // How the image should fit/scale
  objectFit?: ObjectFit;

  // Where the image should be anchored when using objectFit
  objectPosition?: ObjectPosition | string;

  // Image dimensions (defaults to 100% to fill container)
  width?: number | string;
  height?: number | string;

  // Additional style overrides for the container
  style?: CSSProperties;

  // Additional style overrides for the image
  imageStyle?: CSSProperties;
}

function Background({
  src,
  alt = "Background",
  children,
  className,
  top,
  bottom,
  left,
  right,
  objectFit = "cover",
  objectPosition = "center",
  width = "100%",
  height = "100%",
  style: containerStyle,
  imageStyle: customImageStyle,
}: BackgroundProps) {
  const wrapperStyle: CSSProperties = {
    position: "relative",
    width: "100%",
    height: "100%",
    overflow: "hidden",
    ...containerStyle,
  };

  const imageStyle: CSSProperties = {
    position: "absolute",
    zIndex: 0,
    objectFit,
    objectPosition,
    pointerEvents: "none",
    ...customImageStyle,
  };

  // Handle dimensions
  imageStyle.width = typeof width === "number" ? `${width}px` : width;
  imageStyle.height = typeof height === "number" ? `${height}px` : height;

  // Handle positioning - if none specified, default to 0,0
  if (top === undefined && bottom === undefined) {
    imageStyle.top = 0;
  }
  if (left === undefined && right === undefined) {
    imageStyle.left = 0;
  }

  if (top !== undefined) {
    imageStyle.top = typeof top === "number" ? `${top}px` : top;
  }
  if (bottom !== undefined) {
    imageStyle.bottom = typeof bottom === "number" ? `${bottom}px` : bottom;
  }
  if (left !== undefined) {
    imageStyle.left = typeof left === "number" ? `${left}px` : left;
  }
  if (right !== undefined) {
    imageStyle.right = typeof right === "number" ? `${right}px` : right;
  }

  const contentStyle: CSSProperties = {
    position: "relative",
    zIndex: 1,
    width: "100%",
    height: "100%",
  };

  return (
    <div style={wrapperStyle} className={className}>
      {src && <img src={src} alt={alt} style={imageStyle} />}
      {children && <div style={contentStyle}>{children}</div>}
    </div>
  );
}

export default Background;
