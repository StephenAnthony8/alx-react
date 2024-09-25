import { render } from '@testing-library/react';
import Header from './Header';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});


test("Header renders without crashing", () => {
  render(<Header />);
});

test("Verify that the components render 'img' & 'h1' tag", () => {
  const { container } = render(<Header />);

  /* h1 tag */
  expect(container.querySelector('h1')).toEqual(expect.anything());

  /* img tag */
  expect(container.querySelector('img')).toEqual(expect.anything());
});
