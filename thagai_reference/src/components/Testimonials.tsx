import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote:
      'The warmth and genuine care the team showed my father was beyond anything we expected. He felt truly loved.',
    author: 'Sarah Jenkins',
    relation: 'Daughter',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop',
    color: '#47294C' // Burgundy
  },
  {
    quote:
      "Finding Thagai was a blessing. The caregivers aren't just staff; they've become part of our extended family.",
    author: 'Michael Chen',
    relation: 'Son',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop',
    color: '#2D8B8B' // Teal
  },
  {
    quote:
      "I was worried about losing my independence, but they help me do the things I love safely. I'm happier than I've been in years.",
    author: 'Eleanor Rigby',
    relation: 'Client',
    image:
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=200&auto=format&fit=crop',
    color: '#E07B54' // Coral
  },
  {
    quote:
      "Thagai's team provided exceptional support during my recovery. Their attention to detail and compassion were unmatched.",
    author: 'David Wilson',
    relation: 'Client',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
    color: '#D4A853' // Gold
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const getCardStyle = (index: number) => {
    const total = testimonials.length;
    // Calculate relative position
    let diff = index - currentIndex;

    // Normalize diff for circular array
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    const isActive = diff === 0;
    const isVisible = Math.abs(diff) <= 1;

    return {
      isActive,
      isVisible,
      position: diff, // -1, 0, or 1
    };
  };

  return (
    <section id="testimonials" className="py-24 bg-cream relative overflow-hidden">
      {/* Background Enhancements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-burgundy/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

      {/* Decorative Icons */}
      <div className="absolute top-32 left-[10%] opacity-10 animate-float pointer-events-none">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-burgundy">
          <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" strokeWidth="0.5" />
        </svg>
      </div>
      <div className="absolute bottom-40 right-[12%] opacity-15 animate-float-delayed pointer-events-none">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-teal">
          <circle cx="12" cy="12" r="10" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-8">
          <span className="text-gold font-bold tracking-wider uppercase text-xs mb-2 block">
            Real Stories
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-4xl font-bold text-brown mb-4"
          >
            Stories of <span className="text-burgundy italic">Connection</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base text-brown/70 max-w-2xl mx-auto"
          >
            Hear from the families who have welcomed us into their lives and homes.
          </motion.p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative h-[380px] flex items-center justify-center max-w-5xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="relative w-full h-full flex items-center justify-center perspective-[1000px]">
            {testimonials.map((item, index) => {
              const { isActive, isVisible, position } = getCardStyle(index);

              return (
                <motion.div
                  key={index}
                  initial={false}
                  animate={{
                    x: position * 260, // Reduced spread
                    scale: isActive ? 1.0 : 0.8,
                    opacity: isVisible ? (isActive ? 1 : 0.45) : 0,
                    zIndex: isActive ? 30 : 20 - Math.abs(position),
                    rotateY: position * -20,
                    filter: isActive ? 'blur(0px)' : 'blur(3px)',
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 25
                  }}
                  className={`absolute w-full max-w-[320px] pointer-events-none ${isActive ? 'pointer-events-auto' : ''}`}
                >
                  <div className="bg-white p-6 rounded-[2rem] shadow-xl border border-brown/5 relative overflow-hidden group h-[320px] flex flex-col justify-between">
                    {/* Decorative Corner */}
                    <div
                      className="absolute top-0 right-0 w-20 h-20 translate-x-10 -translate-y-10 rounded-full opacity-10 transition-transform group-hover:scale-150 duration-700"
                      style={{ backgroundColor: item.color }}
                    ></div>

                    {/* Quote Icon */}
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-lg mb-4"
                      style={{ backgroundColor: item.color }}
                    >
                      <Quote size={20} fill="currentColor" strokeWidth={0} />
                    </div>

                    <div className="mb-6 flex-grow">
                      <p className="font-serif italic text-base md:text-lg text-brown/90 leading-relaxed">
                        "{item.quote}"
                      </p>
                    </div>

                    <div className="flex items-center gap-4 pt-6 border-t border-brown/5">
                      <div className="relative">
                        <img
                          src={item.image}
                          alt={item.author}
                          className="w-12 h-12 md:w-14 md:h-14 rounded-xl object-cover border-2 border-white shadow-lg"
                        />
                        <div
                          className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white shadow-sm"
                          style={{ backgroundColor: item.color }}
                        ></div>
                      </div>
                      <div>
                        <div className="font-bold text-brown text-base md:text-lg">
                          {item.author}
                        </div>
                        <div className="text-xs text-brown/50 font-medium uppercase tracking-widest mt-0.5">
                          {item.relation}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-6 z-40">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-white shadow-lg border border-brown/5 flex items-center justify-center text-brown hover:bg-burgundy hover:text-white transition-all duration-300 transform hover:scale-110 active:scale-95"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 rounded-full transition-all duration-500 ${currentIndex === i ? 'w-8 bg-burgundy' : 'w-2 bg-burgundy/20 hover:bg-burgundy/40'
                    }`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-white shadow-lg border border-brown/5 flex items-center justify-center text-brown hover:bg-burgundy hover:text-white transition-all duration-300 transform hover:scale-110 active:scale-95"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}