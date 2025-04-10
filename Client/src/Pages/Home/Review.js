import React from "react";

const Review = () => {
  return (
    <section className="bg-gradient-to-br from-white to-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl border border-gray-100/50">
        {/* Header */}
        <div className="text-center pt-8 animate-fade-in">
          <p className="text-lg font-semibold text-indigo-600 uppercase tracking-wider">
            Our Customers
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            Happily Insured with Caresure Health
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            We find joy in the words of our valued customers.
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center px-6 py-10">
          {/* Image */}
          <div className="md:w-1/2 flex justify-center mb-8 md:mb-0 animate-fade-in-up">
            <div className="relative">
              <img
                className="w-72 h-72 object-cover rounded-full shadow-md transform transition-transform duration-300 hover:scale-105"
                alt="Jinal Shah"
                src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?w=1060&t=st=1688997806~exp=1688998406~hmac=daaa96048b54b94727b85ca169c5d319125a00695ed52a54eac55163132e0b0a"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-400/20 to-purple-400/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Text */}
          <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left px-4">
            <blockquote className="text-lg text-gray-700 italic mb-6 leading-relaxed">
              "I’ve been with Caresure Health Insurance for 8 years and filed two claims. Both were settled smoothly, with excellent support during my hospitalization."
            </blockquote>
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-1">
              Jinal Shah
            </h3>
            <p className="text-gray-500 font-medium mb-6">Bangalore</p>
            <button className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-[#EE744D] to-[#F28C6A] text-white font-semibold rounded-full shadow-md hover:from-[#F28C6A] hover:to-[#EE744D] transition-all duration-300 hover:shadow-lg focus:ring-4 focus:ring-orange-200">
              Get Insured
              <svg
                className="w-5 h-5 ml-2 transform transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;