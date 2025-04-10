import React from "react";

const AdminSectionCard = ({ title, children }) => {
  return (
    <section
      className="
        mb-6 
        p-6 
        bg-white 
        rounded-lg 
        shadow-md 
        hover:shadow-lg 
        transition-all 
        duration-300 
        border 
        border-gray-100 
        max-w-4xl 
        mx-auto
      "
    >
      <h2
        className="
          text-2xl 
          font-semibold 
          mb-4 
          text-gray-800 
          border-b 
          border-gray-200 
          pb-2
        "
      >
        {title}
      </h2>
      <div className="text-gray-700">{children}</div>
    </section>
  );
};

export default AdminSectionCard;