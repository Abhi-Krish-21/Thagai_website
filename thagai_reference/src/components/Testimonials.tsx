import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
const testimonials = [
{
  quote:
  'The warmth and genuine care the team showed my father was beyond anything we expected. He felt truly loved.',
  author: 'Sarah Jenkins',
  relation: 'Daughter',
  image:
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop',
  color: 'bg-burgundy'
},
{
  quote:
  "Finding Thagai was a blessing. The caregivers aren't just staff; they've become part of our extended family.",
  author: 'Michael Chen',
  relation: 'Son',
  image:
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop',
  color: 'bg-teal'
},
{
  quote:
  "I was worried about losing my independence, but they help me do the things I love safely. I'm happier than I've been in years.",
  author: 'Eleanor Rigby',
  relation: 'Client',
  image:
  'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=200&auto=format&fit=crop',
  color: 'bg-coral'
}];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-cream-dark via-cream to-cream-dark relative overflow-hidden">
      {/* Top gradient transition */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-cream-dark to-transparent pointer-events-none z-10"></div>

      {/* Bottom gradient transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream-dark to-transparent pointer-events-none z-10"></div>

      {/* Floating background elements */}
      <div className="absolute top-24 left-[10%] w-56 h-56 bg-burgundy/4 rounded-full blur-3xl"></div>
      <div className="absolute bottom-24 right-[12%] w-48 h-48 bg-teal/4 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-[8%] w-40 h-40 bg-coral/3 rounded-full blur-3xl"></div>

      {/* Small floating dots */}
      <div className="absolute top-16 right-[25%] w-3 h-3 bg-burgundy/15 rounded-full animate-float"></div>
      <div className="absolute bottom-32 left-[20%] w-2 h-2 bg-teal/20 rounded-full animate-float-delayed"></div>
      <div className="absolute top-1/3 left-[5%] w-2 h-2 bg-coral/15 rounded-full animate-float"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brown mb-4">
            Stories of Connection
          </h2>
          <p className="text-lg text-brown/70 max-w-2xl mx-auto">
            Hear from the families who have welcomed us into their lives and
            homes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) =>
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
            className="bg-white p-8 rounded-[2rem] shadow-sm relative group hover:shadow-xl transition-all duration-300 border border-brown/5">

              <div
              className={`absolute -top-6 left-8 w-12 h-12 rounded-full ${item.color} flex items-center justify-center text-white shadow-lg`}>

                <Quote size={20} fill="currentColor" />
              </div>

              <div className="pt-6 mb-8">
                <p className="font-serif italic text-lg text-brown/80 leading-relaxed">
                  "{item.quote}"
                </p>
              </div>

              <div className="flex items-center gap-4 border-t border-brown/5 pt-6">
                <div className="relative">
                  <img
                  src={item.image}
                  alt={item.author}
                  className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md" />

                  <div
                  className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white ${item.color}`}>
                </div>
                </div>
                <div>
                  <div className="font-bold text-brown text-lg">
                    {item.author}
                  </div>
                  <div className="text-sm text-brown/50 font-medium uppercase tracking-wide">
                    {item.relation}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}