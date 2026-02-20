import React, { useRef } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import AppHeader from './components/AppHeader';
import ProfileHeader from './components/ProfileHeader';
import Experience from './components/Experience';
import SideProjects from './components/SideProjects';
import Certifications from './components/Certifications';
import CV from './components/CV';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './App.css';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const App: React.FC = () => {
  const mainRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray('.stack-card');
    
    // Animate cards on scroll
    cards.forEach((card: any) => {
      // Add subtle scale or fade when it becomes top
      gsap.fromTo(card, 
        { opacity: 0.8, y: 50, scale: 0.95 },
        {
          opacity: 1, 
          y: 0,
          scale: 1,
          duration: 0.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100', // When the top of card hits 100px from bottom of viewport
            end: 'top center',
            scrub: 1,
          }
        }
      );

      // Stacking effect using position sticky (handled by CSS)
      // but we can also add scroll triggers if we wanted to fade out older cards
    });
  }, { scope: mainRef });

  return (
    <LanguageProvider>
      <Cursor />
      <div className="app min-h-screen bg-gray-50/50 dark:bg-[#09090b]">
        <AppHeader />
        
        <div id="home" className="container mx-auto">
          <ProfileHeader />
          
          <main ref={mainRef} className="content relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 flex flex-col gap-12 sm:gap-24">
            
            <section id="experience" className="stack-card sticky top-24 pt-4 z-10 bg-gray-50/95 dark:bg-[#09090b]/95 backdrop-blur-3xl rounded-3xl shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_-10px_40px_-15px_rgba(255,255,255,0.05)] border border-gray-200/50 dark:border-white/10 overflow-hidden">
              <div className="px-6 py-8 sm:p-10">
                <h2 className="text-3xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">Experience</h2>
                <Experience />
              </div>
            </section>
            
            <section id="side-projects" className="stack-card sticky top-32 pt-4 z-20 bg-gray-50/95 dark:bg-[#09090b]/95 backdrop-blur-3xl rounded-3xl shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_-10px_40px_-15px_rgba(255,255,255,0.05)] border border-gray-200/50 dark:border-white/10 overflow-hidden">
              <div className="px-6 py-8 sm:p-10">
                <h2 className="text-3xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Side Projects</h2>
                <SideProjects />
              </div>
            </section>
            
            <section id="certifications" className="stack-card sticky top-40 pt-4 z-30 bg-gray-50/95 dark:bg-[#09090b]/95 backdrop-blur-3xl rounded-3xl shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_-10px_40px_-15px_rgba(255,255,255,0.05)] border border-gray-200/50 dark:border-white/10 overflow-hidden">
              <div className="px-6 py-8 sm:p-10">
                <h2 className="text-3xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">Certifications</h2>
                <Certifications />
              </div>
            </section>
            
            <section id="cv" className="stack-card sticky top-48 pt-4 z-40 bg-gray-50/95 dark:bg-[#09090b]/95 backdrop-blur-3xl rounded-3xl shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_-10px_40px_-15px_rgba(255,255,255,0.05)] border border-gray-200/50 dark:border-white/10 overflow-hidden">
              <div className="px-6 py-8 sm:p-10">
                <h2 className="text-3xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">Curriculum Vitae</h2>
                <CV />
              </div>
            </section>

          </main>
        </div>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;