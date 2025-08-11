import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-links">
            <a href="mailto:injoo@example.com" className="footer-link">Email</a>
            <a href="https://linkedin.com/in/injookim" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
            <a href="https://github.com/injooinjoo" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
          </div>
          <p className="footer-text">
            &copy; {new Date().getFullYear()} InJoo Kim
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;