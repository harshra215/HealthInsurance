import React, { useEffect, useState, useRef } from "react";

const Stat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [downloads, setDownloads] = useState(0);
  const [users, setUsers] = useState(0);
  const [files, setFiles] = useState(0);
  const [places, setPlaces] = useState(0);

  const statRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const rect = statRef.current.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
      setIsVisible(isVisible);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let interval;
    if (isVisible) {
      interval = setInterval(() => {
        setDownloads((prev) => (prev + 10 >= 2700 ? 2700 : prev + 10));
        setUsers((prev) => (prev + 5 >= 1300 ? 1300 : prev + 5));
        setFiles((prev) => (prev + 0.1 >= 4 ? 4 : prev + 0.1));
        setPlaces((prev) => (prev + 1 >= 90 ? 90 : prev + 1));
      }, 20); // Smoother animation with smaller interval
    }

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section className="bg-gradient-to-br from-gray-50 to-indigo-50 py-16" ref={statRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h5 className="text-3xl sm:text-4xl font-bold text-indigo-600">
            Why Caresure Health?
          </h5>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              icon: (
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-12 h-12 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 17l4 4 4-4m-4-5v9" />
                  <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29" />
                </svg>
              ),
              value: `${downloads.toLocaleString()}K`,
              label: "Lives Covered Since Inception",
            },
            {
              icon: (
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-12 h-12 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx={9} cy={7} r={4} />
                  <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" />
                </svg>
              ),
              value: `${users.toLocaleString()}+`,
              label: "Network Hospitals Across India",
            },
            {
              icon: (
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-12 h-12 text-indigo-500"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 2l3.09 6.61 7.02.96-5.06 4.94 1.19 7.01L12 17.27l-6.24 3.26 1.19-7.01L1.89 9.57l7.02-.96L12 2z"
                  />
                </svg>
              ),
              value: files.toFixed(1),
              label: "Rating Based on 8,050 Reviews",
            },
            {
              icon: (
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-12 h-12 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              ),
              value: `${places}%`,
              label: "Cashless Claims Settled in 1 Hour",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transform transition-all duration-300 hover:-translate-y-2 border border-gray-100/50 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110">
                  {stat.icon}
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stat;