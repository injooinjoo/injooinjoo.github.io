
import React from 'react';
import ScrollSection from './ScrollSection';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js"]
    },
    {
      title: "Backend", 
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis"]
    },
    {
      title: "Tools",
      skills: ["Git", "Docker", "AWS", "Figma", "VS Code"]
    }
  ];

  return (
    <section id="skills" className="min-h-screen py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollSection>
          <h2 className="text-5xl md:text-6xl font-thin text-gray-900 text-center mb-20">
            Skills
          </h2>
        </ScrollSection>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {skillCategories.map((category, index) => (
            <ScrollSection key={category.title} delay={index * 200}>
              <div className="text-center">
                <h3 className="text-2xl font-medium text-gray-900 mb-8">
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
