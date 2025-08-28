import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './SideProjects.css';

interface ProjectItem {
  title: string;
  description: string;
  tech: string[];
  status: 'completed' | 'in-progress' | 'planned';
  link?: string;
  year: string;
}

const SideProjects: React.FC = () => {
  const { t } = useLanguage();
  
  const projects: ProjectItem[] = [
    {
      title: "Creator Monetization Mission System",
      description: "Mission-based monetization system for content creators to enhance engagement and revenue generation.",
      tech: ["Product Management", "Analytics", "User Experience"],
      status: "completed",
      year: "2024"
    },
    {
      title: "Homepage Personalization Algorithm",
      description: "Personalization algorithm for homepage content recommendation to improve user engagement.",
      tech: ["Machine Learning", "Data Analytics", "A/B Testing"],
      status: "completed",
      year: "2024"
    },
    {
      title: "Operations Automation & Efficiency Platform",
      description: "Automation platform to streamline operational processes and improve team efficiency.",
      tech: ["Process Automation", "Analytics", "Operations"],
      status: "completed",
      year: "2023"
    },
    {
      title: "Creator Subscription Service Platform Renewal",
      description: "Complete renewal of creator subscription platform with enhanced user experience.",
      tech: ["Product Strategy", "Payment Systems", "UX Design"],
      status: "completed",
      year: "2023"
    },
    {
      title: "Content Attribute Tagging System",
      description: "Intelligent content tagging and categorization system for improved content discovery.",
      tech: ["Data Science", "Content Management", "Search Optimization"],
      status: "completed",
      year: "2023"
    },
    {
      title: "TTS & Voice Integration Upgrade",
      description: "Text-to-speech and voice integration features to enhance platform accessibility.",
      tech: ["Voice Technology", "Accessibility", "Integration"],
      status: "completed",
      year: "2023"
    },
    {
      title: "BJ Match - Creator Growth Tournament Platform",
      description: "Competitive tournament platform for content creators to showcase talents and grow audience.",
      tech: ["Platform Development", "Gaming", "Community Building"],
      status: "completed",
      year: "2022"
    },
    {
      title: "Digital Contract Management System",
      description: "Digital contract management system for streamlined creator partnerships and business agreements.",
      tech: ["Contract Management", "Automation", "Legal Tech"],
      status: "completed",
      year: "2022"
    },
    {
      title: "G-Star Event Management",
      description: "Large-scale gaming event operations management at G-Star with multi-stakeholder coordination.",
      tech: ["Event Management", "Coordination", "Gaming Industry"],
      status: "completed",
      year: "2022"
    },
    {
      title: "SOOP Global Platform Launch & Creator Acquisition",
      description: "Global expansion initiative for SOOP platform with creator acquisition strategies.",
      tech: ["Global Strategy", "Market Expansion", "Creator Relations"],
      status: "completed",
      year: "2022"
    },
    {
      title: "Mobile App Growth Hacking",
      description: "Growth strategies for mobile application focusing on user acquisition and retention.",
      tech: ["Growth Strategy", "Mobile Analytics", "User Acquisition"],
      status: "completed",
      year: "2021"
    },
    {
      title: "User Segmentation & Personalization",
      description: "User segmentation models and personalization systems for tailored user experiences.",
      tech: ["Data Science", "User Analytics", "Personalization"],
      status: "completed",
      year: "2021"
    },
    {
      title: "Machine Learning-based User Churn Prediction",
      description: "Machine learning models for user churn prediction and retention strategies.",
      tech: ["Machine Learning", "Predictive Analytics", "Data Science"],
      status: "completed",
      year: "2020"
    },
    {
      title: "Strategic Data Partnership with Nexon",
      description: "Strategic data partnership management creating synergies between gaming and streaming platforms.",
      tech: ["Partnership Strategy", "Data Integration", "Business Development"],
      status: "completed",
      year: "2020"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return '#10b981';
      case 'in-progress': return '#f59e0b';
      case 'planned': return '#6b7280';
      default: return '#6b7280';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return t('projects.status.completed');
      case 'in-progress': return t('projects.status.inProgress');
      case 'planned': return t('projects.status.planned');
      default: return status;
    }
  };

  return (
    <div className="side-projects">
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-header">
              <div className="project-title-row">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-year">{project.year}</span>
              </div>
              <div 
                className="project-status"
                style={{ backgroundColor: getStatusColor(project.status) }}
              >
                {getStatusText(project.status)}
              </div>
            </div>
            
            <p className="project-description">{project.description}</p>
            
            <div className="project-tech">
              {project.tech.map((tech, idx) => (
                <span key={idx} className="tech-tag">{tech}</span>
              ))}
            </div>
            
            {project.link && (
              <div className="project-link">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="link-button"
                >
                  View Project →
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideProjects;