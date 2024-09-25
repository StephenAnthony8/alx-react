/* eslint-disable */
import React from 'react';

import { render, screen } from '@testing-library/react';
import Notifications from './Notifications';

const listNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  {
    id: 3, type: "urgent", html: {
      __html: "<strong>Urgent requirement</strong> - complete by EOD"
    }
  }
];

test("renders without crashing", () => {
  render(<Notifications />);
});

test("renders menuItem", () => {
  const { container } = render(<Notifications />);
  expect(container.getElementsByClassName('menuItem').length).toBe(1);
});

test("renders notifications", () => {
  const { container } = render(<Notifications />);
  expect(container.getElementsByClassName('Notifications').length).toBe(1);
});

test('renders correctly if listNotifications === empty/no array', () => {
  render(<Notifications displayDrawer={true} />)
  expect(screen.getByText("No new notifications for now")).toBeVisible();
});

test("renders correctly if listNotifications !== empty", () => {
  render(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
  expect(screen.getByText("Your notifications")).toBeVisible();
});

test("Notifications renders listNotifications correctly", () => {
  render(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
  expect(screen.getByText('New course available')).toBeVisible();
  expect(screen.getByText('New resume available')).toBeVisible();
  expect(screen.getByText('Urgent requirement')).toBeVisible();
});

test("Notifications class === visible if displayDrawer === true", () => {
  render(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
  expect(screen.getByText('Here is the list of notifications')).toBeVisible();
  expect(screen.getByText('New course available')).toBeVisible();
  expect(screen.getByText('New resume available')).toBeVisible();
  expect(screen.getByText('Urgent requirement')).toBeVisible();
});

test("Notifications class !== visible if displayDrawer === false", () => {
  render(<Notifications />);
  expect(screen.getByText('No new notifications for now')).not.toBeVisible();

});

test('menuItem === visible if displayDrawer === true', () => {
  render(<Notifications displayDrawer={true} />);
  expect(screen.getByText('Your notifications')).toBeVisible();

});

test('menuItem === visible if displayDrawer === false', () => {
  render(<Notifications />);
  expect(screen.getByText('Your notifications')).toBeVisible();

});
