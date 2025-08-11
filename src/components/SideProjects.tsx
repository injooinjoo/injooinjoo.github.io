import React from 'react';
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
  const projects: ProjectItem[] = [
    {
      title: "Creator Monetization Mission System",
      description: "Developed comprehensive mission-based monetization system for content creators, enabling structured reward programs and engagement-driven revenue streams.",
      tech: ["Product Management", "Analytics", "User Experience"],
      status: "completed",
      year: "2024"
    },
    {
      title: "Homepage Personalization Algorithm",
      description: "Implemented machine learning-driven personalization algorithm for homepage content recommendation, significantly improving user engagement and retention rates.",
      tech: ["Machine Learning", "Data Analytics", "A/B Testing"],
      status: "completed",
      year: "2024"
    },
    {
      title: "Operations Automation & Efficiency Platform",
      description: "Built comprehensive automation platform to streamline operational processes, reducing manual work and improving team efficiency across multiple departments.",
      tech: ["Process Automation", "Analytics", "Operations"],
      status: "completed",
      year: "2023"
    },
    {
      title: "Creator Subscription Service Platform Renewal",
      description: "Led complete renewal of creator subscription platform, enhancing user experience and payment systems to better serve creators and subscribers.",
      tech: ["Product Strategy", "Payment Systems", "UX Design"],
      status: "completed",
      year: "2023"
    },
    {
      title: "Content Attribute Tagging System",
      description: "Developed intelligent content tagging and categorization system to improve content discovery and recommendation accuracy.",
      tech: ["Data Science", "Content Management", "Search Optimization"],
      status: "completed",
      year: "2023"
    },
    {
      title: "TTS & Voice Integration Upgrade",
      description: "Implemented advanced text-to-speech and voice integration features to enhance accessibility and user experience on the platform.",
      tech: ["Voice Technology", "Accessibility", "Integration"],
      status: "completed",
      year: "2023"
    },
    {
      title: "BJ Match - Creator Growth Tournament Platform",
      description: "Created competitive tournament platform for content creators to showcase talents and grow their audience through structured competitions.",
      tech: ["Platform Development", "Gaming", "Community Building"],
      status: "completed",
      year: "2022"
    },
    {
      title: "Digital Contract Management System",
      description: "Developed digital contract management system to streamline creator partnerships and business agreements with automated workflows.",
      tech: ["Contract Management", "Automation", "Legal Tech"],
      status: "completed",
      year: "2022"
    },
    {
      title: "G-Star Event Management",
      description: "Managed large-scale gaming event operations at G-Star, coordinating multiple stakeholders and ensuring successful event execution.",
      tech: ["Event Management", "Coordination", "Gaming Industry"],
      status: "completed",
      year: "2022"
    },
    {
      title: "SOOP Global Platform Launch & Creator Acquisition",
      description: "Led global expansion initiative for SOOP platform, developing creator acquisition strategies and international market entry plans.",
      tech: ["Global Strategy", "Market Expansion", "Creator Relations"],
      status: "completed",
      year: "2022"
    },
    {
      title: "Mobile App Growth Hacking",
      description: "Implemented comprehensive growth hacking strategies for mobile application, achieving significant increases in user acquisition and retention.",
      tech: ["Growth Strategy", "Mobile Analytics", "User Acquisition"],
      status: "completed",
      year: "2021"
    },
    {
      title: "User Segmentation & Personalization",
      description: "Developed advanced user segmentation models and personalization systems to deliver tailored experiences for different user groups.",
      tech: ["Data Science", "User Analytics", "Personalization"],
      status: "completed",
      year: "2021"
    },
    {
      title: "Machine Learning-based User Churn Prediction",
      description: "Built machine learning models to predict user churn patterns, enabling proactive retention strategies and improved user lifetime value.",
      tech: ["Machine Learning", "Predictive Analytics", "Data Science"],
      status: "completed",
      year: "2020"
    },
    {
      title: "Strategic Data Partnership with Nexon",
      description: "Established and managed strategic data partnership with Nexon, creating synergies between gaming and streaming platforms.",
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
      case 'completed': return 'Completed';
      case 'in-progress': return 'In Progress';
      case 'planned': return 'Planned';
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