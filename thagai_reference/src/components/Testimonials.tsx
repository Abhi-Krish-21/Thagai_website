import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote:
      "I stay in Dubai and managing things for my parents in Chennai was becoming difficult. Thagai became like one single contact for everything. Small small things also they took care. That peace of mind is different.",
    author: 'Joshua',
    color: '#47294C' // Burgundy
  },
  {
    quote:
      "Booked assistance for my dad through Thagai. I was honestly stressed because I couldn’t take leave from work. The coordinator handled everything properly and kept updating me. Felt relieved for the first time in months.",
    author: 'S.Charulatha',
    color: '#2D8B8B' // Teal
  },
  {
    quote:
      "Father-in-law had surgery and we were confused about home nursing, but the nurse was warm and actually cared for him like family. Made things less stressful for all of us.",
    author: 'R.K.Kumaar',
    color: '#E07B54' // Coral
  },
  {
    quote:
      "Between meetings and deadlines I had no idea how mom was doing. Thagai kept me updated and made me feel like someone is watching over her so grateful for that.",
    author: 'A.Babu',
    color: '#D4A853', // Gold
    image: '/assets/images/review_ababu.jpeg'
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
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-white shadow-lg mb-3"
                      style={{ backgroundColor: item.color }}
                    >
                      <Quote size={16} fill="currentColor" strokeWidth={0} />
                    </div>

                    <div className="mb-4 flex-grow overflow-y-auto custom-scrollbar">
                      <p className="font-serif italic text-sm md:text-base text-brown/90 leading-relaxed">
                        "{item.quote}"
                      </p>
                    </div>

                    <div className="flex items-center gap-4 pt-4 border-t border-brown/5">
                      <div className="relative">
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.author}
                            className="w-10 h-10 md:w-12 md:h-12 rounded-xl object-cover shadow-lg border-2 border-white"
                          />
                        ) : (
                          <div
                            className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-lg border-2 border-white"
                            style={{ backgroundColor: item.color }}
                          >
                            {item.author.charAt(0).toUpperCase()}
                          </div>
                        )}
                        <div
                          className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full border-2 border-white shadow-sm"
                          style={{ backgroundColor: item.color }}
                        ></div>
                      </div>
                      <div>
                        <div className="font-bold text-brown text-sm md:text-base">
                          {item.author}
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