import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function CommunityCircles() {
  return (
    <section id="community" className="py-16 md:py-24 bg-cream overflow-hidden relative">


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
          <span className="text-gold font-bold tracking-wider uppercase text-xs mb-2 block">
            Our Community
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-brown mb-4">
            Join the Thagai{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-burgundy to-coral">
              Community
            </span>
          </h2>
          <p className="text-base text-brown/70 max-w-2xl mx-auto mt-2">
            Two circles. One mission — better elder care and connection.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
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
              delay: 0.1,
              type: 'spring',
              stiffness: 300,
              damping: 20
            }}
            whileHover={{ y: -12 }}
            className="bg-burgundy/[0.02] hover:bg-burgundy p-6 rounded-[2rem] md:rounded-[2.5rem] border-2 border-burgundy/15 hover:border-cream/20 shadow-sm hover:shadow-2xl hover:shadow-burgundy/10 transition-all duration-300 group relative overflow-hidden cursor-default">
            <div className="absolute top-0 right-0 w-32 h-32 bg-burgundy/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-cream/10 transition-colors duration-500"></div>
            <h3 className="font-serif text-xl md:text-2xl font-bold text-brown group-hover:text-cream mb-3 transition-colors duration-300">
              Make friends, stay active, get help
            </h3>
            <p className="text-base text-brown/70 group-hover:text-cream/90 leading-relaxed mb-5 transition-colors duration-300">
              The thagai seniors circle is where you share stories, make new
              friends, and enjoy moments that matter — temple visits, laughter over
              tea, and days you'll look forward to.
            </p>
            <a
              href="https://chat.whatsapp.com/IXewRCAKB0C6oHfTfgO3PI?mode=ems_copy_t"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-fit mx-auto items-center gap-2 bg-burgundy text-cream group-hover:bg-cream group-hover:text-burgundy px-5 py-2.5 rounded-full font-bold hover:bg-burgundy-dark group-hover:hover:bg-white transition-colors text-sm">
              Join the senior circle
              <ArrowRight size={18} />
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
              delay: 0.2,
              type: 'spring',
              stiffness: 300,
              damping: 20
            }}
            whileHover={{ y: -12 }}
            className="bg-burgundy/[0.02] hover:bg-burgundy p-6 rounded-[2rem] md:rounded-[2.5rem] border-2 border-burgundy/15 hover:border-cream/20 shadow-sm hover:shadow-2xl hover:shadow-burgundy/10 transition-all duration-300 group relative overflow-hidden cursor-default">
            <div className="absolute top-0 right-0 w-32 h-32 bg-burgundy/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-cream/10 transition-colors duration-500"></div>
            <h3 className="font-serif text-xl md:text-2xl font-bold text-brown group-hover:text-cream mb-3 transition-colors duration-300">
              Care for your parents, even from miles away
            </h3>
            <p className="text-base text-brown/70 group-hover:text-cream/90 leading-relaxed mb-5 transition-colors duration-300">
              The Thagai care circle is where families stay connected. Updates,
              stories, and a trusted space that lets you know your parents are
              engaged, happy, and cared for.
            </p>
            <a
              href="https://chat.whatsapp.com/IkGSloi6Xnq9zFcYJPPllb?mode=ems_copy_t"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-fit mx-auto items-center gap-2 bg-burgundy text-cream group-hover:bg-cream group-hover:text-burgundy px-5 py-2.5 rounded-full font-bold hover:bg-burgundy-dark group-hover:hover:bg-white transition-colors text-sm">
              Join the care circle
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>);
}
