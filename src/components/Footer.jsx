import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaPhoneAlt, FaWhatsapp, FaGlobe, FaMapMarkerAlt, FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white pt-16 pb-8 border-t border-navy-900" id="main-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Three Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: About */}
          <div className="space-y-4">
            <h3 className="text-xl font-heading font-extrabold text-white tracking-tight flex items-center">
              <span className="mr-2">🛡️</span> Lokesh Safety Nets
            </h3>
            <p className="text-navy-300 text-sm leading-relaxed max-w-sm">
              Chennai's leading provider and installer of high-durability safety nets and invisible grills. We are committed to securing your family, home, and commercial spaces with international safety standard materials.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4 pt-2">
              <a
                href="https://wa.me/918925702581"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-navy-900 flex items-center justify-center text-white hover:bg-orange-500 hover:text-white transition-all duration-300 border border-navy-800"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-navy-900 flex items-center justify-center text-white hover:bg-orange-500 hover:text-white transition-all duration-300 border border-navy-800"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-navy-900 flex items-center justify-center text-white hover:bg-orange-500 hover:text-white transition-all duration-300 border border-navy-800"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:pl-12">
            <h4 className="text-base font-heading font-bold text-orange-500 tracking-wider uppercase mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <NavLink to="/" className="text-navy-300 hover:text-orange-500 text-sm transition-colors duration-200">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="text-navy-300 hover:text-orange-500 text-sm transition-colors duration-200">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-navy-300 hover:text-orange-500 text-sm transition-colors duration-200">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-navy-300 hover:text-orange-500 text-sm transition-colors duration-200">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-4">
            <h4 className="text-base font-heading font-bold text-orange-500 tracking-wider uppercase mb-2">
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm text-navy-300">
                <FaMapMarkerAlt className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span>
                  Sun TV Network Ltd, Murasoli Marian Towers, 73 MRC Nagar Main Rd, Chennai 600028
                </span>
              </li>
              <li>
                <a href="tel:+918925702581" className="flex items-center space-x-3 text-sm text-navy-300 hover:text-orange-500 transition-colors">
                  <FaPhoneAlt className="w-4 h-4 text-orange-500" />
                  <span>+91 89257 02581</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/918925702581"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-sm text-navy-300 hover:text-orange-500 transition-colors"
                >
                  <FaWhatsapp className="w-4.5 h-4.5 text-orange-500" />
                  <span>WhatsApp: Chat Now</span>
                </a>
              </li>
              <li className="flex items-center space-x-3 text-sm text-navy-300">
                <FaGlobe className="w-4 h-4 text-orange-500" />
                <span>lokeshbalconybirdnets.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-navy-900 pt-6 mt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-navy-400">
          <p>© {currentYear} Lokesh Safety Nets Chennai. All Rights Reserved.</p>
          <p className="mt-2 sm:mt-0">Your Safety. Our Commitment.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
