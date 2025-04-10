import React from "react";
import AdminSectionCard from "./AdminSectionCard";

const TotalCustomersCard = () => {
  // Calculate total number of customers (example)
  const totalCustomers = 1500;

  return (
    <AdminSectionCard title="Total Customers">
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
          {totalCustomers.toLocaleString("en-IN")}
        </p>
        <div
          className="
            p-2 
            bg-blue-100 
            rounded-full 
            text-blue-600 
            text-sm 
            font-medium
          "
        >
          <span>+12% this month</span>
        </div>
      </div>
      <p className="mt-2 text-sm text-gray-500">
        Updated as of {new Date().toLocaleDateString("en-IN")}
      </p>
    </AdminSectionCard>
  );
};

export default TotalCustomersCard;