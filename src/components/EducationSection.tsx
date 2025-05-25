
import React from 'react';
import { LanguageProps } from '../types';

interface EducationSectionProps extends LanguageProps {}

const EducationSection: React.FC<EducationSectionProps> = ({ isEnglish }) => {
  return (
    <section id="education" className="min-h-screen py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-thin text-gray-900 dark:text-white text-center mb-10">
          Education
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-medium text-gray-900 dark:text-white mb-2">
              {isEnglish ? "Harvard University" : "하버드 대학교"}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">2024-Present</p>
            <p className="text-gray-800 dark:text-white font-medium">
              {isEnglish ? "Candidate of Master of Liberal Arts in Data Science, Extension Studies" : "데이터 사이언스 석사 (예정), 연장 교육과정"}
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-4">
              {isEnglish 
                ? "Graduate degree pursuit focused on data science and analytics" 
                : "데이터 사이언스 및 분석에 중점을 둔 대학원 과정"}
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-medium text-gray-900 dark:text-white mb-2">
              {isEnglish ? "National Institute for Lifelong Education" : "국가평생교육진흥원"}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">2018</p>
            <p className="text-gray-800 dark:text-white font-medium">
              {isEnglish ? "Bachelor of Science in Computer Engineering & Business Administration" : "컴퓨터 공학 & 경영학 학사"}
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-4">
              {isEnglish 
                ? "Double major: Computer Engineering and Business Administration" 
                : "복수 전공: 컴퓨터 공학 및 경영학"}
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-medium text-gray-900 dark:text-white mb-2">
              {isEnglish ? "University of California, Irvine" : "캘리포니아 대학교 어바인"}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">2009</p>
            <p className="text-gray-800 dark:text-white font-medium">
              {isEnglish ? "School of Humanities" : "인문학부"}
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-4">
              {isEnglish 
                ? "Dropout" 
                : "중퇴"}
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-medium text-gray-900 dark:text-white mb-2">
              {isEnglish ? "Certifications" : "자격증"}
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-800 dark:text-white font-medium">
                  {isEnglish ? "MITx MicroMasters in Data Science" : "MITx 데이터 사이언스 마이크로마스터"}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  {isEnglish ? "MIT, 2023" : "MIT, 2023"}
                </p>
              </div>
              <div>
                <p className="text-gray-800 dark:text-white font-medium">
                  {isEnglish ? "Google Data Analytics Professional" : "구글 데이터 분석 전문가"}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  {isEnglish ? "Google, 2022" : "구글, 2022"}
                </p>
              </div>
              <div>
                <p className="text-gray-800 dark:text-white font-medium">
                  {isEnglish ? "Google Business Analytics" : "구글 비즈니스 분석"}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  {isEnglish ? "Google, 2022" : "구글, 2022"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
