import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test("Footer renders without crashing", () => {
  render(<Footer />);
});

test("Verify that the components render 'Copyright' text", () => {
  render(<Footer />);
  expect(screen.getByText('Copyright', {exact: false})).toHaveTextContent('Copyright');
});
