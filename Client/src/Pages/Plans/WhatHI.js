import React from "react";

const WhatHI = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image Section */}
        <div className="lg:w-1/2 md:w-1/2 w-full mb-10 md:mb-0">
          <div className="relative group">
            <img
              className="object-cover object-center w-full h-96 rounded-3xl shadow-lg transition-transform duration-500 group-hover:scale-105"
              alt="Happy family bonding at home"
              src="https://img.freepik.com/premium-photo/happy-young-family-bonding-together-home_425904-4579.jpg?size=626&ext=jpg&ga=GA1.2.969823653.1689870495&semt=ais"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 rounded-3xl transition-opacity duration-300"></div>
          </div>
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 md:w-1/2 w-full flex flex-col md:items-start md:text-left items-center text-center">
          <h3 className="text-blue-600 font-semibold text-lg uppercase tracking-wide mb-3">
            Health Insurance
          </h3>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            What is Health Insurance?
          </h1>
          <p className="text-gray-600 text-md md:text-lg leading-relaxed mb-5">
            Health Insurance is a shield that protects you and your family from
            financial instability during health emergencies. Against the common
            misconception that Medical Insurance is only for the elderly or
            people with health risks, its necessity is indispensable for
            everyone. A Health Insurance plan offers peace of mind in times of
            hospitalisation by taking care of your medical bills.
          </p>
          <p className="text-gray-600 text-md md:text-lg leading-relaxed mb-8">
            Uncertainties like COVID-19 have taught us the necessity of Medical
            Insurance. On the other hand, with the continuous spike in medical
            inflation, a Health Insurance plan can save your day either by
            providing cashless treatments or reimbursements on the incurred
            medical expenses. The flexibility of our Health Insurance is as such
            it can be availed either on an Individual or Floater basis to get
            wide coverage.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatHI;