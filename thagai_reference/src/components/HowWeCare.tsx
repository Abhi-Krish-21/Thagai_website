import { motion } from 'framer-motion';
import { PhoneCall, ClipboardList, Home, HeartHandshake } from 'lucide-react';

const steps = [
  {
    icon: PhoneCall,
    title: 'Give Us a Call',
    description:
      'Elder care made simple. Call or fill the form—any service, anytime.'
  },
  {
    icon: ClipboardList,
    title: 'Personalized Plan',
    description:
      'We understand your needs and craft a custom care plan—putting the right help in the right place.'
  },
  {
    icon: Home,
    title: 'Service at Your Doorstep',
    description:
      'Sit back and relax while our trusted providers deliver care right to your home.'
  },
  {
    icon: HeartHandshake,
    title: 'We\'re Always Here',
    description:
      'Loved it? Need it again? Just reach out—we\'re here whenever you need us.'
  }];

export function HowWeCare() {
  return (
    <section className="py-12 bg-cream relative overflow-hidden">




      {/* Rich Background Gradients */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-burgundy/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-teal/5 rounded-full blur-[100px] translate-y-1/3 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-[15%] opacity-20 animate-float pointer-events-none">
        <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-burgundy">
          <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="absolute bottom-24 left-[15%] opacity-15 animate-float-delayed pointer-events-none">
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-teal">
          <circle cx="12" cy="12" r="10" strokeWidth="0.5" />
        </svg>
      </div>
      <div className="absolute top-1/3 left-[5%] w-3 h-3 bg-burgundy/10 rounded-full animate-float pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-[10%] w-2 h-2 bg-gold/20 rounded-full animate-float-delayed pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-10">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brown mb-4">
            Care Made Simple
          </h2>
          <p className="text-lg text-brown/70 max-w-2xl mx-auto">
            We believe care should be easy and accessible. Here's how we make it happen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) =>
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: 'spring',
                stiffness: 100
              }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <div className="bg-cream rounded-3xl p-8 h-full border border-brown/5 shadow-sm hover:shadow-lg hover:border-burgundy/20 transition-all duration-300 text-center">
                <div className="w-16 h-16 mx-auto bg-burgundy/10 text-burgundy rounded-full flex items-center justify-center mb-6 group-hover:bg-burgundy group-hover:text-white transition-all duration-300 relative z-10">
                  <step.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl font-bold text-brown mb-3 group-hover:text-burgundy transition-colors">
                  {step.title}
                </h3>
                <p className="text-brown/60 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}