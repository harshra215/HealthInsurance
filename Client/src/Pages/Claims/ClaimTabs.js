import React, { useState } from "react";
import {
  FaRegCopy,
  FaHeadset,
  FaUpload,
  FaCog,
  FaInfoCircle,
} from "react-icons/fa";
import ClaimImitation from "./ClaimImitation";
import ClaimHelpdesk from "./ClaimHelpdesk";
import ClaimUpload from "./ClaimUpload";
import ClaimProcess from "./ClaimProcess";
import ClaimStatus from "./ClaimStatus";

const ClaimTabs = () => {
  const [activeTab, setActiveTab] = useState("Claim Imitation");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const tabs = [
    { name: "Claim Imitation", icon: <FaRegCopy />, component: <ClaimImitation /> },
    { name: "Claim Helpdesk", icon: <FaHeadset />, component: <ClaimHelpdesk /> },
    { name: "Claim Upload", icon: <FaUpload />, component: <ClaimUpload /> },
    { name: "Claim Process", icon: <FaCog />, component: <ClaimProcess /> },
    { name: "Claim Status", icon: <FaInfoCircle />, component: <ClaimStatus /> },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Manage Your Health Insurance Claims
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            Explore all aspects of your claims process with ease and efficiency.
          </p>
        </div>
      </header>

      {/* Tabs Section */}
      <section className="container mx-auto px-4 -mt-8">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                className={`flex items-center px-4 py-3 md:px-6 md:py-4 rounded-lg font-semibold transition-all duration-300 shadow-md ${
                  activeTab === tab.name
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
                onClick={() => handleTabClick(tab.name)}
              >
                <span className="mr-2 text-lg">{tab.icon}</span>
                {tab.name}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="transition-opacity duration-500 ease-in-out">
            {tabs.find((tab) => tab.name === activeTab)?.component}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClaimTabs;