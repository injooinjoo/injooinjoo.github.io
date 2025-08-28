import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate full-stack developer with a love for creating intuitive and impactful digital solutions. 
              With expertise in modern web technologies, I bring ideas to life through clean, efficient code.
            </p>
            <p>
              My journey in tech started with curiosity about how things work, and has evolved into a career focused on 
              building user-centric applications that solve real-world problems.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or sharing knowledge with the developer community.
            </p>
          </div>
          <div className="about-info">
            <div className="info-item">
              <span className="info-label">Location:</span>
              <span className="info-value">Seoul, South Korea</span>
            </div>
            <div className="info-item">
              <span className="info-label">Email:</span>
              <span className="info-value">injoo@example.com</span>
            </div>
            <div className="info-item">
              <span className="info-label">Languages:</span>
              <span className="info-value">Korean, English</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;