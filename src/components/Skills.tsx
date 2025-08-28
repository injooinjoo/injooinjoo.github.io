import React from 'react';
import './Skills.css';

const Skills: React.FC = () => {
  const skills = {
    frontend: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
    backend: ['Node.js', 'Express', 'Python', 'Django', 'PostgreSQL', 'MongoDB'],
    tools: ['Git', 'Docker', 'AWS', 'Webpack', 'Jest', 'CI/CD']
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3 className="category-title">Frontend</h3>
            <div className="skill-tags">
              {skills.frontend.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h3 className="category-title">Backend</h3>
            <div className="skill-tags">
              {skills.backend.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h3 className="category-title">Tools & Others</h3>
            <div className="skill-tags">
              {skills.tools.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;