import { render } from "@testing-library/react";
import Screen from "./Screen";

it("should render", () => {
  render(
    <Screen
      projectKey="letter-app"
      deviceClass="mobile"
      screenKey="overview"
      language="en-US"
      outputSizeKey="iphone69-portrait"
    />
  );
});
