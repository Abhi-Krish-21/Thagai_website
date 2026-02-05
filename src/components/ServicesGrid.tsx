import React from 'react';
import { motion } from 'framer-motion';
import {
  Heart,
  Home,
  Car,
  Brain,
  Stethoscope,
  Coffee,
  ArrowRight } from
'lucide-react';
const services = [
{
  icon: Heart,
  title: 'Personal Care',
  description:
  'Dignified assistance with daily routines, hygiene, and dressing.',
  color: 'bg-burgundy/5 text-burgundy',
  image:
  'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=400&auto=format&fit=crop'
},
{
  icon: Coffee,
  title: 'Companionship',
  description:
  'Meaningful conversations, shared hobbies, and genuine friendship.',
  color: 'bg-teal/5 text-teal',
  image:
  'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=400&auto=format&fit=crop'
},
{
  icon: Stethoscope,
  title: 'Medical Support',
  description: 'Professional medication management and health monitoring.',
  color: 'bg-coral/5 text-coral',
  image:
  'https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=400&auto=format&fit=crop'
},
{
  icon: Home,
  title: 'Home Help',
  description: 'Light housekeeping, meal preparation, and organization.',
  color: 'bg-gold/5 text-gold',
  image:
  'https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=400&auto=format&fit=crop'
},
{
  icon: Brain,
  title: 'Memory Care',
  description:
  'Specialized support for those living with Alzheimer’s and dementia.',
  color: 'bg-burgundy/5 text-burgundy',
  image:
  'https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?q=80&w=400&auto=format&fit=crop'
},
{
  icon: Car,
  title: 'Transportation',
  description:
  'Safe accompaniment to appointments, social events, and errands.',
  color: 'bg-teal/5 text-teal',
  image:
  'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=400&auto=format&fit=crop'
}];

export function ServicesGrid() {
  return (
    <section id="services" className="py-24 bg-cream relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(#47294C 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-coral font-bold tracking-wider uppercase text-sm mb-2 block">
              Our Expertise
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brown">
              Holistic Care Services
            </h2>
            <p className="text-lg text-brown/70 mt-4">
              Comprehensive support for every aspect of your loved one's
              well-being, from physical health to emotional joy.
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 font-medium text-burgundy hover:text-burgundy-light transition-colors group">
            View all services{' '}
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform" />

          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) =>
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
            className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-brown/5 flex flex-col h-full">

              <div className="relative h-48 overflow-hidden">
                <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                <div
                className={`absolute bottom-4 left-4 w-12 h-12 rounded-xl flex items-center justify-center bg-white shadow-lg ${service.color.replace('bg-', 'text-')}`}>

                  <service.icon size={24} strokeWidth={2} />
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <h3 className="font-serif text-2xl font-bold text-brown mb-3 group-hover:text-burgundy transition-colors">
                  {service.title}
                </h3>
                <p className="text-brown/70 leading-relaxed mb-6 flex-1">
                  {service.description}
                </p>
                <div className="flex items-center text-sm font-bold text-brown/40 group-hover:text-burgundy transition-colors uppercase tracking-wide">
                  Learn More
                </div>
              </div>
            </motion.div>
          )}
        </div>

        <div className="mt-12 text-center md:hidden">
          <button className="inline-flex items-center gap-2 font-medium text-burgundy hover:text-burgundy-light transition-colors">
            View all services <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>);

}