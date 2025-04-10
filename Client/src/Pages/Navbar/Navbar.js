import React, { useState } from "react";
import { RiCustomerService2Line } from "react-icons/ri";
import logo from "../../image/logo.png"; // Ensure this path is correct
import { Link } from "react-router-dom";
import { useAuth } from "../Plans/Auth/auth";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-indigo-50/90 via-white/90 to-purple-50/90 backdrop-blur-lg z-50 shadow-md border-b border-indigo-200/30">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center transform transition-all duration-300 hover:scale-105 hover:drop-shadow-lg"
        >
          <img src={logo} className="h-10" alt="Logo" />
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex items-center space-x-6">
          {[
            { to: "/plans", label: "Plans" },
            { to: "/renew", label: "Renew" },
            { to: "/claims", label: "Claims" },
            { to: "/about", label: "About Us" },
          ].map((item, index) => (
            <li key={index} className="relative group">
              <Link
                to={item.to}
                className="text-base font-semibold text-gray-800 hover:text-indigo-600 transition-all duration-300 ease-in-out"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center shadow-[0_0_8px_rgba(99,102,241,0.5)]"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <a
            href="tel:+91 9324435163"
            className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-full shadow-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_12px_rgba(99,102,241,0.7)] focus:ring-2 focus:ring-indigo-300 text-sm"
          >
            <RiCustomerService2Line className="mr-1 h-4 w-4" />
            Call
          </a>
          {user ? (
            <button
              onClick={handleLogout}
              className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-red-600 to-rose-600 text-white font-medium rounded-full shadow-lg hover:from-red-700 hover:to-rose-700 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_12px_rgba(244,63,94,0.7)] focus:ring-2 focus:ring-red-300 text-sm"
            >
              Log Out
            </button>
          ) : (
            <Link
              to="/login"
              className="text-base font-semibold text-indigo-600 hover:text-indigo-800 transition-all duration-300 hover:shadow-[0_0_8px_rgba(99,102,241,0.4)]"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-800 hover:text-indigo-600 focus:outline-none transition-colors duration-200"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-gradient-to-b from-white/95 to-indigo-50/95 backdrop-blur-lg border-t border-indigo-200/30 px-4 py-4 animate-slide-down">
          <ul className="space-y-4">
            {[
              { to: "/plans", label: "Plans" },
              { to: "/renew", label: "Renew" },
              { to: "/claims", label: "Claims" },
              { to: "/about", label: "About Us" },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  to={item.to}
                  className="text-base font-semibold text-gray-800 hover:text-indigo-600 transition-all duration-300 block hover:shadow-[0_0_8px_rgba(99,102,241,0.4)]"
                  onClick={toggleMobileMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 space-y-3">
            <a
              href="tel:+91 9324435163"
              className="inline-flex items-center w-full justify-center px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-full shadow-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover:shadow-[0_0_12px_rgba(99,102,241,0.7)] text-sm"
            >
              <RiCustomerService2Line className="mr-2 h-4 w-4" />
              Call Us
            </a>
            {user ? (
              <button
                onClick={() => {
                  handleLogout();
                  toggleMobileMenu();
                }}
                className="inline-flex items-center w-full justify-center px-4 py-2 bg-gradient-to-r from-red-600 to-rose-600 text-white font-medium rounded-full shadow-lg hover:from-red-700 hover:to-rose-700 transition-all duration-300 hover:shadow-[0_0_12px_rgba(244,63,94,0.7)] text-sm"
              >
                Log Out
              </button>
            ) : (
              <Link
                to="/login"
                className="inline-flex items-center w-full justify-center px-4 py-2 text-base font-semibold text-indigo-600 hover:text-indigo-800 transition-all duration-300 hover:shadow-[0_0_8px_rgba(99,102,241,0.4)]"
                onClick={toggleMobileMenu}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;