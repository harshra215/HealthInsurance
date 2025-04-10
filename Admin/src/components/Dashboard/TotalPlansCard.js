import React from "react";
import AdminSectionCard from "./AdminSectionCard";

const TotalPlansCard = () => {
  // Calculate total number of plans (example)
  const totalPlans = 20;

  return (
    <AdminSectionCard title="Total Plans">
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
          {totalPlans.toLocaleString("en-IN")}
        </p>
        <div
          className="
            p-2 
            bg-purple-100 
            rounded-full 
            text-purple-600 
            text-sm 
            font-medium
          "
        >
          <span>+2 new this month</span>
        </div>
      </div>
      <p className="mt-2 text-sm text-gray-500">
        Updated as of {new Date().toLocaleDateString("en-IN")}
      </p>
    </AdminSectionCard>
  );
};

export default TotalPlansCard;