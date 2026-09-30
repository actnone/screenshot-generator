import { render } from "@testing-library/react";
import { vi } from "vitest";
import PromotionalImagePage from "./PromotionalImagePage";

vi.mock("react-router-dom", () => ({
  useParams: () => ({
    projectKey: "eldrum-untold",
    imageKey: "spanish-release-torturer",
  }),
}));

it("should render", () => {
  const { container } = render(<PromotionalImagePage />);
  expect(container.querySelector(".screen.promotional")).not.toBeNull();
});
