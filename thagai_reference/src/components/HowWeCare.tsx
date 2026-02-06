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




      {/* Floating background blurs */}
      <div className="absolute top-20 left-[10%] w-48 h-48 bg-burgundy/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-[12%] w-56 h-56 bg-coral/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gold/3 rounded-full blur-3xl"></div>

      {/* Small floating circles */}
      <div className="absolute top-16 right-[20%] w-3 h-3 bg-burgundy/15 rounded-full animate-float"></div>
      <div className="absolute bottom-24 left-[25%] w-2 h-2 bg-coral/20 rounded-full animate-float-delayed"></div>
      <div className="absolute top-1/3 left-[8%] w-4 h-4 bg-teal/10 rounded-full animate-float"></div>
      <div className="absolute bottom-1/3 right-[15%] w-2 h-2 bg-gold/20 rounded-full animate-float-delayed"></div>

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