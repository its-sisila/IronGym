import React from 'react';

const trainers = [
  { name: 'BORNEY EXITEID' },
  { name: 'ELSA WINDIA' },
  { name: 'GEOURGE ARYO' }
];

// Star Rating SVG Component
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
  return (
    <section className="bg-dark-background text-off-white py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-showcase font-black uppercase tracking-tight mb-2">
            OUR PROFESSIONAL
          </h2>
          <h2 className="text-4xl md:text-5xl lg:text-showcase font-black uppercase tracking-tight text-primary mb-6">
            TRAINERS
          </h2>
          <p className="text-lg md:text-xl text-off-white/80 max-w-2xl mx-auto leading-relaxed">
            Whether you&apos;re looking to set up a home gym or enhance your current workout routine
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {trainers.map((trainer, index) => (
            <div 
              key={index} 
              className="relative aspect-[3/4] rounded-sm border-2 border-primary overflow-hidden group cursor-pointer"
            >
              {/* Image Placeholder */}
              <div className="absolute inset-0 bg-secondary-dark flex items-center justify-center">
                <span className="text-off-white/30 uppercase tracking-widest font-bold text-center px-4">Trainer Image</span>
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 transition-opacity duration-300"></div>
              
              {/* Text Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-center flex flex-col justify-end h-full z-10">
                <h3 className="text-2xl font-black uppercase tracking-wider mb-2">{trainer.name}</h3>
                <span className="text-sm text-off-white/80 uppercase tracking-widest mb-1">Rate Trainer :</span>
                <StarRating />
              </div>
            </div>
          ))}
        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-primary cursor-pointer transition-transform hover:scale-125"></div>
          <div className="w-2 h-2 rounded-full bg-secondary-dark cursor-pointer transition-transform hover:scale-125"></div>
          <div className="w-2 h-2 rounded-full bg-secondary-dark cursor-pointer transition-transform hover:scale-125"></div>
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;
