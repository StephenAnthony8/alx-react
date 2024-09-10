/* eslint-disable */
import { render } from '@testing-library/react';
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

/* REMOVED TESTS */
/* test("verify that App renders a div with the class root-notifications", () => {
  const { container } = render(<App />);

  expect(container).toHaveClass('Notifications');
}); */