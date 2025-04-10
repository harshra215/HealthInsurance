import React, { useState } from "react";

const Accordion = () => {
  const [openAccordion, setOpenAccordion] = useState("");

  const toggleAccordion = (accordionId) => {
    setOpenAccordion((prevAccordion) =>
      prevAccordion === accordionId ? "" : accordionId
    );
  };

  const isAccordionOpen = (accordionId) => openAccordion === accordionId;

  const faqs = [
    {
      id: "accordion-open-body-1",
      question: "What does Health Insurance cover?",
      answer:
        "Medical costs incurred as a result of disease/illness/accident are covered by Health Insurance. These medical costs include the cost of hospitalisation, pre and post-hospitalisation, medications, implants, specialist fees and the cost of surgery, etc.",
    },
    {
      id: "accordion-open-body-2",
      question: "When can we claim Health Insurance?",
      answer:
        "In general, you can claim Health Insurance after a period of 30 days from the commencement of the health policy except for the claims that have waiting periods. However, in case of an accident, this initial waiting period is not applicable, and the cover is immediately provided if it is not for a pre-existing condition.",
    },
    {
      id: "accordion-open-body-3",
      question: "How do I claim the Health Insurance amount?",
      answer:
        "You can make your Health Insurance claim in one of two ways: Cashless or Reimbursement Claims. However, the processes for these two kinds of Health Insurance claims vary.",
    },
    {
      id: "accordion-open-body-4",
      question: "Is there a time limit to claim Health Insurance?",
      answer:
        "If a policyholder receives an emergency treatment in a network hospital, the insurance company will directly settle the bill to the network hospital. You can claim reimbursement from your insurer if you are getting treated in a non-network hospitals. For reimbursement of claims, the intimation should be given within 24 hours of hospitalisation (in case of emergency hospitalisation). Claim must be filed within 15 days from the date of Discharge from the Hospital. In case of planned hospitalisation, you must notify your insurer at least 2 to 4 days before the scheduled hospitalisation.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
          Frequently Asked Questions
        </h1>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button
                type="button"
                className={`w-full p-5 flex justify-between items-center text-left font-semibold text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors duration-200 ${
                  isAccordionOpen(faq.id) ? "bg-gray-100" : ""
                }`}
                onClick={() => toggleAccordion(faq.id)}
                aria-expanded={isAccordionOpen(faq.id)}
                aria-controls={faq.id}
              >
                <span className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-3 text-blue-500"
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
                  {faq.question}
                </span>
                <svg
                  className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${
                    isAccordionOpen(faq.id) ? "rotate-180" : ""
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
                id={faq.id}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isAccordionOpen(faq.id) ? "max-h-[500px]" : "max-h-0"
                }`}
                aria-labelledby={`accordion-heading-${faq.id}`}
              >
                <div className="p-5 bg-white text-gray-600 text-sm md:text-base leading-relaxed">
                  {faq.answer}
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