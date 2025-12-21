import { createContext, useContext, ReactNode } from "react";
import { DeviceClass } from "../config";

interface DeviceContextValue {
  deviceClass: DeviceClass;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  width: number;
  height: number;
  aspectRatio: string;
}

const DeviceContext = createContext<DeviceContextValue | null>(null);

interface DeviceProviderProps {
  deviceClass: DeviceClass;
  width: number;
  height: number;
  children: ReactNode;
}

// Helper to compute GCD for simplifying aspect ratio
function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

// Helper to get aspect ratio as string
function getAspectRatio(width: number, height: number): string {
  const divisor = gcd(width, height);
  const w = width / divisor;
  const h = height / divisor;
  return `${w}:${h}`;
}

export function DeviceProvider({
  deviceClass,
  width,
  height,
  children,
}: DeviceProviderProps) {
  const value: DeviceContextValue = {
    deviceClass,
    isMobile: deviceClass === "mobile",
    isTablet: deviceClass === "tablet",
    isDesktop: deviceClass === "desktop",
    width,
    height,
    aspectRatio: getAspectRatio(width, height),
  };

  return (
    <DeviceContext.Provider value={value}>{children}</DeviceContext.Provider>
  );
}

export function useDevice(): DeviceContextValue {
  const context = useContext(DeviceContext);
  if (!context) {
    throw new Error("useDevice must be used within a DeviceProvider");
  }
  return context;
}

export default DeviceContext;
