import { screen, render } from "@testing-library/react";
import BodySection from "./BodySection";

describe("BodySection rendering", () => {
  const bodySectionChildren = <p>test children node</p>;
  test("BodySection renders children correctly", () => {
    const { container } = render(<BodySection title={"test title"} children={bodySectionChildren} />);

    expect(container.getElementsByTagName("h2").length).toBe(1);
    expect(screen.getByText("test title")).toBeVisible();
    expect(container.getElementsByTagName("p").length).toBe(1);
    expect(screen.getByText("test children node")).toBeVisible();
  });
});