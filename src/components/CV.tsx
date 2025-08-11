import React from 'react';
import './CV.css';

const CV: React.FC = () => {
  return (
    <div className="cv">
      <div className="cv-content">
        
        <section className="cv-section">
          <h2 className="cv-section-title">Professional Summary</h2>
          <p className="cv-summary">
            Project Manager with 12+ years of experience specializing in product planning, growth strategy, 
            and creator ecosystem operations. Proven track record of leading high-impact initiatives at scale, 
            with expertise in data-driven decision making and cross-functional team leadership.
          </p>
        </section>

        <section className="cv-section">
          <h2 className="cv-section-title">Work Experience</h2>
          
          <div className="cv-job">
            <div className="cv-job-header">
              <h3 className="cv-job-title">Project Manager</h3>
              <span className="cv-job-period">2012 - Present</span>
            </div>
            <h4 className="cv-company">SOOP (formerly AfreecaTV)</h4>
            <ul className="cv-job-details">
              <li>Leading initiatives in platform growth, creator monetization, and user engagement</li>
              <li>Managed multiple high-impact projects serving millions of users</li>
              <li>Specialized in creator ecosystem operations and data-driven decision making</li>
              <li>Over 12 years of experience in product planning and growth strategy</li>
            </ul>
          </div>
        </section>

        <section className="cv-section">
          <h2 className="cv-section-title">Education</h2>
          
          <div className="cv-education">
            <div className="cv-education-item">
              <div className="cv-education-header">
                <h3 className="cv-degree">ALM in Data Science</h3>
                <span className="cv-education-period">2023 - Present</span>
              </div>
              <h4 className="cv-school">Harvard Extension School</h4>
              <p className="cv-education-details">
                Advanced Liberal Arts Master's degree focusing on statistical methods, machine learning, 
                and data science applications in business contexts.
              </p>
            </div>
            
            <div className="cv-education-item">
              <div className="cv-education-header">
                <h3 className="cv-degree">MicroMasters in Statistics and Data Science</h3>
                <span className="cv-education-period">2022 - 2023</span>
              </div>
              <h4 className="cv-school">MITx</h4>
              <p className="cv-education-details">
                Comprehensive program covering probability, statistical inference, machine learning, 
                and data analysis using Python and statistical software.
              </p>
            </div>
          </div>
        </section>

        <section className="cv-section">
          <h2 className="cv-section-title">Key Skills</h2>
          <div className="cv-skills">
            <div className="cv-skill-category">
              <h4 className="cv-skill-category-title">Management & Strategy</h4>
              <div className="cv-skill-tags">
                <span className="cv-skill-tag">Product Planning</span>
                <span className="cv-skill-tag">Growth Strategy</span>
                <span className="cv-skill-tag">Project Management</span>
                <span className="cv-skill-tag">Cross-functional Leadership</span>
              </div>
            </div>
            <div className="cv-skill-category">
              <h4 className="cv-skill-category-title">Data & Analytics</h4>
              <div className="cv-skill-tags">
                <span className="cv-skill-tag">Data Science</span>
                <span className="cv-skill-tag">Statistical Analysis</span>
                <span className="cv-skill-tag">Machine Learning</span>
                <span className="cv-skill-tag">Python</span>
                <span className="cv-skill-tag">R</span>
              </div>
            </div>
            <div className="cv-skill-category">
              <h4 className="cv-skill-category-title">Platform & Operations</h4>
              <div className="cv-skill-tags">
                <span className="cv-skill-tag">Creator Monetization</span>
                <span className="cv-skill-tag">User Engagement</span>
                <span className="cv-skill-tag">Operations Automation</span>
                <span className="cv-skill-tag">Digital Transformation</span>
              </div>
            </div>
          </div>
        </section>

        <section className="cv-section">
          <h2 className="cv-section-title">Contact Information</h2>
          <div className="cv-contact">
            <div className="cv-contact-item">
              <span className="cv-contact-label">Location:</span>
              <span className="cv-contact-value">Seoul, Korea</span>
            </div>
            <div className="cv-contact-item">
              <span className="cv-contact-label">Email:</span>
              <span className="cv-contact-value">ink595@harvard.edu</span>
            </div>
            <div className="cv-contact-item">
              <span className="cv-contact-label">Phone:</span>
              <span className="cv-contact-value">+82 10-5060-6843</span>
            </div>
            <div className="cv-contact-item">
              <span className="cv-contact-label">LinkedIn:</span>
              <span className="cv-contact-value">linkedin.com/in/jooooo</span>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default CV;