import { render } from "@testing-library/react";
import { vi } from "vitest";
import DevicePage from "./DevicePage";

vi.mock("react-router-dom", () => ({
  useParams: () => ({ projectKey: "eldrum-untold", deviceClass: "mobile" }),
}));

it("should render", () => {
  const { container } = render(<DevicePage />);
  expect(container.querySelector("iframe")).not.toBeNull();
});
