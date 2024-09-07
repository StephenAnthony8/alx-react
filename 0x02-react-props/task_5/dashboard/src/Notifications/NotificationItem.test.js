import React from 'react';
import {render, screen } from '@testing-library/react';
import NotificationItem from './NotificationItem';

test("Basic render of NotificationItem renders without crashing", () => {
  render(<NotificationItem />);
});

test("NotificationItem renders with type & value props", () => {
  
  const { container } = render(<NotificationItem type={'urgent'} value={'text'} />);
  expect(container.querySelector('[data-notification-type=urgent]')).toHaveTextContent('text');
});

test("NotificationItem renders with html prop", () => {

  render(<NotificationItem html={{__html: '<p>text</p>'}} />);

  expect(screen.getByText('text')).toBeVisible();
});

