
import React from 'react';
import ScrollSection from './ScrollSection';
import { ArrowUpRight } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "메인 알고리즘",
      description: "스트리머 노출 4배 증가",
      details: "개인화 알고리즘을 통해 사용자 취향에 맞는 스트리머 노출을 최적화",
      color: "from-blue-400 to-[#007ACC]"
    },
    {
      title: "자동화 리포팅", 
      description: "업무 효율성 30% 개선",
      details: "데이터 수집 및 분석 프로세스 자동화로 리포팅 시간 단축 및 정확성 향상",
      color: "from-[#001F3F] to-blue-700"
    },
    {
      title: "멸망전 포인트 시스템",
      description: "참가자 수 3배 증가",
      details: "사용자 참여도와 보상 체계를 최적화하여 참여율 대폭 증가",
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "대결/도전 미션",
      description: "BJ 수익 30% 증가",
      details: "인터랙티브 콘텐츠 포맷을 통해 시청자 참여 및 크리에이터 수익 증대",
      color: "from-[#007ACC] to-[#001F3F]"
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollSection>
          <h2 className="text-5xl md:text-6xl font-thin text-gray-900 text-center mb-20">
            Projects
          </h2>
        </ScrollSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ScrollSection key={project.title} delay={index * 200}>
              <div className={`bg-gradient-to-br ${project.color} rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full`}>
                <div className="p-8 md:p-10 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-medium text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-white text-opacity-90 mb-4 text-lg font-semibold">
                      {project.description}
                    </p>
                    <p className="text-white text-opacity-80 leading-relaxed">
                      {project.details}
                    </p>
                  </div>
                  <div className="mt-8 flex justify-end">
                    <div className="p-3 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-all">
                      <ArrowUpRight className="text-white" size={18} />
                    </div>
                  </div>
                </div>
              </div>
            </ScrollSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
