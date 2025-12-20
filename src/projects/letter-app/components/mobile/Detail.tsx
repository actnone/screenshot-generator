import { ScreenComponentProps } from "../../../../config";

function Detail({ language }: ScreenComponentProps) {
  return (
    <div className="detail">
      <img
        className="screenshot"
        alt="screenshot"
        src={`/raw/${language}/iPhone 17 Pro-02_detail.png`}
      />
      <img className="mock" alt="iphone67" src="/iphone67.png" />
    </div>
  );
}

export default Detail;
