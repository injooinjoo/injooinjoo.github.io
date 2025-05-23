
import React from 'react';
import ScrollSection from './ScrollSection';

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollSection>
            <div className="space-y-8">
              <h2 className="text-5xl md:text-6xl font-thin text-gray-900">
                About
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a passionate developer focused on creating meaningful digital experiences. 
                With expertise in modern web technologies, I bring ideas to life through clean code 
                and thoughtful design.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Every project is an opportunity to push boundaries and create something extraordinary.
              </p>
            </div>
          </ScrollSection>
          
          <ScrollSection delay={300}>
            <div className="bg-gray-100 aspect-square rounded-3xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-6"></div>
                <p className="text-gray-500 text-sm">Your Photo Here</p>
              </div>
            </div>
          </ScrollSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
