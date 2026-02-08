import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What services does Thagai offer?',
    answer:
      'Thagai provides a wide range of services to make life easier, including healthcare support, transportation, nutritious meal delivery, daily assistance, emergency help, and more—all in one place.'
  },
  {
    question: "Who can use Thagai's services?",
    answer:
      'Our services are designed for anyone in need of reliable care and support, whether it\'s seniors, individuals recovering from illness, or families looking for assistance in managing daily needs.'
  },
  {
    question: 'Can I customize a care package based on my needs?',
    answer:
      'Yes! We offer flexible service options so you can choose and combine services based on your specific needs, ensuring personalized and affordable care.'
  },
  {
    question: 'How do I request a service?',
    answer:
      'Requesting a service is simple! Just fill out our Request a Callback form, call our team, or book through our platform, and we\'ll connect you with the right service provider.'
  },
  {
    question: 'How do you select and verify caregivers/service providers?',
    answer:
      'We carefully screen and verify all service providers through background checks, experience assessments, and customer feedback to ensure safe, high-quality care.'
  },
  {
    question: 'How can I contact Thagai for assistance?',
    answer:
      'You can reach us anytime through our website or call us at +91 80726 50628. Our team is always ready to help you find the right care solutions!'
  }
];

function FAQItem({ question, answer, isOpen, onClick }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-brown/10 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="font-serif text-lg font-bold text-brown group-hover:text-burgundy transition-colors pr-4">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown size={24} className="text-burgundy" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-brown/70 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-8 bg-cream relative overflow-hidden">
      {/* Rich Background Gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-burgundy/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[150px] pointer-events-none"></div>

      {/* Decorative Elements */}
      <div className="absolute top-24 left-[10%] opacity-20 animate-float pointer-events-none">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-burgundy">
          <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="absolute bottom-32 right-[10%] opacity-20 animate-float-delayed pointer-events-none">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-coral">
          <circle cx="12" cy="12" r="10" strokeWidth="0.5" />
          <path d="M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10 10 10 0 0 1-10-10 10 10 0 0 1 10-10z" strokeWidth="0.5" strokeDasharray="4 4" />
        </svg>
      </div>
      <div className="absolute top-1/3 right-[5%] w-3 h-3 bg-teal/20 rounded-full animate-float pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-[5%] w-4 h-4 bg-burgundy/15 rounded-full animate-float-delayed pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brown mb-4">
            FAQs
          </h2>
          <p className="text-lg text-brown/70 max-w-2xl mx-auto">
            Thagai gives the care you need to live the life you love
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-brown/5">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
