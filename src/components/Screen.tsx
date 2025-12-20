import projects, { LanguageCode } from "../config";

interface ScreenProps {
  projectKey: string;
  deviceKey: string;
  screenKey: string;
  language: LanguageCode;
}

function Screen({ projectKey, deviceKey, screenKey, language }: ScreenProps) {
  const project = projects.find((p) => p.key === projectKey);
  const device = project?.devices.find((d) => d.key === deviceKey);
  const screen = device?.screens.find((d) => d.key === screenKey);

  if (!project || !device || !screen) {
    return null;
  }

  const ScreenComponent = screen.component;

  return (
    <div
      className={`screen ${device.key}`}
      style={{ width: device.width / 2, height: device.height / 2 }}
    >
      {ScreenComponent ? <ScreenComponent language={language} /> : screenKey}
    </div>
  );
}

export default Screen;
