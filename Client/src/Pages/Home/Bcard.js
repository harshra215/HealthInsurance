import React from "react";

const Bcard = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h5 className="text-lg font-semibold text-blue-600 tracking-wider uppercase">
            Caresure
          </h5>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-2">
            A 360° Wellness System
          </h1>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Health is a journey, not a destination. Elevate your well-being with our comprehensive wellness services.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Talk to Caresure",
              description: "Free, expert telemedicine facility",
              img: "https://d28c6jni2fmamz.cloudfront.net/Test_6b932c0bf6.svg",
            },
            {
              title: "COVID-19 Helpline",
              description: "COVID advisory & support",
              img: "https://d28c6jni2fmamz.cloudfront.net/Covid_19_3ce2ac46b4.svg",
            },
            {
              title: "Health Library",
              description: "Blogs from our experts",
              img: "https://d28c6jni2fmamz.cloudfront.net/Health_Library_bbacb539c4.svg",
            },
            {
              title: "Outpatient Portal",
              description: "Book your consultation online",
              img: "https://d28c6jni2fmamz.cloudfront.net/OPD_services_7973dc9c63.svg",
            },
            {
              title: "Wellness Program",
              description: "Start your healthy lifestyle",
              img: "https://d28c6jni2fmamz.cloudfront.net/Wellness_7dff2b4c84.svg",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  src={card.img}
                  alt={card.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h1 className="text-2xl font-semibold text-gray-900 mb-2">
                  {card.title}
                </h1>
                <p className="text-gray-600 mb-4">{card.description}</p>
                <button className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-200">
                  Learn More
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

export default Bcard;