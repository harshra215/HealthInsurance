import React, { useEffect, useState } from "react";

const Form = () => {
  const [policyNumber, setPolicyNumber] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false); // Added for success feedback

  const images = [
    "https://img.freepik.com/free-photo/front-view-beautiful-blonde-woman_23-2148471029.jpg?w=360",
    "https://img.freepik.com/free-photo/family-home_23-2148166876.jpg?w=360",
    "https://img.freepik.com/free-photo/portrait-doctor_144627-39386.jpg?size=626&ext=jpg",
    "https://img.freepik.com/free-photo/portrait-doctor_144627-39379.jpg?size=626&ext=jpg",
    "https://img.freepik.com/free-vector/health-insurance-template-vector-poster_53876-111250.jpg?w=360",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Increased to 4s for better viewing

    return () => clearInterval(interval);
  }, [images.length]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formData: ", [policyNumber, selectedDate, mobileNumber]);
    setFormSubmitted(true);
    setPolicyNumber("");
    setSelectedDate("");
    setMobileNumber("");
    setTimeout(() => setFormSubmitted(false), 3000); // Reset success message after 3s
  };

  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="w-full max-w-5xl flex flex-col lg:flex-row bg-white rounded-xl shadow-xl overflow-hidden">
            {/* Image Slideshow */}
            <div className="lg:w-5/12 w-full h-64 lg:h-auto relative hidden lg:block">
              {images.map((image, index) => (
                <img
                  key={index}
                  className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${
                    index === currentImageIndex ? "opacity-100" : "opacity-0"
                  }`}
                  alt={`Health insurance slideshow image ${index + 1}`}
                  src={image}
                  loading="lazy" // Added for performance
                />
              ))}
              <div className="absolute bottom-4 left-4 bg-blue-600/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                Health & Wellness
              </div>
            </div>

            {/* Form Section */}
            <div className="lg:w-7/12 w-full p-6 md:p-8 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6 tracking-tight">
                Renew Your Health Insurance
              </h3>
              {formSubmitted ? (
                <div className="text-center py-6">
                  <p className="text-lg text-green-600 font-medium">Submission Successful!</p>
                  <p className="text-sm text-gray-500 mt-2">We’ll process your renewal shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="policyNumber"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Policy Number
                    </label>
                    <input
                      id="policyNumber"
                      type="text"
                      placeholder="e.g., P/000000/00/0000/000000"
                      value={policyNumber}
                      onChange={(e) => setPolicyNumber(e.target.value)}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-all duration-200"
                      required
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Format: P/000000/00/0000/000000 or 112202000000
                    </p>
                  </div>
                  <div>
                    <label
                      htmlFor="dob"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Date of Birth
                    </label>
                    <input
                      id="dob"
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-all duration-200"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="mobileNumber"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Mobile Number
                    </label>
                    <input
                      id="mobileNumber"
                      type="tel"
                      placeholder="Enter your mobile number"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-all duration-200"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300 shadow-md"
                  >
                    Renew Now
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;