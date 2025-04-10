import React, { useState } from "react";

const ClaimForm = () => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, API call, etc.
    console.log("Claim Submitted:", { name, status });
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-xl shadow-lg border border-gray-200">
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
        Add New Insurance Claim
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Claim Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            placeholder="Enter claim name"
            required
          />
        </div>
        <div>
          <label
            htmlFor="status"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Status
          </label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="
              w-full 
              px-4 
              py-3 
              border 
              border-gray-300 
              rounded-lg 
              text-gray-700 
              bg-white 
              focus:ring-2 
              focus:ring-blue-500 
              focus:border-transparent 
              transition-all 
              duration-200
            "
            required
          >
            <option value="" disabled>
              Select status
            </option>
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
        <button
          type="submit"
          className="
            w-full 
            bg-blue-600 
            text-white 
            px-4 
            py-3 
            rounded-lg 
            font-semibold 
            hover:bg-blue-700 
            focus:outline-none 
            focus:ring-2 
            focus:ring-blue-500 
            focus:ring-offset-2 
            transition-all 
            duration-200
          "
        >
          Add Claim
        </button>
      </form>
    </div>
  );
};

export default ClaimForm;