"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const StarRating = () => (
  <div className="flex justify-center space-x-2 my-8">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-6 h-6 text-primary fill-current filter drop-shadow-[0_0_5px_rgba(234,179,8,0.5)]" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const ChevronLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-12 h-12">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
  </svg>
);

const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-12 h-12">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </svg>
);

const testimonials = [
  {
    quote: "I am extremely grateful for the positive impact gym training has had on my life; through consistent training, expert guidance from coaches, and access to top-notch facilities, I have witnessed a remarkable transformation in strength, endurance, and overall fitness levels.",
    name: "JHONY BREAKER"
  },
  {
    quote: "The personalized attention and modern equipment have completely changed the way I look at working out. The trainers here don't just instruct, they inspire. Truly a level above any other facility I've visited.",
    name: "SARAH MILLER"
  },
  {
    quote: "A phenomenal community and unbeatable atmosphere. Reaching my goals felt impossible before, but the support here makes every challenging session worth the effort.",
    name: "MARCUS CHEN"
  }
];

const TestimonialsSection = () => {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonial" className="relative py-24 px-4 overflow-hidden bg-dark-background text-off-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-secondary-dark/60 opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-dark-background via-dark-background/95 to-dark-background"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full text-center relative z-10">
        
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-showcase font-black uppercase tracking-tight mb-20 text-off-white"
        >
          WHAT <span className="text-primary drop-shadow-[0_0_15px_rgba(234,179,8,0.2)]">CLIENTS SAY</span> WITH US
        </motion.h2>
        
        <div className="relative flex items-center justify-center min-h-[400px]">
          
          <div className="flex flex-col items-center max-w-4xl mx-auto px-16 md:px-24 w-full">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="flex flex-col items-center"
              >
                <p className="text-xl md:text-2xl leading-relaxed text-off-white/90 font-medium italic">
                  "{testimonials[index].quote}"
                </p>
                
                <StarRating />
                
                <h4 className="text-3xl font-black text-off-white uppercase tracking-wider mb-6">{testimonials[index].name}</h4>
                
                <div className="w-24 h-24 border-2 border-primary bg-secondary-dark flex items-center justify-center mb-12 shadow-[0_0_20px_rgba(234,179,8,0.2)] overflow-hidden">
                   <img src="/images/testimonial.png" alt="Client Avatar" className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-300" />
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center space-x-3 mt-auto">
              {testimonials.map((_, i) => (
                <div 
                  key={i} 
                  onClick={() => setIndex(i)}
                  className={`h-3 cursor-pointer transition-all duration-300 ${i === index ? 'w-8 bg-primary shadow-[0_0_10px_rgba(234,179,8,0.5)]' : 'w-3 bg-off-white/20 hover:bg-off-white/40'}`}
                ></div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 md:left-4 text-off-white/50 hover:text-primary hover:-translate-x-2 transition-all cursor-pointer z-20"
            aria-label="Previous testimonial"
          >
            <ChevronLeft />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 md:right-4 text-off-white/50 hover:text-primary hover:translate-x-2 transition-all cursor-pointer z-20"
            aria-label="Next testimonial"
          >
            <ChevronRight />
          </button>
          
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
