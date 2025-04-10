import React, { useState } from "react";

const ClaimProcess = () => {
  const [openAccordion, setOpenAccordion] = useState("");

  const toggleAccordion = (accordionId) => {
    setOpenAccordion((prevAccordion) =>
      prevAccordion === accordionId ? "" : accordionId
    );
  };

  const isAccordionOpen = (accordionId) => openAccordion === accordionId;

  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8 tracking-tight">
          Your Health Insurance Claim Process
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          At Caresurance, we make claiming your insurance simple and stress-free. Follow these steps or explore our FAQs for more details.
        </p>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Claim Process Steps */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6">
              Key Steps in the Claim Process
            </h3>
            <ol className="space-y-6 text-gray-600">
              {[
                {
                  title: "Notify Us",
                  desc: "Inform us promptly about hospitalization or treatment via our 24/7 helpline.",
                },
                {
                  title: "Complete Claim Form",
                  desc: "Fill out the claim form accurately, available on our website or at any branch.",
                },
                {
                  title: "Submit Documents",
                  desc: "Attach all required documents, signed and stamped by your doctor.",
                },
                {
                  title: "Claim Evaluation",
                  desc: "Our team reviews your claim based on policy terms and conditions.",
                },
                {
                  title: "Claim Settlement",
                  desc: "Cashless claims are settled with the hospital; reimbursements are paid post-verification.",
                },
                {
                  title: "Track Your Claim",
                  desc: "Monitor your claim status via our Customer Portal or helpline.",
                },
              ].map((step, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                    {index + 1}
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-900">{step.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Additional Features */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6">
              Why Choose Caresurance?
            </h3>
            <ul className="space-y-4 text-gray-600">
              {[
                "Cashless treatment at over 14,000 network hospitals.",
                "Access policy details and claims via our Customer Portal.",
                "24/7 helpline support for emergencies and queries.",
                "Fast and efficient claim settlements.",
                "Expert claim team for accurate processing.",
                "Multiple submission options: portal, app, branch, or mail.",
              ].map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-gray-600 leading-relaxed">
              We’re here to support you every step of the way. Contact our helpline at{" "}
              <a href="tel:+1800-123-4567" className="text-blue-600 hover:underline font-medium">
                1-800-123-4567
              </a>{" "}
              for assistance.
            </p>
          </div>
        </div>

        {/* FAQs */}
        <div className="mt-12 bg-white p-6 md:p-8 rounded-xl shadow-lg">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6 text-center">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            {[
              {
                question: "What does Health Insurance cover?",
                answer:
                  "It covers medical costs from illness, disease, or accidents, including hospitalization, medications, surgeries, and specialist fees.",
              },
              {
                question: "When can I claim Health Insurance?",
                answer:
                  "Claims can typically be made after 30 days from policy start, except for accidents (immediate coverage) or pre-existing conditions with waiting periods.",
              },
              {
                question: "How do I claim the Health Insurance amount?",
                answer:
                  "Choose between cashless claims at network hospitals or reimbursement claims for non-network treatments.",
              },
              {
                question: "Is there a time limit to claim Health Insurance?",
                answer:
                  "For emergencies, notify within 24 hours of hospitalization and file within 15 days post-discharge. For planned treatments, inform 2-4 days prior.",
              },
            ].map((faq, index) => (
              <div key={index}>
                <button
                  type="button"
                  className={`flex items-center justify-between w-full p-4 font-semibold text-left text-gray-800 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors duration-200 ${
                    isAccordionOpen(`faq-${index}`) ? "bg-blue-50" : ""
                  }`}
                  onClick={() => toggleAccordion(`faq-${index}`)}
                  aria-expanded={isAccordionOpen(`faq-${index}`)}
                  aria-controls={`faq-${index}`}
                >
                  <span className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                      />
                    </svg>
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                      isAccordionOpen(`faq-${index}`) ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  id={`faq-${index}`}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isAccordionOpen(`faq-${index}`) ? "max-h-40" : "max-h-0"
                  }`}
                >
                  <div className="p-4 bg-blue-50 text-gray-700">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClaimProcess;