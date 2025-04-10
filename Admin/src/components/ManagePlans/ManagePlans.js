import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import PlanForm from "./PlanForm";

const ManagePlans = () => {
  const [plans, setPlans] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPlans, setFilteredPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  const filterPlans = useCallback(() => {
    const filtered = plans.filter((plan) => {
      const title = plan.title || "";
      const description = plan.description || "";
      return (
        title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setFilteredPlans(filtered);
  }, [searchTerm, plans]);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await axios.get("http://localhost:5000/plans/getAll");
        setPlans(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching plans:", error);
        setLoading(false);
      }
    };
    fetchPlans();
  }, []);

  useEffect(() => {
    filterPlans();
  }, [searchTerm, plans, filterPlans]);

  const handleAddClick = () => {
    setIsAddMode(true);
    setSelectedPlan(null);
  };

  const handleEditClick = (plan) => {
    setIsAddMode(false);
    setSelectedPlan(plan);
  };

  const handleFormClose = () => {
    setIsAddMode(false);
    setSelectedPlan(null);
  };

  const handleDelete = async (planId) => {
    try {
      await axios.delete(`http://localhost:5000/plans/${planId}`);
      const response = await axios.get("http://localhost:5000/plans/getAll");
      setPlans(response.data);
    } catch (error) {
      console.error("Error deleting plan:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg border border-gray-200">
        <div className="p-6">
          <h1
            className="
              text-3xl 
              sm:text-4xl 
              font-bold 
              text-gray-800 
              mb-6 
              text-center 
              animate-fade-in
            "
          >
            Manage Health Insurance Plans
          </h1>

          {/* Search Bar */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search plans by title or description"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="
                w-full 
                px-4 
                py-3 
                border 
                border-gray-300 
                rounded-lg 
                text-gray-700 
                placeholder-gray-400 
                focus:ring-2 
                focus:ring-blue-500 
                focus:border-transparent 
                transition-all 
                duration-200
              "
            />
          </div>

          {/* Add Plan Button */}
          <div className="mb-6 flex justify-end">
            <button
              onClick={handleAddClick}
              className="
                bg-blue-600 
                hover:bg-blue-700 
                text-white 
                font-semibold 
                py-2 
                px-4 
                rounded-lg 
                transition-all 
                duration-200 
                focus:ring-2 
                focus:ring-blue-500 
                focus:ring-offset-2
              "
            >
              Add Plan
            </button>
          </div>

          {/* Plans Table */}
          <div className="overflow-x-auto">
            {loading ? (
              <p className="text-center text-gray-500 py-6">Loading plans...</p>
            ) : filteredPlans.length === 0 ? (
              <p className="text-center text-gray-500 py-6">
                No plans found.
              </p>
            ) : (
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-blue-700 text-white">
                  <tr>
                    {[
                      "Serial Number",
                      "Plan Title",
                      "Description",
                      "Actions",
                    ].map((header) => (
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
                  {filteredPlans.map((plan, index) => (
                    <tr
                      key={plan.id}
                      className="hover:bg-gray-50 transition-all duration-200"
                    >
                      <td className="px-6 py-4 text-gray-700">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4 text-gray-700 truncate max-w-xs">
                        {plan.title}
                      </td>
                      <td className="px-6 py-4 text-gray-700 truncate max-w-md">
                        {plan.description}
                      </td>
                      <td className="px-6 py-4 space-x-3">
                        <button
                          onClick={() => handleEditClick(plan)}
                          className="
                            bg-blue-600 
                            hover:bg-blue-700 
                            text-white 
                            font-medium 
                            py-1 
                            px-3 
                            rounded-full 
                            transition-all 
                            duration-200
                          "
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(plan.id)}
                          className="
                            bg-red-600 
                            hover:bg-red-700 
                            text-white 
                            font-medium 
                            py-1 
                            px-3 
                            rounded-full 
                            transition-all 
                            duration-200
                          "
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>

      {/* Plan Form Modal */}
      {(isAddMode || selectedPlan) && (
        <div
          className="
            fixed 
            inset-0 
            bg-gray-900 
            bg-opacity-50 
            flex 
            items-center 
            justify-center 
            p-4 
            z-50
          "
        >
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-lg w-full animate-fade-in">
            <PlanForm
              plan={selectedPlan}
              onClose={handleFormClose}
              isEditMode={!isAddMode}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ManagePlans;