/* eslint-disable */
import { render, screen } from '@testing-library/react';
import Notifications from './Notifications';


test("Notifications component renders without crashing", () => {
  render(<Notifications />);
});

test("verify that Notifications renders three list items", () => {
  const { container } = render(<Notifications />);
  expect(container.querySelectorAll('li').length).toBe(3);
});

test("verify that Notifications renders\
   the text 'Here is the list of notifications'", () => {
  render(<Notifications />);
  expect(screen.getByText('Here is the list of notifications')).toBeVisible();
});
