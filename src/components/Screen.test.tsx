import { render } from "@testing-library/react";
import Screen from "./Screen";

it("should render", () => {
  const { container } = render(
    <Screen
      projectKey="eldrum-untold"
      deviceClass="mobile"
      screenKey="torturer"
      language="en"
      outputSizeKey="iphone69-portrait"
    />,
  );
  expect(container.querySelector(".screen")).not.toBeNull();
});
