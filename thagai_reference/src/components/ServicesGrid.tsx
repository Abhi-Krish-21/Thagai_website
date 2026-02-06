import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Car,
  Compass,
  Users,
  UtensilsCrossed,
  Home,
  Pill,
  Stethoscope,
  HelpCircle,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const services = [
  {
    icon: Car,
    title: 'Mobility Support',
    description: 'Assistance with transportation and movement to help seniors maintain their independence and mobility.',
    color: 'bg-burgundy/5 text-burgundy',
    image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=400&auto=format&fit=crop'
  },
  {
    icon: Compass,
    title: 'Soulful Journeys',
    description: 'Meaningful travel experiences and spiritual journeys tailored to enrich the lives of our seniors.',
    color: 'bg-teal/5 text-teal',
    image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=400&auto=format&fit=crop'
  },
  {
    icon: Users,
    title: 'Elder Social Circles',
    description: 'Creating vibrant communities and social connections to combat loneliness and foster friendships.',
    color: 'bg-coral/5 text-coral',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=400&auto=format&fit=crop'
  },
  {
    icon: UtensilsCrossed,
    title: 'Home-Cooked Meals',
    description: 'Nutritious, delicious home-style meals prepared with love and delivered fresh to your door.',
    color: 'bg-gold/5 text-gold',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=400&auto=format&fit=crop'
  },
  {
    icon: Home,
    title: 'Maid & Cooking Services',
    description: 'Professional housekeeping and cooking services to maintain a clean, comfortable living environment.',
    color: 'bg-burgundy/5 text-burgundy',
    image: 'https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?q=80&w=400&auto=format&fit=crop'
  },
  {
    icon: Pill,
    title: 'Medicine & Grocery Delivery',
    description: 'Convenient delivery of medications and groceries directly to your home, ensuring you never run out of essentials.',
    color: 'bg-teal/5 text-teal',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=400&auto=format&fit=crop'
  },
  {
    icon: Stethoscope,
    title: 'Hospital Assistance',
    description: 'Comprehensive support during hospital visits and medical appointments with caring companions.',
    color: 'bg-coral/5 text-coral',
    image: 'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?q=80&w=400&auto=format&fit=crop'
  },
  {
    icon: HelpCircle,
    title: 'Anything You Ask For',
    description: 'Flexible, personalized services to meet any specific needs or requests - we\'re here to help with whatever you need.',
    color: 'bg-gold/5 text-gold',
    image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=400&auto=format&fit=crop'
  }
];

export function ServicesGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = 400;
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
    <section id="services" className="pt-16 pb-24 bg-cream relative overflow-hidden">

      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(#47294C 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-coral font-bold tracking-wider uppercase text-sm mb-2 block">
              Our Expertise
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brown">
              Our Services
            </h2>
            <p className="text-lg text-brown/70 mt-4">
              At Thagai, we make care simple and personal. From everyday support to
              specialized services, we offer flexible, compassionate solutions
              tailored to your needs.
            </p>
          </div>
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
        </div>

        <div
          ref={containerRef}
          onScroll={handleScroll}
          className="flex gap-8 overflow-x-auto pb-12 snap-x snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex-shrink-0 w-[300px] md:w-[350px] snap-start"
            >
              <div className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-brown/5 flex flex-col h-full">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                  <div className={`absolute bottom-4 left-4 w-12 h-12 rounded-xl flex items-center justify-center bg-white shadow-lg ${service.color.replace('bg-', 'text-')}`}>
                    <service.icon size={24} strokeWidth={2} />
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="font-serif text-2xl font-bold text-brown mb-3 group-hover:text-burgundy transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-brown/70 leading-relaxed">
                    {service.description}
                  </p>
                </div>
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
      </div>
    </section>
  );
}
