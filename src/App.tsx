import React from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { StatsSection } from './components/StatsSection';
import { ServicesGrid } from './components/ServicesGrid';
import { PhotoGallery } from './components/PhotoGallery';
import { AudienceSections } from './components/AudienceSections';
import { HowWeCare } from './components/HowWeCare';
import { CommunityCircles } from './components/CommunityCircles';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
export function App() {
  return (
    <div className="min-h-screen bg-cream font-sans text-brown selection:bg-burgundy/20">
      <Navigation />
      <main>
        <HeroSection />
        <StatsSection />
        <ServicesGrid />
        <HowWeCare />
        <CommunityCircles />
        <AudienceSections />
        <PhotoGallery />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </div>);

}