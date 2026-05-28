import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheck, FaChevronRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Services = () => {
  const servicesList = [
    {
      image: '/images/balcony_safety_net.png',
      name: 'Balcony Safety Nets',
      desc: 'Durable nylon safety nets for apartments and homes. Prevents accidental falls and keeps your balcony secure. Highly recommended for multi-story residential buildings in Chennai.',
      features: ['UV-resistant material', 'Custom-fit installation', 'Invisible appearance', 'Maintenance-free'],
    },
    {
      image: '/images/pigeon_net.png',
      name: 'Pigeon & Bird Control Nets',
      desc: 'Effective anti-bird nets that humanely prevent pigeons and other birds from nesting on balconies, terraces, and AC units. Keeps your living spaces hygienic and clean.',
      features: ['Bird-friendly (no harm)', 'Weatherproof', 'High tensile strength', 'Long-lasting'],
    },
    {
      image: '/images/invisible_grill.png',
      name: 'Invisible Grills',
      desc: 'Modern stainless steel cable grills that offer safety without obstructing your view. Ideal for balconies and windows, providing a clean architectural finish.',
      features: ['Stainless steel SS316', 'Transparent look', 'Wind & rust resistant', 'Child-safe spacing'],
    },
    {
      image: '/images/children_safety_net.png',
      name: 'Children Safety Nets',
      desc: 'Specially designed nets to protect children from falling through railings, stairways, and open areas. Ensures safe playtime zones around balconies.',
      features: ['Soft yet strong mesh', 'Child-safe materials', 'Aesthetic blending options', 'Custom sizing'],
    },
    {
      image: '/images/pet_safety_net.png',
      name: 'Pet Safety Nets',
      desc: 'Secure nets that prevent pets from escaping through windows or balconies. Safe for cats, dogs, and small animals. Made from durable scratch-resistant fibers.',
      features: ['Tangle-resistant', 'Pet-friendly material', 'Easy cleaning', 'Custom sizes'],
    },
    {
      image: '/images/pool_safety_net.png',
      name: 'Swimming Pool Safety Nets',
      desc: 'Safety covers and nets for swimming pools to prevent accidental drowning, especially for children. Extremely strong load-bearing meshes custom fitted to pool contours.',
      features: ['Load-bearing strength', 'UV stable', 'Easy install/remove', 'Weatherproof'],
    },
    {
      image: '/images/staircase_safety_net.png',
      name: 'Staircase Safety Nets',
      desc: 'Protective nets installed along staircases to prevent children and pets from falling between banisters. Ideal for schools, offices, and duplex homes.',
      features: ['Seamless fit', 'Strong nylon', 'Aesthetic options', 'Quick installation'],
    },
    {
      image: '/images/industrial_safety_net.png',
      name: 'Industrial Safety Nets',
      desc: 'Heavy-duty nets for construction sites, factories, and warehouses. Protects workers from falling debris and complies fully with industrial building safety standards.',
      features: ['High load capacity', 'HDPE material', 'Fire-retardant options', 'IS standard compliant'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  };

  return (
    <div className="flex-grow">
      {/* Hero Header */}
      <section className="bg-navy-900 text-white py-16 relative overflow-hidden" id="services-hero">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-navy-800 to-navy-950 opacity-80" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left space-y-4">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-xs sm:text-sm text-navy-300 font-semibold uppercase tracking-wider">
            <Link to="/" className="hover:text-orange-500 transition-colors">Home</Link>
            <FaChevronRight className="w-2.5 h-2.5 text-navy-400" />
            <span className="text-orange-500">Services</span>
          </nav>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white">
            Our Services
          </h1>
          <p className="text-navy-200 text-sm sm:text-base md:text-lg max-w-2xl font-normal leading-relaxed">
            Comprehensive safety net and grill installation solutions for every need. Hand-installed with international safety standards.
          </p>
        </div>
      </section>

      {/* Services Detail Grid */}
      <section className="py-20 lg:py-24 bg-offwhite" id="services-detail-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {servicesList.map((service, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white rounded-3xl overflow-hidden hover:scale-[1.01] hover:shadow-weightless-hover transition-all duration-300 border border-navy-100 flex flex-col justify-between text-left group"
              >
                <div>
                  {/* Service Card Image Header */}
                  <div className="relative w-full aspect-[16/9] overflow-hidden bg-navy-950">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent" />
                  </div>

                  <div className="p-8 sm:p-10 space-y-6">
                    {/* Header Row */}
                    <div className="flex items-center space-x-4">
                      <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-navy-900 tracking-tight group-hover:text-orange-500 transition-colors">
                        {service.name}
                      </h3>
                    </div>

                  {/* Description */}
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {service.desc}
                  </p>

                  {/* Bullet points */}
                  <div className="space-y-2.5 pt-2">
                    <h4 className="text-xs font-heading font-bold uppercase tracking-wider text-navy-500">
                      Key Features & Benefits
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center space-x-2.5">
                          <div className="w-5 h-5 bg-green-50 rounded-full flex items-center justify-center text-green-500 flex-shrink-0 border border-green-200">
                            <FaCheck className="w-2.5 h-2.5" />
                          </div>
                          <span className="text-navy-900 text-xs sm:text-sm font-medium">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

                {/* Call-to-action button */}
                <div className="px-8 pb-8 sm:px-10 sm:pb-10 mt-2">
                  <div className="pt-6 border-t border-navy-50">
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-heading font-bold px-6 py-3 rounded-xl shadow-sm hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 w-full sm:w-auto text-sm"
                    >
                      <span>Get a Quote</span>
                      <FaChevronRight className="w-2.5 h-2.5 ml-2" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
