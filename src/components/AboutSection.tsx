"use client";

import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section className="relative text-off-white py-16 lg:py-32 px-4 overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/about_us_section_background.png"
          alt="Gym interior background"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-dark-background/90"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">

        {/* Left Column: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start text-left space-y-8 lg:pr-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tight leading-[1.1]">
            WE HAVE A LOT OF <br className="hidden lg:block" />
            <span className="text-primary tracking-tighter drop-shadow-lg">
              EXPERIENCE
            </span>
          </h2>

          <div className="space-y-6 text-off-white/70 text-base md:text-lg leading-relaxed font-normal">
            <p>
              With over a three years of dedication to the fitness industry, we have transformed thousands of lives through our scientific approach to training and nutrition. Our certified expert trainers bring deep knowledge in strength conditioning, functional movement, and athletic performance to help you reach your peak physical state.
            </p>
            <p>
              We believe that fitness is a journey, not a destination. Our state-of-the-art facility is more than just a gym; it&apos;s a community where passion meets discipline. Whether you are a beginner or a seasoned athlete, we provide the environment and the expertise required to unlock your full potential.
            </p>
          </div>

          <motion.div>
            <button className="border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 font-bold py-4 px-10 text-sm md:text-base uppercase tracking-widest mt-4">
              ABOUT US
            </button>
          </motion.div>
        </motion.div>

        {/* Right Column: Image with offset frames */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative w-full max-w-md mx-auto lg:ml-auto group p-6 md:p-10"
        >
          {/* Top-Left Yellow Offset Frame */}
          <div className="absolute top-0 left-0 w-[85%] h-[85%] border border-primary/80 z-0"></div>

          {/* Bottom-Right White Offset Frame */}
          <div className="absolute bottom-0 right-0 w-[85%] h-[85%] border border-off-white/30 z-0"></div>

          {/* Main Photo Center */}
          <div className="relative z-10 w-full shadow-2xl overflow-hidden aspect-[4/5] bg-dark-background">
            <img
              src="/images/about_us_section_image.png"
              alt="Man doing pullups"
              className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;
