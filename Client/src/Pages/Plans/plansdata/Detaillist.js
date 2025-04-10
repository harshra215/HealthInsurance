import React from "react";

const Detaillist = () => {
  const highlights = [
    {
      title: "In-Patient Hospitalisation",
      description:
        "Hospitalisation expenses incurred for a period of more than 24 hours on account of illness, injury or accidents are covered.",
    },
    {
      title: "Policy Term",
      description: "This policy can be availed for a term of one, two, or three years.",
    },
    {
      title: "Pre-Medical Examination",
      description:
        "No pre-acceptance medical screening is required to avail this policy. However, pregnant women need to submit their scan reports taken at Caresure Health specified scan centres during the 12th and 20th week of their pregnancy. The incurred costs of such a scan need to be borne by the insured.",
    },
    {
      title: "Individual Entry Age",
      description:
        "Only female individuals aged between 18 and 75 years can avail this policy as Individual Sum Insured.",
    },
    {
      title: "Floater Entry Age",
      description:
        "To avail the Floater Sum Insured there should be at least one female adult in the family aged between 18 and 75 years. This policy covers a maximum of up to three dependent children from 91 days to 25 years. Under this policy, the insured's daughter can continue to be covered max up to 30 years of age, if she is unmarried and/or unemployed.",
    },
    {
      title: "Sum Insured",
      description:
        "The Sum Insured options under this policy are Rs.5,00,000/-, Rs.10,00,000/-, Rs.15,00,000/-, Rs.20,00,000/-, Rs.25,00,000/-, Rs.50,00,000/- and Rs.1,00,00,000/-.",
    },
    {
      title: "Pre-Hospitalisation",
      description:
        "In addition to in-patient hospitalisation, the medical expenses incurred up to 60 days before the date of admission to the hospital are also covered.",
    },
    {
      title: "Post-Hospitalisation",
      description:
        "Post-hospitalisation medical expenses up to 90 days from the date of discharge from the hospital are covered.",
    },
    {
      title: "Room Rent",
      description:
        "Room, boarding and nursing expenses incurred during in-patient hospitalisation are covered up to 1% of the Sum Insured per day for Rs. 5 lakh Sum Insured; any room (except suite or above category) for Rs. 10/15/20/25 lakh Sum Insured options, and any room for Rs. 50/100 lakh Sum Insured options.",
    },
    {
      title: "Road Ambulance",
      description:
        "This policy covers ambulance charges for admission in hospital, for shifting from one hospital to another for better medical treatment and from hospital to residence.",
    },
    {
      title: "Air Ambulance",
      description:
        "Air ambulance expenses are covered up to 10% of the Sum Insured for the entire policy period.",
    },
    {
      title: "Modern Treatment",
      description:
        "Expenses incurred for modern treatments such as Oral Chemotherapy, Intra Vitreal injections, Robotic Surgeries, etc. are covered up to the limits mentioned in the policy clause.",
    },
    {
      title: "AYUSH Treatment",
      description:
        "In patient hospitalisation expenses incurred for the treatment under Ayurveda, Unani, Sidha and Homeopathy systems of medicines in AYUSH hospitals are covered up to the Sum Insured.",
    },
    {
      title: "Day Care Procedures",
      description:
        "Medical treatments and surgical procedures that require less than 24 hours of hospitalisation due to technological advancements are covered.",
    },
    {
      title: "Caresure Mother Cover",
      description:
        "Covers the expenses of a Single Private A/c Room for the stay of the mother in the hospital if the insured person is a child of age less than 12 years, provided the child is treated in ICU and there is an admissible claim for hospitalisation.",
    },
    {
      title: "Shared Accommodation",
      description:
        "Expenses incurred on occupying a shared accommodation by the insured person are covered up to the limits mentioned in the policy clause.",
    },
    {
      title: "Rehabilitation & Pain Management",
      description:
        "Expenses incurred for Rehabilitation and Pain Management are covered up to the specified sub-limit or maximum up to 10% of the Sum Insured whichever is less, per policy year.",
    },
    {
      title: "Organ Donor Expenses",
      description:
        "In-patient hospitalisation expenses incurred for organ transplantation from the Donor to the recipient insured person are payable provided the claim for transplantation is payable. In addition, the expenses incurred by the Donor, (if any) for the complications that necessitate a Redo Surgery / ICU admission will be covered.",
    },
    {
      title: "In Utero Fetal Surgery / Repair",
      description:
        "Expenses incurred for In Utero Fetal surgeries and procedures mentioned in this policy are covered with a waiting period. However, the waiting period will not apply for treatment related to congenital disease/defects for the new born.",
    },
    {
      title: "Voluntary Sterilisation Expenses",
      description:
        "Expenses incurred for Voluntary Sterilisation (Tubectomy / Vasectomy) are covered after a waiting period, provided if the insured person is married and he/she is 22 years and above.",
    },
    {
      title: "Miscarriage due to Accident",
      description:
        "Lump Sum is provided for miscarriage arising due to an accident as per the limits of the policy, subject to a waiting period.",
    },
    {
      title: "Coverage for Non-medical Items",
      description:
        "If there is an admissible claim under the policy, then non-medical items specified in this policy will become payable.",
    },
    {
      title: "Outpatient Consultations",
      description:
        "Expenses incurred on medical consultations as an outpatient are covered up to the limits as mentioned in the policy.",
    },
    {
      title: "Preventive Health Check Up",
      description:
        "Health check-up expenses incurred for the tests mentioned in the policy document are covered for every policy year up to the specified limits.",
    },
    {
      title: "Automatic Restoration of Sum Insured",
      description:
        "On partial or full utilisation of the Sum Insured during the policy period, 100% of the Sum Insured will be restored once in the same policy year that can be utilised for all claims and subsequent hospitalisation.",
    },
    {
      title: "Cumulative Bonus",
      description:
        "Cumulative bonus is provided at 20% of the Sum Insured for each claim-free year subject to a maximum of 100% of the Sum Insured.",
    },
    {
      title: "Caresure Wellness Program",
      description:
        "Wellness program designed to motivate and encourage the healthy lifestyle of the insured person through various wellness activities. In addition, the earned wellness bonus points can be utilised for availing renewal discounts.",
    },
    {
      title: "Long-Term Discount",
      description:
        "Avail 10% discount on 2nd year premium and 11.25% on 2nd and 3rd year premium.",
    },
    {
      title: "Instalment Options",
      description:
        "The policy premium can be paid on a quarterly or half-yearly basis. It can also be paid on an annual, biennial (once in 2 years) and triennial (once in 3 years) basis.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h3 className="text-blue-600 font-semibold text-lg uppercase tracking-wide">Detailed List</h3>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Understand What's Included
          </h1>
        </div>

        {/* Highlights Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2 inline-block">
            Important Highlights
          </h2>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              aria-label={item.title}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Detaillist;