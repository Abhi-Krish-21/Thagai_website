import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

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
    <motion.div
      initial={false}
      animate={{
        backgroundColor: isOpen ? '#ffffff' : 'rgba(255, 255, 255, 0.6)',
        borderColor: isOpen ? 'rgba(71, 41, 76, 0.2)' : 'rgba(71, 41, 76, 0.05)',
        scale: isOpen ? 1.02 : 1
      }}
      className="rounded-2xl border transition-all duration-300 overflow-hidden mb-4"
    >
      <button
        onClick={onClick}
        className="w-full px-5 py-4 flex items-center justify-between text-left group"
      >
        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-burgundy text-white shadow-md' : 'bg-burgundy/5 text-burgundy'
            }`}>
            <HelpCircle size={18} strokeWidth={2.5} />
          </div>
          <span className={`font-serif text-base font-bold transition-colors duration-300 ${isOpen ? 'text-burgundy' : 'text-brown group-hover:text-burgundy'
            }`}>
            {question}
          </span>
        </div>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-burgundy/10 text-burgundy rotate-180' : 'text-brown/40'
          }`}>
          <ChevronDown size={18} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-5 pb-5 pt-0 pl-[3.25rem]">
              <p className="text-sm text-brown/80 leading-relaxed font-sans">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div >
  );
}

export function FAQsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="pt-12 pb-24 bg-cream-accent relative overflow-hidden" id="faqs">
      {/* Rich Background Gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-burgundy/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[150px] pointer-events-none"></div>

      {/* Top Wave Transition (from Cream) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-10">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[50px] md:h-[80px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-cream"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">

          {/* Left Column Content */}
          <div className="lg:col-span-5 space-y-6 pt-1.5">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-brown mb-4 leading-tight">
                Answers to your <br /> <span className="text-burgundy italic">Questions</span>
              </h2>
              <p className="text-base text-brown/70 leading-relaxed max-w-md">
                We know navigating care options can be overwhelming. Here are clear answers to the most common questions families ask us.
              </p>
            </div>

            {/* Image Card - Adjusted height to align with FAQ end */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white transition-all duration-500 hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop"
                alt="Friendly support"
                className="w-full h-[310px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col justify-end p-8">
                <div className="text-white font-serif text-2xl mb-1">"We are here to help."</div>
                <div className="text-white/80 text-sm font-medium uppercase tracking-wider">Thagai Care Team</div>
              </div>
            </div>
          </div>

          {/* Right FAQ List */}
          <div className="lg:col-span-7">
            <div className="space-y-2">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <FAQItem
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openIndex === index}
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  />
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
