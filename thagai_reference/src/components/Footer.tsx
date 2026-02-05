import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Logo } from './ui/Logo';
export function Footer() {
  return (
    <footer className="bg-brown text-cream-dark pt-20 pb-10 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-burgundy via-coral to-teal"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Logo variant="light" size="lg" />
            <p className="text-cream/60 text-base leading-relaxed">
              Providing compassionate, dignified care for seniors. We are
              dedicated to enhancing the quality of life for your loved ones
              through personalized support.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) =>
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-burgundy hover:text-white transition-all hover:-translate-y-1">

                  <Icon size={18} />
                </a>
              )}
            </div>
          </div>

          <div>
            <h4 className="font-serif text-xl font-bold text-cream mb-6">
              Services
            </h4>
            <ul className="space-y-4 text-cream/60">
              {[
              'Mobility Support',
              'Soulful Journeys',
              'Elder Social Circles',
              'Home-Cooked Meals',
              'Hospital Assistance'].
              map((item) =>
              <li key={item}>
                  <a
                  href="#"
                  className="hover:text-coral transition-colors flex items-center gap-2">

                    <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                    {item}
                  </a>
                </li>
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl font-bold text-cream mb-6">
              Company
            </h4>
            <ul className="space-y-4 text-cream/60">
              {['About Us', 'Our Team', 'Careers', 'Blog', 'Contact'].map(
                (item) =>
                <li key={item}>
                    <a
                    href="#"
                    className="hover:text-coral transition-colors flex items-center gap-2">

                      <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                      {item}
                    </a>
                  </li>

              )}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl font-bold text-cream mb-6">
              Get in Touch
            </h4>
            <ul className="space-y-4 text-cream/60">
              <li className="flex items-start gap-3">
                <span className="text-coral font-bold">P.</span>
                +91 80726 50628
              </li>
              <li className="flex items-start gap-3">
                <span className="text-coral font-bold">E.</span>
                hello.thagai@gmail.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-cream/40">
          <p>
            &copy; {new Date().getFullYear()} Thagai. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-cream transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-cream transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-cream transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>);

}