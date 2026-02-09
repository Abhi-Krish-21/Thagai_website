import { Navigation } from '../components/Navigation';
import { HeroSection } from '../components/HeroSection';
import { ServicesGrid } from '../components/ServicesGrid';
import { CommunityCircles } from '../components/CommunityCircles';
import { HowWeCare } from '../components/HowWeCare';
import { AudienceSections } from '../components/AudienceSections';
import { CareEnvironment } from '../components/CareEnvironment';
import { Testimonials } from '../components/Testimonials';
import { FAQsSection } from '../components/FAQsSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { motion } from 'framer-motion';

export function Home() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
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
        </motion.div>
    );
}
