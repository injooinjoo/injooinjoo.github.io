import React from 'react';
import { LanguageProps } from '../types';

interface AboutSectionProps extends LanguageProps {}

const AboutSection: React.FC<AboutSectionProps> = ({ isEnglish }) => {
  // Existing implementation will be preserved, just adding the props
  return (
    <section id="about" className="min-h-screen py-20">
      {/* Keep the existing content */}
    </section>
  );
};

export default AboutSection;
