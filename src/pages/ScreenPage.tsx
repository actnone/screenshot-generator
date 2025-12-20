import { useParams } from "react-router-dom";
import Screen from "../components/Screen";
import { DeviceClass, LanguageCode } from "../config";

function ScreenPage() {
  const { projectKey, deviceClass, screenKey, language, outputSizeKey } =
    useParams();

  if (
    !projectKey ||
    !deviceClass ||
    !screenKey ||
    !language ||
    !outputSizeKey
  ) {
    return null;
  }

  return (
    <Screen
      projectKey={projectKey}
      deviceClass={deviceClass as DeviceClass}
      screenKey={screenKey}
      language={language as LanguageCode}
      outputSizeKey={outputSizeKey}
    />
  );
}

export default ScreenPage;
