import React, { useState } from 'react';
import AppHeader from './components/AppHeader';
import ProfileHeader from './components/ProfileHeader';
import TabNavigation from './components/TabNavigation';
import Experience from './components/Experience';
import SideProjects from './components/SideProjects';
import CV from './components/CV';
import Footer from './components/Footer';
import './App.css';

type TabType = 'experience' | 'side-projects' | 'cv';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('experience');

  const renderContent = () => {
    switch (activeTab) {
      case 'experience':
        return <Experience />;
      case 'side-projects':
        return <SideProjects />;
      case 'cv':
        return <CV />;
      default:
        return <Experience />;
    }
  };

  return (
    <div className="app">
      <AppHeader />
      <div className="container">
        <ProfileHeader />
        <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
        <main className="content">
          {renderContent()}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default App;