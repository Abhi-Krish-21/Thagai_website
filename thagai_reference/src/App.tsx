import React from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { ServicesGrid } from './components/ServicesGrid';
import { PhotoGallery } from './components/PhotoGallery';
import { AudienceSections } from './components/AudienceSections';
import { HowWeCare } from './components/HowWeCare';
import { CommunityCircles } from './components/CommunityCircles';
import { Testimonials } from './components/Testimonials';
import { FAQsSection } from './components/FAQsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-cream font-sans text-brown selection:bg-burgundy/20">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesGrid />
        <AudienceSections />
        <ContactSection />
        <PhotoGallery />
        <HowWeCare />
        <CommunityCircles />
        <Testimonials />
        <FAQsSection />
      </main>
      <Footer />
    </div>
  );
}
