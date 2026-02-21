import { useParams, useSearchParams } from "react-router-dom";
import Screen from "../components/Screen";
import { DeviceClass, LanguageCode, STORES, Store } from "../config";

function ScreenPage() {
  const [searchParams] = useSearchParams();
  const { projectKey, deviceClass, screenKey, language, outputSizeKey } =
    useParams();
  const storeParam = searchParams.get("store");

  if (
    !projectKey ||
    !deviceClass ||
    !screenKey ||
    !language ||
    !outputSizeKey
  ) {
    return null;
  }

  const store = STORES.includes(storeParam as Store)
    ? (storeParam as Store)
    : undefined;

  return (
    <Screen
      projectKey={projectKey}
      deviceClass={deviceClass as DeviceClass}
      screenKey={screenKey}
      language={language as LanguageCode}
      outputSizeKey={outputSizeKey}
      store={store}
    />
  );
}

export default ScreenPage;
