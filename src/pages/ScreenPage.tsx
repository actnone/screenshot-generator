import { useParams } from "react-router-dom";
import Screen from "../components/Screen";
import { LanguageCode } from "../config";

function ScreenPage() {
  const { projectKey, deviceKey, screenKey, language } = useParams();

  if (!projectKey || !deviceKey || !screenKey || !language) {
    return null;
  }

  return (
    <Screen
      projectKey={projectKey}
      deviceKey={deviceKey}
      screenKey={screenKey}
      language={language as LanguageCode}
    />
  );
}

export default ScreenPage;
