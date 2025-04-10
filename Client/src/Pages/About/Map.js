import React, { useState } from "react";

const Map = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/mjvqykov", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormSubmitted(true);
        setFormData({ name: "", email: "", message: "" }); // Reset form after submission
      }
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <section className="text-gray-700 body-font relative bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      <div className="container px-5 py-16 md:py-24 mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Map Section */}
        <div className="lg:w-2/3 md:w-3/4 w-full h-[400px] md:h-[500px] bg-gray-200 rounded-xl shadow-lg overflow-hidden relative transform hover:shadow-xl transition-shadow duration-300">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            frameBorder={0}
            title="Caresurance Office Location"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59070.20388728314!2d70.6916195486328!3d22.282241800000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cbbfcdeb3e33%3A0x11a782bf6775a71d!2sAtmiya%20University!5e0!3m2!1sen!2sin!4v1691511140502!5m2!1sen!2sin"
            style={{ filter: "grayscale(0.8) contrast(1.1) opacity(0.9)" }}
            loading="lazy" // Added for performance
          />
          <div className="absolute bottom-4 left-4 bg-white/90 p-3 rounded-lg shadow-md">
            <p className="text-sm font-medium text-gray-800">Our Location</p>
            <p className="text-xs text-gray-600">Atmiya University, Rajkot, India</p>
          </div>
        </div>

        {/* Form Section */}
        <div className="lg:w-1/3 md:w-1/2 w-full bg-white p-6 md:p-8 rounded-xl shadow-lg flex flex-col">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 tracking-tight">
            We’d Love Your Feedback
          </h2>
          {formSubmitted ? (
            <div className="text-center py-6">
              <p className="text-lg text-green-600 font-medium">Thanks for your feedback!</p>
              <p className="text-sm text-gray-500 mt-2">We’ll get back to you soon.</p>
            </div>
          ) : (
            <>
              <p className="text-base md:text-lg leading-relaxed text-gray-600 mb-6">
                Share your thoughts with us—we’re here to help!
              </p>
              <form onSubmit={submitForm} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gray-50 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base text-gray-800 py-2 px-4 transition-all duration-200 ease-in-out"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-50 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base text-gray-800 py-2 px-4 transition-all duration-200 ease-in-out"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-gray-50 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base text-gray-800 py-2 px-4 resize-none transition-all duration-200 ease-in-out"
                    placeholder="Your Feedback"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300 shadow-md"
                >
                  Send Feedback
                </button>
              </form>
              <p className="text-xs text-gray-500 mt-4 text-center">
                Your input helps us improve our services.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Map;