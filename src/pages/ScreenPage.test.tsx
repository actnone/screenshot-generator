import { render } from "@testing-library/react";
import { vi } from "vitest";
import ScreenPage from "./ScreenPage";

vi.mock("react-router-dom", () => ({
  useParams: () => ({
    projectKey: "letter-app",
    deviceKey: "iphone67",
    screenKey: "overview",
    language: "en-US",
  }),
}));

it("should render", () => {
  render(<ScreenPage />);
});
