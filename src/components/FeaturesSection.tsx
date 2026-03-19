"use client";

import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    number: '01',
    title: 'PERSONAL TRAINING',
    description: 'Get one-on-one guidance from our certified fitness experts tailored specifically to your goals and abilities.'
  },
  {
    number: '02',
    title: 'EQUIPMENT AND FACILITIES',
    description: 'Train with top-of-the-line equipment in a spacious, clean, and fully-equipped fitness center.'
  },
  {
    number: '03',
    title: 'NUTRITION COUNSELING',
    description: 'Fuel your body properly with personalized nutrition plans designed to complement your training routine.'
  },
  {
    number: '04',
    title: 'SPECIALITY PROGRAMS',
    description: 'Join specialized classes and programs catering to various fitness levels and specific interests.'
  }
];

const FeaturesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" as const } 
    }
  };

  return (
    <section id="service" className="bg-dark-background text-off-white py-24 px-4 overflow-hidden relative">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tight mb-6">
            WHY <span className="text-primary">CHOOSE US</span>
          </h2>
          <p className="text-lg md:text-xl text-off-white/70 max-w-3xl mx-auto leading-relaxed">
            We offer more than just a place to sweat. Our comprehensive approach ensures you have all the tools, support, and environment needed to achieve lasting results.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02, 
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 0 15px rgba(234, 179, 8, 0.1)"
              }}
              transition={{ duration: 0.3 }}
              className="bg-secondary-dark p-10 md:p-12 rounded-2xl flex flex-col border border-transparent hover:border-primary/30 transition-colors duration-300 group cursor-default relative overflow-hidden"
            >
              {/* Decorative hover gradient glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors duration-500 pointer-events-none"></div>

              <div className="mb-8 relative z-10">
                <span className="text-5xl md:text-6xl font-black text-primary opacity-40 block mb-4 group-hover:opacity-100 transition-opacity duration-300">
                  {feature.number}
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-off-white mb-2 uppercase tracking-wide group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
              </div>
              <p className="text-off-white/70 text-lg leading-relaxed mt-auto relative z-10">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
