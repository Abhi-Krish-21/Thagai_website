import { Twitter, Instagram, Linkedin, MessageCircle, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
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

      <div className="w-full px-4 md:px-12 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-10">
          {/* Brand Content */}
          <div className="flex flex-col items-start space-y-4 lg:col-span-4 pr-0">
            <div className="-ml-20">
              <Link to="/">
                <Logo variant="light" size="lg" />
              </Link>
            </div>
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

          {/* Services Column */}
          <div className="lg:col-span-3 lg:pl-8">
            <h4 className="font-serif text-lg font-bold text-white mb-6">
              Services
            </h4>
            <ul className="space-y-2 text-cream-dark/60">
              {[
                { name: 'Mobility Support', href: '/#services' },
                { name: 'Soulful Journeys', href: '/#services' },
                { name: 'Elder Social Circles', href: '/#services' },
                { name: 'Home-Cooked Meals', href: '/#services' },
                { name: 'Maid & Cooking Services', href: '/#services' },
                { name: 'Medicine & Grocery Delivery', href: '/#services' },
                { name: 'Hospital Assistance', href: '/#services' },
                { name: 'Anything You Ask For', href: '/#services' }
              ].map((item) =>
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="hover:text-gold transition-colors duration-300 flex items-center gap-2 group text-sm whitespace-nowrap"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/40 group-hover:bg-gold transition-colors"></span>
                    {item.name}
                  </a>
                </li>
              )}
            </ul>
          </div>

          <div className="lg:col-span-2 lg:pl-4">
            <h4 className="font-serif text-lg font-bold text-white mb-6">
              Links
            </h4>
            <ul className="space-y-2 text-cream-dark/60">
              {[
                { name: 'About Us', href: '/' },
                { name: 'Community', href: '/#community' }
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

          <div className="lg:col-span-3 lg:pl-4">
            <h4 className="font-serif text-lg font-bold text-white mb-6">
              Contact
            </h4>
            <ul className="space-y-3 text-cream-dark/60 text-left">
              <li className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 text-gold border border-white/5">
                  <Phone size={14} />
                </div>
                <a href="tel:+918072650628" className="text-sm hover:text-gold transition-colors duration-300 whitespace-nowrap">+91 80726 50628</a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 text-gold border border-white/5">
                  <Mail size={14} />
                </div>
                <a href="mailto:hello.thagai@gmail.com" className="text-sm hover:text-gold transition-colors duration-300 whitespace-nowrap">hello.thagai@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center gap-4 text-xs tracking-wider font-medium text-white/30 uppercase">
          <div className="flex-1 text-left hidden md:block">
            &copy; 2025 Thagai · All rights reserved.
          </div>
          <div className="flex gap-8 justify-center flex-1">
            <a
              href="/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>
          <div className="flex-1 text-right hidden md:block">
            Developed by Initio
          </div>

          {/* Mobile version to keep order clean */}
          <div className="md:hidden flex flex-col items-center gap-2">
            <p>&copy; 2025 Thagai · All rights reserved.</p>
            <p>Developed by Initio</p>
          </div>
        </div>
      </div>
    </footer>);

}