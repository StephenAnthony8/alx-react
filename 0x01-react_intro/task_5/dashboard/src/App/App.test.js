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