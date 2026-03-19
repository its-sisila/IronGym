"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'HOME', href: '/' },
    { name: 'SERVICE', href: '/#service' },
    { name: 'TRAINERS', href: '/#trainers' },
    { name: 'TESTIMONIAL', href: '/#testimonial' },
    { name: 'CONTACT US', href: '/#contact' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`w-full text-off-white px-6 fixed top-0 z-50 transition-all duration-300 border-b ${
          scrolled 
            ? 'bg-dark-background/90 backdrop-blur-md shadow-lg border-off-white/10 py-4' 
            : 'bg-gradient-to-b from-black/80 to-transparent border-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Logo */}
          <Link href="/" className="text-2xl md:text-3xl font-black uppercase tracking-tighter relative z-50">
            IRON<span className="text-primary">GYM</span>
          </Link>
          
          {/* Navigation Links */}
          <nav className="hidden lg:flex gap-10 items-center">
            {links.map((link, index) => (
              <Link 
                key={index} 
                href={link.href} 
                className={`text-sm font-bold uppercase tracking-wider relative group outline-none ${
                  link.name === 'HOME' ? 'text-primary' : 'text-off-white hover:text-primary transition-colors duration-300'
                }`}
              >
                {link.name}
                {/* Animated Underline */}
                <span className={`absolute -bottom-2 left-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full ${link.name === 'HOME' ? 'w-full' : 'w-0'}`}></span>
              </Link>
            ))}
          </nav>
          
          {/* Call to Action Button */}
          <div className="hidden lg:block relative z-50">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-dark-background font-black py-4 px-8 text-sm uppercase tracking-widest hover:bg-yellow-400 transition-colors"
            >
              STARTED NOW
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-primary p-2 focus:outline-none relative z-50"
            aria-label="Toggle Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
          
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-dark-background/95 backdrop-blur-lg lg:hidden pt-24 px-6 flex flex-col items-center overflow-y-auto"
          >
            <nav className="flex flex-col gap-6 items-center w-full mt-10 pb-10">
              {links.map((link, index) => (
                <Link 
                  key={index} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-xl font-bold uppercase tracking-wider w-full text-center py-4 border-b border-off-white/10 ${
                    link.name === 'HOME' ? 'text-primary' : 'text-off-white hover:text-primary transition-colors'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <motion.button 
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-dark-background font-black py-4 px-12 mt-8 text-lg uppercase tracking-widest w-full max-w-sm"
              >
                STARTED NOW
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
