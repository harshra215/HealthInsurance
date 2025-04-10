import React from "react";

const Banner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 py-16 sm:py-24 px-6 sm:px-10">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
        style={{
          backgroundImage:
            'url("https://img.freepik.com/free-photo/healthcare-workers-prevent-virus-insurance-medicine-concept-smiling-attractive-female-doctor_1258-91720.jpg?w=1380&t=st=1688649240~exp=1688649840~hmac=1274e32afb4bd6e84c20585aba3583257d64baaab5f182a1efed59f5f8aefe44")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 to-blue-800/70 mix-blend-overlay"></div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4 drop-shadow-lg">
            Still Waiting for the Perfect Plan?
          </h1>
          <p className="text-xl sm:text-2xl text-gray-100 mb-8 font-medium tracking-wide drop-shadow-md">
            Discover Our Best Insurance Policies Today!
          </p>
          <a
            href="/plans"
            className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold uppercase text-sm px-8 py-4 rounded-full shadow-lg hover:from-purple-700 hover:to-blue-700 transform transition-all duration-300 hover:scale-105 hover:shadow-xl focus:ring-4 focus:ring-purple-300"
          >
            Explore Policies <span className="ml-2">→</span>
          </a>
        </div>

        {/* Optional Decorative Element */}
        <div className="hidden md:block md:w-1/2 relative">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-400/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-20 w-24 h-24 bg-blue-400/30 rounded-full blur-2xl animate-pulse delay-200"></div>
        </div>
      </div>

      {/* Bottom Wave Effect */}
      <svg
        className="absolute bottom-0 left-0 w-full text-gray-200"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,0 C280,80 720,120 1440,40 L1440,120 L0,120 Z"
        />
      </svg>
    </div>
  );
};

export default Banner;