import React from "react";

const Info1 = () => {
  const policies = [
    {
      title: "Policy for Diabetes",
      description:
        "The evolving lifestyle gives rise to serious diseases and disorders. One such complication is Diabetes. With the rise in medical inflation, having a Diabetes Insurance plan can save you from your financial breakdown. Our Diabetes Safe Insurance Policy is specially designed to cater for the needs of people diagnosed with both type 1 & type 2 Diabetes.",
    },
    {
      title: "Policy for Cancer",
      description:
        "Cancer is a serious threat and one of the leading causes of death across the world. A specific insurance policy for cancer offers cover for hospitalisation, treatment and diagnosis related to cancer. Our Caresure Cancer Care Platinum Insurance Policy is specially designed for people who are diagnosed with Cancer. In addition, it also provides coverage for non-cancer ailments.",
    },
    {
      title: "Policy for Cardiac Ailments",
      description:
        "Lifestyle changes also come with complications. With ever-increasing risks of cardiovascular illnesses and other associated complications, it becomes crucial that you secure yourself with the best Health Insurance plan. Our Caresure Cardiac Care Insurance Policy-Platinum provides wide coverage for cardiac illnesses. It doesn’t stop there. It gives coverage for non-cardiac ailments as well.",
    },
    {
      title: "Policy for Critical Illness",
      description:
        "In most cases, health problems occur unexpectedly and the rising medical inflation adds to the trouble. The treatment for critical illness is expensive and runs for a longer course of time. Do not worry about the treatment expenses because our Caresure Critical Illness Multipay Insurance Policy, insures you against 37 critical illnesses. The policy provides a lump sum on the diagnosis of critical illnesses under 4 groups.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
          Our Best Speciality Health Insurance Plans
        </h1>

        {/* Policies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {policies.map((policy, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
            >
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                {policy.title}
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {policy.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Info1;