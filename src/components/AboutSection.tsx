import React from 'react';

const AboutSection = () => {
  return (
    <section className="bg-dark-background text-off-white py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
        
        {/* Left Column: Text Content */}
        <div className="flex flex-col items-start text-left space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-tight">
            WE HAVE A LOT OF <br className="hidden md:block" />
            <span className="text-primary">EXPERIENCE</span>
          </h2>
          
          <div className="space-y-6 text-off-white/80 text-lg leading-relaxed">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          <button className="border-2 border-primary text-primary hover:bg-primary hover:text-dark-background transition-colors duration-300 font-bold py-4 px-10 rounded-full text-lg uppercase tracking-wider mt-4">
            ABOUT US
          </button>
        </div>

        {/* Right Column: Image Placeholder with Offset Border */}
        <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square max-w-md lg:max-w-none mx-auto lg:ml-auto">
          {/* Decorative Yellow Border Frame */}
          <div className="absolute top-6 left-6 md:top-8 md:left-8 w-full h-full border-4 border-primary rounded-xl z-0"></div>
          
          {/* Main Image Placeholder */}
          <div className="w-full h-full bg-secondary-dark rounded-xl flex items-center justify-center relative z-10 shadow-2xl">
            <span className="text-off-white/30 font-bold tracking-widest uppercase md:text-xl">Image Placeholder</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
