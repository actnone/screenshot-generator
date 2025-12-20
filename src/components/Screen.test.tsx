import { render } from "@testing-library/react";
import Screen from "./Screen";

it("should render", () => {
  render(
    <Screen
      projectKey="letter-app"
      deviceKey="iphone67"
      screenKey="overview"
      language="en-US"
    />
  );
});
