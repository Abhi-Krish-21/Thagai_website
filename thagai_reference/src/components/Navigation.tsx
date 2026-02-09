import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';
import { Logo } from './ui/Logo';
import { motion, AnimatePresence } from 'framer-motion';
export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
    {
      name: 'Our Care',
      href: '#services'
    },
    {
      name: 'Community',
      href: '#community'
    },
    {
      name: 'For Families',
      href: '#families'
    },
    {
      name: 'Stories',
      href: '#testimonials'
    }];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>

      <div className="w-full px-4 md:px-12 lg:px-16">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center group hover:opacity-80 transition-opacity">
            <Logo variant="dark" size="md" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              <a
                key={link.name}
                href={link.href}
                className="text-brown hover:text-gold font-medium transition-colors relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-0.5 after:bg-gold after:transition-all hover:after:w-full">

                {link.name}
              </a>
            )}
            <Button
              variant="primary"
              size="sm"
              onClick={() =>
                document.getElementById('contact')?.scrollIntoView({
                  behavior: 'smooth'
                })
              }>

              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-brown p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu">

            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen &&
          <motion.div
            initial={{
              opacity: 0,
              height: 0
            }}
            animate={{
              opacity: 1,
              height: 'auto'
            }}
            exit={{
              opacity: 0,
              height: 0
            }}
            className="md:hidden bg-white border-t border-brown/10 overflow-hidden shadow-xl">

            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) =>
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-brown py-3 border-b border-brown/5"
                  onClick={() => setIsMobileMenuOpen(false)}>

                  {link.name}
                </a>
              )}
              <Button
                className="w-full mt-4"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  document.getElementById('contact')?.scrollIntoView({
                    behavior: 'smooth'
                  });
                }}>

                Contact Us
              </Button>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}