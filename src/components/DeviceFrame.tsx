import { CSSProperties } from "react";
import { useDevice } from "../context/DeviceContext";
import { useScale } from "../hooks/useScale";

type HorizontalAlign = "left" | "center" | "right";
type VerticalAlign = "top" | "center" | "bottom";

// Screenshot can be a simple string or device-specific paths
type ScreenshotProp =
  | string
  | {
      mobile: string;
      tablet?: string;
      desktop?: string;
    };

// Base width at scale 1.0 (designed for 6.5" iPhone at 1284px)
const BASE_FRAME_WIDTH = 550;

// Device-specific default configurations
const DEVICE_DEFAULTS = {
  mobile: {
    aspectRatio: 19.5 / 9, // iPhone-like tall screen
    bezelSize: 20,
    borderRadius: 40,
    screenRadius: 32,
    widthMultiplier: 1.0, // 100% of base frame width
  },
  tablet: {
    aspectRatio: 4 / 3, // iPad-like squarer screen
    bezelSize: 20,
    borderRadius: 30,
    screenRadius: 24,
    widthMultiplier: 1.55, // 120% of base frame width (slightly larger for tablet)
  },
  desktop: {
    aspectRatio: 16 / 10, // Laptop/monitor-like
    bezelSize: 16,
    borderRadius: 12,
    screenRadius: 8,
    widthMultiplier: 1.5, // 150% of base frame width
  },
};

interface DeviceFrameProps {
  // Screenshot image to display inside the device frame
  screenshot: ScreenshotProp;
  alt?: string;

  // Frame dimensions - width controls size, height auto-calculates based on aspect ratio
  // If not specified, defaults to a percentage of device width based on device class
  width?: number;

  // Aspect ratio of the screen (height/width) - auto-detected based on device class if not specified
  aspectRatio?: number;

  // Bezel size in pixels - auto-detected based on device class if not specified
  bezelSize?: number;

  // Corner radius of the frame - auto-detected based on device class if not specified
  borderRadius?: number;

  // Corner radius of the screen (inner) - auto-detected based on device class if not specified
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

  // Frame color
  frameColor?: string;

  // Additional style overrides
  style?: CSSProperties;

  // Optional className
  className?: string;
}

function DeviceFrame({
  screenshot,
  alt = "App screenshot",
  width,
  aspectRatio,
  bezelSize,
  borderRadius,
  screenRadius,
  top,
  bottom,
  left,
  right,
  horizontalAlign,
  verticalAlign,
  rotation,
  zIndex,
  frameColor = "#000",
  style: customStyle,
  className,
}: DeviceFrameProps) {
  const { isTablet, isDesktop } = useDevice();
  const scale = useScale();

  // Select device-specific defaults
  const defaults = isDesktop
    ? DEVICE_DEFAULTS.desktop
    : isTablet
    ? DEVICE_DEFAULTS.tablet
    : DEVICE_DEFAULTS.mobile;

  // Apply defaults for any unspecified props
  // Default width uses scale (which accounts for device class) and a base frame width
  const finalWidth =
    width ?? BASE_FRAME_WIDTH * scale * defaults.widthMultiplier;
  const finalAspectRatio = aspectRatio ?? defaults.aspectRatio;
  const finalBezelSize = bezelSize ?? defaults.bezelSize;
  const finalBorderRadius = borderRadius ?? defaults.borderRadius;
  const finalScreenRadius = screenRadius ?? defaults.screenRadius;

  // Resolve screenshot path based on device class
  const resolveScreenshot = (): string => {
    if (typeof screenshot === "string") {
      return screenshot;
    }

    // Object with device-specific paths - fallback chain: specific → mobile
    if (isDesktop && screenshot.desktop) {
      return screenshot.desktop;
    }
    if (isTablet && screenshot.tablet) {
      return screenshot.tablet;
    }
    // Default to mobile (always required)
    return screenshot.mobile;
  };

  const screenshotSrc = resolveScreenshot();

  const screenWidth = finalWidth - finalBezelSize * 2;
  const screenHeight = screenWidth * finalAspectRatio;
  const frameHeight = screenHeight + finalBezelSize * 2;

  const containerStyle: CSSProperties = {
    position: "absolute",
    width: `${finalWidth}px`,
    height: `${frameHeight}px`,
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
    borderRadius: `${finalBorderRadius}px`,
    padding: `${finalBezelSize}px`,
    boxSizing: "border-box",
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
  };

  const screenStyle: CSSProperties = {
    width: "100%",
    height: "100%",
    borderRadius: `${finalScreenRadius}px`,
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
          <img src={screenshotSrc} alt={alt} style={imageStyle} />
        </div>
      </div>
    </div>
  );
}

export default DeviceFrame;
