/* eslint-disable */
import React from 'react';

import { render, screen } from '@testing-library/react';
import Notifications from './Notifications';


test("Notifications component renders without crashing", () => {
  render(<Notifications />);
});

test("verify that Notifications renders menuItem & notifications", () => {
  const { container } = render(<Notifications />);
  expect(container.getElementsByClassName('menuItem').length).toBe(1);
  expect(container.getElementsByClassName('Notifications').length).toBe(1);
});

test("verify that Notifications class is visible when displayDrawer is true", () => {
  render(<Notifications displayDrawer={true} />);
  expect(screen.getByText('Here is the list of notifications')).toBeVisible();
  expect(screen.getByText('New course available')).toBeVisible();
  expect(screen.getByText('New resume available')).toBeVisible();
  expect(screen.getByText('Urgent requirement')).toBeVisible();
});

test("verify that Notifications class isn't visible displayDrawer is false", () => {
  render(<Notifications />);
  expect(screen.getByText('Here is the list of notifications')).not.toBeVisible();
  expect(screen.getByText('New course available')).not.toBeVisible();
  expect(screen.getByText('New resume available')).not.toBeVisible();
  expect(screen.getByText('Urgent requirement')).not.toBeVisible();
});

test('verify that menuItem is visible when displayDrawer is true', () => {
  render(<Notifications />);
  expect(screen.getByText('Your notifications')).toBeVisible();

});

test('verify that Notifications is visible when displayDrawer is false', () => {
  render(<Notifications />);
  expect(screen.getByText('Your notifications')).toBeVisible();

});