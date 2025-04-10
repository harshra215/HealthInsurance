import React, { useState, useEffect } from "react";
import axios from "axios";

const PlanForm = ({ plan, onClose, isEditMode }) => {
  const [planData, setPlanData] = useState({
    title: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (plan) {
      setPlanData(plan);
    }
  }, [plan]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPlanData({
      ...planData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (isEditMode) {
        await axios.put(`http://localhost:5000/plans/${planData.id}`, planData);
      } else {
        await axios.post("http://localhost:5000/plans/create", planData);
      }
      setLoading(false);
      onClose();
    } catch (error) {
      console.error(`Error ${isEditMode ? "updating" : "adding"} plan:`, error);
      setError("Failed to save plan. Please try again.");
      setLoading(false);
    }
  };

  return (
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
      <div
        className="
          bg-white 
          w-full 
          max-w-md 
          p-6 
          rounded-xl 
          shadow-lg 
          border 
          border-gray-200 
          animate-fade-in
        "
      >
        <h2
          className="
            text-2xl 
            font-bold 
            text-gray-800 
            mb-6 
            text-center
          "
        >
          {isEditMode ? "Edit Plan" : "Add Plan"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              value={planData.title}
              onChange={handleInputChange}
              className="
                w-full 
                px  px-4 
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
              placeholder="Enter plan title"
              required
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Description
            </label>
            <textarea
              name="description"
              id="description"
              value={planData.description}
              onChange={handleInputChange}
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
              rows="4"
              placeholder="Enter plan description"
            />
          </div>
          {error && (
            <p
              className="
                text-red-500 
                text-sm 
                font-medium 
                bg-red-50 
                p-2 
                rounded-md 
                text-center
              "
            >
              {error}
            </p>
          )}
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="
                bg-gray-200 
                hover:bg-gray-300 
                text-gray-700 
                font-semibold 
                py-2 
                px-4 
                rounded-lg 
                transition-all 
                duration-200
              "
              disabled={loading}
            >
              Cancel
            </button>
            <button
              type="submit"
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
              disabled={loading}
            >
              {loading ? (isEditMode ? "Updating..." : "Adding...") : isEditMode ? "Update" : "Add"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PlanForm;