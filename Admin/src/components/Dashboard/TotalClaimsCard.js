import React from "react";
import AdminSectionCard from "./AdminSectionCard";

const TotalClaimsCard = () => {
  // Calculate total claims amount (example)
  const totalClaimsAmount = 50000;

  return (
    <AdminSectionCard title="Total Claims Amount">
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
          ₹{totalClaimsAmount.toLocaleString("en-IN")}
        </p>
        <div
          className="
            p-2 
            bg-green-100 
            rounded-full 
            text-green-600 
            text-sm 
            font-medium
          "
        >
          <span>+5% this month</span>
        </div>
      </div>
      <p className="mt-2 text-sm text-gray-500">
        Updated as of {new Date().toLocaleDateString("en-IN")}
      </p>
    </AdminSectionCard>
  );
};

export default TotalClaimsCard;