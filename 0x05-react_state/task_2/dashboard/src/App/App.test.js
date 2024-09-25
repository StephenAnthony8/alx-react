/* eslint-disable */
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
/* import React from 'react'; */
import App from './App';
import AppContext from './AppContext';


describe("App rendering", ()=> {

  test("App renders without crashing", () => {
    render(<App />);
  });
  
  test("verify that App renders a div with the class App-header", () => {
    const { container } = render(<App />);
    expect(container.querySelector(".App-header")).toHaveClass('App-header');
  });
  
  test("verify that App renders a div with the class App-body", () => {
    const { container } = render(<App />);
    expect(container.querySelector(".App-body")).toHaveClass("App-body");
  });
  
  test("verify that App renders a div with the class App-footer", () => {
    const { container } = render(<App />);
    expect(container.querySelector(".App-footer")).toHaveClass("App-footer");
  });
  
  
  test("Default state does not render CourseList", () => {
    const { container } = render(<App />);
    expect(container.querySelector('table')).toBe(null);
  });
  
  test("Component renders correctly when isLoggedIn is true", async () => {
    const user = userEvent.setup();
    const { container } = render(<App />);
    /* // Login component is included
    expect(screen.getByText('Log in to continue')).toBeInTheDocument(); */
    const email = container.querySelector('input[name="email"]');
    const pword = container.querySelector('input[name="password"]');
    
    await user.type(email, 'a');
    await user.type(pword, 'a');
    await user.click(container.querySelector('input[value="OK"]'));
    
    // CourseList component is included
    expect(screen.getByText('Available courses')).toBeInTheDocument();
    
  });
});

describe("App user input testing", () => {
  
  test('check that alert function is called', async () => {
    window.alert = jest.fn();
    userEvent.setup();
    
    render(<App />);
    await userEvent.keyboard('{Control>}H');
    expect(window.alert).toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalledWith('Logging you out');
    
  });
  
  test('check that logIn function is called', async () => {

    const user = userEvent.setup();
    
    
    const { container } = render(<App />);
    const email = container.querySelector('input[name="email"]');
    const pword = container.querySelector('input[name="password"]');

    await user.type(email, 'a');
    await user.type(pword, 'a');
    await user.click(container.querySelector('input[value="OK"]'));

    // Login function works correctly test
    expect(screen.getByText('Available courses')).toBeVisible();
    
  });

  test('check that logout function is called', async () => {

    const user = userEvent.setup();
    
    
    const { container } = render(<App />);
    const email = container.querySelector('input[name="email"]');
    const pword = container.querySelector('input[name="password"]');

    await user.type(email, 'a');
    await user.type(pword, 'a');
    await user.click(container.querySelector('input[value="OK"]'));

    // logging in
    expect(screen.getByText('Available courses')).toBeVisible();

    // Logging out
    await user.click(screen.getByText('(logout)'));

    expect(screen.getByText('Log in to continue')).toBeVisible();
    
  });
});

describe("App state & props", () => {
  test("Default state for displayDrawer is false", () => {
    render(<App />);
    expect(screen.getByText('Here is the list of notifications')).not.toBeVisible();
  });

  test("displayDrawer state changes when handleDisplayDrawer is called", async () => {
    render(<App />);
    expect(screen.getByText('Here is the list of notifications')).not.toBeVisible();
    await(userEvent.click(screen.getByText("Your notifications")));
    expect(screen.getByText('Here is the list of notifications')).toBeVisible();
  });

  test("displayDrawer state reverts to false when handleHideDrawer is called", async () => {
    render(<App />);

    expect(screen.getByText('Here is the list of notifications')).not.toBeVisible();
    
    await(userEvent.click(screen.getByText("Your notifications")));
    expect(screen.getByText('Here is the list of notifications')).toBeVisible();
    await(userEvent.click(screen.getByRole('button', {name:'Close'})));
    expect(screen.getByText('Here is the list of notifications')).not.toBeVisible();
  });
});
/* REMOVED TESTS */
/* test("verify that App renders a div with the class root-notifications", () => {
  const { container } = render(<App />);

  expect(container).toHaveClass('Notifications');
}); */