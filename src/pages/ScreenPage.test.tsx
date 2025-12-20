import { render } from "@testing-library/react";
import { vi } from "vitest";
import ScreenPage from "./ScreenPage";

vi.mock("react-router-dom", () => ({
  useParams: () => ({
    projectKey: "letter-app",
    deviceClass: "mobile",
    screenKey: "overview",
    language: "en-US",
    outputSizeKey: "iphone69-portrait",
  }),
}));

it("should render", () => {
  render(<ScreenPage />);
});
