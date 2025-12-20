import { useParams } from "react-router-dom";
import projects from "../config";

function DevicePage() {
  const { projectKey, deviceKey } = useParams();

  const project = projects.find((p) => p.key === projectKey);
  const device = project?.devices.find((d) => d.key === deviceKey);

  if (!project || !device) {
    return null;
  }

  return (
    <div className="device">
      {project.languages.map((language) => (
        <div key={language}>
          <h2>{language}</h2>
          <div className="language">
            {device.screens.map((screen) => (
              <iframe
                key={screen.key}
                style={{ width: device.width / 2, height: device.height / 2 }}
                title={`${projectKey}_${deviceKey}_${screen.key}_${language}`}
                src={`/screens/${projectKey}/${deviceKey}/${screen.key}/${language}`}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default DevicePage;
