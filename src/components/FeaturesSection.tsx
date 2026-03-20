"use client";

import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    number: '01',
    title: 'PERSONAL TRAINING',
    description: 'Our gyms offer personalized training sessions with certified personal trainers who create customized workout plans based on individual goals'
  },
  {
    number: '02',
    title: 'EQUIPMENT AND FACILITIES',
    description: 'Our gyms offer personalized training sessions with certified personal trainers who create customized workout plans based on individual goals'
  },
  {
    number: '03',
    title: 'NUTRITION COUNSELING',
    description: 'Our gyms offer personalized training sessions with certified personal trainers who create customized workout plans based on individual goals'
  },
  {
    number: '04',
    title: 'SPECIALITY PROGRAMS',
    description: 'Our gyms offer personalized training sessions with certified personal trainers who create customized workout plans based on individual goals'
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
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" as const } 
    }
  };

  return (
    <section id="service" className="bg-dark-background text-off-white py-16 lg:py-24 px-4 overflow-hidden relative">
      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter mb-6 font-sans">
            WHY <span className="text-primary">CHOOSE US</span>
          </h2>
          <p className="text-base md:text-lg text-off-white/70 max-w-2xl mx-auto leading-relaxed">
            Gym workouts offer a versatile and customisable experience, allowing <br className="hidden md:block" /> everyone to set specific fitness goals.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="p-8 md:p-10 border border-primary flex flex-col hover:bg-primary/5 transition-all duration-300"
            >
              <span className="text-3xl md:text-4xl font-bold text-off-white mb-8 block">
                {feature.number}
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-3 uppercase tracking-wide">
                {feature.title}
              </h3>
              <p className="text-off-white/70 text-base md:text-lg leading-relaxed">
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
