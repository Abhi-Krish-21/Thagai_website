import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ShieldCheck, HandHeart, Armchair, UsersRound, Sparkles } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Safe & Secure',
    description: 'A protected space where your loved ones feel secure every day.'
  },
  {
    icon: HandHeart,
    title: 'Filled with Love',
    description: 'Compassionate care that feels like family, because that\'s what we are.'
  },
  {
    icon: Armchair,
    title: 'Home-like Comfort',
    description: 'Familiar warmth and comfort that makes every moment feel like home.'
  },
  {
    icon: UsersRound,
    title: 'Connected Community',
    description: 'A vibrant circle of friends, activities, and meaningful connections.'
  }
];

/* const promises = [
  'Daily wellness check-ins',
  'Personalized care routines',
  'Regular family updates',
  'Emergency response ready',
  'Engaging social activities',
  'Nutritious meal planning'
]; */

export function CareEnvironment() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  // Subtle parallax transforms
  const y1 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const y3 = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 8]);

  // Additional transforms for more floating elements
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -12]);
  const rotate3 = useTransform(scrollYProgress, [0, 1], [0, 15]);

  return (
    <section
      ref={containerRef}
      className="relative pt-24 pb-0 overflow-hidden bg-cream"
    >
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Soft floating shapes with parallax */}
        <motion.div
          style={{ y: y1 }}
          className="absolute top-20 left-[10%] w-72 h-72 rounded-full bg-burgundy/5 blur-3xl"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute top-40 right-[15%] w-96 h-96 rounded-full bg-burgundy/3 blur-3xl"
        />
        <motion.div
          style={{ y: y3 }}
          className="absolute bottom-20 left-[30%] w-80 h-80 rounded-full bg-coral/5 blur-3xl"
        />
        <motion.div
          style={{ y: y1 }}
          className="absolute top-1/2 right-[5%] w-64 h-64 rounded-full bg-teal/3 blur-3xl"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-1/3 left-[5%] w-48 h-48 rounded-full bg-gold/3 blur-3xl"
        />

        {/* Decorative rotating circles */}
        <motion.div
          style={{ rotate }}
          className="absolute top-10 right-10 w-40 h-40 border border-burgundy/10 rounded-full"
        />
        <motion.div
          style={{ rotate: rotate2 }}
          className="absolute bottom-20 left-10 w-32 h-32 border border-burgundy/10 rounded-full"
        />
        <motion.div
          style={{ rotate: rotate3 }}
          className="absolute top-1/3 left-[5%] w-24 h-24 border border-coral/8 rounded-full"
        />
        <motion.div
          style={{ rotate: rotate2 }}
          className="absolute bottom-1/4 right-[8%] w-20 h-20 border border-teal/8 rounded-full"
        />

        {/* Small floating dots */}
        <div className="absolute top-32 right-[25%] w-3 h-3 bg-burgundy/15 rounded-full animate-float"></div>
        <div className="absolute top-1/2 left-[12%] w-2 h-2 bg-coral/20 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-40 right-[18%] w-4 h-4 bg-teal/10 rounded-full animate-float"></div>
        <div className="absolute bottom-1/3 left-[22%] w-2 h-2 bg-gold/15 rounded-full animate-float-delayed"></div>
        <div className="absolute top-20 left-[40%] w-3 h-3 bg-burgundy/10 rounded-full animate-float"></div>
        <div className="absolute top-2/3 right-[35%] w-2 h-2 bg-coral/15 rounded-full animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Upper Section - Main Message */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-burgundy/10 text-burgundy text-xs font-medium tracking-wider uppercase mb-6"
          >
            <Sparkles size={14} className="text-coral" />
            Creating a Caring Environment
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl font-bold text-brown mb-6 leading-tight"
          >
            A Safe Haven Where{' '}
            <span className="text-burgundy italic">Love & Care</span>{' '}
            Flourish
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base text-brown/70 max-w-2xl mx-auto leading-relaxed"
          >
            We don't just provide care — we create an environment where your elders
            feel cherished, connected, and truly at home.
            <span className="text-burgundy font-medium"> You can rest easy knowing they're in loving hands.</span>
          </motion.p>
        </div>

        {/* Middle Section - Feature Cards with Scroll Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {features.map((feature, index) => {
            // Assign colors based on index for variety
            const colors = [
              { bg: 'bg-teal/10', text: 'text-teal', border: 'hover:border-teal/30', hoverBg: 'group-hover:bg-teal' },
              { bg: 'bg-burgundy/10', text: 'text-burgundy', border: 'hover:border-burgundy/30', hoverBg: 'group-hover:bg-burgundy' },
              { bg: 'bg-coral/10', text: 'text-coral', border: 'hover:border-coral/30', hoverBg: 'group-hover:bg-coral' },
              { bg: 'bg-gold/10', text: 'text-gold', border: 'hover:border-gold/30', hoverBg: 'group-hover:bg-gold' }
            ];
            const color = colors[index % colors.length];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 100
                }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="group h-full"
              >
                <div className={`relative bg-white rounded-[2rem] p-6 h-full border border-white/50 shadow-sm hover:shadow-2xl ${color.border} transition-all duration-500 overflow-hidden`}>

                  {/* Decorative Background Blob */}
                  <div className={`absolute -top-10 -right-10 w-24 h-24 ${color.bg.replace('/10', '/5')} rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700`}></div>

                  <div className={`relative w-14 h-14 rounded-2xl ${color.bg} flex items-center justify-center ${color.text} mb-5 ${color.hoverBg} group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-md group-hover:rotate-6`}>
                    <feature.icon size={28} strokeWidth={1.5} />
                  </div>

                  <h3 className="font-serif text-lg font-bold text-brown mb-2 group-hover:text-burgundy transition-colors relative z-10">
                    {feature.title}
                  </h3>

                  <p className="text-brown/70 leading-relaxed text-xs relative z-10">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Lower Section - Promise & Assurance
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: 'spring' }}
              className="relative"
            >
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white"
                >
                  <img
                    src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=600&auto=format&fit=crop"
                    alt="Caring environment for elders"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-burgundy/40 via-transparent to-transparent" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-lg z-20 max-w-[200px] border border-brown/5"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-burgundy/10 flex items-center justify-center">
                      <Heart className="w-5 h-5 text-burgundy" fill="currentColor" />
                    </div>
                    <span className="font-bold text-brown text-lg">100%</span>
                  </div>
                  <p className="text-sm text-brown/60">
                    Families trust us with their loved ones
                  </p>
                </motion.div>

                <div className="absolute top-6 -left-6 w-full h-full bg-burgundy/10 rounded-[2.5rem] -z-10" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: 'spring' }}
              className="space-y-8"
            >
              <div>
                <h3 className="font-serif text-3xl md:text-4xl font-bold text-brown mb-4">
                  Your Parents Are in{' '}
                  <span className="text-burgundy">Safe Hands</span>
                </h3>
                <p className="text-lg text-brown/70 leading-relaxed">
                  We understand the worry that comes with being away from your parents.
                  That's why we've built more than just a service — we've created a
                  <span className="text-burgundy font-medium"> nurturing ecosystem </span>
                  where every elder is treated with the respect, love, and attention they deserve.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {promises.map((promise, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index, duration: 0.4 }}
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-6 h-6 rounded-full bg-burgundy flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Check size={14} className="text-white" strokeWidth={3} />
                    </div>
                    <span className="text-brown/80 font-medium">{promise}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="pt-4"
              >
                <p className="text-brown/50 text-sm mb-4 italic">
                  "Because every parent deserves to feel loved, even when you're miles away."
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 bg-burgundy text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-burgundy-dark hover:shadow-lg transition-all duration-300 group"
                >
                  <span>Give Your Parents the Care They Deserve</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    →
                  </motion.span>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
