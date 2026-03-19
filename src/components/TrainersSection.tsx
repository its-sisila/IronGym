"use client";

import React from 'react';
import { motion } from 'framer-motion';

const trainers = [
  { name: 'BORNEY EXITEID', image: '/images/trainer_1.png' },
  { name: 'ELSA WINDIA', image: '/images/trainer_2.png' },
  { name: 'GEOURGE ARYO', image: '/images/trainer_3.png' }
];

const StarRating = () => (
  <div className="flex justify-center space-x-1 mt-2">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-5 h-5 text-primary fill-current" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const TrainersSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="trainers" className="bg-dark-background text-off-white py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-showcase font-black uppercase tracking-tight mb-2">
            OUR PROFESSIONAL
          </h2>
          <h2 className="text-4xl md:text-5xl lg:text-showcase font-black uppercase tracking-tight text-primary mb-6">
            TRAINERS
          </h2>
          <p className="text-lg md:text-xl text-off-white/70 max-w-2xl mx-auto leading-relaxed">
            Whether you&apos;re looking to set up a home gym or enhance your current workout routine
          </p>
        </motion.div>

        {/* Trainers Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {trainers.map((trainer, index) => (
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              key={index} 
              className="relative aspect-[3/4] rounded-sm border border-primary/50 hover:border-primary overflow-hidden group cursor-pointer shadow-2xl transition-colors duration-300"
            >
              <div className="absolute inset-0 bg-secondary-dark pointer-events-none">
                <img 
                  src={trainer.image} 
                  alt={trainer.name} 
                  className="w-full h-full object-cover object-[center_top] grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-100 group-hover:via-black/70 transition-opacity duration-500"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 text-center flex flex-col justify-end h-full z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl font-black uppercase tracking-wider mb-2">{trainer.name}</h3>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <span className="text-sm text-off-white/80 uppercase tracking-widest mb-1">Rate Trainer :</span>
                  <StarRating />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrainersSection;
