import { render } from "@testing-library/react";
import { vi } from "vitest";
import ScreenPage from "./ScreenPage";

vi.mock("react-router-dom", () => ({
  useParams: () => ({
    projectKey: "eldrum-untold",
    deviceClass: "mobile",
    screenKey: "torturer",
    language: "en",
    outputSizeKey: "iphone69-portrait",
  }),
  useSearchParams: () => [new URLSearchParams({ store: "appStore" })],
}));

it("should render", () => {
  const { container } = render(<ScreenPage />);
  expect(container.querySelector(".screen")).not.toBeNull();
});
