import { createContext, useContext, ReactNode } from "react";
import { DeviceClass } from "../config";

interface DeviceContextValue {
  deviceClass: DeviceClass;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  width: number;
  height: number;
}

const DeviceContext = createContext<DeviceContextValue | null>(null);

interface DeviceProviderProps {
  deviceClass: DeviceClass;
  width: number;
  height: number;
  children: ReactNode;
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
