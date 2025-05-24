
import React, { useEffect, useRef, useState } from 'react';
import CanvasScrollClip from 'canvas-scroll-clip';

interface AppleScrollEffectProps {
  className?: string;
  children?: React.ReactNode;
}

const AppleScrollEffect: React.FC<AppleScrollEffectProps> = ({ className, children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [error, setError] = useState<boolean>(false);
  
  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;
    
    let scrollClip: any = null;
    
    try {
      scrollClip = new CanvasScrollClip({
        canvas: canvasRef.current,
        container: containerRef.current,
        scrollAnimations: [
          {
            selector: '.scroll-text',
            keyframes: [
              { offset: 0, transform: 'translateY(100px)', opacity: 0 },
              { offset: 0.2, transform: 'translateY(0)', opacity: 1 },
              { offset: 0.8, transform: 'translateY(0)', opacity: 1 },
              { offset: 1, transform: 'translateY(-100px)', opacity: 0 }
            ]
          },
          {
            selector: '.scroll-image',
            keyframes: [
              { offset: 0, transform: 'scale(0.8)', opacity: 0 },
              { offset: 0.2, transform: 'scale(1)', opacity: 1 },
              { offset: 0.8, transform: 'scale(1)', opacity: 1 },
              { offset: 1, transform: 'scale(1.2)', opacity: 0 }
            ]
          }
        ],
        respectReduceMotion: true,
        debug: false
      });
      
      console.log('CanvasScrollClip initialized successfully');
    } catch (err) {
      console.error('Error initializing CanvasScrollClip:', err);
      setError(true);
    }
    
    return () => {
      if (scrollClip) {
        try {
          scrollClip.destroy();
        } catch (err) {
          console.error('Error destroying CanvasScrollClip:', err);
        }
      }
    };
  }, []);
  
  // Fallback to standard scroll behavior if there's an error
  if (error) {
    return (
      <div className={`relative ${className}`}>
        <div className="relative z-10">
          {children}
        </div>
      </div>
    );
  }
  
  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default AppleScrollEffect;
