import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { Instagram, ChevronLeft, ChevronRight } from 'lucide-react';

const photos = [
  {
    src: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=800&auto=format&fit=crop',
    alt: 'Family visiting'
  },
  {
    src: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=600&auto=format&fit=crop',
    alt: 'Senior smiling'
  },
  {
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop',
    alt: 'Caregiver helping'
  },
  {
    src: 'https://images.unsplash.com/photo-1516307365426-bea591f05011?q=80&w=800&auto=format&fit=crop',
    alt: 'Gardening activity'
  },
  {
    src: 'https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?q=80&w=800&auto=format&fit=crop',
    alt: 'Art session'
  }
];

export function PhotoGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = 500;
      containerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setScrollProgress(scrollLeft / (scrollWidth - clientWidth));
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-cream-dark via-white to-cream relative overflow-hidden">
      {/* Top gradient transition */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-cream-dark to-transparent pointer-events-none z-10"></div>

      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-1/3 left-0 w-64 h-64 bg-burgundy/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-coral/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-12 gap-8">
          <div className="max-w-xl">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brown mb-4">
              Moments of Joy
            </h2>
            <p className="text-lg text-brown/70">
              See what daily life looks like in our community. Real smiles, real
              care, real connection.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex gap-4">
              <button
                onClick={() => scroll('left')}
                className="w-12 h-12 rounded-full border border-brown/20 flex items-center justify-center text-brown hover:bg-burgundy hover:text-white transition-all duration-300"
                aria-label="Previous"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-12 h-12 rounded-full border border-brown/20 flex items-center justify-center text-brown hover:bg-burgundy hover:text-white transition-all duration-300"
                aria-label="Next"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            <Button variant="outline" className="gap-2 hidden md:flex">
              <Instagram size={20} />
              Follow Our Journey
            </Button>
          </div>
        </div>

        <div
          ref={containerRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex-shrink-0 w-[80vw] md:w-[600px] h-[400px] relative overflow-hidden rounded-[2.5rem] group snap-start"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-burgundy/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-6 left-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-white font-serif text-xl font-medium">
                  {photo.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Progress Bar */}
        <div className="mt-8 h-1 w-full bg-brown/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-burgundy"
            style={{ width: `${(scrollProgress * 100).toFixed(2)}%` }}
            initial={false}
          />
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button variant="outline" className="gap-2 w-full">
            <Instagram size={20} />
            Follow Our Journey
          </Button>
        </div>
      </div>
    </section>
  );
}
