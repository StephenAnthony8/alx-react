import { screen, render } from '@testing-library/react';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';


describe("BodySectionWithMarginBottom rendering", () => {
  test("render BodySection component correctly", () => { });
  const bodyChildren = <p>Children test node</p>;

  const { container } = render(<BodySectionWithMarginBottom title={"test"} children={bodyChildren} />);
  expect(container.getElementsByClassName("bodySection")[0]).toBeVisible();
  expect(container.getElementsByClassName("bodySection")[0]).toContainHTML('<h2>test</h2>');
  expect(container.getElementsByClassName("bodySection")[0]).toContainHTML('<p>Children test node</p>');
});
