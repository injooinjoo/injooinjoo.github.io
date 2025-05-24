
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';
import { LanguageProps } from '../types';

interface ProjectCardProps extends LanguageProps {
  title: string;
  description: string;
  details: string;
  role?: string;
  results?: string;
  color: string;
  index: number;
  isExpanded?: boolean;
  onClose?: () => void;
}

const ProjectCard = ({ 
  title, 
  description, 
  details, 
  role, 
  results, 
  color, 
  index, 
  isExpanded = false,
  isEnglish,
  onClose
}: ProjectCardProps) => {
  return (
    <div 
      className={cn(
        "bg-gradient-to-br", 
        color, 
        "rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2",
        isExpanded ? "fixed inset-0 z-[999] m-4 md:m-8 lg:m-16" : "min-h-[350px] h-full"
      )}
    >
      <div className="p-8 md:p-10 h-full flex flex-col justify-between">
        <div>
          <h3 className="text-2xl md:text-3xl font-medium text-white mb-4">
            {title}
          </h3>
          <p className="text-white text-opacity-90 mb-4 text-lg font-semibold">
            {description}
          </p>
          
          <div className={cn(
            "space-y-6 text-white text-opacity-80 leading-relaxed transition-all duration-500",
            isExpanded ? "opacity-100 max-h-[600px]" : "opacity-0 max-h-0 overflow-hidden"
          )}>
            <p className="text-lg">{details}</p>
            
            {role && (
              <div>
                <h4 className="text-white text-xl mb-2 font-medium">
                  {isEnglish ? "Role" : "역할"}
                </h4>
                <p>{role}</p>
              </div>
            )}
            
            {results && (
              <div>
                <h4 className="text-white text-xl mb-2 font-medium">
                  {isEnglish ? "Results" : "성과"}
                </h4>
                <p>{results}</p>
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-8 flex justify-end">
          <div 
            onClick={isExpanded ? onClose : undefined}
            className={cn(
              "p-3 rounded-full bg-white bg-opacity-20 transition-all cursor-pointer", 
              isExpanded ? "bg-opacity-30 rotate-45" : "hover:bg-opacity-30"
            )}
          >
            <ArrowUpRight className="text-white" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
