import React from 'react';
import { Link } from 'react-router-dom';
import { FaShieldAlt, FaTools, FaHandHoldingUsd, FaUserShield, FaCheckCircle, FaClock, FaMapMarkerAlt, FaChevronRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const About = () => {
  const coreValues = [
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: 'Safety First',
      desc: 'We never compromise on safety parameters or structural strength.',
    },
    {
      icon: <FaTools className="w-8 h-8" />,
      title: 'Expert Craftsmanship',
      desc: 'Precision fit-outs carried out by trained safety installation experts.',
    },
    {
      icon: <FaHandHoldingUsd className="w-8 h-8" />,
      title: 'Affordable for All',
      desc: 'Fair pricing with no compromise on the durability of raw materials.',
    },
    {
      icon: <FaUserShield className="w-8 h-8" />,
      title: 'Customer Trust',
      desc: 'Honest assessments, high durability, and same-day estimate capabilities.',
    },
  ];

  return (
    <div className="flex-grow">
      {/* Hero Header */}
      <section className="bg-navy-900 text-white py-16 relative overflow-hidden" id="about-hero">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-navy-800 to-navy-950 opacity-80" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left space-y-4">
          <nav className="flex items-center space-x-2 text-xs sm:text-sm text-navy-300 font-semibold uppercase tracking-wider">
            <Link to="/" className="hover:text-orange-500 transition-colors">Home</Link>
            <FaChevronRight className="w-2.5 h-2.5 text-navy-400" />
            <span className="text-orange-500">About Us</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white">
            About Lokesh Safety Nets
          </h1>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 lg:py-24 bg-white" id="our-story-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Story Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6"
            >
              <img
                src="https://placehold.co/500x400/0B1F4B/F97316?text=Our+Team"
                alt="Lokesh Safety Nets Team"
                className="w-full rounded-3xl shadow-weightless border border-navy-150"
              />
            </motion.div>

            {/* Story Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 text-left space-y-6"
            >
              <div className="space-y-3">
                <h2 className="text-3xl font-heading font-extrabold tracking-tight">Our Story</h2>
                <div className="w-16 h-1 bg-orange-500 rounded-full" />
              </div>
              <p className="text-slate-600 text-base leading-relaxed">
                Lokesh Safety Nets Chennai is a leading safety equipment supplier dedicated to protecting homes and businesses across Chennai. With years of hands-on experience and a passion for safety, our expert team provides customized solutions to every client.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                We specialize in balcony nets, bird control systems, invisible grills, and much more — all installed with precision and care. Whether it is a high-rise residential flat or a complex warehouse structure, we design solutions that fit your budget and architecture.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 bg-navy-50/50" id="our-mission-section">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <div className="w-16 h-1.5 bg-orange-500 mx-auto rounded-full" />
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold tracking-tight">Our Mission</h2>
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-heading font-extrabold text-navy-900 leading-snug max-w-3xl mx-auto">
            “To deliver the highest-quality safety solutions that protect what matters most — your family, your home, and your peace of mind.”
          </blockquote>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 lg:py-24 bg-white" id="core-values-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold tracking-tight">
              Our Core Values
            </h2>
            <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="bg-navy-900 text-white rounded-2xl p-8 hover:scale-[1.03] transition-transform duration-300 border border-navy-800 text-left space-y-4"
              >
                <div className="text-orange-500 bg-navy-850 w-14 h-14 rounded-xl flex items-center justify-center border border-navy-800">
                  {value.icon}
                </div>
                <h3 className="font-heading font-bold text-lg text-white">
                  {value.title}
                </h3>
                <p className="text-navy-300 text-sm leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials / Badges Section */}
      <section className="py-12 bg-orange-500 text-white" id="credentials-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-around gap-6 text-center">
            <h3 className="font-heading font-extrabold text-xl sm:text-2xl tracking-tight max-w-xs md:text-left">
              Licensed professionals with years of field experience
            </h3>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <span className="flex items-center space-x-2 bg-white/10 px-5 py-2.5 rounded-full border border-white/20 font-bold text-sm">
                <FaCheckCircle className="w-4 h-4 text-white" />
                <span>Certified Installers</span>
              </span>
              <span className="flex items-center space-x-2 bg-white/10 px-5 py-2.5 rounded-full border border-white/20 font-bold text-sm">
                <FaCheckCircle className="w-4 h-4 text-white" />
                <span>Quality Assured</span>
              </span>
              <span className="flex items-center space-x-2 bg-white/10 px-5 py-2.5 rounded-full border border-white/20 font-bold text-sm">
                <FaCheckCircle className="w-4 h-4 text-white" />
                <span>500+ Projects Completed</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Business Info / Map Section */}
      <section className="py-20 lg:py-24 bg-navy-50/30" id="business-info-block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            {/* Info Box */}
            <div className="lg:col-span-5 bg-white border border-navy-100 rounded-3xl p-8 sm:p-10 shadow-weightless text-left flex flex-col justify-center space-y-6">
              <h3 className="font-heading font-extrabold text-2xl text-navy-900 tracking-tight">
                Our Office Hours &amp; Location
              </h3>
              <div className="w-12 h-1 bg-orange-500 rounded-full" />
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <FaClock className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-navy-900 text-sm uppercase tracking-wider">Open Hours</h4>
                    <p className="text-slate-600 text-sm mt-1">Monday – Sunday: 6:00 AM – 10:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <FaMapMarkerAlt className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-navy-900 text-sm uppercase tracking-wider">Location</h4>
                    <p className="text-slate-600 text-sm mt-1">
                      Sun TV Network Ltd, Murasoli Marian Towers, 73 MRC Nagar Main Rd, Chennai 600028
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Map Box */}
            <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-navy-100 shadow-weightless aspect-video lg:aspect-auto min-h-[300px]">
              <iframe
                title="Lokesh Safety Nets Office Map"
                src="https://maps.google.com/maps?q=Sun+TV+Network+Ltd,+Murasoli+Marian+Towers,+73,+MRC+Nagar+Main+road,+near+Mandaveli,+Chennai,+Tamil+Nadu+600028&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
