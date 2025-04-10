import React from "react";

const Banner = () => {
  return (
    <section className="relative h-[400px] md:h-[500px] mb-12 overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover object-center"
          src="https://img.freepik.com/premium-photo/collage-families-surfing-their-laptop_13339-256450.jpg?w=900"
          alt="Families using laptops"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center h-full px-6 md:px-12 lg:px-20">
        <div className="max-w-lg text-white animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Still Waiting for the Right Plan?
          </h1>
          <p className="text-xl md:text-2xl font-medium mb-8">
            Our best Insurance Policy is just a click away!
          </p>
          <a
            href="/plans"
            className="inline-block bg-gradient-to-r from-purple-700 to-indigo-600 py-3 px-8 text-white font-semibold uppercase text-sm rounded-full hover:from-purple-800 hover:to-indigo-700 focus:ring-4 focus:ring-purple-300 focus:outline-none transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View Policy <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;