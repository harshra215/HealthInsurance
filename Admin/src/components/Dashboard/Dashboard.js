import React from "react";
import TotalPremiumCard from "./TotalPremiumCard";
import TotalCustomersCard from "./TotalCustomersCard";
import TotalClaimsCard from "./TotalClaimsCard";
import TotalPlansCard from "./TotalPlansCard";
import Charts from "./Charts";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      <header className="mb-6">
        <h1
          className="
            text-3xl 
            sm:text-4xl 
            font-bold 
            text-gray-800 
            tracking-tight 
            animate-fade-in
          "
        >
          Admin Dashboard
        </h1>
        <p className="mt-1 text-gray-600 text-base sm:text-lg">
          Overview of key metrics as of {new Date().toLocaleDateString("en-IN")}
        </p>
      </header>

      {/* Cards Section - Compact and Responsive */}
      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-4 
          gap-4 
          mb-6
        "
      >
        <div className="w-full min-w-0">
          <TotalPremiumCard />
        </div>
        <div className="w-full min-w-0">
          <TotalCustomersCard />
        </div>
        <div className="w-full min-w-0">
          <TotalClaimsCard />
        </div>
        <div className="w-full min-w-0">
          <TotalPlansCard />
        </div>
      </div>

      {/* Chart Section - Larger Screen Allocation */}
      <div className="w-full">
        <Charts />
      </div>
    </div>
  );
};

export default Dashboard;