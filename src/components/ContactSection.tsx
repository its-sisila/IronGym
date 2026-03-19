"use client";

import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });
  
  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    email: ''
  });
  
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    let valid = true;
    const newErrors = { name: '', phone: '', email: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
      valid = false;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Simulate form submission
      setIsSuccess(true);
      setFormData({ name: '', phone: '', email: '' });
      setErrors({ name: '', phone: '', email: '' });
      
      // Hide success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section className="bg-dark-background py-32 px-4 overflow-hidden flex justify-center items-center text-off-white">
      {/* Container with Custom Polygon Border */}
      <div className="relative w-full max-w-7xl mx-auto border-y border-primary max-lg:border-x">
        
        {/* Decorative Trapeze Background (visible on large screens) */}
        <div 
          className="hidden lg:block absolute inset-0 bg-primary" 
          style={{ clipPath: 'polygon(5% 0, 95% 0, 100% 100%, 0 100%)' }}
        >
          {/* Inner dark area leaving a 1px border gap */}
          <div 
            className="absolute inset-[1px] bg-dark-background" 
            style={{ clipPath: 'polygon(5% 0, 95% 0, 100% 100%, 0 100%)' }}
          ></div>
        </div>
        
        {/* Main Content Area */}
        <div 
          className="relative z-10 flex flex-col lg:flex-row min-h-[600px] w-full lg:[clip-path:polygon(5%_0,95%_0,100%_100%,0_100%)]" 
        >
          
          {/* Left Side Feature Image Area */}
          <div className="w-full lg:w-5/12 relative bg-secondary-dark flex items-center justify-center min-h-[400px] lg:min-h-full">
             <span className="text-off-white/30 uppercase tracking-widest font-bold">Model Image</span>
             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-dark-background hidden lg:block" />
             <div className="absolute inset-0 bg-gradient-to-t from-dark-background to-transparent block lg:hidden" />
          </div>
          
          {/* Right Side Form Area */}
          <div className="w-full lg:w-7/12 p-8 md:p-16 lg:p-24 flex flex-col justify-center bg-dark-background">
            
            <h2 className="text-4xl md:text-5xl lg:text-showcase font-black uppercase tracking-tight mb-2 leading-none">
              LET'S START GYM
            </h2>
            <h2 className="text-4xl md:text-5xl lg:text-showcase font-black uppercase tracking-tight text-primary mb-8 leading-none">
              TRAINING NOW
            </h2>
            
            <p className="text-off-white/70 mb-12 text-lg leading-relaxed max-w-xl font-normal">
              get 50% off the first three classes you sign up for this month any GYM membership
            </p>
            
            {isSuccess && (
              <div className="bg-green-500/20 border border-green-500 text-green-400 px-4 py-3 rounded mb-8 text-sm uppercase tracking-wider">
                Thank you! We've received your information.
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="w-full max-w-2xl space-y-6" noValidate>
              
              {/* Row 1: Name and Phone */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 text-left group">
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter You Name..." 
                    className={`w-full bg-transparent border py-4 px-6 text-sm md:text-base text-off-white placeholder:text-off-white/40 focus:outline-none transition-colors ${errors.name ? 'border-red-500' : 'border-off-white/30 hover:border-off-white/50 focus:border-primary'}`}
                  />
                  {errors.name && <span className="text-red-500 text-xs mt-1 block px-1">{errors.name}</span>}
                </div>
                
                <div className="flex-1 text-left group">
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Numbers Phone..." 
                    className={`w-full bg-transparent border py-4 px-6 text-sm md:text-base text-off-white placeholder:text-off-white/40 focus:outline-none transition-colors ${errors.phone ? 'border-red-500' : 'border-off-white/30 hover:border-off-white/50 focus:border-primary'}`}
                  />
                  {errors.phone && <span className="text-red-500 text-xs mt-1 block px-1">{errors.phone}</span>}
                </div>
              </div>
              
              {/* Row 2: Email */}
              <div className="w-full text-left group">
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email Address..." 
                  className={`w-full bg-transparent border py-4 px-6 text-sm md:text-base text-off-white placeholder:text-off-white/40 focus:outline-none transition-colors ${errors.email ? 'border-red-500' : 'border-off-white/30 hover:border-off-white/50 focus:border-primary'}`}
                />
                {errors.email && <span className="text-red-500 text-xs mt-1 block px-1">{errors.email}</span>}
              </div>
              
              {/* Submit Button */}
              <div className="pt-6 text-left">
                <button 
                  type="submit" 
                  className="border border-primary text-primary hover:bg-primary hover:text-dark-background transition-colors duration-300 font-bold py-4 px-12 text-sm uppercase tracking-widest"
                >
                  LEST JOIN NOW
                </button>
              </div>
              
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
