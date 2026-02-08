import { motion } from 'framer-motion';
export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-10 overflow-hidden bg-cream">
      {/* Bottom gradient transition to next section (burgundy/purple) - taller for smoother fade */}
      <div className="absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-b from-transparent via-burgundy/10 to-burgundy pointer-events-none z-10"></div>
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-teal/10 rounded-full blur-[120px] animate-blob"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] bg-gold/10 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
        <div className="absolute top-[40%] left-[20%] w-[400px] h-[400px] bg-burgundy/5 rounded-full blur-[100px] animate-blob animation-delay-4000"></div>

        {/* Decorative Floating Icons */}
        <div className="absolute top-1/4 left-[10%] opacity-20 animate-float">
          <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-burgundy">
            <circle cx="12" cy="12" r="10" strokeWidth="0.5" />
          </svg>
        </div>
        <div className="absolute bottom-1/3 right-[15%] opacity-30 animate-float-delayed">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gold">
            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Large Watermark Text */}
        <div className="absolute top-20 right-0 font-serif text-[200px] leading-none text-brown/5 opacity-20 select-none whitespace-nowrap hidden lg:block">
          thagai
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 0.8,
              ease: 'easeOut'
            }}
            className="space-y-8 max-w-2xl">

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-brown leading-[1.1]">
              Care Made{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-teal">Simple</span>
                <svg
                  className="absolute w-full h-3 -bottom-1 left-0 text-gold/40 -z-10"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none">

                  <path
                    d="M0 5 Q 50 10 100 5"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none" />

                </svg>
              </span>
              <span className="text-teal">.</span>
            </h1>

            <p className="text-lg md:text-xl text-brown/80 leading-relaxed">
              At Thagai, we make quality care simple and affordable. From healthcare
              and transport to meals and daily support, everything your family needs
              is in one place—hassle-free.
            </p>
            {/* 
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="group">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div> */}
          </motion.div>

          {/* Right Content - Photo Mosaic */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 1,
              delay: 0.2
            }}
            className="relative hidden lg:block h-[600px]">

            {/* Main Center Image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-96 rounded-[3rem] overflow-hidden shadow-2xl z-20 border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?q=80&w=800&auto=format&fit=crop"
                alt="Happy senior couple"
                className="w-full h-full object-cover" />

            </div>

            {/* Top Right Image */}
            <motion.div
              animate={{
                y: [0, -10, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="absolute top-10 right-10 w-48 h-48 rounded-full overflow-hidden shadow-xl z-10 border-4 border-white">

              <img
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=400&auto=format&fit=crop"
                alt="Senior gardening"
                className="w-full h-full object-cover" />

            </motion.div>

            {/* Bottom Left Image */}
            <motion.div
              animate={{
                y: [0, 10, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1
              }}
              className="absolute bottom-10 left-0 w-56 h-40 rounded-[2rem] overflow-hidden shadow-xl z-30 border-4 border-white">

              <img
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=400&auto=format&fit=crop"
                alt="Caregiver helping"
                className="w-full h-full object-cover" />

            </motion.div>

            {/* Decorative Shapes */}
            <div className="absolute top-20 left-10 w-20 h-20 bg-gold rounded-full opacity-80 animate-float"></div>
            <div className="absolute bottom-20 right-20 w-16 h-16 bg-teal rounded-lg rotate-12 opacity-80 animate-float-delayed"></div>
            <div className="absolute top-1/2 right-0 w-24 h-24 bg-gold/30 rounded-full blur-xl"></div>

            {/* Floating Badge */}
            <motion.div
              animate={{
                rotate: [0, 5, 0, -5, 0]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'linear'
              }}
              className="absolute top-0 left-20 bg-white p-4 rounded-2xl shadow-lg z-40 max-w-[150px]">

              <div className="text-center">
                <span className="block text-3xl font-bold text-burgundy">
                  24/7
                </span>
                <span className="text-xs text-brown/70 font-medium uppercase tracking-wider">
                  Support Available
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>);

}