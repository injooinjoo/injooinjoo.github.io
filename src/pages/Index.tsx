
import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ExperienceSection from '../components/ExperienceSection';
import ProjectsSection from '../components/ProjectsSection';
import EducationSection from '../components/EducationSection';
import ContactSection from '../components/ContactSection';
import { LanguageProps } from '../types';

const Index: React.FC<LanguageProps> = ({ isEnglish, setIsEnglish }) => {
  return (
    <div className="min-h-screen">
      <Navigation isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
      <HeroSection isEnglish={isEnglish} />
      <AboutSection isEnglish={isEnglish} />
      <SkillsSection isEnglish={isEnglish} />
      <ExperienceSection isEnglish={isEnglish} />
      <ProjectsSection isEnglish={isEnglish} />
      <EducationSection isEnglish={isEnglish} />
      <ContactSection isEnglish={isEnglish} />
    </div>
  );
};

export default Index;
