import { ComponentType } from 'react';
import eldrumBlackDustConfig from './projects/eldrum-black-dust/config';
import eldrumUntoldConfig from './projects/eldrum-untold/config';
import eldrumRedTideConfig from './projects/eldrum-red-tide/config';

export type LanguageCode = string;

export type ColorScheme = 'light' | 'dark';

export const colorSchemes: ColorScheme[] = ['light', 'dark'];

// Device Classes
export type DeviceClass = 'mobile' | 'tablet' | 'desktop';

export const DEVICE_CLASSES: DeviceClass[] = ['mobile', 'tablet', 'desktop'];

// Distribution stores
export type Store = 'appStore' | 'googlePlay';

export const STORES: Store[] = ['appStore', 'googlePlay'];

// Output Size definition
export interface OutputSize {
  key: string;
  deviceClass: DeviceClass;
  width: number;
  height: number;
  stores: Store[];
}

// Global registry of all available output sizes
export const OUTPUT_SIZES: OutputSize[] = [
  // Mobile - Portrait
  { key: 'iphone69-portrait', deviceClass: 'mobile', width: 1320, height: 2868, stores: ['appStore', 'googlePlay'] },
  { key: 'iphone65-portrait', deviceClass: 'mobile', width: 1284, height: 2778, stores: ['appStore', 'googlePlay'] },
  { key: 'iphone63-portrait', deviceClass: 'mobile', width: 1179, height: 2556, stores: ['appStore', 'googlePlay'] },
  { key: 'iphone55-portrait', deviceClass: 'mobile', width: 1242, height: 2208, stores: ['appStore', 'googlePlay'] },
  { key: 'android-phone-portrait', deviceClass: 'mobile', width: 1440, height: 2560, stores: ['googlePlay'] },
  // Tablet - Landscape
  { key: 'ipad129-landscape', deviceClass: 'tablet', width: 2732, height: 2048, stores: ['appStore'] },
  { key: 'ipad11-landscape', deviceClass: 'tablet', width: 2388, height: 1668, stores: ['appStore'] },
  { key: 'android-tablet-landscape', deviceClass: 'tablet', width: 3840, height: 2160, stores: ['googlePlay'] }, // 16:9 - Google Play 7" & 10"
  // Tablet - Portrait
  { key: 'ipad129-portrait', deviceClass: 'tablet', width: 2048, height: 2732, stores: ['appStore'] },
  { key: 'ipad11-portrait', deviceClass: 'tablet', width: 1668, height: 2388, stores: ['appStore'] },
  { key: 'android-tablet-portrait', deviceClass: 'tablet', width: 2160, height: 3840, stores: ['googlePlay'] }, // 9:16 - Google Play 7" & 10"
  // Desktop
  { key: 'mac-landscape', deviceClass: 'desktop', width: 2880, height: 1800, stores: ['appStore'] },
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
  outputSizesByStore?: Partial<Record<Store, string[]>>;
  screens: Partial<Record<DeviceClass, ScreenConfig[]>>;
  screensByStore?: Partial<Record<Store, Partial<Record<DeviceClass, ScreenConfig[]>>>>;
}

// Helper to get device classes used by a project
export function getProjectDeviceClasses(project: ProjectConfig, store?: Store): DeviceClass[] {
  const classes = new Set<DeviceClass>();
  const outputSizeKeys = store
    ? getProjectOutputSizeKeysForStore(project, store)
    : project.outputSizes;
  for (const sizeKey of outputSizeKeys) {
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
  deviceClass: DeviceClass,
  store?: Store
): OutputSize[] {
  const outputSizeKeys = store
    ? getProjectOutputSizeKeysForStore(project, store)
    : project.outputSizes;
  return outputSizeKeys
    .map((key) => getOutputSize(key))
    .filter((size): size is OutputSize => size !== undefined && size.deviceClass === deviceClass);
}

export function isOutputSizeForStore(key: string, store: Store): boolean {
  const outputSize = getOutputSize(key);
  return Boolean(outputSize?.stores.includes(store));
}

export function getProjectOutputSizeKeysForStore(project: ProjectConfig, store: Store): string[] {
  const storeSpecificOutputSizes = project.outputSizesByStore?.[store];
  const source = storeSpecificOutputSizes ?? project.outputSizes;
  return source.filter((key) => isOutputSizeForStore(key, store));
}

export function getProjectOutputSizesForStore(project: ProjectConfig, store: Store): OutputSize[] {
  return getProjectOutputSizeKeysForStore(project, store)
    .map((key) => getOutputSize(key))
    .filter((size): size is OutputSize => size !== undefined);
}

export function getProjectScreensForStore(
  project: ProjectConfig,
  store: Store,
  deviceClass: DeviceClass
): ScreenConfig[] | undefined {
  return project.screensByStore?.[store]?.[deviceClass] ?? project.screens[deviceClass];
}

const projects: ProjectConfig[] = [
  eldrumBlackDustConfig,
  eldrumUntoldConfig,
  eldrumRedTideConfig,
];

export default projects;
