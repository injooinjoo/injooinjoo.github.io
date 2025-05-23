
import React from 'react';
import ScrollSection from './ScrollSection';

const ContactSection = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <ScrollSection>
          <h2 className="text-5xl md:text-6xl font-thin mb-8">
            Let's Work Together
          </h2>
        </ScrollSection>
        
        <ScrollSection delay={200}>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's create something amazing together.
          </p>
        </ScrollSection>
        
        <ScrollSection delay={400}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="mailto:contact@example.com"
              className="bg-white text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              Get in Touch
            </a>
            <a 
              href="#"
              className="border border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-gray-900 transition-colors"
            >
              View Resume
            </a>
          </div>
        </ScrollSection>
        
        <ScrollSection delay={600}>
          <div className="mt-16 pt-8 border-t border-gray-800">
            <p className="text-gray-400 text-sm">
              © 2024 Portfolio. Designed with precision.
            </p>
          </div>
        </ScrollSection>
      </div>
    </section>
  );
};

export default ContactSection;
