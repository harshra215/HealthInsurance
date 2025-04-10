import React, { useState, useEffect } from "react";

const Header = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "https://www.starhealth.in/_next/image/?url=https%3A%2F%2Fd28c6jni2fmamz.cloudfront.net%2FIB_212544_212544115839217_SM_759742_2f536d6159.jpg&w=640&q=75",
    "https://www.starhealth.in/_next/image/?url=https%3A%2F%2Fd28c6jni2fmamz.cloudfront.net%2Fodisha_v1_1a4f1850fc.png&w=640&q=75",
    "https://www.starhealth.in/_next/image/?url=https%3A%2F%2Fd28c6jni2fmamz.cloudfront.net%2FG20_image_b858836ae8.jpg&w=640&q=75",
    "https://www.starhealth.in/_next/image/?url=https%3A%2F%2Fd28c6jni2fmamz.cloudfront.net%2FIB_212544_212544115616583_SM_742722_dfc2e6d14d.jpg&w=640&q=75",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Changed to 4 seconds for better viewing

    return () => clearInterval(interval);
  }, [images.length]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission logic (replace with actual API call)
    console.log("Form submitted:", e.target.elements);
    alert("Thank you! We’ll get back to you with a quote shortly.");
  };

  return (
    <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-12 md:py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Left Section - Text and Form */}
        <div className="lg:flex-grow md:w-1/2 lg:pr-12 flex flex-col md:items-start md:text-left items-center text-center mb-12 md:mb-0">
          <div className="text-blue-200 uppercase tracking-wider text-sm mb-4">
            The Health Insurance Specialist
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Your Happy & Secure <br className="hidden lg:inline-block" /> Future Starts Here
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
            Tailored health plans for every stage of life.
          </p>
          <div className="w-full max-w-md p-6 bg-white text-gray-800 rounded-xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="first_name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    className="w-full bg-gray-50 border border-gray-300 rounded-lg py-2.5 px-3 text-gray-800 focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-all duration-200"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full bg-gray-50 border border-gray-300 rounded-lg py-2.5 px-3 text-gray-800 focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-all duration-200"
                    placeholder="+91 1234567890"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 text-white font-semibold py-3 px-6 rounded-full hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 transition-colors duration-300 shadow-md"
              >
                Get a Quote
              </button>
            </form>
          </div>
        </div>

        {/* Right Section - Slideshow */}
        <div className="lg:w-1/2 w-full relative h-64 md:h-96 overflow-hidden rounded-xl shadow-lg">
          {images.map((image, index) => (
            <img
              key={index}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
              alt={`Health insurance banner ${index + 1}`}
              src={image}
              loading="lazy"
            />
          ))}
          <div className="absolute bottom-4 left-4 flex space-x-2">
            {images.map((_, index) => (
              <span
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentImageIndex ? "bg-white" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;