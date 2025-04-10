import React from "react";

const GetStarted = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h3 className="text-blue-600 font-semibold text-lg uppercase tracking-wide">Get Started</h3>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Be Assured of the Best
          </h1>
          <p className="text-gray-600 text-md md:text-lg mt-2 max-w-xl mx-auto">
            Get your future secured with us.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1: Get Insured */}
          <div className="group bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <div className="relative h-[400px] overflow-hidden">
              <img
                alt="Businesswoman with tablet"
                className="object-cover object-center h-full w-full transition-transform duration-500 group-hover:scale-105"
                src="https://img.freepik.com/premium-photo/beautiful-young-businesswoman-is-holding-tablet-her-hands-against-urban-city-background_360066-7866.jpg?size=626&ext=jpg&ga=GA1.1.969823653.1689870495&semt=ais"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
            </div>
            <div className="p-6 text-center">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                Ready to get your policy?
              </h2>
              <button className="inline-flex items-center justify-center px-6 py-3 text-md font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 rounded-full hover:from-orange-600 hover:to-orange-700 focus:ring-4 focus:ring-orange-300 focus:outline-none transition-all duration-300 transform hover:scale-105">
                Get Insured
              </button>
            </div>
          </div>

          {/* Card 2: Get a Call */}
          <div className="group bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <div className="relative h-[400px] overflow-hidden">
              <img
                alt="Call center colleagues"
                className="object-cover object-center h-full w-full transition-transform duration-500 group-hover:scale-105"
                src="https://img.freepik.com/free-photo/colleagues-working-together-call-center-with-headphones_23-2149256084.jpg?size=626&ext=jpg&ga=GA1.1"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
            </div>
            <div className="p-6 text-center">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                Want more information?
              </h2>
              <button className="inline-flex items-center justify-center px-6 py-3 text-md font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 rounded-full hover:from-orange-600 hover:to-orange-700 focus:ring-4 focus:ring-orange-300 focus:outline-none transition-all duration-300 transform hover:scale-105">
                Get a Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;