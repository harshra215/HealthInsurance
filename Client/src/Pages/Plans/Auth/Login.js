import React, { useState } from "react";
import { useAuth } from "./auth";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true);
    setError("");
    try {
      await login(username, password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="relative w-full max-w-md mx-auto">
        {/* Enhanced Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 shadow-xl transform -skew-y-6 sm:skew-y-0 sm:-rotate-3 rounded-3xl opacity-90 transition-all duration-300"></div>
        
        {/* Main Card with Glass Effect */}
        <div className="relative bg-white/90 backdrop-blur-sm shadow-2xl rounded-3xl p-6 sm:p-8 transform transition-all duration-300 hover:scale-[1.02]">
          <div className="text-center mb-8">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Government_of_India_logo.svg/500px-Government_of_India_logo.svg.png"
              alt="Government of India Logo"
              className="mx-auto h-24 transform transition-transform duration-300 hover:scale-105"
            />
            <h1 className="text-3xl font-bold text-gray-800 mt-6 tracking-tight">
              Welcome Back
            </h1>
            <p className="text-gray-500 mt-2 text-sm">Sign in to continue</p>
          </div>

          <div className="space-y-6">
            {/* Input Fields with Enhanced Styling */}
            <div className="relative group">
              <input
                autoComplete="off"
                id="username"
                name="username"
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                aria-label="Username"
                aria-required="true"
              />
              <label
                htmlFor="username"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-200 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-600 group-focus-within:-top-2 group-focus-within:text-sm group-focus-within:text-blue-600 bg-white px-1 rounded"
              >
                Username
              </label>
            </div>

            <div className="relative group">
              <input
                autoComplete="off"
                id="password"
                name="password"
                type="password"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                aria-label="Password"
                aria-required="true"
              />
              <label
                htmlFor="password"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-200 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-600 group-focus-within:-top-2 group-focus-within:text-sm group-focus-within:text-blue-600 bg-white px-1 rounded"
              >
                Password
              </label>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={handleLogin}
                className={`w-full sm:w-auto bg-blue-600 text-white rounded-lg px-6 py-3 font-medium shadow-md hover:bg-blue-700 transform transition-all duration-200 hover:-translate-y-0.5 focus:ring-4 focus:ring-blue-200 ${
                  loading ? 'opacity-60 cursor-not-allowed' : ''
                }`}
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Signing in...
                  </span>
                ) : (
                  'Sign In'
                )}
              </button>
              <Link
                to="/register"
                className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
              >
                Create an Account
              </Link>
            </div>

            {/* Error and Info Messages */}
            {error && (
              <div className="bg-red-50 border-l-4 border-red-500 p-3 rounded-r-lg animate-fade-in">
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            )}
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-3 rounded-r-lg">
              <p className="text-yellow-700 text-sm">
                Test Environment: Use any username and password
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;