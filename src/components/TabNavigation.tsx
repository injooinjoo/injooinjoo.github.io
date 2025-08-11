import React from 'react';
import './TabNavigation.css';

type TabType = 'experience' | 'side-projects' | 'cv';

interface TabNavigationProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'experience' as TabType, label: 'Experience', icon: '💼' },
    { id: 'side-projects' as TabType, label: 'Side Projects', icon: '🚀' },
    { id: 'cv' as TabType, label: 'CV', icon: '📄' }
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