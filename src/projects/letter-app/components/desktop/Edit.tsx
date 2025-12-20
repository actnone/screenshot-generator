import { ScreenComponentProps } from "../../../../config";
import translations from "../../translations";

function Edit({ language }: ScreenComponentProps) {
  return (
    <div className="edit">
      <div className="teaser">{translations[language].edit}</div>
      <img className="mock" alt="mac" src="/mac.png" />
      <img
        className="screenshot"
        alt="screenshot"
        src={`/raw/${language}/Mac_Edit.png`}
      />
      <img className="logo" alt="logo" src="/logo.svg" />
    </div>
  );
}

export default Edit;
