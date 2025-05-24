
import React from 'react';
import ScrollSection from './ScrollSection';
import { ArrowUpRight, X } from 'lucide-react';
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
  onToggleExpand: () => void;
  titleEn?: string;
  descriptionEn?: string;
  detailsEn?: string;
  roleEn?: string;
  resultsEn?: string;
  isEnglish?: boolean;
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
  onToggleExpand,
  titleEn,
  descriptionEn,
  detailsEn,
  roleEn,
  resultsEn,
  isEnglish = false
}: ProjectCardProps) => {
  
  // Use English text when isEnglish is true
  const displayTitle = isEnglish && titleEn ? titleEn : title;
  const displayDescription = isEnglish && descriptionEn ? descriptionEn : description;
  const displayDetails = isEnglish && detailsEn ? detailsEn : details;
  const displayRole = isEnglish && roleEn ? roleEn : role;
  const displayResults = isEnglish && resultsEn ? resultsEn : results;
  
  // Role and Results labels
  const roleLabel = isEnglish ? "Role" : "역할";
  const resultsLabel = isEnglish ? "Results" : "성과";
  
  return (
    <div 
      className={cn(
        "bg-gradient-to-br", 
        color, 
        "rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500",
        isExpanded ? "fixed inset-0 z-50 m-4 md:m-8 max-h-[90vh] overflow-y-auto" : "min-h-[350px] h-full transform hover:-translate-y-2"
      )}
    >
      <div className="p-8 md:p-10 h-full flex flex-col justify-between">
        {isExpanded && (
          <button 
            className="absolute top-6 right-6 p-2 bg-white bg-opacity-20 rounded-full z-10"
            onClick={onToggleExpand}
          >
            <X className="text-white" size={20} />
          </button>
        )}
        
        <div>
          <h3 className="text-2xl md:text-3xl font-medium text-white mb-4">
            {displayTitle}
          </h3>
          <p className="text-white text-opacity-90 mb-4 text-lg font-semibold">
            {displayDescription}
          </p>
          
          <div className={cn(
            "space-y-6 text-white text-opacity-80 leading-relaxed transition-all duration-500",
            isExpanded ? "opacity-100 max-h-full" : "opacity-0 max-h-0 overflow-hidden"
          )}>
            <p className="text-lg">{displayDetails}</p>
            
            {displayRole && (
              <div>
                <h4 className="text-white text-xl mb-2 font-medium">{roleLabel}</h4>
                <p>{displayRole}</p>
              </div>
            )}
            
            {displayResults && (
              <div>
                <h4 className="text-white text-xl mb-2 font-medium">{resultsLabel}</h4>
                <p>{displayResults}</p>
              </div>
            )}
          </div>
        </div>
        
        {!isExpanded && (
          <div className="mt-8 flex justify-end">
            <button 
              className="p-3 rounded-full bg-white bg-opacity-20 transition-all hover:bg-opacity-30"
              onClick={onToggleExpand}
              aria-label="Expand project details"
            >
              <ArrowUpRight className="text-white" size={20} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
