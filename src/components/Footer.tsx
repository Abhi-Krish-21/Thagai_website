import React from 'react';
import { Heart, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
export function Footer() {
  return (
    <footer className="bg-brown text-cream-dark pt-20 pb-10 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-burgundy via-coral to-teal"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-burgundy flex items-center justify-center text-white">
                <Heart size={20} fill="currentColor" />
              </div>
              <span className="font-serif text-3xl font-bold text-cream">
                Thagai
              </span>
            </div>
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
              'Personal Care',
              'Companionship',
              'Memory Care',
              'Respite Care',
              'Hospice Support'].
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
                <span className="text-coral font-bold">A.</span>
                123 Oak Lane, Serenity Valley, CA 90210
              </li>
              <li className="flex items-start gap-3">
                <span className="text-coral font-bold">P.</span>
                (555) 123-4567
              </li>
              <li className="flex items-start gap-3">
                <span className="text-coral font-bold">E.</span>
                hello@thagai.care
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-cream/40">
          <p>
            &copy; {new Date().getFullYear()} Thagai Care. All rights reserved.
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