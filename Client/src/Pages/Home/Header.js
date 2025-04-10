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
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-100 py-16 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="md:w-1/2 flex flex-col items-start text-left animate-fade-in">
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-widest mb-3">
            Health Insurance Leaders
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-5 leading-tight tracking-tight">
            Your Health, <br /> Our Priority
          </h1>
          <p className="text-lg text-gray-700 mb-8 max-w-lg font-medium">
            Expertly crafted plans for a healthier tomorrow.
          </p>

          {/* Glassmorphic Form */}
          <div className="w-full max-w-md p-6 bg-white/20 backdrop-blur-lg border border-white/30 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl">
            <form className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2.5 bg-white/50 border border-gray-200/50 rounded-lg text-gray-900 focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-200 placeholder-gray-500"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2.5 bg-white/50 border border-gray-200/50 rounded-lg text-gray-900 focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-200 placeholder-gray-500"
                    placeholder="Phone Number"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:from-indigo-700 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 focus:ring-4 focus:ring-indigo-300/50"
              >
                Get Your Quote
              </button>
            </form>
          </div>
        </div>

        {/* Right Image Slider */}
        <div className="md:w-1/2 relative animate-fade-in-right">
          <div className="relative w-full max-w-lg mx-auto">
            {images.map((image, index) => (
              <div
                key={index}
                className={`w-full h-[400px] rounded-xl shadow-lg overflow-hidden transition-all duration-1000 ${
                  index === currentImageIndex ? "opacity-100 scale-100" : "opacity-0 scale-95 absolute top-0"
                }`}
              >
                <img
                  className="w-full h-full object-cover"
                  alt="Health Insurance Excellence"
                  src={image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
              </div>
            ))}
            {/* Dots Navigation */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentImageIndex
                      ? "bg-white/90 scale-125 shadow-md"
                      : "bg-white/50 hover:bg-white/70"
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Advanced Decorative Elements */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-indigo-300/20 to-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-cyan-200/20 to-blue-300/20 rounded-full blur-3xl animate-pulse delay-300"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-indigo-100/10 rounded-full blur-2xl animate-float"></div>
      </div>

      {/* Custom Animation Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .animate-fade-in-right {
          animation: fadeInRight 0.8s ease-out forwards;
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Header;