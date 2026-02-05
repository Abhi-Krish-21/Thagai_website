import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Heart, Home, Users, Sparkles, Check } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Safe & Secure',
    description: 'A protected space where your loved ones feel secure every day.'
  },
  {
    icon: Heart,
    title: 'Filled with Love',
    description: 'Compassionate care that feels like family, because that\'s what we are.'
  },
  {
    icon: Home,
    title: 'Home-like Comfort',
    description: 'Familiar warmth and comfort that makes every moment feel like home.'
  },
  {
    icon: Users,
    title: 'Connected Community',
    description: 'A vibrant circle of friends, activities, and meaningful connections.'
  }
];

const promises = [
  'Daily wellness check-ins',
  'Personalized care routines',
  'Regular family updates',
  'Emergency response ready',
  'Engaging social activities',
  'Nutritious meal planning'
];

export function CareEnvironment() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  // Parallax transforms
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const y3 = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);

  return (
    <section
      ref={containerRef}
      className="relative py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #47294C 0%, #351e38 50%, #2D8B8B 100%)'
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs */}
        <motion.div
          style={{ y: y1 }}
          className="absolute top-20 left-[10%] w-64 h-64 rounded-full bg-coral/20 blur-3xl"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute top-40 right-[15%] w-96 h-96 rounded-full bg-teal/20 blur-3xl"
        />
        <motion.div
          style={{ y: y3 }}
          className="absolute bottom-20 left-[30%] w-80 h-80 rounded-full bg-gold/20 blur-3xl"
        />

        {/* Decorative patterns */}
        <motion.div
          style={{ rotate }}
          className="absolute top-10 right-10 w-40 h-40 border border-white/10 rounded-full"
        />
        <motion.div
          style={{ rotate: useTransform(scrollYProgress, [0, 1], [0, -15]) }}
          className="absolute bottom-20 left-10 w-32 h-32 border border-white/10 rounded-full"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Upper Section - Main Message */}
        <motion.div
          style={{ scale, opacity }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm text-cream/90 text-sm font-medium tracking-wider uppercase mb-6"
          >
            <Sparkles size={16} className="text-gold" />
            Creating a Caring Environment
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
          >
            A Safe Haven Where<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral via-gold to-teal">
              Love & Care
            </span>{' '}
            Flourish
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-cream/80 max-w-3xl mx-auto leading-relaxed"
          >
            We don't just provide care — we create an environment where your elders
            feel cherished, connected, and truly at home.
            <span className="text-coral font-medium"> You can rest easy knowing they're in loving hands.</span>
          </motion.p>
        </motion.div>

        {/* Middle Section - Feature Cards with Scroll Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                type: 'spring',
                stiffness: 100
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-3xl blur-xl group-hover:from-coral/30 group-hover:to-teal/20 transition-all duration-500" />
              <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 h-full hover:border-coral/40 transition-all duration-500">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-coral to-gold flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <feature.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-3 group-hover:text-coral transition-colors">
                  {feature.title}
                </h3>
                <p className="text-cream/70 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lower Section - Promise & Assurance */}
        <div className="relative">
          <motion.div
            style={{ y: y2 }}
            className="absolute -top-10 -right-10 w-60 h-60 rounded-full bg-coral/10 blur-2xl"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Visual */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: 'spring' }}
              className="relative"
            >
              <div className="relative">
                {/* Main image container */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/20"
                >
                  <img
                    src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=600&auto=format&fit=crop"
                    alt="Caring environment for elders"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-burgundy/60 via-transparent to-transparent" />
                </motion.div>

                {/* Floating card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-xl z-20 max-w-[200px]"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-teal/20 flex items-center justify-center">
                      <Heart className="w-5 h-5 text-teal" fill="currentColor" />
                    </div>
                    <span className="font-bold text-brown text-lg">100%</span>
                  </div>
                  <p className="text-sm text-brown/70">
                    Families trust us with their loved ones
                  </p>
                </motion.div>

                {/* Background decoration */}
                <div className="absolute top-6 -left-6 w-full h-full bg-gradient-to-br from-teal to-coral rounded-[2.5rem] -z-10 opacity-30" />
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: 'spring' }}
              className="space-y-8"
            >
              <div>
                <h3 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
                  Your Parents Are in{' '}
                  <span className="text-coral">Safe Hands</span>
                </h3>
                <p className="text-lg text-cream/80 leading-relaxed">
                  We understand the worry that comes with being away from your parents.
                  That's why we've built more than just a service — we've created a
                  <span className="text-gold font-medium"> nurturing ecosystem </span>
                  where every elder is treated with the respect, love, and attention they deserve.
                </p>
              </div>

              {/* Promise list */}
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
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-teal to-coral flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Check size={14} className="text-white" strokeWidth={3} />
                    </div>
                    <span className="text-cream/90 font-medium">{promise}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="pt-4"
              >
                <p className="text-cream/60 text-sm mb-4 italic">
                  "Because every parent deserves to feel loved, even when you're miles away."
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-coral to-gold text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-coral/30 transition-all duration-300 group"
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
        </div>
      </div>
    </section>
  );
}
