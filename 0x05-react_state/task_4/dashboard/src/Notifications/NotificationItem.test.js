import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NotificationItem from './NotificationItem';

const listNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  {
    id: 3, type: "urgent", html: {
      __html: "<strong>Urgent requirement</strong> - complete by EOD"
    }
  }
];

describe("NotificationItem basic rendering with props", () => {

  test("Basic render of NotificationItem renders without crashing", () => {
    render(<NotificationItem />);
  });

  test("NotificationItem renders with type & value props", () => {

    const { container } = render(<NotificationItem type={'urgent'} value={'text'} />);
    expect(container.querySelector('[data-notification-type=urgent]')).toHaveTextContent('text');
  });

  test("NotificationItem renders with html prop", () => {

    render(<NotificationItem html={{ __html: '<p>text</p>' }} />);

    expect(screen.getByText('text')).toBeVisible();
  });
});

describe("NotificationItem mock testing", () => {
  test("markAsRead calls with the right ID argument", async () => {
    const clickFunc = jest.fn();

    render(<NotificationItem
      {...listNotifications[0]}
      markNotificationAsRead={clickFunc}
    />);
    await userEvent.click(screen.getByText("New course available"));
    expect(clickFunc).toHaveBeenCalled();
  });
});

describe("rerendering tests", () => {
  test("NotificationItem rerendering on prop change", () => { });
});

