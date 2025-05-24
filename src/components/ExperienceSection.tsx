import React from 'react';
import { LanguageProps } from '../types';

interface ExperienceSectionProps extends LanguageProps {}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ isEnglish }) => {
  return (
    <section id="experience" className="min-h-screen py-20">
      {/* Your existing experience section content */}
    </section>
  );
};

export default ExperienceSection;
