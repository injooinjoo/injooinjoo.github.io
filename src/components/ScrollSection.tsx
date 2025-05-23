
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface ScrollSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number;
  speed?: number; // Parallax speed
  direction?: 'up' | 'down' | 'left' | 'right';
  scale?: boolean; // Whether to scale the element on scroll
  opacity?: boolean; // Whether to change opacity on scroll
  sticky?: boolean; // Whether the section should be sticky
}

const ScrollSection: React.FC<ScrollSectionProps> = ({ 
  children, 
  className, 
  id, 
  delay = 0,
  speed = 1,
  direction = 'up',
  scale = false,
  opacity = true,
  sticky = false
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollPos = window.scrollY;
        const windowHeight = window.innerHeight;
        
        // Calculate position relative to viewport
        const relativePos = (rect.top + rect.height / 2) / windowHeight;
        setScrollPosition(relativePos);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, [delay]);

  // Calculate transform values based on scroll position
  const getTransform = () => {
    if (!isVisible) return '';
    
    let transform = '';
    
    if (direction === 'up') {
      transform += `translateY(${scrollPosition * speed * -10}%) `;
    } else if (direction === 'down') {
      transform += `translateY(${scrollPosition * speed * 10}%) `;
    } else if (direction === 'left') {
      transform += `translateX(${scrollPosition * speed * -10}%) `;
    } else if (direction === 'right') {
      transform += `translateX(${scrollPosition * speed * 10}%) `;
    }
    
    if (scale) {
      const scaleValue = 1 + Math.abs(scrollPosition - 0.5) * 0.2;
      transform += `scale(${scaleValue}) `;
    }
    
    return transform.trim();
  };

  const getOpacity = () => {
    if (!isVisible) return 0;
    if (!opacity) return 1;
    
    // Fade in as element enters viewport
    const centerPosition = 0.5; // Center of the viewport
    const distance = Math.abs(scrollPosition - centerPosition);
    
    // Create a bell curve effect for opacity
    return Math.max(0, 1 - distance * 1.5);
  };

  return (
    <div
      ref={ref}
      id={id}
      className={cn(
        "transition-all will-change-transform",
        sticky ? "sticky top-0" : "",
        isVisible 
          ? "opacity-100" 
          : "opacity-0 translate-y-16",
        className
      )}
      style={{
        transform: getTransform(),
        opacity: getOpacity(),
        transition: `all ${delay ? delay / 1000 + 0.5 : 0.5}s cubic-bezier(0.17, 0.67, 0.83, 0.67)`
      }}
    >
      <div ref={sectionRef}>
        {children}
      </div>
    </div>
  );
};

export default ScrollSection;
