import { Twitter, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import { Logo } from './ui/Logo';
export function Footer() {
  const socialLinks = [
    { Icon: Twitter, href: "https://x.com/Thagai_care", label: "X (Twitter)" },
    { Icon: Instagram, href: "https://www.instagram.com/thagai.care", label: "Instagram" },
    { Icon: Linkedin, href: "https://www.linkedin.com/in/thagai-care-1b34593a8/", label: "LinkedIn" },
    { Icon: MessageCircle, href: "https://wa.me/message/5BQHK3KZ2SV2C1", label: "WhatsApp" }
  ];

  return (
    <footer className="bg-burgundy text-cream pt-20 pb-10 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-coral via-gold to-teal opacity-50"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Logo variant="light" size="lg" />
            <p className="text-cream-dark/60 text-base leading-relaxed">
              Providing compassionate, dignified care for seniors. We are
              dedicated to enhancing the quality of life for your loved ones
              through personalized support.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ Icon, href, label }, i) =>
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-coral hover:text-white transition-all duration-300 hover:-translate-y-1 border border-white/10"
                >
                  <Icon size={18} />
                </a>
              )}
            </div>
          </div>

          <div>
            <h4 className="font-serif text-xl font-bold text-white mb-6">
              Services
            </h4>
            <ul className="space-y-4 text-cream-dark/60">
              {[
                'Mobility Support',
                'Soulful Journeys',
                'Elder Social Circles',
                'Home-Cooked Meals',
                'Hospital Assistance'
              ].map((item) =>
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-coral transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-coral/40 group-hover:bg-coral transition-colors"></span>
                    {item}
                  </a>
                </li>
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl font-bold text-white mb-6">
              Company
            </h4>
            <ul className="space-y-4 text-cream-dark/60">
              {['About Us', 'Our Team', 'Careers', 'Blog', 'Contact'].map(
                (item) =>
                  <li key={item}>
                    <a
                      href="#"
                      className="hover:text-coral transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-coral/40 group-hover:bg-coral transition-colors"></span>
                      {item}
                    </a>
                  </li>
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl font-bold text-white mb-6">
              Get in Touch
            </h4>
            <ul className="space-y-4 text-cream-dark/60">
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 text-coral font-bold border border-white/5">P.</div>
                <span className="pt-1">+91 80726 50628</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 text-coral font-bold border border-white/5">E.</div>
                <span className="pt-1 leading-tight">hello.thagai@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/30">
          <p>
            &copy; 2025 Thagai<br />All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-coral transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-coral transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="hover:text-coral transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>);

}