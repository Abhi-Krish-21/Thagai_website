import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { Instagram } from 'lucide-react';
const photos = [
{
  src: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=600&auto=format&fit=crop',
  alt: 'Family visiting',
  className: 'col-span-1 md:col-span-2 row-span-2 rounded-[2rem]'
},
{
  src: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=400&auto=format&fit=crop',
  alt: 'Senior smiling',
  className: 'col-span-1 row-span-1 rounded-[2rem]'
},
{
  src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop',
  alt: 'Caregiver helping',
  className: 'col-span-1 row-span-1 rounded-full aspect-square'
},
{
  src: 'https://images.unsplash.com/photo-1516307365426-bea591f05011?q=80&w=400&auto=format&fit=crop',
  alt: 'Gardening activity',
  className: 'col-span-1 md:col-span-2 row-span-1 rounded-[2rem]'
}];

export function PhotoGallery() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-12 gap-8">
          <div className="max-w-xl">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brown mb-4">
              Moments of Joy
            </h2>
            <p className="text-lg text-brown/70">
              See what daily life looks like in our community. Real smiles, real
              care, real connection.
            </p>
          </div>
          <Button variant="outline" className="gap-2">
            <Instagram size={20} />
            Follow Our Journey
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px]">
          {photos.map((photo, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              scale: 0.9
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: index * 0.1
            }}
            className={`relative overflow-hidden group ${photo.className}`}>

              <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

              <div className="absolute inset-0 bg-burgundy/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}