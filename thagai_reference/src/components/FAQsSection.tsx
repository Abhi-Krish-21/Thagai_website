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
    <section className="py-24 bg-gradient-to-b from-cream-dark via-cream to-cream relative overflow-hidden">
      {/* Top gradient transition */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-cream-dark to-transparent pointer-events-none z-10"></div>

      {/* Floating background elements */}
      <div className="absolute top-20 right-[10%] w-48 h-48 bg-burgundy/4 rounded-full blur-3xl"></div>
      <div className="absolute bottom-32 left-[8%] w-56 h-56 bg-coral/3 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-[5%] w-40 h-40 bg-teal/3 rounded-full blur-3xl"></div>

      {/* Small floating dots */}
      <div className="absolute top-32 left-[15%] w-2 h-2 bg-burgundy/15 rounded-full animate-float"></div>
      <div className="absolute bottom-40 right-[20%] w-3 h-3 bg-coral/15 rounded-full animate-float-delayed"></div>
      <div className="absolute top-1/3 right-[8%] w-2 h-2 bg-teal/15 rounded-full animate-float"></div>

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
