import React from 'react';

const features = [
  {
    number: '01',
    title: 'PERSONAL TRAINING',
    description: 'Get one-on-one guidance from our certified fitness experts tailored specifically to your goals and abilities.'
  },
  {
    number: '02',
    title: 'EQUIPMENT AND FACILITIES',
    description: 'Train with top-of-the-line equipment in a spacious, clean, and fully-equipped fitness center.'
  },
  {
    number: '03',
    title: 'NUTRITION COUNSELING',
    description: 'Fuel your body properly with personalized nutrition plans designed to complement your training routine.'
  },
  {
    number: '04',
    title: 'SPECIALITY PROGRAMS',
    description: 'Join specialized classes and programs catering to various fitness levels and specific interests.'
  }
];

const FeaturesSection = () => {
  return (
    <section className="bg-dark-background text-off-white py-20 px-4">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-6">
            WHY <span className="text-primary">CHOOSE US</span>
          </h2>
          <p className="text-lg md:text-xl text-off-white/80 max-w-3xl mx-auto leading-relaxed">
            We offer more than just a place to sweat. Our comprehensive approach ensures you have all the tools, support, and environment needed to achieve lasting results.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-secondary-dark p-8 md:p-10 rounded-2xl flex flex-col hover:bg-secondary-dark/80 transition-colors duration-300"
            >
              <div className="mb-6">
                <span className="text-4xl md:text-5xl font-black text-primary mb-2 opacity-50 block">
                  {feature.number}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2 uppercase tracking-wide">
                  {feature.title}
                </h3>
              </div>
              <p className="text-off-white/80 text-lg leading-relaxed mt-auto">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
