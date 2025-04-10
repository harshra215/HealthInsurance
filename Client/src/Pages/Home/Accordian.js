import React, { useState } from "react";

const Accordion = () => {
  const [openAccordion, setOpenAccordion] = useState("");

  const toggleAccordion = (accordionId) => {
    setOpenAccordion((prevAccordion) =>
      prevAccordion === accordionId ? "" : accordionId
    );
  };

  const isAccordionOpen = (accordionId) => {
    return openAccordion === accordionId;
  };

  return (
    <section className="bg-gradient-to-br from-white to-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6">
        {/* Header */}
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center animate-fade-in">
          Frequently Asked Questions
        </h1>

        {/* Accordion Items */}
        <div className="space-y-4">
          {[
            {
              id: "accordion-open-body-1",
              question: "What does Health Insurance cover?",
              answer:
                "Medical costs incurred as a result of disease, illness, or accident are covered by Health Insurance. These include hospitalisation costs, pre- and post-hospitalisation expenses, medications, implants, specialist fees, surgery costs, and more.",
            },
            {
              id: "accordion-open-body-2",
              question: "When can we claim Health Insurance?",
              answer:
                "Generally, you can claim Health Insurance after 30 days from the policy start date, except for claims with waiting periods. In case of an accident, coverage is immediate unless it involves a pre-existing condition.",
            },
            {
              id: "accordion-open-body-3",
              question: "How do I claim the Health Insurance amount?",
              answer:
                "You can claim Health Insurance via two methods: Cashless or Reimbursement Claims. The process differs for each, with cashless claims settled directly with network hospitals and reimbursement claims requiring submission of expenses.",
            },
            {
              id: "accordion-open-body-4",
              question: "Is there a time limit to claim Health Insurance?",
              answer:
                "For emergency treatment in network hospitals, the insurer settles the bill directly. For non-network hospitals, notify within 24 hours of emergency hospitalisation and file the claim within 15 days of discharge. For planned hospitalisation, inform your insurer 2-4 days prior.",
            },
          ].map((item, index) => (
            <div
              key={item.id}
              className="border border-gray-200 rounded-lg overflow-hidden transform transition-all duration-300 hover:shadow-md"
            >
              <button
                type="button"
                className={`w-full p-4 flex items-center justify-between text-left font-semibold text-gray-800 bg-white hover:bg-gray-50 focus:outline-none transition-colors duration-200 ${
                  isAccordionOpen(item.id) ? "bg-gray-50" : ""
                }`}
                onClick={() => toggleAccordion(item.id)}
                aria-expanded={isAccordionOpen(item.id)}
                aria-controls={item.id}
              >
                <span className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-3 text-indigo-500 transform transition-transform duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {item.question}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${
                    isAccordionOpen(item.id) ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                id={item.id}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isAccordionOpen(item.id) ? "max-h-96" : "max-h-0"
                }`}
                aria-labelledby={`accordion-open-heading-${index}`}
              >
                <div className="p-4 bg-gradient-to-r from-gray-50 to-white text-gray-600">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accordion;