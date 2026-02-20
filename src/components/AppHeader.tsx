import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Menu, X } from 'lucide-react';

const AppHeader: React.FC = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between backdrop-blur-md bg-white/30 dark:bg-black/30 border border-white/20 dark:border-white/10 shadow-lg rounded-2xl px-6 py-3">
          <div className="flex-shrink-0">
            <a href="#home" className="text-xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
              {t('profile.name')}
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              <a href="#home" className="text-sm font-medium hover:text-primary transition-colors">
                {t('nav.home')}
              </a>
              <a href="/resume.pdf" className="text-sm font-medium hover:text-primary transition-colors interactive" target="_blank" rel="noopener noreferrer">
                {t('nav.cv')}
              </a>
            </nav>
            <div className="h-6 w-px bg-gray-300 dark:bg-gray-700"></div>
            <button 
              className="text-sm font-medium hover:text-primary transition-colors interactive px-3 py-1.5 rounded-full bg-white/50 dark:bg-black/50 hover:bg-white/80 dark:hover:bg-black/80" 
              onClick={toggleLanguage}
            >
              {language === 'ko' ? 'EN' : 'KO'}
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button className="p-2 -mr-2 text-gray-600 hover:text-primary" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 backdrop-blur-xl bg-white/80 dark:bg-black/80 border border-white/20 rounded-2xl p-4 overflow-hidden shadow-2xl origin-top animate-in fade-in slide-in-from-top-5">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-base font-medium p-2 rounded-lg hover:bg-white/50" onClick={() => setIsMenuOpen(false)}>
                {t('nav.home')}
              </a>
              <a href="/resume.pdf" className="text-base font-medium p-2 rounded-lg hover:bg-white/50" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>
                {t('nav.cv')}
              </a>
              <div className="h-px w-full bg-gray-200 dark:bg-gray-800"></div>
              <button 
                className="text-left text-base font-medium p-2 rounded-lg hover:bg-white/50" 
                onClick={toggleLanguage}
              >
                {language === 'ko' ? t('language.english') : t('language.korean')}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default AppHeader;