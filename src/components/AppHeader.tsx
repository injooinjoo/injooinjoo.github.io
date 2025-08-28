import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './AppHeader.css';

const AppHeader: React.FC = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <header className="app-header">
      <div className="container">
        <div className="app-header-content">
          <div className="app-logo">
            <a href="#home">{t('profile.name')}</a>
          </div>
          <div className="app-header-right">
            <nav className={`app-nav ${isMenuOpen ? 'app-nav-open' : ''}`}>
              <a href="#home" className="app-nav-link" onClick={() => setIsMenuOpen(false)}>
                {t('nav.home')}
              </a>
              <a href="/resume.pdf" className="app-nav-link" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>
                {t('nav.cv')}
              </a>
            </nav>
            <button className="language-toggle" onClick={toggleLanguage}>
              {language === 'ko' ? t('language.english') : t('language.korean')}
            </button>
            <button className="mobile-menu-toggle" onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;