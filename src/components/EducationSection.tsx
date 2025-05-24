import React from 'react';
import { LanguageProps } from '../types';

interface EducationSectionProps extends LanguageProps {}

const EducationSection: React.FC<EducationSectionProps> = ({ isEnglish }) => {
  return (
    <section id="education" className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-thin text-gray-900 text-center mb-10">
          {isEnglish ? "Education" : "교육"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-medium text-gray-900 mb-2">
              {isEnglish ? "Yonsei University" : "연세대학교"}
            </h3>
            <p className="text-gray-600 mb-4">2010 - 2014</p>
            <p className="text-gray-800 font-medium">
              {isEnglish ? "Bachelor of Business Administration" : "경영학 학사"}
            </p>
            <p className="text-gray-600 mt-4">
              {isEnglish 
                ? "Specialized in Marketing and Information Systems" 
                : "마케팅 및 정보시스템 전공"}
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-medium text-gray-900 mb-2">
              {isEnglish ? "Digital Marketing Certification" : "디지털 마케팅 자격증"}
            </h3>
            <p className="text-gray-600 mb-4">2016</p>
            <p className="text-gray-800 font-medium">
              {isEnglish ? "Google Analytics Certification" : "구글 애널리틱스 자격증"}
            </p>
            <p className="text-gray-600 mt-4">
              {isEnglish 
                ? "Advanced proficiency in data analysis and digital marketing strategies" 
                : "데이터 분석 및 디지털 마케팅 전략 고급 숙련도"}
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-medium text-gray-900 mb-2">
              {isEnglish ? "Product Management Workshop" : "제품 관리 워크샵"}
            </h3>
            <p className="text-gray-600 mb-4">2018</p>
            <p className="text-gray-800 font-medium">
              {isEnglish ? "Silicon Valley Product Group" : "실리콘밸리 제품 그룹"}
            </p>
            <p className="text-gray-600 mt-4">
              {isEnglish 
                ? "Intensive workshop on product strategy, roadmapping, and user-centered design" 
                : "제품 전략, 로드맵 작성 및 사용자 중심 설계에 관한 집중 워크샵"}
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-medium text-gray-900 mb-2">
              {isEnglish ? "UX/UI Design Fundamentals" : "UX/UI 디자인 기초"}
            </h3>
            <p className="text-gray-600 mb-4">2019</p>
            <p className="text-gray-800 font-medium">
              {isEnglish ? "Interaction Design Foundation" : "인터랙션 디자인 재단"}
            </p>
            <p className="text-gray-600 mt-4">
              {isEnglish 
                ? "Comprehensive course on user experience principles and interface design" 
                : "사용자 경험 원칙 및 인터페이스 디자인에 관한 종합 과정"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
