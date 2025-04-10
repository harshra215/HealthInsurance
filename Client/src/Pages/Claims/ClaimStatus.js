import React from "react";

const ClaimStatus = () => {
  // Simulated claim status data
  const claimStatusData = [
    {
      claimNumber: "CLM123456",
      status: "Pending",
      amount: "₹25,000",
      date: "2023-07-29",
      policyHolder: "Pavan Korat",
      phoneNumber: "+91 8511411930",
      email: "pavankorat@example.com",
    },
    {
      claimNumber: "CLM789012",
      status: "Approved",
      amount: "₹15,000",
      date: "2023-07-20",
      policyHolder: "Aayush Patel",
      phoneNumber: "+91 9328373131",
      email: "aayushpatel@example.com",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8 tracking-tight">
          Track Your Claim Status
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Stay updated on your health insurance claims with real-time status information.
        </p>

        {/* Claim Status Content */}
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
          {claimStatusData.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No claim status available at this time.</p>
              <p className="text-gray-500 mt-2">
                Submit a claim or check back later for updates.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Table for Desktop */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-blue-100 text-gray-800">
                      <th className="p-4 text-left font-semibold">Claim Number</th>
                      <th className="p-4 text-left font-semibold">Status</th>
                      <th className="p-4 text-left font-semibold">Amount</th>
                      <th className="p-4 text-left font-semibold">Date</th>
                      <th className="p-4 text-left font-semibold">Policy Holder</th>
                      <th className="p-4 text-left font-semibold">Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    {claimStatusData.map((claim) => (
                      <tr
                        key={claim.claimNumber}
                        className="hover:bg-blue-50 transition-colors duration-200"
                      >
                        <td className="p-4 border-b text-gray-800">{claim.claimNumber}</td>
                        <td className="p-4 border-b">
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                              claim.status === "Approved"
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {claim.status}
                          </span>
                        </td>
                        <td className="p-4 border-b text-gray-800">{claim.amount}</td>
                        <td className="p-4 border-b text-gray-800">{claim.date}</td>
                        <td className="p-4 border-b text-gray-800">{claim.policyHolder}</td>
                        <td className="p-4 border-b text-gray-600">
                          <a href={`tel:${claim.phoneNumber}`} className="text-blue-600 hover:underline">
                            {claim.phoneNumber}
                          </a>
                          <br />
                          <a href={`mailto:${claim.email}`} className="text-blue-600 hover:underline">
                            {claim.email}
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Card Layout for Mobile */}
              <div className="md:hidden space-y-6">
                {claimStatusData.map((claim) => (
                  <div
                    key={claim.claimNumber}
                    className="bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold text-gray-900">{claim.claimNumber}</h4>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          claim.status === "Approved"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {claim.status}
                      </span>
                    </div>
                    <p className="text-gray-600">
                      <span className="font-medium">Amount:</span> {claim.amount}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium">Date:</span> {claim.date}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium">Policy Holder:</span> {claim.policyHolder}
                    </p>
                    <p className="text-gray-600 mt-2">
                      <span className="font-medium">Contact:</span>
                      <br />
                      <a href={`tel:${claim.phoneNumber}`} className="text-blue-600 hover:underline">
                        {claim.phoneNumber}
                      </a>
                      <br />
                      <a href={`mailto:${claim.email}`} className="text-blue-600 hover:underline">
                        {claim.email}
                      </a>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <a
            href="tel:+1800-123-4567"
            className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300 shadow-md"
          >
            Need Help? Call Our 24/7 Helpline
          </a>
        </div>
      </div>
    </section>
  );
};

export default ClaimStatus;