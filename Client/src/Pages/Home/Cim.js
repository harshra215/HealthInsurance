import React from "react";

const Cim = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h1 className="text-center text-4xl sm:text-5xl font-bold text-indigo-600 mb-12 animate-fade-in tracking-tight">
          Claims in Numbers
        </h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              value: "75 Lakh +",
              label: "Claims settled since inception",
            },
            {
              value: "4 Crore +",
              label: "Rupees claims settled every hour",
            },
            {
              value: "5000 +",
              label: "Claims settled daily on average",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transform transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="flex items-center space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  fill="none"
                  stroke="orange"
                  strokeWidth="2"
                  className="transform transition-transform duration-300 group-hover:-translate-y-1"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 10l7-7 7 7M12 3v18"
                  />
                </svg>
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-indigo-600">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm sm:text-base mt-2 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cim;