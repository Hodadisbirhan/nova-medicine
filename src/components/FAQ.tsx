import { useState } from 'react';

const faqs = [
  {
    question: "How can I book an appointment?",
    answer: "You can book an appointment through our website by clicking the 'Book Appointment' button, calling our reception, or using our WhatsApp service. We'll confirm your appointment within 24 hours."
  },
  {
    question: "What insurance providers do you work with?",
    answer: "We work with major local and international insurance providers. Please contact our insurance department for a detailed list and verification of your coverage."
  },
  {
    question: "How can I access my medical records?",
    answer: "You can access your medical records through our secure patient portal. Simply log in with your credentials, or contact our support team for assistance."
  },
  {
    question: "What is your cancellation policy?",
    answer: "We request 24 hours notice for appointment cancellations. Late cancellations or no-shows may incur a fee. Please contact us as soon as possible if you need to reschedule."
  },
  {
    question: "Do you offer telemedicine consultations?",
    answer: "Yes, we offer telemedicine consultations for eligible cases. You can book a virtual appointment through our website or by calling our reception."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-secondary-light max-w-2xl mx-auto">
            Find answers to common questions about our services and procedures.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium text-secondary">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-primary transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
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
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'py-4' : 'max-h-0'
                }`}
              >
                <p className="text-secondary-light">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-secondary-light mb-4">
            Still have questions? Contact us directly
          </p>
          <a href="#contact" className="btn-primary inline-block">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
