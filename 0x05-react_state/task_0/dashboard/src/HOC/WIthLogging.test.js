import { cleanup, render, screen } from "@testing-library/react";
import Login from "../Login/Login";
import WithLogging from "./WithLogging";
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("Testing mount and unmount HOC functions", () => {
  ;
  test("testing withLogging mount & unmount with pure HTML ", () => {
    console.log = jest.fn();
    
    const NewFunction = WithLogging(() => {<p>Test</p>});
    render(<NewFunction />);
    expect(console.log).toHaveBeenCalled();
    expect(console.log).toHaveBeenCalledWith(`component Component is mounted`);
    cleanup();
    expect(console.log).toHaveBeenCalledWith(`component Component is going to unmount`);
  });
  test("testing withLogging mount & unmount with Login component ", () => {
    console.log = jest.fn();
    
    const NewFunction = WithLogging(Login);
    render(<NewFunction />);
    expect(console.log).toHaveBeenCalled();
    expect(console.log).toHaveBeenCalledWith(`component ${Login.name} is mounted`);
    cleanup();
    expect(console.log).toHaveBeenCalledWith(`component ${Login.name} is going to unmount`);
  });
});