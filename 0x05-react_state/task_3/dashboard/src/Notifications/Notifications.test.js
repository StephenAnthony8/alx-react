/* eslint-disable */
/* import React from 'react'; */
import { userEvent } from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import Notifications from './Notifications';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

const listNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  {
    id: 3, type: "urgent", html: {
      __html: "<strong>Urgent requirement</strong> - complete by EOD"
    }
  }
];

describe("Notification rendering tests", () => {


  test("renders without crashing", () => {
    render(<Notifications listNotifications={[]} />);
  });

  test("renders menuItem", () => {
    const { container } = render(<Notifications />);
    expect(container.getElementsByClassName('menuItem').length).toBe(1);
  });

  test("renders notifications", () => {
    const { container } = render(<Notifications />);
    expect(container.getElementsByClassName('Notifications').length).toBe(1);
  });

});

describe("NotificationItems rendering inside Notifications", () => {

  test('renders correctly if listNotifications === empty/no array', () => {
    render(<Notifications displayDrawer={true} />)
    expect(screen.getByText("No new notifications for now")).toBeVisible();
  });

  test("renders correctly if listNotifications !== empty", () => {
    render(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(screen.getByText("Your notifications")).not.toBeVisible();
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
    expect(screen.getByText('Your notifications')).not.toBeVisible();

  });

  test('menuItem === visible if displayDrawer === false', () => {
    render(<Notifications />);
    expect(screen.getByText('Your notifications')).toBeVisible();

  });
});

describe("Notification mock testing", () => {

  test("mockup the delete function", async () => {
    const deleteFunc = jest.fn();
    /* const spy = jest.spyOn(console, "log"); */

    render(<Notifications
      displayDrawer={true}
      listNotifications={listNotifications}
      markNotificationAsRead={deleteFunc}
    />);
    await userEvent.click(screen.getByText('New course available'));
    expect(deleteFunc).toHaveBeenCalled();

    await userEvent.click(screen.getByText('New resume available'));
    expect(deleteFunc).toHaveBeenCalledTimes(2);
  });
});

describe("Notification calling parent state components", () => {
  test("Clicking on menuItem calls handleDisplayDrawer", async () => {
    const handleDisplayDrawer = jest.fn();
    render(<Notifications handleDisplayDrawer={handleDisplayDrawer} />);
    await userEvent.click(screen.getByText('Your notifications'));
    expect(handleDisplayDrawer).toHaveBeenCalled();
  });
  test("Clicking on the button calls handleHideDrawer", async () => {
    const handleHideDrawer = jest.fn();
    render(<Notifications displayDrawer={true} handleHideDrawer={handleHideDrawer} />);
    await (userEvent.click(screen.getByRole('button', { name: 'Close' })));
    expect(handleHideDrawer).toHaveBeenCalled();

  });
});
