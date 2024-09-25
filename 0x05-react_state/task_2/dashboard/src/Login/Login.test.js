import { render, screen } from '@testing-library/react';
import Login from './Login';
import { StyleSheetTestUtils } from 'aphrodite';
import userEvent from '@testing-library/user-event';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("Login render test", () => {
  test("Login renders without crashing", () => {
    render(<Login />);
  });
  
  test("Verify that the components renders 2 'input' & 2 'label' tags", () => {
    const { container } = render(<Login />);
    
    expect(container.querySelectorAll('label').length).toBe(2);
    expect(container.querySelectorAll('input').length).toBe(3);
  });
  
});

describe("Testing Login states & submit button state", () => {
  test("Submit button is disabled by default", () => {
    render(<Login />);
    expect(screen.getByText('OK').disabled).toBe(true);
  });

  test("Submit button is enabled when both inputs are not empty", async () => {
    const user = userEvent.setup();
    const { container } = render(<Login />);
    const email = container.querySelector('input[name="email"]');
    const pword = container.querySelector('input[name="password"]');
    
    /* no input */
    expect(screen.getByText('OK').disabled).toBe(true);
    /* one input */
    await user.type(email, 'a');
    expect(screen.getByText('OK').disabled).toBe(true);
    /* two input */
    await user.type(pword, 'a');
    expect(screen.getByText('OK').disabled).toBe(false);
  });
});