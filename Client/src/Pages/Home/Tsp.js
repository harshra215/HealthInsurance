import React from "react";

const Tsp = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-12 animate-fade-in">
        <p className="text-lg font-semibold text-indigo-600 uppercase tracking-wider">
          Our Top Selling Policies
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
          Plans Our Customers Love
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Discover the best Health Insurance policies tailored to your needs.
        </p>
      </div>

      {/* Policies Container */}
      <div className="max-w-6xl mx-auto space-y-8">
        {[
          {
            title: "Caresure Comprehensive Insurance Policy",
            description:
              "Extensive healthcare protection for your family. Get maximum coverage during medical needs.",
            imgSrc:
              "https://www.starhealth.in/_next/image/?url=https%3A%2F%2Fd28c6jni2fmamz.cloudfront.net%2Fcomprehensive_8fe665c672.jpg&w=1920&q=75",
            imgAlt: "Comprehensive Policy",
            imgPosition: "left",
          },
          {
            title: "Caresure Health Premier Insurance Policy",
            description:
              "Cherish your 50s without worrying about medical expenses. Wide coverage ensures financial support for you and your family.",
            imgSrc:
              "https://www.starhealth.in/_next/image/?url=https%3A%2F%2Fd28c6jni2fmamz.cloudfront.net%2Fhealth_premier_4c54c7fcc5.jpg&w=1920&q=75",
            imgAlt: "Health Premier Policy",
            imgPosition: "right",
          },
          {
            title: "Caresure Health Assure Insurance Policy",
            description:
              "Affordable health policy with vast benefits. Cover your entire family under one plan.",
            imgSrc:
              "https://www.starhealth.in/_next/image/?url=https%3A%2F%2Fd28c6jni2fmamz.cloudfront.net%2Fhealth_assure_78a6ff08e9.jpg&w=1920&q=75",
            imgAlt: "Health Assure Policy",
            imgPosition: "left",
          },
        ].map((policy, index) => (
          <div
            key={index}
            className={`group bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl flex flex-col ${
              policy.imgPosition === "right" ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            {/* Image */}
            <div className="md:w-1/3 h-64 relative overflow-hidden">
              <img
                src={policy.imgSrc}
                alt={policy.imgAlt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Content */}
            <div className="md:w-2/3 p-6 flex flex-col justify-center">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                {policy.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {policy.description}
              </p>
              <button className="inline-flex items-center w-36 px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-full shadow-md hover:from-amber-500 hover:to-orange-500 transition-all duration-300 hover:shadow-lg focus:ring-4 focus:ring-orange-200">
                View Policy
                <svg
                  className="w-4 h-4 ml-2 transform transition-transform duration-200 group-hover:translate-x-1"
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
        ))}
      </div>
    </section>
  );
};

export default Tsp;