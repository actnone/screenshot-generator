import { ProjectConfig } from '../../config';

// Mobile screens
import MobileOverview from './components/mobile/Overview';
import MobileDetail from './components/mobile/Detail';
import MobileEdit from './components/mobile/Edit';
import MobileFeatures from './components/mobile/Features';
import MobileProFeatures from './components/mobile/ProFeatures';

// Tablet screens
import TabletOverview from './components/tablet/Overview';
import TabletEdit from './components/tablet/Edit';
import TabletFeatures from './components/tablet/Features';

// Desktop screens
import DesktopOverview from './components/desktop/Overview';
import DesktopEdit from './components/desktop/Edit';
import DesktopFeatures from './components/desktop/Features';

const config: ProjectConfig = {
  key: 'letter-app',
  name: 'Letter App',
  languages: [
    'en-US',
    'nl-NL',
    'it-IT',
    'es-ES',
    'fr-FR',
    'de-DE',
    'pt-PT',
  ],
  outputSizes: [
    'iphone69-portrait',
    'iphone65-portrait',
    'iphone63-portrait',
    'iphone55-portrait',
    'ipad129-landscape',
    'mac-landscape',
  ],
  screens: {
    mobile: [
      { key: 'overview', component: MobileOverview },
      { key: 'detail', component: MobileDetail },
      { key: 'edit', component: MobileEdit },
      { key: 'features', component: MobileFeatures },
      { key: 'pro-features', component: MobileProFeatures },
    ],
    tablet: [
      { key: 'overview', component: TabletOverview },
      { key: 'edit', component: TabletEdit },
      { key: 'features', component: TabletFeatures },
    ],
    desktop: [
      { key: 'overview', component: DesktopOverview },
      { key: 'edit', component: DesktopEdit },
      { key: 'features', component: DesktopFeatures },
    ],
  },
};

export default config;
