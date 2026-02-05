import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
const activities = [
{
  name: 'Garden Club',
  image:
  'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=500&auto=format&fit=crop',
  color: 'bg-teal',
  rotate: '-rotate-2'
},
{
  name: 'Art & Crafts',
  image:
  'https://images.unsplash.com/photo-1459749411177-0473ef4884f3?q=80&w=500&auto=format&fit=crop',
  color: 'bg-coral',
  rotate: 'rotate-3'
},
{
  name: 'Music Therapy',
  image:
  'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=500&auto=format&fit=crop',
  color: 'bg-burgundy',
  rotate: '-rotate-1'
},
{
  name: 'Book Circle',
  image:
  'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=500&auto=format&fit=crop',
  color: 'bg-gold',
  rotate: 'rotate-2'
}];

export function CommunityCircles() {
  return (
    <section id="community" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brown">
              Community & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-burgundy to-coral">
                Connection
              </span>
            </h2>
            <p className="text-lg text-brown/70 leading-relaxed">
              Loneliness is the enemy of health. We cultivate a vibrant
              community where seniors can pursue passions, make new friends, and
              feel a true sense of belonging.
            </p>

            <div className="bg-cream p-8 rounded-3xl border border-brown/5">
              <h4 className="font-serif text-xl font-bold text-brown mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-burgundy"></span>
                Weekly Gatherings
              </h4>
              <ul className="grid grid-cols-2 gap-y-4 gap-x-8">
                {[
                'Morning Yoga',
                'Watercolor Painting',
                'Storytelling Hour',
                'Local Outings',
                'Choir Practice',
                'Tech Assistance'].
                map((item, i) =>
                <li
                  key={i}
                  className="flex items-center gap-3 text-brown/80 font-medium">

                    <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                    {item}
                  </li>
                )}
              </ul>
            </div>

            <button className="flex items-center gap-2 text-burgundy font-bold hover:gap-4 transition-all">
              View Activity Calendar <ArrowRight size={20} />
            </button>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="grid grid-cols-2 gap-6">
              {activities.map((activity, index) =>
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  scale: 0.8
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  delay: index * 0.1
                }}
                className={`relative aspect-square rounded-[2rem] overflow-hidden shadow-lg group ${activity.rotate} ${index % 2 === 1 ? 'mt-12' : ''}`}>

                  <img
                  src={activity.image}
                  alt={activity.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />

                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                  <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <span className="text-white font-serif font-bold text-xl block">
                      {activity.name}
                    </span>
                    <div
                    className={`h-1 w-12 ${activity.color} mt-2 rounded-full`}>
                  </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-2 border-dashed border-brown/10 rounded-full -z-10 animate-spin-slow"></div>
          </div>
        </div>
      </div>
    </section>);

}