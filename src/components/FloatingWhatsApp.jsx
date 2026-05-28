import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/918925702581"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300 whatsapp-pulse"
      aria-label="Chat on WhatsApp"
      id="floating-whatsapp-btn"
    >
      <FaWhatsapp className="w-8 h-8" />
    </a>
  );
};

export default FloatingWhatsApp;
