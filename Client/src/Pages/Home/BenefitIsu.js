import React from "react";

const BenefitIsu = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h5 className="text-lg font-semibold text-blue-600 tracking-wider uppercase">
            Benefits of Health Insurance
          </h5>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-2 tracking-tight">
            Discover How Insurance Protects You
          </h1>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Everyone’s needs are unique—explore the types of insurance available to stay secure in uncertain times.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "What is Health Insurance?",
              img: "https://img.freepik.com/free-photo/hmm-let-me-think-thoughtful-young-woman-planning-something-looking-upper-left-corner-pondering-imaging-things-empty-space-white-background_176420-53378.jpg?size=626&ext=jpg&ga=GA1.1.464284625.1688563657&semt=sph",
            },
            {
              title: "Family Health Insurance",
              img: "https://img.freepik.com/premium-photo/portrait-indian-asian-young-family-four-sitting-white-flour-against-white-background-looking-camera_466689-8047.jpg?size=626&ext=jpg&ga=GA1.1.464284625.1688563657&semt=sph",
            },
            {
              title: "Personal Accident Insurance",
              img: "https://img.freepik.com/free-photo/young-woman-testing-car-car-showroom_1303-17732.jpg?size=626&ext=jpg&ga=GA1.1.464284625.1688563657&semt=ais",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  src={card.img}
                  alt={card.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 flex flex-col items-start">
                <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                  {card.title}
                </h1>
                <button className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-[#EE744D] to-[#F28C6A] text-white font-medium rounded-full shadow-md hover:from-[#F28C6A] hover:to-[#EE744D] transition-all duration-200 hover:shadow-lg focus:ring-4 focus:ring-orange-200">
                  View More
                  <svg
                    className="w-4 h-4 ml-2 transform transition-transform duration-200 group-hover:translate-x-1"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitIsu;