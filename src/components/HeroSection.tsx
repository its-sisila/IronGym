import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-dark-background text-off-white min-h-[calc(100vh-72px)] flex flex-col justify-center px-4 py-16">
      <div className="max-w-7xl mx-auto w-full flex-grow flex flex-col justify-center items-center text-center">
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 uppercase">
          READY TO TRAIN <br className="hidden md:block" />
          <span className="text-primary-yellow text-primary">YOUR BODY</span>
        </h1>
        
        <p className="text-lg md:text-xl text-off-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Embark on a journey to a stronger, healthier you. Our state-of-the-art facility and expert trainers are here to guide you every step of the way.
        </p>

        <button className="border-2 border-primary text-primary hover:bg-primary hover:text-dark-background transition-colors duration-300 font-bold py-4 px-10 rounded-full text-lg uppercase tracking-wider mb-16">
          LEST JOIN NOW
        </button>

      </div>

      <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-8 text-center pt-10 border-t border-secondary-dark mt-auto">
        <div className="flex flex-col items-center">
          <span className="text-4xl md:text-5xl font-black text-primary mb-2">20+</span>
          <span className="text-sm md:text-base font-semibold text-off-white/70 uppercase tracking-widest">
            Years of Experience
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl md:text-5xl font-black text-primary mb-2">15K+</span>
          <span className="text-sm md:text-base font-semibold text-off-white/70 uppercase tracking-widest">
            Members Join
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl md:text-5xl font-black text-primary mb-2">14K+</span>
          <span className="text-sm md:text-base font-semibold text-off-white/70 uppercase tracking-widest">
            Happy members
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
