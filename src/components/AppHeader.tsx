import React from 'react';
import './AppHeader.css';

const AppHeader: React.FC = () => {
  return (
    <header className="app-header">
      <div className="container">
        <div className="app-header-content">
          <div className="app-logo">
            <a href="#home">InJoo Kim</a>
          </div>
          <nav className="app-nav">
            <a href="#home" className="app-nav-link">Home</a>
            <a href="/resume.pdf" className="app-nav-link" target="_blank" rel="noopener noreferrer">
              CV
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;