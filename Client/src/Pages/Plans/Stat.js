import React from "react";

const Stat = () => {
  const stats = [
    {
      value: "8861 Crore+",
      label: "Claims settled in FY 2021-22",
      icon: "https://img.freepik.com/free-vector/red-heartbeat-symbol-graphic-illustration_53876-8061.jpg?w=740&t=st=1689338574~exp=1689339174~hmac=f8abf5501394b24e5850affe29c624cf007e6a83fc5971ebc309ce00c87f9d2b",
    },
    {
      value: "4.68 /5",
      label: "Rated Insurance Company",
      icon: "https://img.freepik.com/free-vector/start_53876-25533.jpg?w=740&t=st=1689337845~exp=1689338445~hmac=5ed6a7b3ecc8a98b781028b5aa6a62041487db4c43b60d262e7268b70fbfbacf",
    },
    {
      value: "30385 Crore+",
      label: "Rupees claim amount settled since inception",
      icon: "https://img.freepik.com/free-vector/illustration-paper_53876-5860.jpg?w=740&t=st=1689338744~exp=1689339344~hmac=d46f4a64ff5238bd180c8049560062ddf1fdcbc136d859b8d7aff9f12076d2fc",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-indigo-100">
                <img
                  src={stat.icon}
                  alt={`${stat.label} icon`}
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {stat.value}
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stat;