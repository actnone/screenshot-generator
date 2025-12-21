import { ComponentType } from 'react';
import letterAppConfig from './projects/letter-app/config';
import eldrumBlackDustConfig from './projects/eldrum-black-dust/config';

export type LanguageCode = 'en-US' | 'nl-NL' | 'it-IT' | 'es-ES' | 'fr-FR' | 'de-DE' | 'pt-PT';

export type ColorScheme = 'light' | 'dark';

export const colorSchemes: ColorScheme[] = ['light', 'dark'];

// Device Classes
export type DeviceClass = 'mobile' | 'tablet' | 'desktop';

export const DEVICE_CLASSES: DeviceClass[] = ['mobile', 'tablet', 'desktop'];

// Output Size definition
export interface OutputSize {
  key: string;
  deviceClass: DeviceClass;
  width: number;
  height: number;
}

// Global registry of all available output sizes
export const OUTPUT_SIZES: OutputSize[] = [
  // Mobile - Portrait
  { key: 'iphone69-portrait', deviceClass: 'mobile', width: 1320, height: 2868 },
  { key: 'iphone65-portrait', deviceClass: 'mobile', width: 1284, height: 2778 },
  { key: 'iphone63-portrait', deviceClass: 'mobile', width: 1179, height: 2556 },
  { key: 'iphone55-portrait', deviceClass: 'mobile', width: 1242, height: 2208 },
  { key: 'android-phone-portrait', deviceClass: 'mobile', width: 1080, height: 1920 },
  // Tablet - Landscape
  { key: 'ipad129-landscape', deviceClass: 'tablet', width: 2732, height: 2048 },
  { key: 'ipad11-landscape', deviceClass: 'tablet', width: 2388, height: 1668 },
  { key: 'android-tablet7-landscape', deviceClass: 'tablet', width: 1920, height: 1200 },
  { key: 'android-tablet10-landscape', deviceClass: 'tablet', width: 2560, height: 1600 },
  // Tablet - Portrait
  { key: 'ipad129-portrait', deviceClass: 'tablet', width: 2048, height: 2732 },
  { key: 'ipad11-portrait', deviceClass: 'tablet', width: 1668, height: 2388 },
  // Desktop
  { key: 'mac-landscape', deviceClass: 'desktop', width: 2880, height: 1800 },
];

// Default preview sizes per device class
export const DEVICE_CLASS_DEFAULTS: Record<DeviceClass, string> = {
  mobile: 'iphone69-portrait',
  tablet: 'ipad129-landscape',
  desktop: 'mac-landscape',
};

// Helper to get output size by key
export function getOutputSize(key: string): OutputSize | undefined {
  return OUTPUT_SIZES.find((size) => size.key === key);
}

// Helper to get output sizes for a device class
export function getOutputSizesForClass(deviceClass: DeviceClass): OutputSize[] {
  return OUTPUT_SIZES.filter((size) => size.deviceClass === deviceClass);
}

// Helper to get device class from output size key
export function getDeviceClassForSize(key: string): DeviceClass | undefined {
  return OUTPUT_SIZES.find((size) => size.key === key)?.deviceClass;
}

// Screen component props
export interface ScreenComponentProps {
  language: LanguageCode;
  width: number;
  height: number;
}

export interface ScreenConfig {
  key: string;
  component: ComponentType<ScreenComponentProps>;
}

export interface ProjectConfig {
  key: string;
  name: string;
  languages: LanguageCode[];
  outputSizes: string[];
  screens: Partial<Record<DeviceClass, ScreenConfig[]>>;
}

// Helper to get device classes used by a project
export function getProjectDeviceClasses(project: ProjectConfig): DeviceClass[] {
  const classes = new Set<DeviceClass>();
  for (const sizeKey of project.outputSizes) {
    const deviceClass = getDeviceClassForSize(sizeKey);
    if (deviceClass) {
      classes.add(deviceClass);
    }
  }
  return DEVICE_CLASSES.filter((dc) => classes.has(dc));
}

// Helper to get output sizes for a project filtered by device class
export function getProjectOutputSizesForClass(
  project: ProjectConfig,
  deviceClass: DeviceClass
): OutputSize[] {
  return project.outputSizes
    .map((key) => getOutputSize(key))
    .filter((size): size is OutputSize => size !== undefined && size.deviceClass === deviceClass);
}

const projects: ProjectConfig[] = [
  letterAppConfig,
  eldrumBlackDustConfig,
];

export default projects;
