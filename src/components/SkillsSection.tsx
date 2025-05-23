
import React from 'react';
import ScrollSection from './ScrollSection';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "기획·UX",
      skills: ["Figma", "Adobe Photoshop", "HTML/CSS"]
    },
    {
      title: "데이터 분석", 
      skills: ["SQL", "Python", "Tableau", "R", "MongoDB", "Google Analytics"]
    },
    {
      title: "운영 관리",
      skills: ["Notion", "Jira", "Slack", "Trello", "Google Suite"]
    },
    {
      title: "콘텐츠 제작",
      skills: ["Final Cut Pro", "OBS"]
    }
  ];

  return (
    <section id="skills" className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollSection>
          <h2 className="text-5xl md:text-6xl font-thin text-gray-900 text-center mb-20">
            Skills
          </h2>
        </ScrollSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {skillCategories.map((category, index) => (
            <ScrollSection key={category.title} delay={index * 200}>
              <div className="text-center bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-medium text-[#007ACC] mb-8">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill}
                      className="py-3 px-6 bg-gray-50 rounded-full text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
