import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './TabNavigation.css';

type TabType = 'experience' | 'side-projects' | 'certifications' | 'cv';

interface TabNavigationProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, onTabChange }) => {
  const { t } = useLanguage();
  
  const tabs = [
    { id: 'experience' as TabType, label: t('tab.experience'), icon: '💼' },
    { id: 'side-projects' as TabType, label: t('tab.sideProjects'), icon: '🚀' },
    { id: 'certifications' as TabType, label: t('tab.certifications'), icon: '🎓' },
    { id: 'cv' as TabType, label: t('tab.cv'), icon: '📄' }
  ];

  return (
    <nav className="tab-navigation">
      <div className="tab-list">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? 'tab-active' : ''}`}
            onClick={() => onTabChange(tab.id)}
          >
            <span className="tab-icon">{tab.icon}</span>
            <span className="tab-label">{tab.label}</span>
          </button>
        ))}
      </div>
      <div className="tab-indicator" />
    </nav>
  );
};

export default TabNavigation;