/* eslint-disable */
import { render } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
/* import React from 'react'; */
import App from './App';

test("App renders without crashing", () => {
  render(<App />)
});

test("verify that App renders a div with the class App-header", () => {
  const { container } = render(<App />)
  expect(container.querySelector(".App-header")).toHaveClass('App-header');
});

test("verify that App renders a div with the class App-body", () => {
  const { container } = render(<App />)
  expect(container.querySelector(".App-body")).toHaveClass("App-body");
});

test("verify that App renders a div with the class App-footer", () => {
  const { container } = render(<App />)
  expect(container.querySelector(".App-footer")).toHaveClass("App-footer");
});


test("Default state does not render CourseList", () => {
  const { container } = render(<App />);
  expect(container.querySelector('table')).toBe(null);
});

test("Component renders correctly when isLoggedIn is true", () => {
  const { container } = render(<App isLoggedIn={true}/>);
  /* Login component is not included */
  expect(container).not.toHaveClass('App-body');
  
  /* CourseList component is included */
  expect(container.querySelector('table')).not.toBe(null);
});
test('check that alert function is called', async () => {
  window.alert = jest.fn();
  userEvent.setup();

  render(<App />);
  await userEvent.keyboard('{Control>}H');
  expect(window.alert).toHaveBeenCalled();
  expect(window.alert).toHaveBeenCalledWith('Logging you out');

});

test('check that logout function is called', async () => {
  console.log = jest.fn();
  const user = userEvent.setup();

  render(<App logOut={() => {console.log("generic text")}} />);
  await userEvent.keyboard('{Control>}H');
  expect(console.log).toHaveBeenCalled();
  expect(console.log).toHaveBeenCalledWith('generic text');
  /* const spy = jest.spyOn(console, 'log');
  expect(spy).toHaveBeenCalled();
  expect(spy).toHaveBeenCalledWith("generic text");
  spy.mockRestore(); */

});
/* REMOVED TESTS */
/* test("verify that App renders a div with the class root-notifications", () => {
  const { container } = render(<App />);

  expect(container).toHaveClass('Notifications');
}); */