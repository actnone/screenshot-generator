import projects, { DeviceClass, LanguageCode, getOutputSize } from "../config";
import { DeviceProvider } from "../context/DeviceContext";

interface ScreenProps {
  projectKey: string;
  deviceClass: DeviceClass;
  screenKey: string;
  language: LanguageCode;
  outputSizeKey: string;
}

function Screen({
  projectKey,
  deviceClass,
  screenKey,
  language,
  outputSizeKey,
}: ScreenProps) {
  const project = projects.find((p) => p.key === projectKey);
  const screens = project?.screens[deviceClass];
  const screen = screens?.find((s) => s.key === screenKey);
  const outputSize = getOutputSize(outputSizeKey);

  if (!project || !screen || !outputSize) {
    return null;
  }

  const ScreenComponent = screen.component;
  const { width, height } = outputSize;

  return (
    <div
      className={`screen ${deviceClass}`}
      style={{ width: width / 2, height: height / 2 }}
    >
      <DeviceProvider deviceClass={deviceClass} width={width} height={height}>
        {ScreenComponent ? (
          <ScreenComponent language={language} width={width} height={height} />
        ) : (
          screenKey
        )}
      </DeviceProvider>
    </div>
  );
}

export default Screen;
