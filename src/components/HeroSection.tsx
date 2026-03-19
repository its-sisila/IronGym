"use client";

import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  return (
    <section className="relative bg-dark-background text-off-white min-h-screen flex flex-col overflow-hidden">
      
      {/* Background Image with slight slow zoom animation */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="/images/hero_background.png" 
          alt="Gym background" 
          className="w-full h-full object-cover object-center"
        />
        {/* Dark gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark-background via-dark-background/85 to-dark-background/40"></div>
        <div className="absolute inset-0 bg-dark-background/30"></div>
      </motion.div>

      {/* Hero Overlay Image (person cutout) */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className="absolute right-[13%] bottom-[-170px] z-[2] pointer-events-none hidden lg:block"
      >
        <img
          src="/images/hero_overlay.png"
          alt="Fitness model"
          className="h-[140vh] w-auto object-contain object-bottom drop-shadow-2xl"
        />
      </motion.div>

      {/* Large "LEVEL UP" Background Text Images */}
      <div className="absolute right-8 xl:right-16 top-1/2 -translate-y-1/2 z-[1] pointer-events-none select-none hidden lg:flex flex-col items-end gap-2">
        <motion.img 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 0.15, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          src="/images/LEVEL_word.png" 
          alt="" 
          className="w-[400px] xl:w-[500px]"
        />
        <motion.img 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 0.15, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          src="/images/UP_word.png" 
          alt="" 
          className="w-[250px] xl:w-[300px]"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 flex-grow flex flex-col justify-center pt-32 pb-12">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          
          <motion.h1 
            variants={itemVariants} 
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tight leading-[1.1] mb-8"
          >
            READY TO TRAIN<br />
            <span className="text-primary drop-shadow-[0_0_15px_rgba(234,179,8,0.3)]">YOUR BODY</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-base md:text-lg text-off-white/70 max-w-lg mb-10 leading-relaxed font-normal"
          >
            Gym training is a structured and disciplined approach to physical exercise that focuses on strength, endurance and overall fitness improvement.
          </motion.p>

          <motion.div variants={itemVariants}>
            <button className="border border-primary text-primary hover:bg-primary hover:text-dark-background transition-colors duration-300 font-bold py-4 px-12 text-sm uppercase tracking-widest relative overflow-hidden group">
              <span className="relative z-10">LEST JOIN NOW</span>
              <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></div>
            </button>
          </motion.div>

        </motion.div>
      </div>

      {/* Stats Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="relative z-10 w-full border-t border-off-white/10 bg-dark-background/40 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 py-8 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-off-white/20">
          <div className="flex flex-col items-center md:items-start py-6 md:py-0 md:pr-12 group cursor-pointer">
            <span className="text-4xl md:text-5xl font-black text-primary mb-1 group-hover:scale-110 transition-transform origin-left">20+</span>
            <span className="text-sm font-medium text-off-white/60 uppercase tracking-widest group-hover:text-off-white transition-colors">
              Years of Experience
            </span>
          </div>
          <div className="flex flex-col items-center md:items-start py-6 md:py-0 md:px-12 group cursor-pointer">
            <span className="text-4xl md:text-5xl font-black text-primary mb-1 group-hover:scale-110 transition-transform origin-left">15K+</span>
            <span className="text-sm font-medium text-off-white/60 uppercase tracking-widest group-hover:text-off-white transition-colors">
              Members Join
            </span>
          </div>
          <div className="flex flex-col items-center md:items-start py-6 md:py-0 md:pl-12 group cursor-pointer">
            <span className="text-4xl md:text-5xl font-black text-primary mb-1 group-hover:scale-110 transition-transform origin-left">14K+</span>
            <span className="text-sm font-medium text-off-white/60 uppercase tracking-widest group-hover:text-off-white transition-colors">
              Happy members
            </span>
          </div>
        </div>
      </motion.div>

    </section>
  );
};

export default HeroSection;
