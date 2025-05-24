
import React, { useState } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import AppleScrollEffect from './components/AppleScrollEffect';

function App() {
  const [isEnglish, setIsEnglish] = useState<boolean>(true);

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
      
      <main className="flex-grow">
        <HeroSection isEnglish={isEnglish} />
        <AboutSection isEnglish={isEnglish} />
        <SkillsSection isEnglish={isEnglish} />
        <ExperienceSection isEnglish={isEnglish} />
        <ProjectsSection isEnglish={isEnglish} />
        <EducationSection isEnglish={isEnglish} />
        <ContactSection isEnglish={isEnglish} />
      </main>
    </div>
  );
}

export default App;
