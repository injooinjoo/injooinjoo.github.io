import React from 'react';
import './Projects.css';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Creator Monetization Mission System",
      description: "Developed a comprehensive system for creator monetization with mission-based rewards",
      tech: ["React", "Node.js", "MongoDB"],
      type: "Platform Development"
    },
    {
      title: "Homepage Personalization Algorithm",
      description: "Implemented ML-based personalization to improve user engagement and retention",
      tech: ["Python", "TensorFlow", "Redis"],
      type: "Machine Learning"
    },
    {
      title: "Operations Automation & Efficiency Platform",
      description: "Built automation tools that reduced operational overhead by 40%",
      tech: ["TypeScript", "AWS", "Docker"],
      type: "DevOps"
    },
    {
      title: "Creator Subscription Service Platform Renewal",
      description: "Led the complete renewal of subscription platform serving 100K+ users",
      tech: ["React", "GraphQL", "PostgreSQL"],
      type: "Full Stack"
    },
    {
      title: "Content Attribute Tagging System",
      description: "Developed intelligent content tagging system using NLP techniques",
      tech: ["Python", "NLP", "Elasticsearch"],
      type: "AI/ML"
    },
    {
      title: "Mobile App Growth Hacking",
      description: "Implemented growth strategies that increased MAU by 25%",
      tech: ["React Native", "Firebase", "Analytics"],
      type: "Mobile Development"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects & Experience</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-type">{project.type}</span>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;