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
    id: 'mobility-support',
    icon: Car,
    title: 'Mobility Support',
    description: 'Assistance with transportation and movement to help seniors maintain their independence and mobility.',
    color: 'bg-burgundy/5 text-burgundy',
    image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 'soulful-journeys',
    icon: Compass,
    title: 'Soulful Journeys',
    description: 'Meaningful travel experiences and spiritual journeys tailored to enrich the lives of our seniors.',
    color: 'bg-teal/5 text-teal',
    image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 'elder-social-circles',
    icon: Users,
    title: 'Elder Social Circles',
    description: 'Creating vibrant communities and social connections to combat loneliness and foster friendships.',
    color: 'bg-gold/5 text-gold',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 'home-cooked-meals',
    icon: UtensilsCrossed,
    title: 'Home-Cooked Meals',
    description: 'Nutritious, delicious home-style meals prepared with love and delivered fresh to your door.',
    color: 'bg-gold/5 text-gold',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 'maid-cooking',
    icon: Home,
    title: 'Maid & Cooking Services',
    description: 'Professional housekeeping and cooking services to maintain a clean, comfortable living environment.',
    color: 'bg-burgundy/5 text-burgundy',
    image: 'https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 'medicine-grocery',
    icon: Pill,
    title: 'Medicine & Grocery Delivery',
    description: 'Convenient delivery of medications and groceries directly to your home, ensuring you never run out of essentials.',
    color: 'bg-teal/5 text-teal',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 'hospital-assistance',
    icon: Stethoscope,
    title: 'Hospital Assistance',
    description: 'Comprehensive support during hospital visits and medical appointments with caring companions.',
    color: 'bg-burgundy/5 text-burgundy',
    image: 'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 'anything-you-ask',
    icon: HelpCircle,
    title: 'Anything You Ask For',
    description: 'Flexible, personalized services to meet any specific needs or requests - we\'re here to help with whatever you need.',
    color: 'bg-gold/5 text-gold',
    image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=400&auto=format&fit=crop'
  }
];

export function ServicesGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);

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
    // Scroll progress logic removed
  };

  return (
    <section id="services" className="min-h-screen pt-16 pb-24 bg-cream relative overflow-hidden flex flex-col justify-center">
      {/* Top transition from burgundy section - matched to Hero transition */}
      <div className="absolute top-0 left-0 right-0 h-80 bg-gradient-to-b from-burgundy via-burgundy/10 to-transparent pointer-events-none z-10"></div>

      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-burgundy/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>

      <div className="absolute top-24 left-[5%] opacity-10 animate-float pointer-events-none">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-burgundy">
          <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="absolute top-1/2 right-[5%] opacity-15 animate-float-delayed pointer-events-none">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gold">
          <circle cx="12" cy="12" r="10" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-gold font-bold tracking-wider uppercase text-xs mb-2 block">
              Our Expertise
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brown">
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
          className="flex gap-6 overflow-x-auto pb-12 snap-x snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              id={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex-shrink-0 w-[260px] md:w-[280px] snap-start scroll-mt-32"
            >
              <div
                onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
                className={`group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border flex flex-col h-full cursor-pointer ${selectedService === service.id
                  ? 'scale-105 shadow-2xl border-gold ring-2 ring-gold/20 z-10'
                  : 'border-brown/5 hover:scale-[1.02]'
                  }`}
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                  <div className={`absolute bottom-3 left-3 w-10 h-10 rounded-xl flex items-center justify-center bg-white shadow-lg ${service.color.replace('bg-', 'text-')}`}>
                    <service.icon size={20} strokeWidth={2} />
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-serif text-lg font-bold text-brown mb-2 group-hover:text-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-brown/70 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Progress Bar */}

      </div>
    </section>
  );
}
