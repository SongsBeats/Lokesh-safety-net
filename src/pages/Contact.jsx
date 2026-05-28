import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaWhatsapp, FaGlobe, FaMapMarkerAlt, FaClock, FaCheckCircle, FaPaperPlane, FaChevronRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Balcony Safety Nets',
    location: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const servicesDropdown = [
    'Balcony Safety Nets',
    'Pigeon & Bird Control Nets',
    'Invisible Grills',
    'Children Safety Nets',
    'Pet Safety Nets',
    'Swimming Pool Safety Nets',
    'Staircase Safety Nets',
    'Industrial Safety Nets',
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9+\s-]{10,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.location.trim()) newErrors.location = 'Area / Location is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setIsSubmitted(true);
      // Reset form fields
      setFormData({
        name: '',
        phone: '',
        service: 'Balcony Safety Nets',
        location: '',
        message: '',
      });
      // Hide success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  return (
    <div className="flex-grow">
      {/* Hero Header */}
      <section className="bg-navy-900 text-white py-16 relative overflow-hidden" id="contact-hero">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-navy-800 to-navy-950 opacity-80" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left space-y-4">
          <nav className="flex items-center space-x-2 text-xs sm:text-sm text-navy-300 font-semibold uppercase tracking-wider">
            <Link to="/" className="hover:text-orange-500 transition-colors">Home</Link>
            <FaChevronRight className="w-2.5 h-2.5 text-navy-400" />
            <span className="text-orange-500">Contact Us</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white">
            Get In Touch
          </h1>
          <p className="text-navy-200 text-sm sm:text-base md:text-lg max-w-2xl font-normal leading-relaxed">
            Request a free estimate or ask us anything. We are available 7 days a week for site surveys across Chennai.
          </p>
        </div>
      </section>

      {/* Main Two-Column Layout */}
      <section className="py-20 lg:py-24 bg-offwhite" id="contact-main">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left - Contact Form */}
            <div className="lg:col-span-7 bg-white border-l-8 border-l-navy-900 border border-navy-100 rounded-2xl p-8 sm:p-10 shadow-weightless relative overflow-hidden">
              <div className="space-y-2 mb-8 text-left">
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-navy-900 tracking-tight">
                  Send Us an Enquiry
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  Fill in the details below, and our installation manager will contact you.
                </p>
              </div>

              {/* Success Toast */}
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center space-x-3 text-green-800 text-left"
                    id="contact-form-success-toast"
                  >
                    <FaCheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-sm">Thank you!</p>
                      <p className="text-xs">Your enquiry has been received. We'll contact you shortly.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Form Element */}
              <form onSubmit={handleSubmit} className="space-y-5 text-left" id="contact-enquiry-form">
                <div>
                  <label htmlFor="name-input" className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">
                    Full Name <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name-input"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.name ? 'border-red-500 bg-red-50/10' : 'border-navy-100'
                    } focus:outline-none focus:ring-2 focus:ring-orange-500/25 focus:border-orange-500 transition-all text-sm`}
                    placeholder="Enter your name"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.name}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone-input" className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">
                      Phone Number <span className="text-orange-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone-input"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.phone ? 'border-red-500 bg-red-50/10' : 'border-navy-100'
                      } focus:outline-none focus:ring-2 focus:ring-orange-500/25 focus:border-orange-500 transition-all text-sm`}
                      placeholder="e.g. 089257 02581"
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.phone}</p>}
                  </div>

                  <div>
                    <label htmlFor="service-select" className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service-select"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-navy-100 focus:outline-none focus:ring-2 focus:ring-orange-500/25 focus:border-orange-500 bg-white transition-all text-sm"
                    >
                      {servicesDropdown.map((service, idx) => (
                        <option key={idx} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="location-input" className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">
                    Area / Location in Chennai <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="location-input"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.location ? 'border-red-500 bg-red-50/10' : 'border-navy-100'
                    } focus:outline-none focus:ring-2 focus:ring-orange-500/25 focus:border-orange-500 transition-all text-sm`}
                    placeholder="e.g. MRC Nagar, Adyar, Sholinganallur"
                  />
                  {errors.location && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.location}</p>}
                </div>

                <div>
                  <label htmlFor="message-textarea" className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">
                    Message / Special Instructions
                  </label>
                  <textarea
                    id="message-textarea"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-navy-100 focus:outline-none focus:ring-2 focus:ring-orange-500/25 focus:border-orange-500 transition-all text-sm"
                    placeholder="Tell us about your requirements (e.g. balcony size, preferred dates)"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    id="form-submit-btn"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-heading font-bold py-4 rounded-xl shadow-orange-glow hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center space-x-2 text-sm sm:text-base cursor-pointer"
                  >
                    <FaPaperPlane className="w-3.5 h-3.5" />
                    <span>Send Enquiry</span>
                  </button>
                </div>
              </form>
            </div>

            {/* Right - Contact Details Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-navy-900 text-white rounded-2xl p-8 sm:p-10 border border-navy-800 text-left shadow-xl space-y-8">
                <div className="space-y-2">
                  <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white tracking-tight">
                    Contact Details
                  </h3>
                  <div className="w-10 h-1 bg-orange-500 rounded-full" />
                </div>

                <div className="space-y-6">
                  {/* Phone */}
                  <a href="tel:+918925702581" className="flex items-start space-x-4 group">
                    <div className="w-10 h-10 bg-navy-850 rounded-xl border border-navy-800 flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform duration-200">
                      <FaPhoneAlt className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-navy-400">Phone</h4>
                      <p className="text-white text-base font-bold mt-1 group-hover:text-orange-500 transition-colors">
                        089257 02581
                      </p>
                    </div>
                  </a>

                  {/* WhatsApp */}
                  <a href="https://wa.me/918925702581" target="_blank" rel="noopener noreferrer" className="flex items-start space-x-4 group">
                    <div className="w-10 h-10 bg-navy-850 rounded-xl border border-navy-800 flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform duration-200">
                      <FaWhatsapp className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-navy-400">WhatsApp</h4>
                      <p className="text-white text-base font-bold mt-1 group-hover:text-orange-500 transition-colors">
                        Chat Now
                      </p>
                    </div>
                  </a>

                  {/* Website */}
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-navy-850 rounded-xl border border-navy-800 flex items-center justify-center text-orange-500">
                      <FaGlobe className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-navy-400">Website</h4>
                      <p className="text-white text-base font-bold mt-1">
                        lokeshbalconybirdnets.com
                      </p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-navy-850 rounded-xl border border-navy-800 flex items-center justify-center text-orange-500">
                      <FaMapMarkerAlt className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-navy-400">Address</h4>
                      <p className="text-navy-300 text-sm leading-relaxed mt-1">
                        Sun TV Network Ltd, Murasoli Marian Towers, 73 MRC Nagar Main road, near Mandaveli, Chennai 600028
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-navy-850 rounded-xl border border-navy-800 flex items-center justify-center text-orange-500">
                      <FaClock className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-navy-400">Open Hours</h4>
                      <p className="text-navy-300 text-sm mt-1">
                        Mon–Sun: 6:00 AM – 10:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                {/* Large Green WhatsApp button */}
                <div className="pt-4">
                  <a
                    href="https://wa.me/918925702581"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 bg-[#25D366] hover:bg-[#22c55e] text-white font-heading font-bold py-3.5 rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 w-full"
                    id="contact-whatsapp-direct-btn"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="w-full h-[400px]" id="contact-map-section">
        <iframe
          title="Lokesh Safety Nets Detailed Map Location"
          src="https://maps.google.com/maps?q=Sun+TV+Network+Ltd,+Murasoli+Marian+Towers,+73,+MRC+Nagar+Main+road,+near+Mandaveli,+Chennai,+Tamil+Nadu+600028&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
  );
};

export default Contact;
