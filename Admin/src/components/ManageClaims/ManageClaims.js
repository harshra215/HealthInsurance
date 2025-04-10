import React, { useState } from "react";

const ManageClaims = () => {
  const [claims, setClaims] = useState([
    {
      _id: "1",
      planName: "Premium Plan",
      planId: "101",
      transactionId: "TXN123",
      amountPaid: 500,
      validity: 12,
      status: "Pending",
      coverageAmount: "₹1,000,000",
      userId: "123",
    },
    {
      _id: "2",
      planName: "Basic Plan",
      planId: "102",
      transactionId: "TXN456",
      amountPaid: 300,
      validity: 6,
      status: "Pending",
      coverageAmount: "₹500,000",
      userId: "456",
    },
  ]);

  const [selectedClaim, setSelectedClaim] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  const approveClaim = (claimId) => {
    const updatedClaims = claims.map((claim) =>
      claim._id === claimId ? { ...claim, status: "Approved" } : claim
    );
    setClaims(updatedClaims);
  };

  const rejectClaim = (claimId) => {
    const updatedClaims = claims.map((claim) =>
      claim._id === claimId ? { ...claim, status: "Rejected" } : claim
    );
    setClaims(updatedClaims);
  };

  const viewClaimDetails = (claim) => {
    setSelectedClaim(claim);
    const user = getUserDetails(claim.userId);
    setSelectedUser(user);
  };

  const closeClaimDetails = () => {
    setSelectedClaim(null);
    setSelectedUser(null);
  };

  const getUserDetails = (userId) => {
    return {
      userId,
      userName: "John Doe",
      age: 30,
      bloodGroup: "A+",
      planAmount: "₹1,000,000",
      validity: 12,
      otherPlans: ["Basic Plan", "Additional Health Rider"],
      address: "123 Main St, City",
      phoneNumber: "555-555-5555",
      dob: "1990-01-01",
      familyMembers: ["Spouse", "Child 1", "Child 2"],
    };
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      <h1
        className="
          text-3xl 
          sm:text-4xl 
          font-bold 
          text-gray-800 
          mb-6 
          animate-fade-in
        "
      >
        Manage Plan Requests
      </h1>

      {/* Claims Table */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Plan Requests
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-blue-700 text-white">
                <tr>
                  {[
                    "Plan Name",
                    "Plan ID",
                    "Transaction ID",
                    "Amount Paid",
                    "Validity",
                    "Coverage Amount",
                    "Status",
                    "Actions",
                  ].map((header) => (
                    <th
                      key={header}
                      className="
                        py-3 
                        px-4 
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
                {claims.map((claim) => (
                  <tr
                    key={claim._id}
                    className="hover:bg-gray-50 transition-all duration-200"
                  >
                    <td className="py-4 px-4 text-gray-700">
                      {claim.planName}
                    </td>
                    <td className="py-4 px-4 text-gray-700">{claim.planId}</td>
                    <td className="py-4 px-4 text-gray-700">
                      {claim.transactionId}
                    </td>
                    <td className="py-4 px-4 text-gray-700">
                      ₹{claim.amountPaid.toLocaleString("en-IN")}
                    </td>
                    <td className="py-4 px-4 text-gray-700">
                      {claim.validity} months
                    </td>
                    <td className="py-4 px-4 text-gray-700">
                      {claim.coverageAmount}
                    </td>
                    <td className="py-4 px-4">
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
                    <td className="py-4 px-4 space-x-3">
                      {claim.status === "Pending" && (
                        <>
                          <button
                            onClick={() => approveClaim(claim._id)}
                            className="
                              bg-green-600 
                              hover:bg-green-700 
                              text-white 
                              px-3 
                              py-1 
                              rounded-lg 
                              font-medium 
                              transition-all 
                              duration-200
                            "
                          >
                            Approve
                          </button>
                          <button
                            onClick={() => rejectClaim(claim._id)}
                            className="
                              bg-red-600 
                              hover:bg-red-700 
                              text-white 
                              px-3 
                              py-1 
                              rounded-lg 
                              font-medium 
                              transition-all 
                              duration-200
                            "
                          >
                            Reject
                          </button>
                          <button
                            onClick={() => viewClaimDetails(claim)}
                            className="
                              bg-blue-600 
                              hover:bg-blue-700 
                              text-white 
                              px-3 
                              py-1 
                              rounded-lg 
                              font-medium 
                              transition-all 
                              duration-200
                            "
                          >
                            View Profile
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {claims.length === 0 && (
            <p className="text-center text-gray-500 py-4">
              No plan requests found.
            </p>
          )}
        </div>
      </div>

      {/* Claim Details Modal */}
      {selectedClaim && (
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
              rounded-xl 
              shadow-lg 
              p-6 
              max-w-lg 
              w-full 
              max-h-[80vh] 
              overflow-y-auto 
              animate-fade-in
            "
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Plan Request Details
            </h2>
            <div className="space-y-2 text-gray-700">
              <p>
                <span className="font-medium">Plan Name:</span>{" "}
                {selectedClaim.planName}
              </p>
              <p>
                <span className="font-medium">Plan ID:</span>{" "}
                {selectedClaim.planId}
              </p>
              <p>
                <span className="font-medium">Transaction ID:</span>{" "}
                {selectedClaim.transactionId}
              </p>
              <p>
                <span className="font-medium">Amount Paid:</span> ₹
                {selectedClaim.amountPaid.toLocaleString("en-IN")}
              </p>
              <p>
                <span className="font-medium">Validity:</span>{" "}
                {selectedClaim.validity} months
              </p>
              <p>
                <span className="font-medium">Coverage Amount:</span>{" "}
                {selectedClaim.coverageAmount}
              </p>
              <p>
                <span className="font-medium">Status:</span>{" "}
                {selectedClaim.status}
              </p>
            </div>

            {selectedUser && (
              <>
                <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">
                  User Profile
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p>
                    <span className="font-medium">User ID:</span>{" "}
                    {selectedUser.userId}
                  </p>
                  <p>
                    <span className="font-medium">Name:</span>{" "}
                    {selectedUser.userName}
                  </p>
                  <p>
                    <span className="font-medium">Age:</span> {selectedUser.age}
                  </p>
                  <p>
                    <span className="font-medium">Blood Group:</span>{" "}
                    {selectedUser.bloodGroup}
                  </p>
                  <p>
                    <span className="font-medium">Plan Amount:</span>{" "}
                    {selectedUser.planAmount}
                  </p>
                  <p>
                    <span className="font-medium">Validity:</span>{" "}
                    {selectedUser.validity} months
                  </p>
                  <p>
                    <span className="font-medium">Other Plans:</span>{" "}
                    {selectedUser.otherPlans.join(", ")}
                  </p>
                  <p>
                    <span className="font-medium">Address:</span>{" "}
                    {selectedUser.address}
                  </p>
                  <p>
                    <span className="font-medium">Phone Number:</span>{" "}
                    {selectedUser.phoneNumber}
                  </p>
                  <p>
                    <span className="font-medium">Date of Birth:</span>{" "}
                    {selectedUser.dob}
                  </p>
                  <p>
                    <span className="font-medium">Family Members:</span>{" "}
                    {selectedUser.familyMembers.join(", ")}
                  </p>
                </div>
              </>
            )}

            <div className="mt-6">
              <button
                onClick={closeClaimDetails}
                className="
                  w-full 
                  bg-blue-600 
                  hover:bg-blue-700 
                  text-white 
                  px-4 
                  py-2 
                  rounded-lg 
                  font-semibold 
                  transition-all 
                  duration-200
                "
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageClaims;