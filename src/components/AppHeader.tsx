import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './AppHeader.css';

const AppHeader: React.FC = () => {
  const { language, toggleLanguage, t } = useLanguage();
  
  return (
    <header className="app-header">
      <div className="container">
        <div className="app-header-content">
          <div className="app-logo">
            <a href="#home">{t('profile.name')}</a>
          </div>
          <div className="app-header-right">
            <nav className="app-nav">
              <a href="#home" className="app-nav-link">{t('nav.home')}</a>
              <a href="/resume.pdf" className="app-nav-link" target="_blank" rel="noopener noreferrer">
                {t('nav.cv')}
              </a>
            </nav>
            <button className="language-toggle" onClick={toggleLanguage}>
              {language === 'ko' ? t('language.english') : t('language.korean')}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;