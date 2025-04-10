import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiBell,
  FiChevronDown,
  FiUser,
  FiSettings,
  FiLogOut,
} from "react-icons/fi"; // Import icons

const AdminNavbar = ({ toggleSidebar }) => {
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] =
    useState(false);
  const navigate = useNavigate();

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
    setIsNotificationDropdownOpen(false); // Close other dropdown
  };

  const toggleNotificationDropdown = () => {
    setIsNotificationDropdownOpen(!isNotificationDropdownOpen);
    setIsUserDropdownOpen(false); // Close other dropdown
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  return (
    <nav className="bg-blue-800 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Hamburger Menu */}
        <button
          onClick={toggleSidebar}
          className="
            text-white 
            hover:text-blue-200 
            focus:outline-none 
            transition-colors 
            duration-200
          "
          aria-label="Toggle Sidebar"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Logo and Title */}
        <Link
          to="/"
          className="
            text-white 
            text-xl 
            font-semibold 
            flex 
            items-center 
            space-x-2 
            hover:text-blue-200 
            transition-colors 
            duration-200
          "
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            alt="Caresure Logo"
            className="h-8"
          />
          <span>Caresure Admin</span>
        </Link>

        {/* Right Section */}
        <div className="flex items-center space-x-6">
          {/* Notification Dropdown */}
          <div className="relative">
            <button
              onClick={toggleNotificationDropdown}
              className="
                text-white 
                hover:text-blue-200 
                focus:outline-none 
                transition-colors 
                duration-200
              "
              aria-label="Notifications"
            >
              <FiBell className="h-6 w-6" />
            </button>
            {isNotificationDropdownOpen && (
              <div
                className="
                  absolute 
                  right-0 
                  mt-2 
                  w-48 
                  bg-white 
                  rounded-lg 
                  shadow-lg 
                  border 
                  border-gray-200 
                  py-2 
                  z-20 
                  animate-dropdown
                "
              >
                <Link
                  to="/notifications"
                  className="
                    block 
                    px-4 
                    py-2 
                    text-gray-700 
                    hover:bg-gray-100 
                    flex 
                    items-center 
                    space-x-2
                  "
                >
                  <FiBell className="h-4 w-4" />
                  <span>Notifications</span>
                </Link>
                <Link
                  to="/messages"
                  className="
                    block 
                    px-4 
                    py-2 
                    text-gray-700 
                    hover:bg-gray-100 
                    flex 
                    items-center 
                    space-x-2
                  "
                >
                  <FiUser className="h-4 w-4" />
                  <span>Messages</span>
                </Link>
              </div>
            )}
          </div>

          {/* User Dropdown */}
          <div className="relative">
            <button
              onClick={toggleUserDropdown}
              className="
                text-white 
                flex 
                items-center 
                space-x-1 
                hover:text-blue-200 
                focus:outline-none 
                transition-colors 
                duration-200
              "
              aria-label="User Menu"
            >
              <span>Welcome, Admin</span>
              <FiChevronDown
                className={`
                  h-5 
                  w-5 
                  transition-transform 
                  duration-300 
                  ${isUserDropdownOpen ? "rotate-180" : ""}
                `}
              />
            </button>
            {isUserDropdownOpen && (
              <div
                className="
                  absolute 
                  right-0 
                  mt-2 
                  w-48 
                  bg-white 
                  rounded-lg 
                  shadow-lg 
                  border 
                  border-gray-200 
                  py-2 
                  z-20 
                  animate-dropdown
                "
              >
                <Link
                  to="/profile"
                  className="
                    block 
                    px-4 
                    py-2 
                    text-gray-700 
                    hover:bg-gray-100 
                    flex 
                    items-center 
                    space-x-2
                  "
                >
                  <FiUser className="h-4 w-4" />
                  <span>Profile</span>
                </Link>
                <Link
                  to="/settings"
                  className="
                    block 
                    px-4 
                    py-2 
                    text-gray-700 
                    hover:bg-gray-100 
                    flex 
                    items-center 
                    space-x-2
                  "
                >
                  <FiSettings className="h-4 w-4" />
                  <span>Settings</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="
                    block 
                    w-full 
                    text-left 
                    px-4 
                    py-2 
                    text-gray-700 
                    hover:bg-gray-100 
                    flex 
                    items-center 
                    space-x-2
                  "
                >
                  <FiLogOut className="h-4 w-4" />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;