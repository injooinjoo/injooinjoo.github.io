
import React from 'react';
import ScrollSection from './ScrollSection';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="hero" className="h-screen flex items-center justify-center bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center flex flex-col items-center">
        <ScrollSection delay={200} className="animate-bounce-slow">
          <div className="mb-10">
            <img 
              src="/lovable-uploads/1eb87e2a-f1e2-41cc-8f4f-29a1df05fe8e.png" 
              alt="김인주 (InJoo Kim)" 
              className="w-80 h-80 rounded-full object-cover mx-auto shadow-lg transition-transform hover:scale-105 duration-500"
            />
          </div>
        </ScrollSection>
        
        <ScrollSection delay={400} className="animate-slide-in-bottom">
          <h1 className="text-5xl md:text-6xl font-thin tracking-tight text-gray-900 mb-4">
            김인주 <span className="text-3xl md:text-4xl">(InJoo Kim)</span>
          </h1>
        </ScrollSection>
        
        <ScrollSection delay={600} className="animate-slide-in-right">
          <p className="text-xl md:text-2xl font-light text-[#007ACC] max-w-3xl mx-auto leading-relaxed mb-4">
            데이터와 전략으로 성장시키는 콘텐츠 플랫폼 PM
          </p>
          <p className="text-lg md:text-xl font-light text-gray-600 max-w-3xl mx-auto">
            Project Manager
          </p>
        </ScrollSection>

        <ScrollSection delay={700} className="animate-float">
          <div className="flex flex-wrap justify-center gap-3 my-4">
            <span className="px-4 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">콘텐츠 플랫폼</span>
            <span className="px-4 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">전략기획</span>
            <span className="px-4 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">데이터 기반 성과관리</span>
          </div>
        </ScrollSection>
        
        <ScrollSection delay={800} className="animate-fade-in">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 text-sm mt-8">
            <a href="mailto:ink595@g.harvard.edu" className="hover:text-[#007ACC] transition-colors">
              ink595@g.harvard.edu
            </a>
            <a href="https://linkedin.com/in/jooooo" className="hover:text-[#007ACC] transition-colors">
              linkedin.com/in/jooooo
            </a>
          </div>
        </ScrollSection>
        
        <ScrollSection delay={1000}>
          <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="rounded-full p-2 text-gray-400 hover:text-gray-700 transition-colors"
              aria-label="Scroll down"
            >
              <ArrowDown size={24} />
            </button>
          </div>
        </ScrollSection>
      </div>
    </section>
  );
};

export default HeroSection;
