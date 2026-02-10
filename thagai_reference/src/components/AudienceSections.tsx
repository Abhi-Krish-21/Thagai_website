import { useState } from 'react';
import { Check, Heart, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

export function AudienceSections() {
  const [activeSection, setActiveSection] = useState<'seniors' | 'families' | null>(null);

  return (
    <section id="families" className="relative min-h-screen flex items-center py-24 overflow-hidden bg-cream">


      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-burgundy font-bold tracking-widest uppercase text-sm mb-3 block"
          >
            Who We Serve
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight"
          >
            <span className="text-brown">Care That</span> <span className="text-coral">Connects</span>
            <br />
            <span className="text-teal">Generations</span>
          </motion.h2>
        </div>

        <div className="relative mt-8">
          <div className="grid md:grid-cols-3 gap-8 items-center">

            {/* Seniors Card (Left) */}
            <div
              className={`relative group cursor-pointer transition-all duration-700 ${activeSection === 'seniors' ? 'z-30 scale-105' : 'z-10 scale-100'}`}
              onMouseEnter={() => setActiveSection('seniors')}
              onMouseLeave={() => setActiveSection(null)}
            >
              <div className="relative h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-brown/5">
                <img
                  src="/assets/images/for_seniors.png"
                  alt="Senior independence"
                  className="w-full h-full object-cover object-right transition-transform duration-700 group-hover:scale-110"
                />

                {/* Color Shade Layer */}
                <div className="absolute inset-0 bg-teal/20 mix-blend-multiply pointer-events-none"></div>

                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-teal-dark via-teal-dark/40 to-transparent transition-opacity duration-500 ${activeSection === 'seniors' ? 'opacity-95' : 'opacity-80'}`}></div>

                {/* Top Label */}
                <div className="absolute top-8 left-8 z-20">
                  <span className="inline-flex items-center gap-2 bg-white text-teal-dark px-5 py-2.5 rounded-full text-xs font-bold tracking-wide uppercase shadow-xl">
                    <Sun size={15} className="text-teal" /> FOR SENIORS
                  </span>
                </div>

                <div className="absolute inset-0 p-8 flex flex-col justify-end">

                  <h2 className="text-3xl font-serif font-bold text-white mb-4">
                    Your <span className="text-teal-300">Independence</span>,
                    <br />Our Priority
                  </h2>

                  <motion.div
                    className="space-y-3 mb-6"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: activeSection === 'seniors' ? 1 : 0.8,
                      height: 'auto',
                      y: activeSection === 'seniors' ? 0 : 10
                    }}
                  >
                    {['Daily routine support', 'Social connection', 'Transportation help', 'Dignified care'].map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-coral" />
                        <span className="text-white/90 text-sm font-medium">{item}</span>
                      </div>
                    ))}
                  </motion.div>


                </div>
              </div>
            </div>

            {/* Middle Overlapping Card */}
            <div className="relative z-20 my-8 md:my-0">
              <div className="bg-white rounded-[2.5rem] shadow-2xl p-8 lg:p-12 text-center transform md:scale-105 border border-brown/5 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-gold via-burgundy to-teal opacity-60"></div>

                {/* Decorative background circle */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-burgundy/5 rounded-full blur-2xl"></div>

                <div className="w-20 h-20 bg-burgundy rounded-2xl rotate-3 mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform duration-500">
                  <Heart className="w-10 h-10 text-white fill-current" />
                </div>

                <h3 className="text-2xl font-serif font-bold text-brown mb-4">
                  One Family,
                  <br />Complete Care
                </h3>
                <p className="text-brown/70 leading-relaxed mb-8 text-sm lg:text-base">
                  Whether support for independence or peace of mind for family, we bridge the gap with comprehensive care.
                </p>

                <div className="flex items-center justify-center space-x-6 pt-6 border-t border-brown/10">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-coral">24/7</div>
                    <div className="text-xs font-bold uppercase tracking-wider text-brown/50">Support</div>
                  </div>
                  <div className="w-px h-12 bg-brown/10"></div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-teal">100%</div>
                    <div className="text-xs font-bold uppercase tracking-wider text-brown/50">Trusted</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Families Card (Right) */}
            <div
              className={`relative group cursor-pointer transition-all duration-700 ${activeSection === 'families' ? 'z-30 scale-105' : 'z-10 scale-100'}`}
              onMouseEnter={() => setActiveSection('families')}
              onMouseLeave={() => setActiveSection(null)}
            >
              <div className="relative h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-brown/5">
                <img
                  src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=800&auto=format&fit=crop"
                  alt="Family peace of mind"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Color Shade Layer */}
                <div className="absolute inset-0 bg-coral/10 mix-blend-soft-light pointer-events-none"></div>

                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-coral via-coral/40 to-transparent transition-opacity duration-500 ${activeSection === 'families' ? 'opacity-95' : 'opacity-80'}`}></div>

                {/* Top Label */}
                <div className="absolute top-8 right-8 z-20">
                  <span className="inline-flex items-center gap-2 bg-white text-coral-dark px-5 py-2.5 rounded-full text-xs font-bold tracking-wide uppercase shadow-xl">
                    <Heart size={15} className="text-coral" /> FOR FAMILIES
                  </span>
                </div>

                <div className="absolute inset-0 p-8 flex flex-col justify-end">

                  <h2 className="text-3xl font-serif font-bold text-white mb-4">
                    Complete <span className="text-coral font-extrabold">Peace</span>
                    <br />of Mind
                  </h2>

                  <motion.div
                    className="space-y-3 mb-6"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: activeSection === 'families' ? 1 : 0.8,
                      height: 'auto',
                      y: activeSection === 'families' ? 0 : 10
                    }}
                  >
                    {['Real-time updates', 'Consistent caregivers', '24/7 support', 'Family trusted'].map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-coral" />
                        <span className="text-white/90 text-sm font-medium">{item}</span>
                      </div>
                    ))}
                  </motion.div>


                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}