
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const menuItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'Profile' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'global', label: 'Global' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-12",
        isScrolled ? "bg-white/90 backdrop-blur-md border-b border-gray-200/20 shadow-sm" : "bg-transparent"
      )}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-12">
            <div className="text-xs font-medium tracking-wide">
              김인주 (InJoo Kim)
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map(item => (
                <button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-xs font-normal hover:text-[#007ACC] transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
            
            <button 
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 bg-white z-50 flex flex-col transition-transform duration-300 ease-in-out transform",
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex justify-between items-center p-6 border-b">
          <div className="text-sm font-medium">
            Menu
          </div>
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-700"
          >
            <X size={18} />
          </button>
        </div>
        
        <div className="flex flex-col p-6 space-y-6">
          {menuItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-left py-2 text-gray-900 hover:text-[#007ACC] transition-colors"
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
