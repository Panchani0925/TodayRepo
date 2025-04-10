"use client";
import { Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../../lib/utils";

export function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (location.pathname === "/register") return null; // Hide header on register page

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent",
        "m-0 p-0 border-0 outline-none overflow-hidden"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <nav className="relative flex items-center justify-between h-20 md:h-24">
          {/* Logo positioned in the top-left corner */}
          <Link to="/" className="absolute top-3 left-3">
            <img
              src="/logo.jpg"
              alt="Logo"
              className="h-16 w-16 rounded-full transition-transform hover:scale-110"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12 text-blue-900 hover:text-blue-600 px-4 py-3 font-semibold text-lg transition-colors duration-200 ml-24">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/courses">Courses</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>

          {/* Desktop Sign In/Sign Up Buttons */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/login"
              className="btn liquid text-lg px-6 py-3 rounded-lg font-medium"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="btn liquid text-lg px-6 py-3 rounded-lg font-medium"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <X className="h-8 w-8" />
            ) : (
              <Menu className="h-8 w-8" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/95 backdrop-blur-md md:hidden transition-all duration-300 ease-in-out",
          menuOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-10 text-xl">
          <MobileNavLink to="/" onClick={() => setMenuOpen(false)}>
            Home
          </MobileNavLink>
          <MobileNavLink to="/about" onClick={() => setMenuOpen(false)}>
            About
          </MobileNavLink>
          <MobileNavLink to="/courses" onClick={() => setMenuOpen(false)}>
            Courses
          </MobileNavLink>
          <MobileNavLink to="/blog" onClick={() => setMenuOpen(false)}>
            Blog
          </MobileNavLink>
          <MobileNavLink to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </MobileNavLink>

          {/* Mobile Sign In/Sign Up Buttons */}
          <div className="flex gap-6">
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="btn liquid text-lg px-6 py-3 rounded-lg font-medium"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              onClick={() => setMenuOpen(false)}
              className="btn liquid text-lg px-6 py-3 rounded-lg font-medium"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function NavLink({ to, children }) {
  return (
    <Link
      to={to}
      className="relative font-semibold text-foreground/80 hover:text-foreground transition-colors duration-200 after:absolute after:left-0 after:bottom-0 after:h-1 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ to, onClick, children }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="text-2xl font-semibold text-foreground/80 hover:text-foreground transition-colors"
    >
      {children}
    </Link>
  );
}

export default Header;
