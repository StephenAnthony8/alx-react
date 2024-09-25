import { render, screen } from '@testing-library/react';
import Header from './Header';
import { StyleSheetTestUtils } from 'aphrodite';
import React from 'react';
import AppContext from '../App/AppContext';
import userEvent from '@testing-library/user-event';


beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("Header rendering", () => {


  test("Header renders without crashing", () => {
    render(<Header />);
  });

  test("Verify that the components render 'img' & 'h1' tag", () => {
    const { container } = render(<Header />);

    /* h1 tag */
    expect(container.querySelector('h1')).toEqual(expect.anything());

    /* img tag */
    expect(container.querySelector('img')).toEqual(expect.anything());
  });
});

describe("Testing context operations", () => {

  test("Mounts header with default context value", () => {
    const { container } = render(<Header />);

    expect(container.querySelector('#logoutSection')).not.toBeInTheDocument();
  });

  test("Mounts header with email & isLoggedIn values", () => {

    const nonDefault = {
      user: {
        email: 'Antony',
        password: '',
        isLoggedIn: true
      },
      logOut: () => {}
    }

    const { container } = render(
      <AppContext.Provider value={nonDefault}>

      <Header />
      </AppContext.Provider>
    );

    expect(container.querySelector('#logoutSection')).toBeInTheDocument();
  });

  test("LogOut is called with isLoggedIn: true & email set", async () => {

    const user = userEvent.setup();

    const nonDefault = {
      user: {
        email: 'Antony',
        password: '',
        isLoggedIn: true
      },
      logOut: () => {}
    }
    const spy = jest.spyOn(nonDefault, 'logOut');

    render(
      <AppContext.Provider value={nonDefault}>

      <Header />
      </AppContext.Provider>
    );

    await user.click(screen.getByText('(logout)'));

    expect(spy).toHaveBeenCalled();
    spy.mockRestore();

    
  });

  
});
