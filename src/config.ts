import { ComponentType } from 'react';
import letterAppConfig from './projects/letter-app/config';

export type LanguageCode = 'en-US' | 'nl-NL' | 'it-IT' | 'es-ES' | 'fr-FR' | 'de-DE' | 'pt-PT';

export type ColorScheme = 'light' | 'dark';

export const colorSchemes: ColorScheme[] = ['light', 'dark'];

export interface ScreenConfig {
  key: string;
  component: ComponentType<{ language: LanguageCode }>;
}

export interface DeviceConfig {
  key: string;
  fastlaneKeys: string[];
  width: number;
  height: number;
  screens: ScreenConfig[];
}

export interface ProjectConfig {
  key: string;
  name: string;
  languages: LanguageCode[];
  devices: DeviceConfig[];
}

const projects: ProjectConfig[] = [
  letterAppConfig,
  // Add more projects here
];

export default projects;
