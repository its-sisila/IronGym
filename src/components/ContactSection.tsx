"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const [errors, setErrors] = useState({ name: '', phone: '', email: '' });
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    let valid = true;
    const newErrors = { name: '', phone: '', email: '' };

    if (!formData.name.trim()) { newErrors.name = 'Name is required'; valid = false; }
    if (!formData.phone.trim()) { newErrors.phone = 'Phone number is required'; valid = false; }
    if (!formData.email.trim()) { newErrors.email = 'Email is required'; valid = false; } 
    else if (!/\S+@\S+\.\S+/.test(formData.email)) { newErrors.email = 'Email address is invalid'; valid = false; }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSuccess(true);
      setFormData({ name: '', phone: '', email: '' });
      setErrors({ name: '', phone: '', email: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const formVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.4 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="contact" className="bg-dark-background py-16 lg:py-32 px-4 overflow-hidden flex justify-center items-center text-off-white">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative w-full max-w-7xl mx-auto border-y border-primary max-lg:border-x"
      >
        <div className="hidden lg:block absolute inset-0 bg-primary" style={{ clipPath: 'polygon(5% 0, 95% 0, 100% 100%, 0 100%)' }}>
          <div className="absolute inset-[1px] bg-dark-background" style={{ clipPath: 'polygon(5% 0, 95% 0, 100% 100%, 0 100%)' }}></div>
        </div>
        
        <div className="relative z-10 flex flex-col lg:flex-row min-h-[600px] w-full lg:[clip-path:polygon(5%_0,95%_0,100%_100%,0_100%)]">
          <div className="w-full lg:w-5/12 relative bg-secondary-dark flex items-center justify-center min-h-[400px] lg:min-h-full overflow-hidden">
             <img src="/images/contact_image.png" alt="Gym training" className="absolute inset-0 w-full h-full object-cover object-center z-0 grayscale" />
             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-dark-background hidden lg:block z-10" />
             <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-dark-background block lg:hidden z-10" />
          </div>
          
          <div className="w-full lg:w-7/12 p-8 md:p-16 lg:p-24 flex flex-col justify-center bg-dark-background">
            <motion.h2 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-showcase font-black uppercase tracking-tight mb-2 leading-none"
            >
              LET'S START GYM
            </motion.h2>
            <motion.h2 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-showcase font-black uppercase tracking-tight text-primary mb-8 leading-none"
            >
              TRAINING NOW
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-off-white/70 mb-12 text-lg leading-relaxed max-w-xl font-normal"
            >
              get 50% off the first three classes you sign up for this month any GYM membership
            </motion.p>
            
            {isSuccess && (
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="bg-green-500/10 border border-green-500 text-green-400 px-4 py-3 mb-8 text-sm uppercase tracking-wider backdrop-blur-sm">
                Thank you! We've received your information.
              </motion.div>
            )}
            
            <motion.form 
              variants={formVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              onSubmit={handleSubmit} 
              className="w-full max-w-2xl space-y-6" 
              noValidate
            >
              <div className="flex flex-col md:flex-row gap-6">
                <motion.div variants={itemVariants} className="flex-1 text-left group">
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter You Name..." 
                    className={`w-full bg-transparent border py-4 px-6 text-sm md:text-base text-off-white placeholder:text-off-white/40 focus:outline-none transition-all duration-300 ${errors.name ? 'border-red-500' : 'border-off-white/20 hover:border-off-white/50 focus:border-primary focus:bg-off-white/5'}`}
                  />
                  {errors.name && <span className="text-red-500 text-xs mt-1 block px-1">{errors.name}</span>}
                </motion.div>
                
                <motion.div variants={itemVariants} className="flex-1 text-left group">
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Numbers Phone..." 
                    className={`w-full bg-transparent border py-4 px-6 text-sm md:text-base text-off-white placeholder:text-off-white/40 focus:outline-none transition-all duration-300 ${errors.phone ? 'border-red-500' : 'border-off-white/20 hover:border-off-white/50 focus:border-primary focus:bg-off-white/5'}`}
                  />
                  {errors.phone && <span className="text-red-500 text-xs mt-1 block px-1">{errors.phone}</span>}
                </motion.div>
              </div>
              
              <motion.div variants={itemVariants} className="w-full text-left group">
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email Address..." 
                  className={`w-full bg-transparent border py-4 px-6 text-sm md:text-base text-off-white placeholder:text-off-white/40 focus:outline-none transition-all duration-300 ${errors.email ? 'border-red-500' : 'border-off-white/20 hover:border-off-white/50 focus:border-primary focus:bg-off-white/5'}`}
                />
                {errors.email && <span className="text-red-500 text-xs mt-1 block px-1">{errors.email}</span>}
              </motion.div>
              
              <motion.div variants={itemVariants} className="pt-6 text-left">
                <button 
                  type="submit" 
                  className="border border-primary text-primary hover:bg-primary hover:text-dark-background transition-all duration-300 hover:shadow-[0_0_20px_rgba(234,179,8,0.4)] font-bold py-4 px-12 text-sm uppercase tracking-widest"
                >
                  LEST JOIN NOW
                </button>
              </motion.div>
            </motion.form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
