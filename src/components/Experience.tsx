import React from 'react';
import './Experience.css';

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string[];
  skills: string[];
  color: string;
  videoUrl?: string;
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      company: "SOOP (formerly AfreecaTV)",
      role: "Project Manager",
      period: "2012 - Present",
      description: [
        "Leading initiatives in platform growth, creator monetization, and user engagement",
        "Over 12 years of experience in product planning and growth strategy",
        "Specialized in creator ecosystem operations and data-driven decision making",
        "Managed multiple high-impact projects serving millions of users"
      ],
      skills: ["Product Planning", "Growth Strategy", "Creator Monetization", "Data Analytics", "Project Management"],
      color: "#e0f2fe",
      videoUrl: "/videos/soop-demo.mp4"
    },
    {
      company: "Harvard Extension School",
      role: "ALM in Data Science (Student)",
      period: "2023 - Present",
      description: [
        "Currently pursuing Advanced Liberal Arts Master's degree in Data Science",
        "Focusing on advanced statistical methods and machine learning applications",
        "Developing expertise in Python, R, and statistical modeling",
        "Applying data science principles to real-world business problems"
      ],
      skills: ["Data Science", "Statistical Analysis", "Python", "R", "Machine Learning"],
      color: "#fef3e8",
      videoUrl: "/videos/harvard-demo.mp4"
    },
    {
      company: "MITx",
      role: "MicroMasters in Statistics and Data Science",
      period: "2022 - 2023",
      description: [
        "Completed comprehensive program in Statistics and Data Science",
        "Gained expertise in probability, statistical inference, and machine learning",
        "Developed skills in data analysis using Python and statistical software",
        "Applied statistical methods to solve complex business problems"
      ],
      skills: ["Statistics", "Data Science", "Python", "Statistical Inference", "Probability"],
      color: "#f3e8ff",
      videoUrl: "/videos/mit-demo.mp4"
    }
  ];

  return (
    <div className="experience">
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className="experience-item"
            style={{ backgroundColor: exp.color }}
          >
            <div className="experience-header">
              <div className="experience-main">
                <h3 className="experience-company">{exp.company}</h3>
                <h4 className="experience-role">{exp.role}</h4>
              </div>
              <div className="experience-period">{exp.period}</div>
            </div>
            
            {exp.videoUrl && (
              <div className="experience-video">
                <video
                  src={exp.videoUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="experience-video-element"
                />
              </div>
            )}
            
            <div className="experience-description">
              <ul>
                {exp.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
            
            <div className="experience-skills">
              {exp.skills.map((skill, idx) => (
                <span key={idx} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;