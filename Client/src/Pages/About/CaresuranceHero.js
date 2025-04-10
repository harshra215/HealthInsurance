import React from "react";

const CaresuranceHero = () => {
  return (
    <section className="relative text-gray-800 body-font bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      <div className="container mx-auto flex px-5 py-20 md:py-24 lg:py-32 items-center justify-center flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Image Section */}
        <div className="lg:w-1/3 md:w-2/5 w-full max-w-md mb-8 lg:mb-0 transform hover:scale-[1.03] transition-transform duration-300 ease-in-out">
          <img
            className="rounded-xl shadow-xl object-cover object-center w-full h-auto"
            alt="Family enjoying health insurance benefits with Caresurance"
            src="https://images.unsplash.com/photo-1505751172876-fa1923c5c7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            loading="lazy" // Added for performance
          />
        </div>

        {/* Text Content Section */}
        <div className="flex flex-col items-center lg:items-start lg:w-1/2 w-full lg:pl-10 text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4 font-bold text-gray-900 tracking-tight leading-tight">
            Your Health, Our Priority
          </h1>
          <p className="mb-6 text-base md:text-lg lg:text-xl leading-relaxed text-gray-600 max-w-xl">
            Discover comprehensive health insurance plans tailored to your needs. With Caresurance, enjoy peace of mind knowing you and your loved ones have access to top-quality healthcare.
          </p>
          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <a
              href="#get-started"
              className="inline-block bg-blue-600 text-white font-semibold px-6 py-2.5 rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Get a personalized health insurance quote"
            >
              Get a Quote
            </a>
            <a
              href="#learn-more"
              className="inline-block bg-transparent border-2 border-blue-600 text-blue-600 font-semibold px-6 py-2.5 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Learn more about Caresurance health insurance plans"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Background Element */}
      <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
        <div className="w-full h-full bg-gradient-to-r from-blue-100/20 to-transparent opacity-60"></div>
        <div className="hidden lg:block absolute top-[-10%] right-[-10%] w-80 h-80 bg-blue-200 rounded-full filter blur-3xl opacity-25"></div>
      </div>
    </section>
  );
};

export default CaresuranceHero;