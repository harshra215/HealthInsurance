import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "./auth";
import { useNavigate, Link } from "react-router-dom";

const RegisterForm = () => {
  const { register } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    address: "",
    city: "",
    country: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.age) newErrors.age = "Age is required";
    else if (isNaN(formData.age) || formData.age < 1) newErrors.age = "Age must be a positive number";
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.country) newErrors.country = "Country is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = async () => {
    if (!validateForm()) return;
    try {
      const response = await axios.post("http://localhost:5000/users/create", formData);
      console.log("User created successfully", response.data);
      window.alert("User registered successfully!");
      const { email, password, username } = formData;
      register(email, password, username);
      navigate("/");
    } catch (error) {
      console.error("Error creating user: ", error);
      let errorMessage = "Go to Log In page and Enter your credentials";
      if (error.response && error.response.data && error.response.data.error) {
        errorMessage = error.response.data.error;
      }
      window.alert(errorMessage);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-lg transform transition-all hover:shadow-2xl">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
          Create Your Account
        </h1>
        <p className="text-gray-500 text-center mb-8 text-sm">
          Join us to secure your health with tailored insurance plans.
        </p>
        <form className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* First Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter your first name"
                className={`w-full bg-gray-100 border ${errors.firstName ? "border-red-400" : "border-gray-200"} rounded-lg py-2.5 px-4 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 placeholder-gray-400`}
                aria-label="First Name"
              />
              {errors.firstName && <p className="text-red-500 text-xs mt-1 italic">{errors.firstName}</p>}
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter your last name"
                className={`w-full bg-gray-100 border ${errors.lastName ? "border-red-400" : "border-gray-200"} rounded-lg py-2.5 px-4 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 placeholder-gray-400`}
                aria-label="Last Name"
              />
              {errors.lastName && <p className="text-red-500 text-xs mt-1 italic">{errors.lastName}</p>}
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={`w-full bg-gray-100 border ${errors.email ? "border-red-400" : "border-gray-200"} rounded-lg py-2.5 px-4 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 placeholder-gray-400`}
              aria-label="Email"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1 italic">{errors.email}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className={`w-full bg-gray-100 border ${errors.password ? "border-red-400" : "border-gray-200"} rounded-lg py-2.5 px-4 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 placeholder-gray-400`}
              aria-label="Password"
            />
            {errors.password && <p className="text-red-500 text-xs mt-1 italic">{errors.password}</p>}
          </div>

          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Choose a username"
              className={`w-full bg-gray-100 border ${errors.username ? "border-red-400" : "border-gray-200"} rounded-lg py-2.5 px-4 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 placeholder-gray-400`}
              aria-label="Username"
            />
            {errors.username && <p className="text-red-500 text-xs mt-1 italic">{errors.username}</p>}
          </div>

          {/* Age */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Enter your age"
              className={`w-full bg-gray-100 border ${errors.age ? "border-red-400" : "border-gray-200"} rounded-lg py-2.5 px-4 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 placeholder-gray-400`}
              aria-label="Age"
            />
            {errors.age && <p className="text-red-500 text-xs mt-1 italic">{errors.age}</p>}
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className={`w-full bg-gray-100 border ${errors.gender ? "border-red-400" : "border-gray-200"} rounded-lg py-2.5 px-4 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 text-gray-700`}
              aria-label="Gender"
            >
              <option value="">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {errors.gender && <p className="text-red-500 text-xs mt-1 italic">{errors.gender}</p>}
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your address"
              className={`w-full bg-gray-100 border ${errors.address ? "border-red-400" : "border-gray-200"} rounded-lg py-2.5 px-4 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 placeholder-gray-400`}
              aria-label="Address"
            />
            {errors.address && <p className="text-red-500 text-xs mt-1 italic">{errors.address}</p>}
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* City */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter your city"
                className={`w-full bg-gray-100 border ${errors.city ? "border-red-400" : "border-gray-200"} rounded-lg py-2.5 px-4 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 placeholder-gray-400`}
                aria-label="City"
              />
              {errors.city && <p className="text-red-500 text-xs mt-1 italic">{errors.city}</p>}
            </div>

            {/* Country */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="Enter your country"
                className={`w-full bg-gray-100 border ${errors.country ? "border-red-400" : "border-gray-200"} rounded-lg py-2.5 px-4 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 placeholder-gray-400`}
                aria-label="Country"
              />
              {errors.country && <p className="text-red-500 text-xs mt-1 italic">{errors.country}</p>}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="button"
            onClick={handleRegister}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 px-6 rounded-full hover:from-blue-700 hover:to-indigo-700 focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50 transition-all duration-300 shadow-lg transform hover:scale-105"
          >
            Register Now
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center text-gray-500 mt-6 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
            Log In
          </Link>
        </p>
      </div>
    </section>
  );
};

export default RegisterForm;