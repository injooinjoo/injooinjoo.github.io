
import React from 'react';
import { LanguageProps } from '../types';

interface ExperienceSectionProps extends LanguageProps {}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ isEnglish }) => {
  return (
    <section id="experience" className="min-h-screen py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-thin text-gray-900 dark:text-white text-center mb-10">
          Experience
        </h2>
        <div className="space-y-8 mt-16">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-medium text-gray-900 dark:text-white mb-2">
              {isEnglish ? "AfreecaTV - Product Manager & Content Strategist" : "아프리카TV - 프로덕트 매니저 & 콘텐츠 전략가"}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">2016 - 2023</p>
            <p className="text-gray-800 dark:text-white">
              {isEnglish 
                ? "Led multiple key projects improving platform usability and driving growth through strategic content initiatives. Managed product development lifecycle and implemented data-driven decision making processes."
                : "플랫폼 사용성 개선과 전략적 콘텐츠 이니셔티브를 통한 성장 주도를 위한 여러 핵심 프로젝트를 이끌었습니다. 제품 개발 라이프사이클을 관리하고 데이터 기반 의사결정 프로세스를 구현했습니다."}
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-medium text-gray-900 dark:text-white mb-2">
              {isEnglish ? "Previous Experience - Digital Marketing Specialist" : "이전 경력 - 디지털 마케팅 전문가"}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">2014 - 2016</p>
            <p className="text-gray-800 dark:text-white">
              {isEnglish 
                ? "Specialized in digital marketing strategies and campaign management. Developed expertise in data analysis and user behavior tracking."
                : "디지털 마케팅 전략 및 캠페인 관리를 전문으로 했습니다. 데이터 분석 및 사용자 행동 추적에 대한 전문 지식을 개발했습니다."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
