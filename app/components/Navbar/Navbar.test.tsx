
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from './Navbar';
import '@testing-library/jest-dom';

// Mock Next.js Link component
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>;
  };
});

describe('Navbar', () => {
  it('should render the logo', () => {
    render(<Navbar />);
    const logo = screen.getByText('Nexus');
    expect(logo).toBeInTheDocument();
  });

  it('should render desktop sign in and sign up links by default (on large screens)', () => {
    render(<Navbar />);
    // On large screens, these are visible
    const signInLink = screen.getByText('Sign In');
    const signUpLink = screen.getByText('Sign Up');
    expect(signInLink).toBeInTheDocument();
    expect(signUpLink).toBeInTheDocument();
  });

  it('should toggle mobile menu on button click', () => {
    render(<Navbar />);

    // Initially, the mobile menu links should not be visible
    // We target by text content because they are not present in the DOM
    expect(screen.queryByText('Sign In', { selector: 'div.absolute button' })).not.toBeInTheDocument();
    expect(screen.queryByText('Sign Up', { selector: 'div.absolute button' })).not.toBeInTheDocument();

    // The Menu icon should be visible, and X icon not (initially)
    expect(screen.getByTestId('menu-icon')).toBeInTheDocument();
    expect(screen.queryByTestId('x-icon')).not.toBeInTheDocument();

    // Click the menu button
    const menuButton = screen.getByLabelText('Toggle menu');
    fireEvent.click(menuButton);

    // After clicking, mobile menu links should be visible within the absolutely positioned div
    const mobileSignInLink = screen.getByText('Sign In', { selector: 'div.absolute button' });
    const mobileSignUpLink = screen.getByText('Sign Up', { selector: 'div.absolute button' });
    expect(mobileSignInLink).toBeInTheDocument();
    expect(mobileSignUpLink).toBeInTheDocument();

    // The X icon should be visible
    expect(screen.getByTestId('x-icon')).toBeInTheDocument();
    expect(screen.queryByTestId('menu-icon')).not.toBeInTheDocument();

    // Click the menu button again to close
    fireEvent.click(menuButton);

    // Mobile menu links should be hidden again
    expect(screen.queryByText('Sign In', { selector: 'div.absolute button' })).not.toBeInTheDocument();
    expect(screen.queryByText('Sign Up', { selector: 'div.absolute button' })).not.toBeInTheDocument();

    // The Menu icon should be visible
    expect(screen.getByTestId('menu-icon')).toBeInTheDocument();
    expect(screen.queryByTestId('x-icon')).not.toBeInTheDocument();
  });
});
