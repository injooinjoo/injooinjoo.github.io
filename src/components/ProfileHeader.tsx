import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Mail, Linkedin, PhoneCall } from 'lucide-react';

gsap.registerPlugin(useGSAP);

const ProfileHeader: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const bioRef = useRef<HTMLParagraphElement>(null);
  const [typedText, setTypedText] = useState('');
  
  const fullText = "Project Manager with over 12 years of experience in product planning, growth strategy, and creator ecosystem operations at SOOP (formerly AfreecaTV). Currently pursuing Data Science, Master of Liberal Arts in Extension Studies at Harvard University. Completed MITx MicroMasters in Statistics and Data Science.";

  useGSAP(() => {
    const tl = gsap.timeline();
    
    // Cinematic fade and slide up
    tl.from('.profile-image-container', {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    })
    .from('.profile-name', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    }, "-=0.6")
    .from('.profile-location', {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: 'power3.out'
    }, "-=0.4")
    .from('.profile-links a', {
      y: 20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'back.out(1.7)'
    }, "-=0.2");

  }, { scope: container });

  // Live Typewriter Effect
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(prev => prev + fullText.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 30); // typing speed

    return () => clearInterval(typingInterval);
  }, [fullText]);

  return (
    <header ref={container} className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto flex flex-col items-center text-center">
      <div className="profile-image-container relative w-40 h-40 sm:w-48 sm:h-48 mb-8 mt-12">
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-blue-400 blur-xl opacity-40 animate-pulse"></div>
        <img 
          src="/profile-image.jpg" 
          alt="InJoo Kim" 
          className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-2xl"
        />
      </div>
      
      <div className="profile-info flex flex-col items-center">
        <h1 className="profile-name text-4xl sm:text-6xl font-extrabold tracking-tight mb-4 text-gray-900 dark:text-white">
          InJoo Kim
        </h1>
        <p className="profile-location text-lg sm:text-xl font-medium text-blue-600 dark:text-blue-400 mb-8 border border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-900/30 px-4 py-1.5 rounded-full">
          Seoul, Korea
        </p>
        
        <p ref={bioRef} className="profile-bio text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed mb-10 h-32 sm:h-24">
          {typedText}
          <span className="inline-block w-1 h-5 ml-1 bg-primary animate-ping"></span>
        </p>
        
        <div className="profile-links flex flex-wrap justify-center gap-4 sm:gap-6">
          <a href="mailto:ink595@g.harvard.edu" className="flex items-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md hover:border-primary transition-all interactive text-gray-700 dark:text-gray-200 font-medium">
            <Mail size={18} className="text-primary" />
            Email
          </a>
          <a href="https://linkedin.com/in/jooooo" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md hover:border-[#0A66C2] transition-all interactive text-gray-700 dark:text-gray-200 font-medium">
            <Linkedin size={18} className="text-[#0A66C2]" />
            LinkedIn
          </a>
          <a href="tel:+821050606843" className="flex items-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md hover:border-green-500 transition-all interactive text-gray-700 dark:text-gray-200 font-medium">
            <PhoneCall size={18} className="text-green-500" />
            Phone
          </a>
        </div>
      </div>
    </header>
  );
};

export default ProfileHeader;