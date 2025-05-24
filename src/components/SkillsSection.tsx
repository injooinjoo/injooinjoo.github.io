import React from 'react';
import { LanguageProps } from '../types';

interface SkillsSectionProps extends LanguageProps {}

const SkillsSection: React.FC<SkillsSectionProps> = ({ isEnglish }) => {
  return (
    <section id="skills" className="min-h-screen py-20">
      {/* Your existing skills section content */}
    </section>
  );
};

export default SkillsSection;
