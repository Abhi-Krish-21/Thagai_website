import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function CommunityCircles() {
  return (
    <section id="community" className="py-24 bg-cream-accent overflow-hidden relative">
      {/* Top Curved Arch Transition (from Cream) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-10">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[50px] md:h-[80px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="fill-cream"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="fill-cream"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-cream"
          ></path>
        </svg>
      </div>


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
            className="bg-burgundy/[0.02] hover:bg-burgundy p-6 rounded-[2.5rem] border-2 border-burgundy/15 hover:border-cream/20 shadow-sm hover:shadow-2xl hover:shadow-burgundy/10 transition-all duration-300 group relative overflow-hidden cursor-default">
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
            className="bg-burgundy/[0.02] hover:bg-burgundy p-6 rounded-[2.5rem] border-2 border-burgundy/15 hover:border-cream/20 shadow-sm hover:shadow-2xl hover:shadow-burgundy/10 transition-all duration-300 group relative overflow-hidden cursor-default">
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
