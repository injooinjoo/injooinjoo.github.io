
import React from 'react';
import { LanguageProps } from '../types';

interface AboutSectionProps extends LanguageProps {}

const AboutSection: React.FC<AboutSectionProps> = ({ isEnglish }) => {
  return (
    <section id="about" className="min-h-screen py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-thin text-gray-900 dark:text-white text-center mb-10">
          Profile
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          <div>
            <h3 className="text-2xl font-medium mb-6 dark:text-white">
              {isEnglish ? "About Me" : "소개"}
            </h3>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                {isEnglish 
                  ? "I am a Product Manager with over 7 years of experience in content platform management and strategy. My expertise lies in data-driven decision making and user-centered design."
                  : "저는 콘텐츠 플랫폼 관리 및 전략 분야에서 7년 이상의 경험을 가진 프로덕트 매니저입니다. 제 전문 분야는 데이터 기반 의사 결정과 사용자 중심 설계입니다."}
              </p>
              <p>
                {isEnglish 
                  ? "I have successfully led multiple key projects at AfreecaTV, improving platform usability and driving growth through strategic content initiatives."
                  : "아프리카TV에서 여러 핵심 프로젝트를 성공적으로 이끌어 플랫폼 사용성을 개선하고 전략적 콘텐츠 이니셔티브를 통해 성장을 주도했습니다."}
              </p>
              <p>
                {isEnglish 
                  ? "Currently, I am expanding my data science skills to further enhance my analytical capabilities in product management."
                  : "현재는 프로덕트 관리 분야에서 분석 능력을 더욱 향상시키기 위해 데이터 과학 기술을 확장하고 있습니다."}
              </p>
            </div>
            
            <h3 className="text-2xl font-medium mt-12 mb-6 dark:text-white">
              {isEnglish ? "Professional Journey" : "경력 여정"}
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-medium text-blue-600 dark:text-blue-400">
                  {isEnglish ? "AfreecaTV" : "아프리카TV"}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">2016 - 2023</p>
                <p className="text-gray-700 dark:text-gray-300">
                  {isEnglish ? "Product Manager & Content Strategist" : "프로덕트 매니저 & 콘텐츠 전략가"}
                </p>
              </div>
              <div>
                <h4 className="text-xl font-medium text-blue-600 dark:text-blue-400">
                  {isEnglish ? "Previous Experience" : "이전 경력"}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">2014 - 2016</p>
                <p className="text-gray-700 dark:text-gray-300">
                  {isEnglish ? "Digital Marketing Specialist" : "디지털 마케팅 전문가"}
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-medium mb-6 dark:text-white">
              {isEnglish ? "Career Timeline" : "경력 타임라인"}
            </h3>
            <div className="relative border-l-2 border-gray-300 dark:border-gray-700 pl-8 ml-4 space-y-10">
              <div className="relative">
                <div className="absolute -left-10 mt-1.5 w-5 h-5 rounded-full bg-blue-600"></div>
                <h4 className="text-xl font-medium dark:text-white">2023</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  {isEnglish
                    ? "Started pursuing further education in Data Science"
                    : "데이터 사이언스 분야에서 추가 교육 시작"}
                </p>
              </div>
              
              <div className="relative">
                <div className="absolute -left-10 mt-1.5 w-5 h-5 rounded-full bg-blue-600"></div>
                <h4 className="text-xl font-medium dark:text-white">2021</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  {isEnglish
                    ? "Led platform category system redefinition project"
                    : "플랫폼 카테고리 시스템 재정의 프로젝트 주도"}
                </p>
              </div>
              
              <div className="relative">
                <div className="absolute -left-10 mt-1.5 w-5 h-5 rounded-full bg-blue-600"></div>
                <h4 className="text-xl font-medium dark:text-white">2019</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  {isEnglish
                    ? "Developed and implemented partner streamer support fund system"
                    : "파트너 스트리머 지원 기금 시스템 개발 및 구현"}
                </p>
              </div>
              
              <div className="relative">
                <div className="absolute -left-10 mt-1.5 w-5 h-5 rounded-full bg-blue-600"></div>
                <h4 className="text-xl font-medium dark:text-white">2016</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  {isEnglish
                    ? "Joined AfreecaTV as Content Planner"
                    : "아프리카TV에 콘텐츠 기획자로 입사"}
                </p>
              </div>
              
              <div className="relative">
                <div className="absolute -left-10 mt-1.5 w-5 h-5 rounded-full bg-blue-600"></div>
                <h4 className="text-xl font-medium dark:text-white">2014</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  {isEnglish
                    ? "Started career in digital marketing"
                    : "디지털 마케팅 분야에서 경력 시작"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
