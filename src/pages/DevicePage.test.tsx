import { render } from "@testing-library/react";
import { vi } from "vitest";
import DevicePage from "./DevicePage";

vi.mock("react-router-dom", () => ({
  useParams: () => ({ projectKey: "letter-app", deviceClass: "mobile" }),
}));

it("should render", () => {
  render(<DevicePage />);
});
