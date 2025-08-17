import React from 'react';
import './Certifications.css';

interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  description: string;
  credentialId?: string;
  link?: string;
  skills: string[];
  logo?: string;
}

const Certifications: React.FC = () => {
  const certifications: CertificationItem[] = [
    {
      title: "MicroMasters in Statistics and Data Science",
      issuer: "MITx",
      date: "2024",
      description: "Comprehensive program covering probability, statistics, machine learning, and data analysis with Python and R. Completed four graduate-level courses with distinction.",
      skills: ["Statistical Inference", "Machine Learning", "Python", "R", "Data Visualization", "Predictive Modeling"],
      logo: "MIT"
    }
  ];

  return (
    <div className="certifications">
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <div key={index} className="certification-card">
            <div className="certification-header">
              {cert.logo && (
                <div className="certification-logo">
                  <div className="logo-placeholder">{cert.logo}</div>
                </div>
              )}
              <div className="certification-info">
                <h3 className="certification-title">{cert.title}</h3>
                <div className="certification-meta">
                  <span className="certification-issuer">{cert.issuer}</span>
                  <span className="certification-date">{cert.date}</span>
                </div>
              </div>
            </div>
            
            <p className="certification-description">{cert.description}</p>
            
            {cert.credentialId && (
              <div className="certification-credential">
                <span className="credential-label">Credential ID:</span>
                <span className="credential-id">{cert.credentialId}</span>
              </div>
            )}
            
            <div className="certification-skills">
              {cert.skills.map((skill, idx) => (
                <span key={idx} className="skill-tag">{skill}</span>
              ))}
            </div>
            
            {cert.link && (
              <div className="certification-link">
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="verify-button"
                >
                  Verify Certificate →
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;