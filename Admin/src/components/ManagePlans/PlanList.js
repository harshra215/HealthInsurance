import React from "react";
import { RiEdit2Line, RiDeleteBinLine } from "react-icons/ri"; // Import icons

const PlanList = () => {
  // Fetch plan data from API or context (mock data for now)
  const plans = [
    { id: 1, title: "Plan 1", category: "Family" },
    { id: 2, title: "Plan 2", category: "Diabetes" },
    // Add more plans
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg border border-gray-200">
      <h2
        className="
          text-2xl 
          font-bold 
          text-gray-800 
          mb-6 
          text-center 
          animate-fade-in
        "
      >
        Manage Health Insurance Plans
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-blue-700 text-white">
            <tr>
              {["ID", "Title", "Category", "Actions"].map((header) => (
                <th
                  key={header}
                  className="
                    py-3 
                    px-6 
                    text-left 
                    text-sm 
                    font-semibold 
                    uppercase 
                    tracking-wider
                  "
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {plans.map((plan) => (
              <tr
                key={plan.id}
                className="hover:bg-gray-50 transition-all duration-200"
              >
                <td className="py-4 px-6 text-gray-700">{plan.id}</td>
                <td className="py-4 px-6 text-gray-800 truncate max-w-xs">
                  {plan.title}
                </td>
                <td className="py-4 px-6 text-gray-800">{plan.category}</td>
                <td className="py-4 px-6 flex space-x-4">
                  <button
                    className="
                      flex 
                      items-center 
                      text-blue-600 
                      hover:text-blue-800 
                      font-medium 
                      transition-colors 
                      duration-200
                    "
                  >
                    <RiEdit2Line className="mr-1" /> Edit
                  </button>
                  <button
                    className="
                      flex 
                      items-center 
                      text-red-600 
                      hover:text-red-800 
                      font-medium 
                      transition-colors 
                      duration-200
                    "
                  >
                    <RiDeleteBinLine className="mr-1" /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {plans.length === 0 && (
          <p className="text-center text-gray-500 py-4">
            No plans available.
          </p>
        )}
      </div>
    </div>
  );
};

export default PlanList;