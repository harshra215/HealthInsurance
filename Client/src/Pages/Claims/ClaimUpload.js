import React, { useState } from "react";

const ClaimUpload = () => {
  const [claimType, setClaimType] = useState("");
  const [policyNumber, setPolicyNumber] = useState("");
  const [memberName, setMemberName] = useState("");
  const [uploadFile, setUploadFile] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Mock form submission logic (replace with actual API call)
    console.log({
      claimType,
      policyNumber,
      memberName,
      uploadFile: uploadFile ? uploadFile.name : null,
    });

    // Show success message and reset form
    setIsSubmitted(true);
    setClaimType("");
    setPolicyNumber("");
    setMemberName("");
    setUploadFile(null);

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8 tracking-tight">
          Upload Your Claim Documents
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Submit your health insurance claim documents quickly and securely.
        </p>

        {/* Main Content */}
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
          {isSubmitted ? (
            <div className="text-center py-6">
              <h3 className="text-2xl font-semibold text-green-600 mb-4">
                Documents Uploaded Successfully!
              </h3>
              <p className="text-gray-600">
                Our team will review your submission and get back to you soon.
              </p>
            </div>
          ) : (
            <>
              {/* Form */}
              <form onSubmit={handleFormSubmit} className="space-y-6">
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
                    <option value="Medical">Medical</option>
                    <option value="Accident">Accident</option>
                    <option value="Dental">Dental</option>
                    <option value="Vision">Vision</option>
                  </select>
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
                  <label htmlFor="memberName" className="block text-sm font-medium text-gray-700 mb-1">
                    Member Name
                  </label>
                  <input
                    type="text"
                    id="memberName"
                    value={memberName}
                    onChange={(e) => setMemberName(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-300 rounded-lg py-2.5 px-3 text-gray-800 focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-all duration-200"
                    placeholder="Enter full name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="uploadFile" className="block text-sm font-medium text-gray-700 mb-1">
                    Upload Claim Documents
                  </label>
                  <input
                    type="file"
                    id="uploadFile"
                    onChange={(e) => setUploadFile(e.target.files[0])}
                    className="w-full bg-gray-50 border border-gray-300 rounded-lg py-2 px-3 text-gray-800 focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-all duration-200"
                    accept=".pdf,.jpg,.jpeg,.png"
                    required
                  />
                  {uploadFile && (
                    <p className="text-sm text-gray-500 mt-2">
                      Selected file: {uploadFile.name}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300 shadow-md"
                >
                  Submit Claim
                </button>
              </form>

              {/* Additional Information */}
              <div className="mt-8 space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  Important Information
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To ensure a smooth claim process, please upload all relevant documents such as medical reports, bills, and any additional paperwork required for your claim type.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our claim settlement team will review your submission and provide an update within the shortest possible time.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Need help? Contact our 24/7 helpline at{" "}
                  <a href="tel:+1800-123-4567" className="text-blue-600 hover:underline font-medium">
                    1-800-123-4567
                  </a>{" "}
                  for immediate assistance.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ClaimUpload;