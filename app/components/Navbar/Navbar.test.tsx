import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "./Navbar";
import "@testing-library/jest-dom";

// Mock Next.js Link component
jest.mock("next/link", () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>;
  };
});

describe("Navbar", () => {
  it("should render the logo", () => {
    render(<Navbar />);
    const logo = screen.getByText("Nexus");
    expect(logo).toBeInTheDocument();
  });

  it("should render desktop sign in and sign up links by default (on large screens)", () => {
    render(<Navbar />);
    // On large screens, these are visible
    const signInLink = screen.getByText("Entrar");
    const signUpLink = screen.getByText("Registrar");
    expect(signInLink).toBeInTheDocument();
    expect(signUpLink).toBeInTheDocument();
  });

  it("should toggle mobile menu on button click", () => {
    render(<Navbar />);

    // Initially, the mobile menu should not be visible
    expect(screen.queryByTestId("mobile-menu")).not.toBeInTheDocument();

    // The Menu icon should be visible, and X icon not (initially)
    expect(screen.getByTestId("menu-icon")).toBeInTheDocument();
    expect(screen.queryByTestId("x-icon")).not.toBeInTheDocument();

    // Click the menu button
    const menuButton = screen.getByLabelText("Toggle menu");
    fireEvent.click(menuButton);

    // After clicking, the mobile menu should be visible
    expect(screen.getByTestId("mobile-menu")).toBeInTheDocument();

    // The X icon should be visible
    expect(screen.getByTestId("x-icon")).toBeInTheDocument();
    expect(screen.queryByTestId("menu-icon")).not.toBeInTheDocument();

    // Click the menu button again to close
    fireEvent.click(menuButton);

    // Mobile menu should be hidden again
    expect(screen.queryByTestId("mobile-menu")).not.toBeInTheDocument();

    // The Menu icon should be visible
    expect(screen.getByTestId("menu-icon")).toBeInTheDocument();
    expect(screen.queryByTestId("x-icon")).not.toBeInTheDocument();
  });
});
