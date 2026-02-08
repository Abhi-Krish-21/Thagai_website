import { Twitter, Instagram, Linkedin, MessageCircle, Phone, Mail } from 'lucide-react';
import { Logo } from './ui/Logo';
export function Footer() {
  const socialLinks = [
    { Icon: Twitter, href: "https://x.com/Thagai_care", label: "X (Twitter)" },
    { Icon: Instagram, href: "https://www.instagram.com/thagai.care", label: "Instagram" },
    { Icon: Linkedin, href: "https://www.linkedin.com/in/thagai-care-1b34593a8/", label: "LinkedIn" },
    { Icon: MessageCircle, href: "https://wa.me/message/5BQHK3KZ2SV2C1", label: "WhatsApp" }
  ];

  return (
    <footer className="bg-burgundy text-cream pt-12 pb-8 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold via-burgundy to-teal opacity-50"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-10">
          {/* Brand Content - Extra Space */}
          <div className="space-y-4 lg:col-span-6 pr-0 lg:pr-20">
            <Logo variant="light" size="lg" />
            <p className="text-cream-dark/60 text-base leading-relaxed max-w-md">
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
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-burgundy transition-all duration-300 hover:-translate-y-1 border border-white/10"
                >
                  <Icon size={18} />
                </a>
              )}
            </div>
          </div>

          {/* Equal-Spaced Narrow Columns */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-lg font-bold text-white mb-6">
              Services
            </h4>
            <ul className="space-y-2 text-cream-dark/60">
              {[
                'Mobility Support',
                'Soulful Journeys',
                'Social Circles',
                'Hospital Care',
                'Meals'
              ].map((item) =>
                <li key={item}>
                  <a
                    href="#services"
                    className="hover:text-gold transition-colors duration-300 flex items-center gap-2 group text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/40 group-hover:bg-gold transition-colors"></span>
                    {item}
                  </a>
                </li>
              )}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-serif text-lg font-bold text-white mb-6">
              Links
            </h4>
            <ul className="space-y-2 text-cream-dark/60">
              {[
                { name: 'About Us', href: '#' },
                { name: 'Our Care', href: '#services' },
                { name: 'Community', href: '#community' },
                { name: 'FAQs', href: '#faqs' }
              ].map((link) =>
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-gold transition-colors duration-300 flex items-center gap-2 group text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/40 group-hover:bg-gold transition-colors"></span>
                    {link.name}
                  </a>
                </li>
              )}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-serif text-lg font-bold text-white mb-6">
              Contact
            </h4>
            <ul className="space-y-3 text-cream-dark/60">
              <li className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 text-gold border border-white/5">
                  <Phone size={14} />
                </div>
                <a href="tel:+918072650628" className="text-sm hover:text-gold transition-colors duration-300">+91 80726 50628</a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 text-gold border border-white/5">
                  <Mail size={14} />
                </div>
                <a href="mailto:hello.thagai@gmail.com" className="text-sm hover:text-gold transition-colors duration-300">hello.thagai@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-wider font-medium text-white/30 uppercase">
          <p>
            &copy; 2025 Thagai · All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-gold transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gold transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="hover:text-gold transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>);

}