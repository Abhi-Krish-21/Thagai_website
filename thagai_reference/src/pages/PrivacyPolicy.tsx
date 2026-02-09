import { motion } from 'framer-motion';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ChevronRight, Shield } from 'lucide-react';

export function PrivacyPolicy() {
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
                                <Shield size={24} />
                            </div>
                            <div>
                                <span className="text-gold font-bold tracking-wider uppercase text-xs mb-1 block">
                                    Legal
                                </span>
                                <h1 className="font-serif text-4xl md:text-5xl font-bold text-brown">
                                    Privacy <span className="text-burgundy italic">Policy</span>
                                </h1>
                            </div>
                        </div>

                        <p className="text-lg text-brown/70 mb-12 leading-relaxed">
                            At Thagai, we are committed to protecting your privacy and ensuring your personal information is handled with care and respect. This policy explains how we collect, use, and safeguard your data.
                        </p>

                        <div className="space-y-12">
                            <section>
                                <h2 className="font-serif text-2xl font-bold text-brown mb-4 flex items-center gap-2">
                                    <ChevronRight size={20} className="text-burgundy" />
                                    Information We Collect
                                </h2>
                                <div className="space-y-4 text-brown/80 leading-relaxed font-sans">
                                    <p>
                                        We collect information that you provide directly to us when you request our services, sign up for our circles, or contact our support team.
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Contact details (name, email address, phone number)</li>
                                        <li>Service-related information (care preferences, health considerations)</li>
                                        <li>Emergency contact information for senior circle members</li>
                                        <li>Feedback and communications you send to us</li>
                                    </ul>
                                </div>
                            </section>

                            <section>
                                <h2 className="font-serif text-2xl font-bold text-brown mb-4 flex items-center gap-2">
                                    <ChevronRight size={20} className="text-burgundy" />
                                    How We Use Your Information
                                </h2>
                                <div className="space-y-4 text-brown/80 leading-relaxed font-sans">
                                    <p>
                                        Your information allows us to provide high-quality, personalized care and maintain a safe community for all members.
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Facilitating mobility support and soul-fulfilling journeys</li>
                                        <li>Coordinating home-cooked meals and maid services</li>
                                        <li>Managing membership in our Senior and Care Circles</li>
                                        <li>Providing timely updates to family members via the Care Circle</li>
                                        <li>Improving our services based on your feedback</li>
                                    </ul>
                                </div>
                            </section>

                            <section>
                                <h2 className="font-serif text-2xl font-bold text-brown mb-4 flex items-center gap-2">
                                    <ChevronRight size={20} className="text-burgundy" />
                                    Data Security & Sharing
                                </h2>
                                <div className="space-y-4 text-brown/80 leading-relaxed font-sans">
                                    <p>
                                        We implement strict security measures to protect your data. We do not sell your personal information to third parties.
                                    </p>
                                    <p>
                                        We only share information with verified service providers (caregivers, delivery partners) to the extent necessary to perform the requested services.
                                    </p>
                                </div>
                            </section>

                            <section className="p-8 bg-burgundy/[0.03] rounded-[2.5rem] border border-burgundy/10">
                                <h2 className="font-serif text-2xl font-bold text-brown mb-4">
                                    Contact Our Privacy Team
                                </h2>
                                <p className="text-brown/80 mb-6">
                                    If you have any questions about this Privacy Policy or how we handle your data, please reach out to us.
                                </p>
                                <a
                                    href="mailto:hello.thagai@gmail.com"
                                    className="inline-block bg-burgundy text-white px-8 py-3 rounded-full font-bold hover:bg-burgundy-dark transition-all duration-300"
                                >
                                    Email Privacy Team
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
