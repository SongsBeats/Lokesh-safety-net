import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaArrowRight, FaShieldAlt, FaAward, FaCalendarCheck, FaCheckCircle, FaUserCheck, FaChevronRight } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';

const imagePath = (fileName) => `${import.meta.env.BASE_URL}images/${fileName}`;

// Count-up helper component that starts when scrolled into view
const StatCounter = ({ target, suffix = '', duration = 1500 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const end = parseInt(target, 10);
    const startTime = performance.now();

    const animateCount = (timestamp) => {
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animateCount);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="text-3xl sm:text-4xl font-heading font-extrabold text-navy-900 block">
      {count}
      {suffix}
    </span>
  );
};

const Home = () => {
  const stats = [
    { target: '500', suffix: '+', label: 'Installations Done' },
    { target: '15', suffix: '+', label: 'Service Areas' },
    { target: '100', suffix: '%', label: 'Safety Certified' },
    { target: '7', suffix: '', label: 'Days a Week Service' },
  ];

  const serviceOverview = [
    { image: imagePath('balcony_safety_net.png'), name: 'Balcony Safety Nets', desc: 'Premium durable nylon safety nets preventing falls and securing balconies.' },
    { image: imagePath('pigeon_net.png'), name: 'Pigeon & Bird Control Nets', desc: 'Humane bird prevention systems for balconies, terraces, and AC units.' },
    { image: imagePath('invisible_grill.png'), name: 'Invisible Grills', desc: 'SS316 steel cable safety grills keeping panoramic views completely open.' },
    { image: imagePath('children_safety_net.png'), name: 'Children Safety Nets', desc: 'Reinforced fall prevention nets for banisters, stairways, and windows.' },
    { image: imagePath('pet_safety_net.png'), name: 'Pet Safety Nets', desc: 'Strong, chew-resistant guards ensuring safety for cats, dogs, and birds.' },
    { image: imagePath('industrial_safety_net.png'), name: 'Industrial Safety Nets', desc: 'Heavy load-bearing debris nets for construction sites and warehouses.' },
  ];

  const serviceAreas = [
    'Padur', 'Chennai', 'Siruseri', 'Kelambakkam', 'Adyar', 
    'Thiruporur', 'Perungudi', 'Karapakkam', 'Thoraipakkam', 
    'Injambakkam', 'Neelankarai', 'Semmancheri', 'Thiruvanmiyur', 
    'Sholinganallur', 'Kottivakkam'
  ];

  const projects = [
    { id: 1, url: imagePath('balcony_safety_net.png'), alt: 'Balcony Safety Net Installation' },
    { id: 2, url: imagePath('pigeon_net.png'), alt: 'Pigeon Bird Control Netting' },
    { id: 3, url: imagePath('invisible_grill.png'), alt: 'Invisible Steel Grill' },
    { id: 4, url: imagePath('children_safety_net.png'), alt: 'Staircase Children Safety Net' },
    { id: 5, url: imagePath('pet_safety_net.png'), alt: 'Pet Safety Netting' },
    { id: 6, url: imagePath('pool_safety_net.png'), alt: 'Swimming Pool Safety Netting' },
    { id: 7, url: imagePath('staircase_safety_net.png'), alt: 'Building Staircase Netting' },
    { id: 8, url: imagePath('industrial_safety_net.png'), alt: 'Warehouse Industrial Safety Net' },
    { id: 9, url: imagePath('project_balcony.png'), alt: 'Balcony Net Installation' },
    { id: 10, url: imagePath('project_window.png'), alt: 'Window Bird Protection' },
  ];

  const heroHeading = "Chennai's Trusted Safety Net & Invisible Grill Specialists";
  const heroWords = heroHeading.split(" ");

  // Refs for scroll animations
  const whyUsRef = useRef(null);
  const isWhyUsInView = useInView(whyUsRef, { once: true, margin: '-100px' });

  return (
    <div className="flex-grow">
      {/* Hero Section */}
      <section className="bg-white text-navy-900 py-20 lg:py-28 relative overflow-hidden border-b border-navy-100" id="hero-section">
        {/* Floating background decorative details */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-navy-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-navy-50 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center space-x-2 bg-navy-50 border border-navy-100 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-navy-700">
                <FaShieldAlt className="w-3.5 h-3.5 text-orange-500" />
                <span>Premium Quality Guarantee</span>
              </div>

              {/* Staggered Heading Reveal */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold leading-tight text-navy-900">
                {heroWords.map((word, i) => (
                  <motion.span
                    key={i}
                    className="inline-block mr-3"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: i * 0.08,
                      duration: 0.5,
                      ease: [0.215, 0.61, 0.355, 1],
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-slate-600 text-lg md:text-xl font-normal leading-relaxed max-w-xl"
              >
                Protecting homes, balconies, and businesses since day one. Expert installations, customized solutions.
              </motion.p>

              {/* Hero CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-2"
              >
                <Link
                  to="/contact"
                  id="hero-primary-cta"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-heading font-bold px-8 py-4 rounded-xl text-center shadow-orange-glow hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
                >
                  Get Free Quote
                </Link>
                <Link
                  to="/services"
                  id="hero-secondary-cta"
                  className="border border-navy-200 hover:border-navy-900 hover:bg-navy-50 text-navy-900 font-heading font-bold px-8 py-4 rounded-xl text-center hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
                >
                  View Our Services
                </Link>
              </motion.div>
            </div>

            {/* Right Graphics */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.4, type: 'spring', stiffness: 100 }}
                className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-navy-50 rounded-3xl border border-navy-100 flex items-center justify-center animate-float"
              >
                {/* Logo / Shield illustration */}
                <div className="text-center p-8 space-y-4">
                  <div className="inline-flex w-24 h-24 bg-navy-100 border border-navy-200 text-orange-500 rounded-full items-center justify-center shadow-sm mb-2">
                    <FaShieldAlt className="w-12 h-12" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-navy-900">Lokesh Safety</h3>
                  <p className="text-navy-700 text-sm">Certified Balcony Security Systems</p>
                </div>

                {/* Floating Badges */}
                <motion.div
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  className="absolute -left-6 top-10 bg-white/95 backdrop-blur shadow-xl rounded-2xl p-4 flex items-center space-x-3 text-navy-950 border border-navy-100"
                >
                  <div className="text-green-500 bg-green-50 p-2 rounded-lg"><FaCheckCircle className="w-5 h-5" /></div>
                  <div>
                    <h4 className="font-bold text-sm">100% Safe</h4>
                    <p className="text-xs text-slate-500">Premium Nets</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.1, duration: 0.5 }}
                  className="absolute -right-6 bottom-16 bg-white/95 backdrop-blur shadow-xl rounded-2xl p-4 flex items-center space-x-3 text-navy-950 border border-navy-100"
                >
                  <div className="text-orange-500 bg-orange-50 p-2 rounded-lg"><FaUserCheck className="w-5 h-5" /></div>
                  <div>
                    <h4 className="font-bold text-sm">Expert Team</h4>
                    <p className="text-xs text-slate-500">Verified Crew</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.3, duration: 0.5 }}
                  className="absolute left-6 -bottom-6 bg-white/95 backdrop-blur shadow-xl rounded-2xl px-5 py-3.5 flex items-center space-x-2 text-navy-950 border border-navy-100"
                >
                  <span className="text-orange-500">✔</span>
                  <span className="font-heading font-extrabold text-sm text-navy-900 tracking-tight">Free Estimates</span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-navy-50 py-8 border-y border-navy-100" id="stats-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, i) => (
              <div key={i} className="space-y-1">
                <StatCounter target={stat.target} suffix={stat.suffix} />
                <p className="text-navy-600 text-xs sm:text-sm font-semibold uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Image Slideshow (Auto-Scroll Carousel) */}
      <section className="py-12 bg-white border-b border-navy-100" id="home-slideshow-showcase">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-orange-500 font-heading font-bold uppercase tracking-widest text-xs mb-6">
            Our Work — Installations Across Chennai
          </h2>
          <div className="mask-fade-edges relative overflow-hidden px-4">
            <Swiper
              modules={[Autoplay, FreeMode]}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              speed={6000}
              loop={true}
              freeMode={true}
              allowTouchMove={true}
              spaceBetween={16}
              slidesPerView={1.5}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
              className="w-full"
            >
              {projects.map((project) => (
                <SwiperSlide key={project.id}>
                  <div className="relative group overflow-hidden rounded-lg border border-navy-100 aspect-[8/5] bg-navy-950">
                    <img
                      src={project.url}
                      alt={project.alt}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 lg:py-24 bg-navy-50/50" id="services-overview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold tracking-tight">
              What We Do
            </h2>
            <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full" />
            <p className="text-slate-500 text-sm leading-relaxed">
              We deliver custom-fit safety structures for residential complexes, houses, offices, and commercial establishments.
            </p>
          </div>

          {/* Grid of 6 Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceOverview.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="bg-white text-navy-900 rounded-2xl overflow-hidden hover:scale-[1.03] hover:shadow-weightless-hover transition-all duration-300 group border border-navy-100 text-left flex flex-col justify-between shadow-sm"
              >
                <div>
                  {/* Service Card Image Header */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-navy-50">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/5 to-transparent" />
                  </div>

                  <div className="p-8 space-y-3">
                    <h3 className="font-heading font-bold text-lg text-navy-900 group-hover:text-orange-500 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="px-8 pb-8">
                  <div className="pt-4 border-t border-navy-100">
                    <Link
                      to="/services"
                      className="inline-flex items-center text-orange-500 hover:text-orange-400 font-heading font-bold text-sm tracking-wide space-x-1"
                    >
                      <span>Learn More</span>
                      <FaArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 lg:py-24 bg-white overflow-hidden" id="why-choose-us">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={whyUsRef} className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Content Checklist */}
            <motion.div
              style={{ x: isWhyUsInView ? 0 : -50, opacity: isWhyUsInView ? 1 : 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="lg:col-span-6 space-y-8 text-left"
            >
              <div className="space-y-3">
                <h2 className="text-3xl sm:text-4xl font-heading font-extrabold tracking-tight">
                  Why Choose Us
                </h2>
                <div className="w-16 h-1 bg-orange-500 rounded-full" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="flex items-start space-x-3">
                  <FaCheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-navy-900 text-base">Premium Quality Materials</h4>
                    <p className="text-slate-500 text-xs mt-1">High tensile strength, UV-resistant, and weather-proof nets.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <FaAward className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-navy-900 text-base">Certified Installers</h4>
                    <p className="text-slate-500 text-xs mt-1">Skilled professional safety crew handling every install with precision.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="text-2xl mt-0.5">💰</span>
                  <div>
                    <h4 className="font-bold text-navy-900 text-base">Affordable Pricing</h4>
                    <p className="text-slate-500 text-xs mt-1">Best-in-market rates with transparent quotes and no hidden fees.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <FaCalendarCheck className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-navy-900 text-base">Same-Day Estimates</h4>
                    <p className="text-slate-500 text-xs mt-1">Rapid on-site surveys and quotations across Chennai.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Accent Block Quote */}
            <motion.div
              style={{ x: isWhyUsInView ? 0 : 50, opacity: isWhyUsInView ? 1 : 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="lg:col-span-6"
            >
              <div className="relative p-10 bg-navy-50 rounded-3xl text-left border border-navy-100 shadow-lg overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-navy-100/50 rounded-full blur-2xl" />
                <div className="text-5xl text-orange-500 opacity-50 font-serif leading-none select-none">“</div>
                <blockquote className="text-xl sm:text-2xl md:text-3xl font-heading font-extrabold text-navy-900 leading-snug mt-2">
                  We don't just install nets — we install confidence.
                </blockquote>
                <div className="text-5xl text-orange-500 opacity-50 font-serif leading-none select-none text-right mt-2">”</div>
                <div className="mt-6 flex items-center space-x-3">
                  <div className="w-10 h-0.5 bg-orange-500" />
                  <span className="text-orange-500 text-sm font-bold uppercase tracking-wider">
                    Our Core Philosophy
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Areas We Serve Section */}
      <section className="py-20 lg:py-24 bg-navy-50/50" id="service-areas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold tracking-tight">
              Areas We Serve
            </h2>
            <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full" />
            <p className="text-slate-500 text-sm">
              We provide swift safety installations throughout Chennai and surrounding suburbs.
            </p>
          </div>

          {/* Badge Pill Grid */}
          <div className="flex flex-wrap justify-center gap-3.5 max-w-4xl mx-auto">
            {serviceAreas.map((area, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.03, duration: 0.3 }}
                className="bg-white border border-navy-100 hover:border-orange-500 hover:scale-105 transition-all px-5 py-2.5 rounded-full text-navy-900 font-heading font-bold text-sm shadow-sm cursor-default"
              >
                {area}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-navy-900 text-white py-16 relative overflow-hidden" id="cta-banner">
        <div className="absolute top-0 right-0 w-80 h-full bg-navy-850/50 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight">
            Ready to Make Your Home Safer?
          </h2>
          <p className="text-navy-200 text-base md:text-lg max-w-xl mx-auto">
            Get in touch with us for a free estimate or consultation. Send us a message on WhatsApp and we will get back to you immediately.
          </p>
          <div className="pt-2">
            <a
              href="https://wa.me/918925702581"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-[#25D366] hover:bg-[#22c55e] text-white font-heading font-bold px-8 py-4 rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
              id="cta-whatsapp-link"
            >
              <FaWhatsapp className="w-6 h-6" />
              <span>WhatsApp Us Now</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
