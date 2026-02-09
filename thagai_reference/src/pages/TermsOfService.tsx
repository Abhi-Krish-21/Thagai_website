import { motion } from 'framer-motion';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ChevronRight, FileText } from 'lucide-react';

export function TermsOfService() {
    return (
        <div className="min-h-screen bg-cream selection:bg-burgundy/20">
            <Navigation />

            <main className="pt-32 pb-24">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-burgundy/5 flex items-center justify-center text-burgundy">
                                <FileText size={24} />
                            </div>
                            <div>
                                <span className="text-gold font-bold tracking-wider uppercase text-xs mb-1 block">
                                    Legal
                                </span>
                                <h1 className="font-serif text-4xl md:text-5xl font-bold text-brown">
                                    Terms of <span className="text-burgundy italic">Service</span>
                                </h1>
                            </div>
                        </div>

                        <p className="text-lg text-brown/70 mb-12 leading-relaxed">
                            By using Thagai's services, you agree to the following terms and conditions. We strive to provide the best possible care and expect a respectful environment for our caregivers and community members.
                        </p>

                        <div className="space-y-12">
                            <section>
                                <h2 className="font-serif text-2xl font-bold text-brown mb-4 flex items-center gap-2">
                                    <ChevronRight size={20} className="text-burgundy" />
                                    Service Agreement
                                </h2>
                                <div className="space-y-4 text-brown/80 leading-relaxed font-sans">
                                    <p>
                                        Thagai platform connects families with verified caregivers and service providers. While we perform thorough background checks, users are encouraged to review service provider profiles.
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Services must be booked through our official platform or designated contact numbers.</li>
                                        <li>Cancellations should be made at least 12 hours in advance to avoid applicable fees.</li>
                                        <li>Payment terms for various services are as discussed during the onboarding process.</li>
                                    </ul>
                                </div>
                            </section>

                            <section>
                                <h2 className="font-serif text-2xl font-bold text-brown mb-4 flex items-center gap-2">
                                    <ChevronRight size={20} className="text-burgundy" />
                                    Community Circles Conduct
                                </h2>
                                <div className="space-y-4 text-brown/80 leading-relaxed font-sans">
                                    <p>
                                        Our Senior and Care Circles are built on trust and mutual respect. Members agree to:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Maintain confidentiality of information shared within the circles.</li>
                                        <li>Engage respectfully with other members and Thagai staff.</li>
                                        <li>Use the platform for its intended purpose of care and connection.</li>
                                    </ul>
                                </div>
                            </section>

                            <section>
                                <h2 className="font-serif text-2xl font-bold text-brown mb-4 flex items-center gap-2">
                                    <ChevronRight size={20} className="text-burgundy" />
                                    Limitations of Liability
                                </h2>
                                <div className="space-y-4 text-brown/80 leading-relaxed font-sans">
                                    <p>
                                        Thagai acts as an aggregator and facilitator. While we ensure high standards, we are not liable for certain events beyond our control during service delivery.
                                    </p>
                                    <p>
                                        Users are responsible for providing accurate health information to ensure caregivers can provide the most appropriate support.
                                    </p>
                                </div>
                            </section>

                            <section className="p-8 bg-burgundy/[0.03] rounded-[2.5rem] border border-burgundy/10">
                                <h2 className="font-serif text-2xl font-bold text-brown mb-4">
                                    Questions About Terms?
                                </h2>
                                <p className="text-brown/80 mb-6">
                                    If you have any questions regarding our service agreements or terms of use, please contact us.
                                </p>
                                <a
                                    href="/#contact"
                                    className="inline-block bg-burgundy text-white px-8 py-3 rounded-full font-bold hover:bg-burgundy-dark transition-all duration-300"
                                >
                                    Contact Support
                                </a>
                            </section>
                        </div>

                        <div className="mt-20 pt-8 border-t border-brown/10 text-sm text-brown/50">
                            Last updated: February 9, 2026
                        </div>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
