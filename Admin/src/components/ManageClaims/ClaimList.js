import React from "react";

const ClaimList = () => {
  // Fetch claim data from API or context (mock data for now)
  const claims = [
    { id: 1, name: "John Doe", status: "Pending" },
    { id: 2, name: "Jane Smith", status: "Approved" },
    // Add more claims
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
        List of Insurance Claims
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg overflow-hidden">
          <thead className="bg-blue-700 text-white">
            <tr>
              <th className="py-4 px-6 text-left text-sm font-semibold uppercase tracking-wider">
                ID
              </th>
              <th className="py-4 px-6 text-left text-sm font-semibold uppercase tracking-wider">
                Name
              </th>
              <th className="py-4 px-6 text-left text-sm font-semibold uppercase tracking-wider">
                Status
              </th>
              <th className="py-4 px-6 text-left text-sm font-semibold uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {claims.map((claim) => (
              <tr
                key={claim.id}
                className="
                  hover:bg-gray-50 
                  transition-all 
                  duration-200
                "
              >
                <td className="py-4 px-6 text-gray-700">{claim.id}</td>
                <td className="py-4 px-6 text-gray-700">{claim.name}</td>
                <td className="py-4 px-6">
                  <span
                    className={`
                      inline-block 
                      px-3 
                      py-1 
                      rounded-full 
                      text-sm 
                      font-medium
                      ${
                        claim.status === "Pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : claim.status === "Approved"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }
                    `}
                  >
                    {claim.status}
                  </span>
                </td>
                <td className="py-4 px-6 space-x-3">
                  <button
                    className="
                      text-blue-600 
                      hover:text-blue-800 
                      font-medium 
                      transition-colors 
                      duration-200
                    "
                  >
                    Edit
                  </button>
                  <button
                    className="
                      text-red-600 
                      hover:text-red-800 
                      font-medium 
                      transition-colors 
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
      </div>
      {claims.length === 0 && (
        <p className="text-center text-gray-500 mt-4">No claims found.</p>
      )}
    </div>
  );
};

export default ClaimList;