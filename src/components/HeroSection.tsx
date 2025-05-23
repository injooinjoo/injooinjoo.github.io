
import React from 'react';
import ScrollSection from './ScrollSection';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="hero" className="h-screen flex items-center justify-center bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center flex flex-col items-center">
        <ScrollSection delay={200}>
          <div className="mb-10">
            <img 
              src="/lovable-uploads/1eb87e2a-f1e2-41cc-8f4f-29a1df05fe8e.png" 
              alt="김인주 (InJoo Kim)" 
              className="w-56 h-56 rounded-full object-cover mx-auto shadow-lg"
            />
          </div>
        </ScrollSection>
        
        <ScrollSection delay={400}>
          <h1 className="text-5xl md:text-6xl font-thin tracking-tight text-gray-900 mb-4">
            김인주 <span className="text-3xl md:text-4xl">(InJoo Kim)</span>
          </h1>
        </ScrollSection>
        
        <ScrollSection delay={600}>
          <p className="text-xl md:text-2xl font-light text-[#007ACC] max-w-3xl mx-auto leading-relaxed mb-4">
            『데이터와 전략으로 성장시키는 콘텐츠 플랫폼 PM』
          </p>
        </ScrollSection>

        <ScrollSection delay={700}>
          <div className="flex flex-wrap justify-center gap-3 my-4">
            <span className="px-4 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">콘텐츠 플랫폼</span>
            <span className="px-4 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">전략기획</span>
            <span className="px-4 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">데이터 기반 성과관리</span>
          </div>
        </ScrollSection>
        
        <ScrollSection delay={800}>
          <div className="flex items-center justify-center gap-6 text-sm mt-8">
            <a href="mailto:contact@example.com" className="hover:text-[#007ACC] transition-colors">
              contact@example.com
            </a>
            <a href="https://linkedin.com/in/example" className="hover:text-[#007ACC] transition-colors">
              LinkedIn
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
