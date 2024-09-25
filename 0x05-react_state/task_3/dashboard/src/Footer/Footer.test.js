import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import AppContext, { logOut } from '../App/AppContext';

describe("Footer basic rendering", () => {
  test("Footer renders without crashing", () => {
    render(<Footer />);
  });

  test("Verify that the components render 'Copyright' text", () => {
    render(<Footer />);
    expect(screen.getByText('Copyright', { exact: false })).toHaveTextContent('Copyright');
  });
});

describe("Footer context rendering", () => {
  test("Link not displayed when isLoggedIn: false", () => {
    const { container } = render(<Footer />);
    expect(container.querySelector('a')).toBe(null);
  });

  test("Link displayed when isLoggedIn: true", () => {
    const defValue = {
      user: {
        email: '',
        password: '',
        isLoggedIn: true
      },
      logOut: () => { }
    }
    const { container } = render(
      <AppContext.Provider value={defValue}>

        <Footer />
      </AppContext.Provider>
    );

    expect(container.querySelector('a')).toBeVisible();
  });
});
