import React from "react";
import AdminSectionCard from "./AdminSectionCard";

const TotalPremiumCard = () => {
  // Calculate total premium amount (example)
  const totalPremium = 120000;

  return (
    <AdminSectionCard title="Total Premium Amount">
      <div className="flex items-center justify-between">
        <p
          className="
            text-3xl 
            font-bold 
            text-gray-800 
            animate-fade-in 
            tracking-tight
          "
        >
          ₹{totalPremium.toLocaleString("en-IN")}
        </p>
        <div
          className="
            p-2 
            bg-indigo-100 
            rounded-full 
            text-indigo-600 
            text-sm 
            font-medium
          "
        >
          <span>+8% this month</span>
        </div>
      </div>
      <p className="mt-2 text-sm text-gray-500">
        Updated as of {new Date().toLocaleDateString("en-IN")}
      </p>
    </AdminSectionCard>
  );
};

export default TotalPremiumCard;