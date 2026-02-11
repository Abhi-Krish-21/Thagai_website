import { useEffect, useState } from 'react';
import { Menu, X, Home, Activity, Users, Heart, MessageCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
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

  const handleChatClick = () => {
    window.open('https://wa.me/message/5BQHK3KZ2SV2C1', '_blank', 'noopener,noreferrer');
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Our Services', href: '/#services' },
    { name: 'Community', href: '/#community' },
    { name: 'For Families', href: '/#families' },
    { name: 'Stories', href: '/#testimonials' }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>

        <div className="w-full px-4 md:px-12 lg:px-16">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-brown p-1 -ml-1"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu">
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>

              {/* Logo */}
              <Link to="/" className="flex items-center group hover:opacity-80 transition-opacity">
                <Logo variant="dark" size="md" />
              </Link>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-brown hover:text-gold font-medium transition-colors relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-0.5 after:bg-gold after:transition-all hover:after:w-full">
                  {link.name}
                </a>
              ))}
              <Button
                variant="primary"
                size="sm"
                onClick={handleChatClick}
                className="flex items-center gap-2">
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className="text-white"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat With Us
              </Button>
            </div>

            {/* Mobile Chat Button */}
            <div className="md:hidden">
              <Button
                variant="primary"
                size="sm"
                onClick={handleChatClick}
                className="flex items-center gap-2 px-3 py-1.5 text-sm">
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="text-white"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat
              </Button>
            </div>
          </nav>
        </div>

      </header>
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />

            {/* Menu Sidebar */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 bottom-0 left-0 w-4/5 max-w-sm bg-white shadow-2xl z-[70] overflow-y-auto"
            >
              {/* Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <div onClick={() => setIsMobileMenuOpen(false)}>
                  <Link to="/">
                    <Logo variant="dark" size="md" />
                  </Link>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-gray-500 hover:text-gray-700 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Menu Items */}
              <div className="py-2">
                <Link
                  to="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-4 px-6 py-4 text-brown font-medium hover:bg-cream/30 transition-colors"
                >
                  <Home size={20} className="text-gray-400" />
                  Home
                </Link>

                {/* Specific replacements for our functionalities */}
                <a
                  href="/#services"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-4 px-6 py-4 text-brown font-medium hover:bg-cream/30 transition-colors"
                >
                  <Activity size={20} className="text-gray-400" />
                  Our Services
                </a>

                <a
                  href="/#community"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-4 px-6 py-4 text-brown font-medium hover:bg-cream/30 transition-colors"
                >
                  <Users size={20} className="text-gray-400" />
                  Community
                </a>

                <a
                  href="/#families"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-4 px-6 py-4 text-brown font-medium hover:bg-cream/30 transition-colors"
                >
                  <Heart size={20} className="text-gray-400" />
                  For Families
                </a>

                <a
                  href="/#testimonials"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-4 px-6 py-4 text-brown font-medium hover:bg-cream/30 transition-colors"
                >
                  <MessageCircle size={20} className="text-gray-400" />
                  Stories
                </a>

                <Link
                  to="/#contact"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    // Handle contact/chat if needed, but simple link for now
                  }}
                  className="flex items-center gap-4 px-6 py-4 text-brown font-medium hover:bg-cream/30 transition-colors"
                >
                  <Phone size={20} className="text-gray-400" />
                  Contact Us
                </Link>
              </div>

              {/* Menu Footer */}
              <div className="bg-gray-50 p-6 mt-2">
                <p className="text-sm text-gray-500 mb-1">Need assistance?</p>
                <a href="tel:+918072650628" className="text-brown font-semibold block hover:text-gold transition-colors">
                  Call us: +91 80726 50628
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
