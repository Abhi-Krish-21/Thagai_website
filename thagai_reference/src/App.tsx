import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { ServicesGrid } from './components/ServicesGrid';
import { AudienceSections } from './components/AudienceSections';
import { CareEnvironment } from './components/CareEnvironment';
import { HowWeCare } from './components/HowWeCare';
import { CommunityCircles } from './components/CommunityCircles';
import { FAQsSection } from './components/FAQsSection';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-cream font-sans text-brown selection:bg-burgundy/20">
      <Navigation />
      <main>
        <HeroSection />
        <ContactSection />
        <ServicesGrid />
        <CommunityCircles />
        <HowWeCare />
        <AudienceSections />
        <CareEnvironment />
        <Testimonials />
        <FAQsSection />
      </main>
      <Footer />
    </div>
  );
}
