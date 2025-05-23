
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface ScrollSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

const ScrollSection: React.FC<ScrollSectionProps> = ({ 
  children, 
  className, 
  id, 
  delay = 0 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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
        threshold: 0.15,  // Increased threshold for earlier animation trigger
        rootMargin: '-10px 0px'  // Adjusted rootMargin for better timing
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      id={id}
      className={cn(
        "transition-all duration-1000 ease-out will-change-transform",
        isVisible 
          ? "opacity-100 transform-none" 
          : "opacity-0 translate-y-16",  // More dramatic initial position
        className
      )}
    >
      {children}
    </div>
  );
};

export default ScrollSection;
