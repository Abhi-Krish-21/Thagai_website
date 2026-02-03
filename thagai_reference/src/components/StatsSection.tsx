import React from 'react';
import { motion } from 'framer-motion';
const stats = [
{
  label: 'Families Served',
  value: '1,500+',
  color: 'text-burgundy'
},
{
  label: 'Years Experience',
  value: '15+',
  color: 'text-teal'
},
{
  label: 'Specialized Services',
  value: '60+',
  color: 'text-coral'
},
{
  label: 'Happy Moments',
  value: '100k+',
  color: 'text-gold'
}];

export function StatsSection() {
  return (
    <section className="py-16 bg-white relative z-20 -mt-8 mx-4 md:mx-8 lg:mx-16 rounded-[3rem] shadow-xl border border-brown/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-brown/10">
          {stats.map((stat, index) =>
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
              delay: index * 0.1
            }}
            className="text-center px-4 py-4">

              <div
              className={`text-4xl md:text-5xl font-bold font-serif mb-2 ${stat.color}`}>

                {stat.value}
              </div>
              <div className="text-brown/60 font-medium uppercase tracking-wider text-sm">
                {stat.label}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}