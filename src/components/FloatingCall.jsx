import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

const FloatingCall = () => {
  return (
    <a
      href="tel:+918925702581"
      className="fixed bottom-24 right-6 z-50 flex items-center justify-center w-14 h-14 bg-orange-500 text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300 animate-float"
      style={{ animationDelay: '0.5s' }}
      aria-label="Call Now"
      id="floating-call-btn"
    >
      <FaPhoneAlt className="w-6 h-6 animate-pulse" />
    </a>
  );
};

export default FloatingCall;
