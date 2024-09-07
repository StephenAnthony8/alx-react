import { render } from '@testing-library/react';
import Login from './Login';

test("Login renders without crashing", () => {
  render(<Login />);
});

test("Verify that the components renders 2 'input' & 2 'label' tags", () => {
  const { container } = render(<Login />);

  expect(container.querySelectorAll('label').length).toBe(2);
  expect(container.querySelectorAll('input').length).toBe(2);
});
