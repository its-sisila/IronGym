import React from 'react';

// Star Rating SVG Component
const StarRating = () => (
  <div className="flex justify-center space-x-2 my-8">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-6 h-6 text-primary fill-current" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

// Simple Arrow SVG Components (no circles, just the angles)
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

const TestimonialsSection = () => {
  return (
    <section className="relative py-24 px-4 overflow-hidden bg-dark-background text-off-white">
      {/* Background Image Overlay (Placeholder for gym background) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-secondary-dark/60 opacity-50"></div>
        {/* We use a gradient to make the center very dark and readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-background via-dark-background/95 to-dark-background"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full text-center relative z-10">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-showcase font-black uppercase tracking-tight mb-20 text-off-white">
          WHAT <span className="text-primary">CLIENTS SAY</span> WITH US
        </h2>
        
        {/* Testimonial Content Wrapper */}
        <div className="relative flex items-center justify-center min-h-[400px]">
          
          {/* Main Content Area */}
          <div className="flex flex-col items-center max-w-4xl mx-auto px-16 md:px-24 w-full">
            
            <p className="text-lg md:text-xl leading-relaxed text-off-white/80 font-normal">
              "I am extremely grateful for the positive impact gym training has had on my life; through consistent training, expert guidance from coaches, and access to top-notch facilities, I have witnessed a remarkable transformation in strength, endurance, and overall fitness levels."
            </p>
            
            <StarRating />
            
            <h4 className="text-3xl font-black text-off-white uppercase tracking-wider mb-6">JHONY BREAKER</h4>
            
            {/* Square Avatar Placeholder */}
            <div className="w-24 h-24 border-2 border-primary bg-secondary-dark flex items-center justify-center mb-12">
               <span className="text-[10px] text-off-white/40 uppercase tracking-widest text-center px-2">Image<br/>Avartar</span>
            </div>
            
            {/* Pagination Dots */}
            <div className="flex justify-center space-x-2 mt-auto">
              <div className="w-3 h-3 bg-primary cursor-pointer hover:scale-110 transition-transform"></div>
              <div className="w-3 h-3 bg-off-white/20 cursor-pointer hover:scale-110 transition-transform"></div>
              <div className="w-3 h-3 bg-off-white/20 cursor-pointer hover:scale-110 transition-transform"></div>
            </div>
          </div>
          
          {/* Carousel Arrows */}
          <button 
            aria-label="Previous testimonial" 
            className="absolute left-0 md:left-4 text-off-white hover:text-primary transition-colors cursor-pointer z-20"
          >
            <ChevronLeft />
          </button>
          
          <button 
            aria-label="Next testimonial" 
            className="absolute right-0 md:right-4 text-off-white hover:text-primary transition-colors cursor-pointer z-20"
          >
            <ChevronRight />
          </button>
          
        </div>
        
      </div>
    </section>
  );
};

export default TestimonialsSection;
