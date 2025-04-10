import React from "react";

const Info2 = () => {
  const sections = [
    {
      subtitle: "Comprehensive Coverage",
      description:
        "Caresure Health Insurance Policies or mediclaim plans will cover all 24-hour in-patient hospitalisations due to illness, accidents and daycare treatments/procedures. All related pre-hospitalisation and post-hospitalisation expenses are payable up to the specified days mentioned in the policy clause.",
    },
    {
      subtitle: "More Flexibility",
      description:
        "Caresure Health Insurance plans provide more flexible benefits when the policyholder buys a mediclaim policy and faces hardships. For instance, when the sum insured gets exhausted, additional coverage is provided without extra premium via benefits like Automatic Restoration, Super Restoration, and Road Traffic Accident (RTA) coverage.\n\nNote: These benefits are product/policy specific. Refer to the policy clause for details.",
    },
    {
      subtitle: "Disease-Specific Coverage",
      description:
        "With Caresure Health, the insured can avail of disease-specific policies for critical illnesses, cancer, and cardiac ailments alongside general mediclaim coverage. Options include Caresure Cardiac Care Insurance Policy-Platinum, Caresure Cancer Care Platinum Insurance Policy, and more.",
    },
    {
      subtitle: "Non-Hospitalisation Expenses",
      description:
        "The insured can avail of non-hospitalisation expenses covered with most of our mediclaim Health Insurance Policies, including dental treatments, annual health check-ups, out-patient care, diagnostics, consultations, etc.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-100 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
          Best Mediclaim Health Insurance Policy in India
        </h1>

        {/* Cartesian Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 border border-gray-200 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
                {section.subtitle}
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed whitespace-pre-line">
                {section.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Info2;