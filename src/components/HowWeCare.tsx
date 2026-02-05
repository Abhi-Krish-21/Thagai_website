import React from 'react';
import { motion } from 'framer-motion';
const steps = [
{
  number: '01',
  title: 'Meet & Understand',
  description:
  'We start with a warm, in-home visit to get to know your loved one’s personality, needs, and preferences.'
},
{
  number: '02',
  title: 'Personalized Plan',
  description:
  'We craft a unique care plan that addresses medical needs while prioritizing joy and independence.'
},
{
  number: '03',
  title: 'Perfect Match',
  description:
  'We carefully select a caregiver whose skills and personality create a natural, friendly bond.'
},
{
  number: '04',
  title: 'Ongoing Support',
  description:
  'Care needs change. We stay involved, adjusting the plan and ensuring consistent quality over time.'
}];

export function HowWeCare() {
  return (
    <section className="py-24 bg-cream-dark relative overflow-hidden">
      {/* Top gradient transition from previous section */}
      <div className="absolute top-0 left-0 right-0 h-36 bg-gradient-to-b from-cream/70 via-cream/30 to-transparent pointer-events-none"></div>

      {/* Bottom gradient transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-cream-dark/70 via-cream-dark/30 to-transparent pointer-events-none"></div>

      {/* Decorative background line */}
      <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-terracotta/20 -translate-y-1/2 z-0"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brown mb-4">
            Our Journey Together
          </h2>
          <p className="text-lg text-brown/70 max-w-2xl mx-auto">
            We believe care is a partnership. Here is how we welcome you into
            our family.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: index * 0.2
            }}
            className="relative bg-cream p-8 rounded-3xl shadow-sm border border-brown/5 text-center group hover:shadow-md transition-shadow">

              <div className="w-16 h-16 mx-auto bg-terracotta text-white rounded-full flex items-center justify-center text-xl font-bold font-serif mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10">
                {step.number}
              </div>
              <h3 className="font-serif text-xl font-bold text-brown mb-3">
                {step.title}
              </h3>
              <p className="text-brown/70 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}