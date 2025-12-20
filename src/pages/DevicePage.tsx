import { useParams } from "react-router-dom";
import projects, {
  DeviceClass,
  DEVICE_CLASS_DEFAULTS,
  getOutputSize,
} from "../config";

function DevicePage() {
  const { projectKey, deviceClass } = useParams();

  const project = projects.find((p) => p.key === projectKey);
  const screens = project?.screens[deviceClass as DeviceClass];

  if (!project || !screens || !deviceClass) {
    return null;
  }

  // Use the default output size for this device class
  const defaultSizeKey = DEVICE_CLASS_DEFAULTS[deviceClass as DeviceClass];
  const outputSize = getOutputSize(defaultSizeKey);

  if (!outputSize) {
    return null;
  }

  return (
    <div className="device">
      {project.languages.map((language) => (
        <div key={language}>
          <h2>{language}</h2>
          <div className="language">
            {screens.map((screen) => (
              <iframe
                key={screen.key}
                style={{
                  width: outputSize.width / 2,
                  height: outputSize.height / 2,
                }}
                title={`${projectKey}_${deviceClass}_${screen.key}_${language}`}
                src={`/screens/${projectKey}/${deviceClass}/${screen.key}/${language}/${defaultSizeKey}`}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default DevicePage;
