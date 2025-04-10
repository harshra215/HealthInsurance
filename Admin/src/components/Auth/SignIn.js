import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleSignIn } from "./auth"; // Import the handleSignIn function

const SignIn = ({ setAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignInClick = () => {
    handleSignIn(username, password, setAuthenticated, setError, navigate);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div
        className="
          bg-white 
          p-8 
          rounded-xl 
          shadow-lg 
          w-full 
          max-w-md 
          animate-fade-in 
          border 
          border-gray-200
        "
      >
        <h2
          className="
            text-3xl 
            font-bold 
            text-gray-800 
            mb-6 
            text-center
          "
        >
          Sign In
        </h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSignInClick();
          }}
          className="space-y-6"
        >
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="
                w-full 
                px-4 
                py-3 
                border 
                border-gray-300 
                rounded-lg 
                text-gray-700 
                placeholder-gray-400 
                focus:ring-2 
                focus:ring-blue-500 
                focus:border-transparent 
                transition-all 
                duration-200
              "
              placeholder="Enter your username"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="
                w-full 
                px-4 
                py-3 
                border 
                border-gray-300 
                rounded-lg 
                text-gray-700 
                placeholder-gray-400 
                focus:ring-2 
                focus:ring-blue-500 
                focus:border-transparent 
                transition-all 
                duration-200
              "
              placeholder="Enter your password"
              required
            />
          </div>
          {error && (
            <p
              className="
                text-red-500 
                text-sm 
                font-medium 
                bg-red-50 
                p-2 
                rounded-md 
                text-center
              "
            >
              {error}
            </p>
          )}
          <button
            type="submit"
            className="
              w-full 
              bg-blue-600 
              text-white 
              px-4 
              py-3 
              rounded-lg 
              font-semibold 
              hover:bg-blue-700 
              focus:outline-none 
              focus:ring-2 
              focus:ring-blue-500 
              focus:ring-offset-2 
              transition-all 
              duration-200
            "
          >
            Sign In
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <a href="/signup" className="text-blue-600 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;