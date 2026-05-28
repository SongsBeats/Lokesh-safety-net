import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaPhoneAlt, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact Us' },
  ];

  return (
    <>
      <nav
        id="main-navbar"
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'glass-nav shadow-lg py-3'
            : 'bg-white/90 backdrop-blur-md py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2" onClick={() => setIsMobileMenuOpen(false)}>
            <span className="text-xl sm:text-2xl font-heading font-extrabold flex items-center tracking-tight">
              <span className="mr-1">🛡️</span>
              <span className="text-navy-900">Lokesh Safety Nets</span>
              <span className="text-orange-500 font-black">.</span>
            </span>
          </NavLink>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative py-2 text-sm font-semibold tracking-wider transition-colors duration-200 hover:text-orange-500 ${
                    isActive ? 'text-orange-500' : 'text-navy-800'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeUnderline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Call CTA Button */}
          <div className="hidden md:block">
            <a
              href="tel:+918925702581"
              id="desktop-call-btn"
              className="flex items-center space-x-2 bg-orange-500 text-white font-heading font-bold text-sm px-5 py-2.5 rounded-lg shadow-orange-glow hover:bg-orange-600 hover:scale-105 transition-all duration-200"
            >
              <FaPhoneAlt className="w-3.5 h-3.5" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-navy-900 hover:text-orange-500 transition-colors p-2"
              aria-label="Toggle navigation menu"
              id="mobile-menu-toggle-btn"
            >
              {isMobileMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden fixed top-[60px] left-0 right-0 z-30 bg-white/95 backdrop-blur-lg border-b border-navy-100 shadow-xl overflow-hidden"
            id="mobile-drawer-menu"
          >
            <div className="px-4 pt-4 pb-6 space-y-3 flex flex-col">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-lg font-heading font-bold text-base transition-all ${
                      isActive
                        ? 'bg-orange-50 text-orange-500 border-l-4 border-orange-500'
                        : 'text-navy-900 hover:bg-navy-50'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="pt-4 border-t border-navy-100">
                <a
                  href="tel:+918925702581"
                  id="mobile-call-btn"
                  className="flex items-center justify-center space-x-2 bg-orange-500 text-white font-heading font-bold py-3.5 rounded-lg shadow-orange-glow hover:bg-orange-600 transition-colors w-full"
                >
                  <FaPhoneAlt className="w-4 h-4" />
                  <span>Call Now (+91 89257 02581)</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
