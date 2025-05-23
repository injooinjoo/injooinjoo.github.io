
import React from 'react';
import ScrollSection from './ScrollSection';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const GlobalExperienceSection = () => {
  const experiences = [
    {
      country: "태국",
      description: "페이스북 운영 및 현지 마케팅 최적화를 통한 도달률 200% 증가",
      insights: "현지 문화와 트렌드를 기반으로 한 콘텐츠 전략 수립"
    },
    {
      country: "북유럽",
      description: "글로벌 퍼블리셔 계약 및 현지 시장 진입 전략 수립",
      insights: "북유럽 시장 특성에 맞춘 게임 컨텐츠 현지화 및 마케팅 전략"
    },
    {
      country: "중국",
      description: "중국 시장 진출 및 현지 파트너십 구축",
      insights: "중국 시장 규제 및 사용자 행동 패턴 분석을 통한 진입 전략 수립"
    }
  ];

  return (
    <section id="global" className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollSection>
          <h2 className="text-5xl md:text-6xl font-thin text-gray-900 text-center mb-8">
            Global Experience
          </h2>
          <p className="text-xl text-gray-600 text-center mb-20 max-w-3xl mx-auto">
            다양한 글로벌 시장에서의 경험과 비즈니스 영어 커뮤니케이션 능력을 바탕으로 한 국제 협업 역량
          </p>
        </ScrollSection>
        
        <ScrollSection delay={300}>
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {experiences.map((exp, index) => (
                <CarouselItem key={exp.country} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-4 h-full">
                    <div className="bg-white rounded-3xl p-8 shadow-md h-full">
                      <div className="w-12 h-12 rounded-full bg-[#007ACC] flex items-center justify-center text-white text-lg font-medium mb-6">
                        {index + 1}
                      </div>
                      <h3 className="text-2xl font-medium text-gray-900 mb-4">
                        {exp.country}
                      </h3>
                      <p className="text-gray-600 mb-6">
                        {exp.description}
                      </p>
                      <div className="bg-gray-50 p-4 rounded-xl">
                        <p className="text-gray-700 text-sm italic">
                          "{exp.insights}"
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </ScrollSection>
        
        <ScrollSection delay={500}>
          <div className="mt-20 bg-white p-8 rounded-3xl shadow-sm max-w-3xl mx-auto">
            <h3 className="text-2xl font-medium text-gray-900 mb-6 text-center">
              추천사
            </h3>
            <div className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <p className="italic text-gray-700 mb-4">
                  "김인주님은 데이터 기반의 의사 결정과 전략적 사고를 통해 항상 뛰어난 성과를 이끌어냅니다. 특히 복잡한 문제를 체계적으로 분석하고 해결하는 능력이 탁월합니다."
                </p>
                <p className="text-right text-sm text-gray-500">
                  - 전 팀장, SOOP
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <p className="italic text-gray-700 mb-4">
                  "글로벌 프로젝트에서 보여준 김인주님의 커뮤니케이션 능력과 프로젝트 관리 역량은 정말 인상적이었습니다. 항상 목표를 명확히 설정하고 팀을 효과적으로 이끌어 성공적인 결과를 만들어냈습니다."
                </p>
                <p className="text-right text-sm text-gray-500">
                  - 글로벌 비즈니스 파트너
                </p>
              </div>
            </div>
          </div>
        </ScrollSection>
      </div>
    </section>
  );
};

export default GlobalExperienceSection;
