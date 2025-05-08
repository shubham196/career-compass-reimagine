
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "What is Career Compass?",
    answer: "Career Compass is a comprehensive career counseling platform designed to help students make informed decisions about their education and career paths. We offer tools like rank predictors, college predictors, aptitude tests, and personalized counseling sessions."
  },
  {
    id: 2,
    question: "How accurate are your predictors?",
    answer: "Our prediction tools are built on extensive historical data and sophisticated algorithms with over 95% accuracy. We continuously update our models with the latest admission trends and cutoffs from previous years to provide the most accurate predictions possible."
  },
  {
    id: 3,
    question: "What age groups do you cater to?",
    answer: "We primarily cater to students from 8th to 12th grade and those preparing for undergraduate admissions. Our services are designed to help students at different stages of their academic journey, from early career exploration to specific college admissions guidance."
  },
  {
    id: 4,
    question: "How can I book a counseling session?",
    answer: "You can book a counseling session by clicking on the 'Book a Session' button on our website. You'll be able to choose from available time slots and select the type of counseling you need. Our team will reach out to confirm your appointment."
  },
  {
    id: 5,
    question: "Are your assessments scientifically validated?",
    answer: "Yes, all our assessments, including aptitude tests and IQ tests, are developed by educational psychologists and career experts. They are scientifically validated and regularly reviewed to ensure their relevance and accuracy in the current educational landscape."
  }
];

const FaqSection = () => {
  const [openId, setOpenId] = useState<number | null>(null);
  
  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Find answers to common questions about our services
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div 
                key={faq.id}
                className={`bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-200 ${
                  openId === faq.id ? 'ring-2 ring-purple-200' : ''
                }`}
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => toggleFaq(faq.id)}
                >
                  <span className={`font-medium text-lg ${openId === faq.id ? 'text-purple-700' : 'text-gray-900'}`}>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 transition-transform ${
                      openId === faq.id ? 'transform rotate-180 text-purple-600' : ''
                    }`}
                  />
                </button>
                {openId === faq.id && (
                  <div className="px-6 pb-6">
                    <div className="h-px w-full bg-gray-100 mb-4"></div>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-gray-600 mb-4">
              Still have questions? We're here to help!
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center text-purple-600 font-medium hover:text-purple-800"
            >
              Contact Our Support Team
              <svg width="16" height="16" className="ml-1" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.33334 8H12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.66667 4L12.6667 8L8.66667 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
