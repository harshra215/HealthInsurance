import React from "react";

const Claimp = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-lg font-semibold text-indigo-600 uppercase tracking-wider mb-4">
            Hassle-Free Claim Process
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Take It Easy!
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            File your claim effortlessly with our streamlined process.
          </p>
          <button className="mt-8 inline-flex items-center px-8 py-3 bg-gradient-to-r from-[#EE744D] to-[#F28C6A] text-white font-semibold rounded-full shadow-lg hover:from-[#F28C6A] hover:to-[#EE744D] transition-all duration-300 hover:shadow-xl focus:ring-4 focus:ring-orange-200">
            File a Claim
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
          <div className="mt-6 flex justify-center">
            <div className="w-20 h-1 bg-indigo-500 rounded-full" />
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: (
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              ),
              title: "In-house Claims",
              description: "Hassle-free claim settlement with less turnaround time.",
            },
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              ),
              title: "24/7 Support",
              description: "Call us at +91 93283-73131 or +91 85114-411930 for assistance.",
            },
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              ),
              title: "Cashless Claims",
              description: "90% of cashless claims settled in just 2 hours.",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transform transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-6 transform transition-transform duration-300 group-hover:scale-110">
                  {card.icon}
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  {card.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Claimp;