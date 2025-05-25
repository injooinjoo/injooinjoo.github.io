
import React, { useState } from 'react';
import { LanguageProps } from '../types';
import { X } from 'lucide-react';

interface ProjectsSectionProps extends LanguageProps {}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ isEnglish }) => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  
  const projects = [
    {
      title: isEnglish ? "AfreecaTV Platform Category System Redefinition" : "아프리카TV 플랫폼 카테고리 시스템 재정의",
      period: "2021",
      description: isEnglish 
        ? "Led the comprehensive redefinition of platform category system to improve content discoverability and user experience"
        : "콘텐츠 발견성과 사용자 경험 개선을 위한 플랫폼 카테고리 시스템의 포괄적 재정의를 주도",
      tech: ["Data Analysis", "User Research", "Product Strategy"],
      details: isEnglish
        ? "Comprehensive analysis of user behavior patterns and content consumption data led to a complete overhaul of the category system, resulting in 25% improvement in content discovery rates."
        : "사용자 행동 패턴과 콘텐츠 소비 데이터의 종합적 분석을 통해 카테고리 시스템을 완전히 개편하여 콘텐츠 발견율을 25% 향상시켰습니다."
    },
    {
      title: isEnglish ? "Partner Streamer Support Fund System" : "파트너 스트리머 지원 기금 시스템",
      period: "2019",
      description: isEnglish
        ? "Developed and implemented a comprehensive support system for partner streamers including funding and resource allocation"
        : "파트너 스트리머를 위한 자금 지원 및 리소스 배분을 포함한 포괄적 지원 시스템 개발 및 구현",
      tech: ["System Design", "Data Analytics", "Process Management"],
      details: isEnglish
        ? "Created a data-driven fund allocation system that supported over 1,000 partner streamers, resulting in 40% increase in content quality and creator retention."
        : "1,000명 이상의 파트너 스트리머를 지원하는 데이터 기반 기금 배분 시스템을 구축하여 콘텐츠 품질과 크리에이터 유지율을 40% 향상시켰습니다."
    },
    {
      title: isEnglish ? "Content Strategy & User Engagement Optimization" : "콘텐츠 전략 및 사용자 참여 최적화",
      period: "2018-2020",
      description: isEnglish
        ? "Developed comprehensive content strategies that significantly improved user engagement and platform growth"
        : "사용자 참여도와 플랫폼 성장을 크게 개선한 포괄적 콘텐츠 전략 개발",
      tech: ["Content Analysis", "A/B Testing", "Growth Strategy"],
      details: isEnglish
        ? "Implemented data-driven content strategies and A/B testing frameworks that led to 60% increase in daily active users and 35% improvement in session duration."
        : "데이터 기반 콘텐츠 전략과 A/B 테스팅 프레임워크를 구현하여 일일 활성 사용자 60% 증가와 세션 지속 시간 35% 개선을 달성했습니다."
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-thin text-gray-900 dark:text-white text-center mb-20">
          Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              onClick={() => setSelectedProject(project)}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer hover:scale-[1.02]"
            >
              <div className="mb-4">
                <span className="text-sm text-[#007ACC] font-medium">{project.period}</span>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mt-2 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {project.description}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Overlay */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="text-sm text-[#007ACC] font-medium">{selectedProject.period}</span>
                <h3 className="text-2xl font-medium text-gray-900 dark:text-white mt-2">
                  {selectedProject.title}
                </h3>
              </div>
              <button 
                onClick={() => setSelectedProject(null)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
              >
                <X size={20} className="text-gray-500" />
              </button>
            </div>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              {selectedProject.details}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {selectedProject.tech.map((tech: string) => (
                <span 
                  key={tech}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
