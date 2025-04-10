import React from "react";

const QuickLinks = () => {
  const links = [
    { text: "Plan Essentials", href: "/" },
    { text: "Why Choose Caresure?", href: "/" },
    { text: "Looking for something else?", href: "/" },
    { text: "Understand what's included", href: "/" },
    { text: "Insured with Caresure", href: "/" },
    { text: "Be Assured of the Best", href: "/" },
  ];

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Heading Section */}
        <div className="md:w-1/3 mb-8 md:mb-0 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Quick Links
          </h1>
        </div>

        {/* Links Section */}
        <div className="md:w-2/3">
          <nav className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="group flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <span className="mr-3 text-blue-500 group-hover:text-blue-700 transition-colors duration-300">
                  •
                </span>
                <span className="text-gray-700 text-md md:text-lg font-medium group-hover:text-blue-600 transition-colors duration-300">
                  {link.text}
                </span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;