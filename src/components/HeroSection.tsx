
import React from 'react';
import ScrollSection from './ScrollSection';

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <ScrollSection delay={200}>
          <h1 className="text-7xl md:text-8xl font-thin tracking-tight text-gray-900 mb-6">
            Portfolio
          </h1>
        </ScrollSection>
        
        <ScrollSection delay={400}>
          <p className="text-xl md:text-2xl font-light text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Crafting digital experiences with precision and creativity
          </p>
        </ScrollSection>
        
        <ScrollSection delay={600}>
          <div className="mt-12">
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-black text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              Explore Work
            </button>
          </div>
        </ScrollSection>
      </div>
    </section>
  );
};

export default HeroSection;
