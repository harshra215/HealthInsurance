import React, { useState } from "react";

const ClaimImitation = () => {
  const [claimType, setClaimType] = useState("");
  const [policyHolderName, setPolicyHolderName] = useState("");
  const [policyNumber, setPolicyNumber] = useState("");
  const [dateOfService, setDateOfService] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [totalAmount, setTotalAmount] = useState("");
  const [receiptImage, setReceiptImage] = useState(null);
  const [submittedClaims, setSubmittedClaims] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false); // New state for submission confirmation

  const handleSubmit = (e) => {
    e.preventDefault();
    const newClaim = {
      claimType,
      policyHolderName,
      policyNumber,
      dateOfService,
      diagnosis,
      totalAmount,
      receiptImage,
    };
    setSubmittedClaims([...submittedClaims, newClaim]);
    console.log("Submitted Claims:", [...submittedClaims, newClaim]);
    setIsSubmitted(true); // Show confirmation message
    resetForm();
  };

  const resetForm = () => {
    setClaimType("");
    setPolicyHolderName("");
    setPolicyNumber("");
    setDateOfService("");
    setDiagnosis("");
    setTotalAmount("");
    setReceiptImage(null);
  };

  const handleNewClaim = () => {
    setIsSubmitted(false); // Reset to show the form again
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8 tracking-tight">
          Submit Your Health Insurance Claim
        </h2>

        {!isSubmitted ? (
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 md:p-8 rounded-xl shadow-lg space-y-6"
          >
            <div>
              <label htmlFor="claimType" className="block text-sm font-medium text-gray-700 mb-1">
                Claim Type
              </label>
              <select
                id="claimType"
                value={claimType}
                onChange={(e) => setClaimType(e.target.value)}
                className="w-full bg-gray-50 border border-gray-300 rounded-lg py-2.5 px-3 text-gray-800 focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-all duration-200"
                required
              >
                <option value="">Select Claim Type</option>
                <option value="medical">Medical</option>
                <option value="dental">Dental</option>
                <option value="vision">Vision</option>
                <option value="pharmacy">Pharmacy</option>
              </select>
            </div>
            <div>
              <label htmlFor="policyHolderName" className="block text-sm font-medium text-gray-700 mb-1">
                Policy Holder Name
              </label>
              <input
                type="text"
                id="policyHolderName"
                value={policyHolderName}
                onChange={(e) => setPolicyHolderName(e.target.value)}
                className="w-full bg-gray-50 border border-gray-300 rounded-lg py-2.5 px-3 text-gray-800 focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-all duration-200"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div>
              <label htmlFor="policyNumber" className="block text-sm font-medium text-gray-700 mb-1">
                Policy Number
              </label>
              <input
                type="text"
                id="policyNumber"
                value={policyNumber}
                onChange={(e) => setPolicyNumber(e.target.value)}
                className="w-full bg-gray-50 border border-gray-300 rounded-lg py-2.5 px-3 text-gray-800 focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-all duration-200"
                placeholder="e.g., P/000000/00/0000/000000"
                required
              />
            </div>
            <div>
              <label htmlFor="dateOfService" className="block text-sm font-medium text-gray-700 mb-1">
                Date of Service
              </label>
              <input
                type="date"
                id="dateOfService"
                value={dateOfService}
                onChange={(e) => setDateOfService(e.target.value)}
                className="w-full bg-gray-50 border border-gray-300 rounded-lg py-2.5 px-3 text-gray-800 focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-all duration-200"
                required
              />
            </div>
            <div>
              <label htmlFor="diagnosis" className="block text-sm font-medium text-gray-700 mb-1">
                Diagnosis
              </label>
              <textarea
                id="diagnosis"
                value={diagnosis}
                onChange={(e) => setDiagnosis(e.target.value)}
                className="w-full bg-gray-50 border border-gray-300 rounded-lg py-2.5 px-3 h-24 text-gray-800 focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-all duration-200 resize-none"
                placeholder="Describe the diagnosis"
                required
              />
            </div>
            <div>
              <label htmlFor="totalAmount" className="block text-sm font-medium text-gray-700 mb-1">
                Total Amount ($)
              </label>
              <input
                type="number"
                id="totalAmount"
                value={totalAmount}
                onChange={(e) => setTotalAmount(e.target.value)}
                className="w-full bg-gray-50 border border-gray-300 rounded-lg py-2.5 px-3 text-gray-800 focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-all duration-200"
                placeholder="Enter amount"
                min="0"
                step="0.01"
                required
              />
            </div>
            <div>
              <label htmlFor="receiptImage" className="block text-sm font-medium text-gray-700 mb-1">
                Receipt Image
              </label>
              <input
                type="file"
                id="receiptImage"
                onChange={(e) => setReceiptImage(e.target.files[0])}
                className="w-full bg-gray-50 border border-gray-300 rounded-lg py-2 px-3 text-gray-800 focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-all duration-200"
                accept="image/*"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300 shadow-md"
            >
              Submit Claim
            </button>
          </form>
        ) : (
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Claim Submitted Successfully!
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Our health expert will connect with you within 4 hours to assist with your claim.
            </p>
            <p className="text-sm text-gray-500 mb-6">
              Thank you for choosing Caresurance. If you have urgent questions, contact us at{" "}
              <a href="mailto:support@caresurance.com" className="text-blue-600 hover:underline">
                support@caresurance.com
              </a>.
            </p>
            <button
              onClick={handleNewClaim}
              className="w-full md:w-auto bg-blue-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300 shadow-md"
            >
              Submit Another Claim
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ClaimImitation;