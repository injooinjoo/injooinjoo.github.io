
import React from 'react';
import { LanguageProps } from '../types';

interface HeroSectionProps extends LanguageProps {}

const HeroSection: React.FC<HeroSectionProps> = ({ isEnglish }) => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6">
            <img 
              src="/lovable-uploads/1eb87e2a-f1e2-41cc-8f4f-29a1df05fe8e.png" 
              alt={isEnglish ? "InJoo Kim" : "김인주"}
              className="w-48 h-48 rounded-full object-cover shadow-lg mb-4"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {isEnglish ? "Hello, I'm InJoo Kim" : "안녕하세요, 김인주입니다"}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            {isEnglish 
              ? "Product Manager & Content Strategist" 
              : "프로덕트 매니저 & 콘텐츠 전략가"}
          </p>
          <div className="flex space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition duration-300">
              {isEnglish ? "View Projects" : "프로젝트 보기"}
            </button>
            <button className="border border-gray-300 hover:border-gray-400 px-6 py-3 rounded-lg transition duration-300">
              {isEnglish ? "Contact Me" : "연락하기"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
