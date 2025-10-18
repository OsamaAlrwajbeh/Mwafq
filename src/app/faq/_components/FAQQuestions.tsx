"use client";
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQQuestion() {
  const [openIndex, setOpenIndex] = useState(1);

  const faqs = [
    {
      question: "How often should I visit the dentist ?",
      answer: "It is recommended to visit the dentist at least twice a year for regular check-ups and cleanings. However, your dentist may suggest more frequent visits based on your individual oral health needs."
    },
    {
      question: "Do you offer emergency dental services ?",
      answer: "Yes, we provide prompt care for dental emergencies, including severe toothaches, broken teeth, and dental injuries. Contact us immediately if you need urgent care."
    },
    {
      question: "How can I improve my oral hygiene at home ?",
      answer: "Maintain good oral hygiene by brushing twice daily with fluoride toothpaste, flossing daily, using mouthwash, limiting sugary foods and drinks, and replacing your toothbrush every 3-4 months."
    },
    {
      question: "What insurance plans do you accept ?",
      answer: "We accept most major dental insurance plans. Please contact our office with your insurance information, and we'll verify your coverage and explain your benefits."
    },
    {
      question: "What should I do if I experience dental anxiety ?",
      answer: "We understand dental anxiety is common. We offer various comfort options including sedation dentistry, a calming environment, and compassionate staff. Please discuss your concerns with us so we can make your visit as comfortable as possible."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen container_main">
    
        {/* Header */}
        <div className="mb-12">
          <p className="text-custom-lightBlue text-base mb-4">FAQ</p>
          <h1 className="text-4xl font-bold text-custom-darkBlue">Frequently Asked Questions</h1>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4 cursor-pointer">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 cursor-pointer"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-custom-darkBlue pr-8">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-gray-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 cursor-pointer ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-8 pb-6 pt-2">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

    </div>
  );
}