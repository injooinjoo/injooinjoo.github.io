
import React from 'react';
import ScrollSection from './ScrollSection';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  details: string;
  role?: string;
  results?: string;
  color: string;
  index: number;
  isExpanded?: boolean;
}

const ProjectCard = ({ title, description, details, role, results, color, index, isExpanded = false }: ProjectCardProps) => {
  return (
    <div 
      className={cn(
        "bg-gradient-to-br", 
        color, 
        "rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2",
        isExpanded ? "min-h-[600px] absolute z-10 left-0 right-0 top-0" : "min-h-[350px] h-full"
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
                <h4 className="text-white text-xl mb-2 font-medium">역할</h4>
                <p>{role}</p>
              </div>
            )}
            
            {results && (
              <div>
                <h4 className="text-white text-xl mb-2 font-medium">성과</h4>
                <p>{results}</p>
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-8 flex justify-end">
          <div className={cn(
            "p-3 rounded-full bg-white bg-opacity-20 transition-all", 
            isExpanded ? "bg-opacity-30 rotate-45" : "hover:bg-opacity-30"
          )}>
            <ArrowUpRight className="text-white" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
