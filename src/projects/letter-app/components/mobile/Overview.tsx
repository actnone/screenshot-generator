import { ScreenComponentProps } from "../../../../config";
import translations from "../../translations";

function Overview({ language }: ScreenComponentProps) {
  return (
    <div className="overview">
      <div className="teaser">{translations[language].overview}</div>
      <img
        className="screenshot"
        alt="screenshot"
        src={`/raw/${language}/iPhone 17 Pro-01_overview.png`}
      />
      <img className="mock" alt="iphone67" src="/iphone67.png" />
    </div>
  );
}

export default Overview;
