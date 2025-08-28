import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'ko' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Translation object
const translations: Record<Language, Record<string, string>> = {
  ko: {
    // Navigation
    'nav.home': '홈',
    'nav.cv': 'CV',
    
    // Profile
    'profile.name': '김인주',
    'profile.title': 'Frontend Developer & Project Manager',
    'profile.location': '서울, 한국',
    'profile.email': 'Injookim.dev@gmail.com',
    'profile.languages': '한국어, 영어',
    
    // Tabs
    'tab.experience': '경력',
    'tab.sideProjects': '사이드 프로젝트',
    'tab.certifications': '자격증',
    'tab.cv': 'CV',
    
    // Experience
    'experience.title': '경력',
    'experience.company': '회사',
    'experience.period': '기간',
    'experience.role': '역할',
    'experience.description': '설명',
    
    // Side Projects
    'projects.title': '사이드 프로젝트',
    'projects.status.completed': '완료',
    'projects.status.inProgress': '진행중',
    'projects.status.planned': '계획',
    'projects.viewLive': '라이브 보기',
    'projects.viewCode': '코드 보기',
    
    // Certifications
    'certifications.title': '자격증',
    'certifications.issued': '발급일',
    'certifications.expires': '만료일',
    
    // Footer
    'footer.rights': '© 2024 InJoo Kim. All rights reserved.',
    'footer.builtWith': 'React로 제작됨',
    
    // Language toggle
    'language.korean': '한',
    'language.english': 'EN'
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.cv': 'CV',
    
    // Profile
    'profile.name': 'InJoo Kim',
    'profile.title': 'Frontend Developer & Project Manager',
    'profile.location': 'Seoul, South Korea',
    'profile.email': 'Injookim.dev@gmail.com',
    'profile.languages': 'Korean, English',
    
    // Tabs
    'tab.experience': 'Experience',
    'tab.sideProjects': 'Side Projects',
    'tab.certifications': 'Certifications',
    'tab.cv': 'CV',
    
    // Experience
    'experience.title': 'Experience',
    'experience.company': 'Company',
    'experience.period': 'Period',
    'experience.role': 'Role',
    'experience.description': 'Description',
    
    // Side Projects
    'projects.title': 'Side Projects',
    'projects.status.completed': 'Completed',
    'projects.status.inProgress': 'In Progress',
    'projects.status.planned': 'Planned',
    'projects.viewLive': 'View Live',
    'projects.viewCode': 'View Code',
    
    // Certifications
    'certifications.title': 'Certifications',
    'certifications.issued': 'Issued',
    'certifications.expires': 'Expires',
    
    // Footer
    'footer.rights': '© 2024 InJoo Kim. All rights reserved.',
    'footer.builtWith': 'Built with React',
    
    // Language toggle
    'language.korean': '한',
    'language.english': 'EN'
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ko');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ko' ? 'en' : 'ko');
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const value: LanguageContextType = {
    language,
    toggleLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};