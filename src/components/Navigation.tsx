
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, Moon, Sun, Globe } from 'lucide-react';
import { Switch } from "@/components/ui/switch";
import { Toggle } from "@/components/ui/toggle";

interface NavigationProps {
  isEnglish: boolean;
  setIsEnglish: (value: boolean) => void;
}

const Navigation: React.FC<NavigationProps> = ({ isEnglish, setIsEnglish }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Find the current section
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.getBoundingClientRect().top <= 100) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Set initial dark mode based on system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
    if (prefersDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  const toggleLanguage = () => {
    setIsEnglish(!isEnglish);
  };

  const menuItems = [
    { id: 'hero', label: isEnglish ? 'Home' : 'Home' },
    { id: 'about', label: isEnglish ? 'Profile' : 'Profile' },
    { id: 'skills', label: isEnglish ? 'Skills' : 'Skills' },
    { id: 'experience', label: isEnglish ? 'Experience' : 'Experience' },
    { id: 'projects', label: isEnglish ? 'Projects' : 'Projects' },
    { id: 'education', label: isEnglish ? 'Education' : 'Education' },
    { id: 'contact', label: isEnglish ? 'Contact' : 'Contact' },
  ];

  return (
    <>
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200/20 dark:border-gray-700/20 shadow-sm h-16" : "bg-transparent h-20"
      )}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-full">
            <div className="text-sm font-medium tracking-wide dark:text-white">
              김인주 (InJoo Kim)
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map(item => (
                <button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "text-xs font-normal transition-colors relative dark:text-gray-200",
                    activeSection === item.id ? "text-[#007ACC] dark:text-[#3b9ede]" : "hover:text-[#007ACC] dark:hover:text-[#3b9ede]"
                  )}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#007ACC] dark:bg-[#3b9ede] rounded-full"></span>
                  )}
                </button>
              ))}
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Toggle 
                pressed={isDarkMode}
                onPressedChange={toggleDarkMode}
                aria-label="Toggle dark mode"
                className="rounded-full p-2 dark:bg-gray-800 dark:text-white"
              >
                {isDarkMode ? <Moon size={16} /> : <Sun size={16} />}
              </Toggle>
              
              <Toggle 
                pressed={!isEnglish}
                onPressedChange={toggleLanguage}
                aria-label="Toggle language"
                className="rounded-full p-2 dark:bg-gray-800 dark:text-white"
              >
                <Globe size={16} />
                <span className="ml-1 text-xs">{isEnglish ? 'EN' : 'KO'}</span>
              </Toggle>
            </div>
            
            <button 
              className="md:hidden text-gray-700 dark:text-gray-200"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
        
        {/* Indicator for current section on small scroll */}
        <div className="h-1 w-full bg-transparent">
          <div 
            className="h-full bg-[#007ACC] dark:bg-[#3b9ede] transition-all duration-300" 
            style={{ 
              width: activeSection ? `${(menuItems.findIndex(item => item.id === activeSection) + 1) / menuItems.length * 100}%` : '0%'
            }}
          ></div>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 bg-white dark:bg-gray-900 z-50 flex flex-col transition-transform duration-300 ease-in-out transform",
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex justify-between items-center p-6 border-b dark:border-gray-700">
          <div className="text-sm font-medium dark:text-white">
            Menu
          </div>
          <div className="flex items-center space-x-4">
            <Toggle 
              pressed={isDarkMode}
              onPressedChange={toggleDarkMode}
              aria-label="Toggle dark mode"
              className="rounded-full p-2 dark:bg-gray-800 dark:text-white"
            >
              {isDarkMode ? <Moon size={16} /> : <Sun size={16} />}
            </Toggle>
            
            <Toggle 
              pressed={!isEnglish}
              onPressedChange={toggleLanguage}
              aria-label="Toggle language"
              className="rounded-full p-2 dark:bg-gray-800 dark:text-white"
            >
              <Globe size={16} />
              <span className="ml-1 text-xs">{isEnglish ? 'EN' : 'KO'}</span>
            </Toggle>
            
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 dark:text-gray-200"
            >
              <X size={18} />
            </button>
          </div>
        </div>
        
        <div className="flex flex-col p-6 space-y-6">
          {menuItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-left py-2 ${activeSection === item.id ? "text-[#007ACC] dark:text-[#3b9ede]" : "text-gray-900 dark:text-gray-200 hover:text-[#007ACC] dark:hover:text-[#3b9ede]"} transition-colors`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;
