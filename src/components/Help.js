import React, { useState } from "react";

const faqs = [
  {
    question: "What is SilverSpoons and how does it work?",
    answer:
      "SilverSpoons is a food delivery platform that connects users with nearby restaurants. You can browse menus, place orders, and track delivery directly from our website or app.",
  },
  {
    question: "How can I cancel or modify my order?",
    answer:
      "You can cancel or modify your order within 2 minutes of placing it. After that, cancellations depend on restaurant confirmation. Go to 'My Orders' to manage them.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept all major debit/credit cards, UPI, wallets, and cash on delivery (COD) at selected locations.",
  },
  {
    question: "Is there a delivery charge?",
    answer:
      "Delivery charges vary based on distance, location, and restaurant. Final delivery charges will be shown at checkout.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "Use the 'Support' button in the app or website to chat with a support executive, or email us at support@silverspoons.com.",
  },
];

const Help = () => {
  const [openIndexes, setOpenIndexes] = useState([0]); // default: first is open

  const toggleAccordion = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 mt-12">
      <h1 className="text-3xl font-bold mb-6 text-center">Help</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full text-left px-4 py-3 flex justify-between items-center"
            >
              <span className="font-medium text-lg">{faq.question}</span>
              <span className="text-xl">
                {openIndexes.includes(index) ? "−" : "+"}
              </span>
            </button>
            {openIndexes.includes(index) && (
              <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Help;