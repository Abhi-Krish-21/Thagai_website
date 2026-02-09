
import { motion } from 'framer-motion';
import { PhoneCall, ClipboardList, Home, HeartHandshake, ArrowRight, CheckCircle2, Clock, MapPin, Sparkles } from 'lucide-react';

const steps = [
  {
    icon: PhoneCall,
    title: 'Give Us a Call',
    description: 'Elder care made simple. Call or fill the form—any service, anytime.',
    color: 'bg-burgundy',
    textColor: 'text-burgundy',
    badge: 'Step 1',
    delay: 0.1,
    offset: 0 // Y-axis offset for wave effect
  },
  {
    icon: ClipboardList,
    title: 'Personalized Plan',
    description: 'We understand your needs and craft a custom care plan—putting the right help in the right place.',
    color: 'bg-teal',
    textColor: 'text-teal',
    badge: 'Step 2',
    delay: 0.3,
    offset: 40
  },
  {
    icon: Home,
    title: 'Service at Your Doorstep',
    description: 'Sit back and relax while our trusted providers deliver care right to your home.',
    color: 'bg-coral',
    textColor: 'text-coral',
    badge: 'Step 3',
    delay: 0.5,
    offset: 0
  },
  {
    icon: HeartHandshake,
    title: "We're Always Here",
    description: "Loved it? Need it again? Just reach out—we're here whenever you need us.",
    color: 'bg-gold',
    textColor: 'text-gold',
    badge: 'Step 4',
    delay: 0.7,
    offset: 40
  }
];

export function HowWeCare() {
  return (
    <section className="py-20 bg-cream relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-burgundy/5 rounded-full blur-[100px] -translate-x-1/2"></div>
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-teal/5 rounded-full blur-[100px] translate-x-1/2"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-gold/5 rounded-full blur-[80px] rotate-12"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-burgundy font-bold tracking-widest uppercase text-xs mb-4 block">How It Works</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brown mb-6 relative inline-block">
              Care Made Simple
              <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-gold to-transparent rounded-full opacity-60"></span>
            </h2>
            <p className="text-lg text-brown/70 max-w-2xl mx-auto leading-relaxed">
              We believe care should be easy and accessible. Here's how we make it happen.
            </p>
          </motion.div>
        </div>

        {/* Desktop Connected Path (SVG Wave) */}
        <div className="hidden lg:block absolute top-[280px] left-0 right-0 h-40 pointer-events-none z-0">
          <svg className="w-full h-full" preserveAspectRatio="none">
            <path
              d="M 100 20 C 400 20, 400 100, 700 100 S 1000 20, 1300 20"
              fill="none"
              stroke="rgba(71, 41, 76, 0.1)"
              strokeWidth="3"
              vectorEffect="non-scaling-stroke"
              strokeDasharray="10 10"
            />
            {/* Animated Path Overlay */}
            <motion.path
              d="M 100 20 C 400 20, 400 100, 700 100 S 1000 20, 1300 20"
              fill="none"
              stroke="rgba(212, 168, 83, 0.4)"
              strokeWidth="3"
              vectorEffect="non-scaling-stroke"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative pb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: step.delay,
                type: 'spring',
                stiffness: 100
              }}
              className={`relative group ${index % 2 !== 0 ? 'lg:mt-10' : ''}`} // Stagger effect
            >
              {/* Card Container */}
              <div className="bg-white/60 backdrop-blur-xl rounded-[2.2rem] p-6 h-full border border-white/60 shadow-sm hover:shadow-2xl hover:bg-white transition-all duration-500 flex flex-col items-center text-center relative overflow-hidden group-hover:-translate-y-2">

                {/* Decoration Blob */}
                <div className={`absolute -top-10 -right-10 w-28 h-28 ${step.color} opacity-10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700`}></div>

                {/* Step Badge */}
                <div className="absolute top-5 right-5">
                  <span className="bg-white/80 backdrop-blur-sm px-2.5 py-1 rounded-full text-[0.7rem] font-bold text-brown/60 border border-brown/5 shadow-sm">
                    {step.badge}
                  </span>
                </div>

                {/* Icon Circle */}
                <div className="relative mb-6 mt-1">
                  <div className="absolute inset-0 bg-white rounded-full shadow-lg scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className={`w-16 h-16 bg-white rounded-2xl flex items-center justify-center ${step.textColor} shadow-lg shadow-brown/5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-white/50 relative z-10`}>
                    <step.icon size={30} strokeWidth={1.5} />

                    {/* Floating mini-icons based on step */}
                    {index === 0 && <div className="absolute -right-3 -top-3 bg-green-500 text-white p-1.5 rounded-full text-xs shadow-md animate-bounce"><Clock size={10} /></div>}
                    {index === 1 && <div className="absolute -left-3 -bottom-3 bg-blue-500 text-white p-1.5 rounded-full text-xs shadow-md"><CheckCircle2 size={10} /></div>}
                    {index === 2 && <div className="absolute -right-3 -bottom-3 bg-red-500 text-white p-1.5 rounded-full text-xs shadow-md"><MapPin size={10} /></div>}
                    {index === 3 && <div className="absolute -left-3 -top-3 bg-yellow-500 text-white p-1.5 rounded-full text-xs shadow-md animate-pulse"><Sparkles size={10} /></div>}

                  </div>
                </div>

                <h3 className="font-serif text-lg md:text-xl font-bold text-brown mb-3 group-hover:text-burgundy transition-colors">
                  {step.title}
                </h3>

                <p className="text-sm text-brown/70 leading-relaxed mb-5">
                  {step.description}
                </p>


              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-burgundy text-white px-8 py-3.5 rounded-full font-bold text-base shadow-xl shadow-burgundy/20 hover:bg-burgundy-light hover:shadow-2xl hover:shadow-burgundy/30 transition-all duration-300 flex items-center gap-2 mx-auto"
          >
            Start Your Journey
            <ArrowRight size={18} />
          </motion.button>
          <p className="mt-4 text-brown/50 text-base">Takes less than a minute to get started</p>
        </div>
      </div>
    </section>
  );
}