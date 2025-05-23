
import React from 'react';
import ScrollSection from './ScrollSection';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  details: string;
  role?: string;
  results?: string;
  color: string;
  index: number;
}

const ProjectCard = ({ title, description, details, role, results, color, index }: ProjectCardProps) => {
  return (
    <ScrollSection 
      delay={index * 100} 
      direction={index % 2 === 0 ? 'up' : 'down'} 
      speed={0.8} 
      opacity={true}
    >
      <div className={`bg-gradient-to-br ${color} rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 min-h-[500px] h-full`}>
        <div className="p-8 md:p-10 h-full flex flex-col justify-between">
          <div>
            <h3 className="text-3xl md:text-4xl font-medium text-white mb-5">
              {title}
            </h3>
            <p className="text-white text-opacity-90 mb-6 text-xl font-semibold">
              {description}
            </p>
            
            <div className="space-y-6 text-white text-opacity-80 leading-relaxed">
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
            <div className="p-3 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-all">
              <ArrowUpRight className="text-white" size={20} />
            </div>
          </div>
        </div>
      </div>
    </ScrollSection>
  );
};

export default ProjectCard;
