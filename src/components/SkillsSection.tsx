
import React from 'react';
import { LanguageProps } from '../types';

interface SkillsSectionProps extends LanguageProps {}

const SkillsSection: React.FC<SkillsSectionProps> = ({ isEnglish }) => {
  const skillCategories = [
    {
      title: isEnglish ? "Planning·UX" : "기획·UX",
      skills: ["Figma", "Adobe Photoshop", "HTML/CSS"]
    },
    {
      title: isEnglish ? "Data Analysis" : "데이터 분석", 
      skills: ["SQL", "Python", "Tableau", "R", "MongoDB", "Google Analytics"]
    },
    {
      title: isEnglish ? "Operation Management" : "운영 관리",
      skills: ["Notion", "Jira", "Slack", "Trello", "Google Suite"]
    },
    {
      title: isEnglish ? "Content Creation" : "콘텐츠 제작",
      skills: ["Final Cut Pro", "OBS"]
    }
  ];

  return (
    <section id="skills" className="min-h-screen py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-thin text-gray-900 dark:text-white text-center mb-20">
          Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {skillCategories.map((category, index) => (
            <div key={category.title} className="text-center bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-medium text-[#007ACC] mb-8">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div 
                    key={skill}
                    className="py-3 px-6 bg-gray-50 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
