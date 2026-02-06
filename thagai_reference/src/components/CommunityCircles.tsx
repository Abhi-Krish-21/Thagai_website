import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function CommunityCircles() {
  return (
    <section id="community" className="pt-4 pb-24 bg-gradient-to-b from-cream via-white to-cream-dark overflow-hidden relative">


      {/* Floating background elements */}
      <div className="absolute top-20 right-[12%] w-52 h-52 bg-burgundy/4 rounded-full blur-3xl"></div>
      <div className="absolute bottom-32 left-[8%] w-48 h-48 bg-coral/4 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-64 h-64 bg-teal/3 rounded-full blur-3xl"></div>

      {/* Small floating dots */}
      <div className="absolute top-32 left-[18%] w-3 h-3 bg-burgundy/15 rounded-full animate-float"></div>
      <div className="absolute top-1/3 right-[15%] w-2 h-2 bg-coral/20 rounded-full animate-float-delayed"></div>
      <div className="absolute bottom-40 right-[25%] w-2 h-2 bg-teal/15 rounded-full animate-float"></div>
      <div className="absolute bottom-20 left-[30%] w-3 h-3 bg-gold/15 rounded-full animate-float-delayed"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-10">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brown mb-4">
            Join the Thagai{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-burgundy to-coral">
              Community
            </span>
          </h2>
          <p className="text-lg text-brown/70 max-w-2xl mx-auto">
            Two circles. One mission — better elder care and connection.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Senior Circle */}
          <motion.div
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
              delay: 0.1
            }}
            className="bg-cream p-8 rounded-3xl border border-brown/5">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-brown mb-4">
              Make friends, stay active, get help
            </h3>
            <p className="text-brown/70 leading-relaxed mb-8">
              The thagai seniors circle is where you share stories, make new
              friends, and enjoy moments that matter — temple visits, laughter over
              tea, and days you'll look forward to.
            </p>
            <a
              href="https://chat.whatsapp.com/IXewRCAKB0C6oHfTfgO3PI?mode=ems_copy_t"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-burgundy text-white px-6 py-3 rounded-full font-bold hover:bg-burgundy-dark transition-colors">
              Join the senior circle
              <ArrowRight size={20} />
            </a>
          </motion.div>

          {/* Care Circle */}
          <motion.div
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
              delay: 0.2
            }}
            className="bg-cream p-8 rounded-3xl border border-brown/5">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-brown mb-4">
              Care for your parents, even from miles away
            </h3>
            <p className="text-brown/70 leading-relaxed mb-8">
              The Thagai care circle is where families stay connected. Updates,
              stories, and a trusted space that lets you know your parents are
              engaged, happy, and cared for.
            </p>
            <a
              href="https://chat.whatsapp.com/IkGSloi6Xnq9zFcYJPPllb?mode=ems_copy_t"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-burgundy text-white px-6 py-3 rounded-full font-bold hover:bg-burgundy-dark transition-colors">
              Join the care circle
              <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>);
}
