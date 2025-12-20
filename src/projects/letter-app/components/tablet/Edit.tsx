import { ScreenComponentProps } from "../../../../config";
import translations from "../../translations";

function Edit({ language }: ScreenComponentProps) {
  return (
    <div className="edit">
      <div className="teaser">{translations[language].edit}</div>
      <img
        className="screenshot"
        alt="screenshot"
        src={`/raw/${language}/iPad Air 11-inch (M3)-02_edit.png`}
      />
      <img className="mock" alt="ipad129" src="/ipad129.png" />
    </div>
  );
}

export default Edit;
