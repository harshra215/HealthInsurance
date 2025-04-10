import React, { useState } from "react";

const GeneralTerms = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleSection = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const terms = [
    {
      title: "Waiting Period",
      content: (
        <ul className="list-disc pl-6 text-gray-600">
          <li>For Pre-Existing Diseases - 12 months</li>
          <li>For Specific Diseases/Procedures - 24 months</li>
          <li>Initial Waiting Period - 30 days (Except for Accidents)</li>
        </ul>
      ),
    },
    {
      title: "Dedicated Senior Citizens Claims & Grievances",
      content: (
        <div className="space-y-3 text-gray-600">
          <p>
            Policyholders who have complaints against insurers are required to first approach the Complaints/Grievance Redressal Cell of the insurer by visiting{" "}
            <a
              href="https://www.Caresurehealth.in/grievance-redressal"
              className="text-blue-600 hover:text-blue-800 underline transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.Caresurehealth.in/grievance-redressal
            </a>.
          </p>
          <p>
            Email:{" "}
            <a href="mailto:gro@Caresurehealth.in" className="text-blue-600 hover:text-blue-800 underline transition-colors">
              gro@Caresurehealth.in
            </a>{" "}
            or{" "}
            <a href="mailto:grievances@Caresurehealth.in" className="text-blue-600 hover:text-blue-800 underline transition-colors">
              grievances@Caresurehealth.in
            </a>
          </p>
          <p>
            If they do not receive a response from the insurer within a reasonable period or are dissatisfied with the response of the company, contact the Integrated Grievance Management System (IGMS) - IRDAI Portal at{" "}
            <a
              href="https://igms.irda.gov.in"
              className="text-blue-600 hover:text-blue-800 underline transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://igms.irda.gov.in
            </a>{" "}
            for registering the complaints. Email to{" "}
            <a href="mailto:complaints@irdai.gov.in" className="text-blue-600 hover:text-blue-800 underline transition-colors">
              complaints@irdai.gov.in
            </a>.
          </p>
          <p>You can also call Toll Free No. <span className="font-medium">155255</span> or <span className="font-medium">1800 4254 732</span>.</p>
        </div>
      ),
    },
    {
      title: "Pre-Acceptance Medical Screening",
      content: (
        <div className="space-y-3 text-gray-600">
          <p>
            There is no pre-acceptance medical screening. However, if the following medical records of the person proposed for insurance are submitted, a discount of 10% is allowed.
          </p>
          <ul className="list-disc pl-6">
            <li>Stress Thallium Report</li>
            <li>BP Report</li>
            <li>Sugar (blood & urine) (Fasting / Postprandial)</li>
            <li>Blood urea & creatinine</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Free Look Period",
      content: (
        <div className="space-y-3 text-gray-600">
          <p>
            At the time of inception of the policy, the Insured will be allowed a period of 15 days from the date of receipt of the policy to review the terms and conditions of the policy and to return the policy if not acceptable. In such a case, the premium refund shall be as follows:
          </p>
          <ul className="list-disc pl-6">
            <li>If the Insured has not made any claim during the free look period, the Insured shall be entitled to –</li>
            <li>a refund of the premium paid less any expenses incurred by the Insurer on medical examination of the insured persons and the stamp duty charges, or</li>
            <li>where the risk has already commenced and the option of return of the policy is exercised by the policyholder, a deduction towards the proportionate risk premium for the period on cover, or</li>
            <li>where only a part of the insurance coverage has commenced, such proportionate premium commensurate with the insurance coverage during such period.</li>
          </ul>
          <p>Free look period shall not be applicable at the time of renewal.</p>
        </div>
      ),
    },
  ];

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b-2 border-blue-500 pb-2">
          General Terms
        </h2>

        {/* Accordion Style Sections */}
        <div className="space-y-4">
          {terms.map((term, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() => toggleSection(index)}
                className="w-full text-left p-5 flex justify-between items-center bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-300"
                aria-expanded={expanded === index}
                aria-controls={`term-${index}`}
              >
                <h3 className="text-lg font-semibold text-gray-800">{term.title}</h3>
                <span className="text-gray-500">
                  {expanded === index ? "−" : "+"}
                </span>
              </button>
              {expanded === index && (
                <div
                  id={`term-${index}`}
                  className="p-5 bg-white text-sm leading-relaxed animate-fade-in"
                >
                  {term.content}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="mt-8 text-sm text-gray-500 italic">
          Note: Renewal premium, terms, and conditions are subject to change with prior approval from IRDAI.
        </p>
      </div>
    </section>
  );
};

export default GeneralTerms;