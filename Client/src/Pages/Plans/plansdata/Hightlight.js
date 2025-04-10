import React from "react";

const Highlight = () => {
  const highlights = [
    {
      title: "Unique Policy",
      description: "A policy specifically designed to cover the health needs of women and her family.",
      icon: "https://img.freepik.com/free-icon/clipboard_318-372197.jpg?size=626&ext=jpg&ga=GA1.1.969823653.1689870495&semt=ais",
    },
    {
      title: "Bariatric Surgery",
      description: "Hospitalisation expenses incurred for Bariatric surgical procedures are covered up to the limits of Rs. 2,50,000/- and Rs. 5,00,000/- which are inclusive of pre and post hospitalisation expenses.",
      icon: "https://img.freepik.com/free-icon/clipboard_318-372197.jpg?size=626&ext=jpg&ga=GA1.1.969823653.1689870495&semt=ais",
    },
    {
      title: "Optional Cover (Lump sum on Diagnosis of Cancer)",
      description: "This policy provides lump sum cover as an optional benefit for first time diagnosis of Cancer.",
      icon: "https://img.freepik.com/free-icon/clipboard_318-372197.jpg?size=626&ext=jpg&ga=GA1.1.969823653.1689870495&semt=ais",
    },
    {
      title: "Ante-Natal Care (Pregnancy Care)",
      description: "This policy covers Outpatient expenses incurred for ante-natal care after confirmation of pregnancy up to the limits specified.",
      icon: "https://img.freepik.com/free-icon/clipboard_318-372197.jpg?size=626&ext=jpg&ga=GA1.1.969823653.1689870495&semt=ais",
    },
    {
      title: "Mid-Term Inclusion",
      description: "With an additional premium, the newly married spouse, newborn baby and/or legally adopted child can be included in the policy. The waiting periods will be applicable from the date of inclusion of new joiners.",
      icon: "https://img.freepik.com/free-icon/clipboard_318-372197.jpg?size=626&ext=jpg&ga=GA1.1.969823653.1689870495&semt=ais",
    },
    {
      title: "Hospitalisation Expenses for Treatment of New Born Baby",
      description: "Hospitalisation expenses for the treatment of newborn are covered including vaccination expenses up to 12 months.",
      icon: "https://img.freepik.com/free-icon/clipboard_318-372197.jpg?size=626&ext=jpg&ga=GA1.1.969823653.1689870495&semt=ais",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h3 className="text-blue-600 font-semibold text-lg uppercase tracking-wide">Highlights</h3>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Plan Essentials
          </h1>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
            >
              <div className="flex items-center mb-4">
                <img
                  src={highlight.icon}
                  alt={`${highlight.title} icon`}
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                {highlight.title}
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlight;