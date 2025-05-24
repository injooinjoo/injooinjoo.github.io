
import React, { useEffect, useRef } from 'react';
import CanvasScrollClip from 'canvas-scroll-clip';

interface AppleScrollEffectProps {
  className?: string;
  children?: React.ReactNode;
}

const AppleScrollEffect: React.FC<AppleScrollEffectProps> = ({ className, children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;
    
    const scrollClip = new CanvasScrollClip({
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
    
    return () => {
      scrollClip.destroy();
    };
  }, []);
  
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
