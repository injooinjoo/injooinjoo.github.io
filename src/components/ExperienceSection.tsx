
import React from 'react';
import ScrollSection from './ScrollSection';
import { 
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "SOOP Co., Ltd.(Formerly AfreecaTV)",
      period: "2016.02 ~ 현재",
      position: "Streamer Ops. Lead (Game)",
      details: [
        "직무 및 주요 업무: 플랫폼 전략기획, 개인화 알고리즘, 자동화 시스템 구축",
        "주요 프로젝트 성과: 개인화 알고리즘(노출 4배 증가), 멸망전 시스템(참가자 수 3배 증가), 해시태그 리뉴얼"
      ]
    },
    {
      company: "팝조이(주)",
      period: "2015.02 ~ 2016.02",
      position: "글로벌 마케팅 PM",
      details: [
        "주요 프로젝트: 태국 페이스북 운영(도달률 200% 증가), 광고 최적화(전환율 15% 증가, 광고비 20% 절감)"
      ]
    },
    {
      company: "하이브로",
      period: "2014.08 ~ 2015.01",
      position: "글로벌 퍼블리싱 PM",
      details: [
        "주요 프로젝트: 지스타 운영(브랜드 인지도 상승), 글로벌 퍼블리셔 계약(북유럽, 중국)"
      ]
    },
    {
      company: "엔트리브소프트",
      period: "2012.03 ~ 2013.08",
      position: "글로벌 이벤트/세일즈 프로모션 PM",
      details: [
        "주요 프로젝트: 글로벌 맞춤 이벤트(MCU 20% 증가), 해외 세일즈 프로모션(ARPPU 상승)"
      ]
    }
  ];

  return (
    <section id="experience" className="min-h-screen py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollSection className="animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-thin text-gray-900 text-center mb-6">
            Experience
          </h2>
          <p className="text-lg text-gray-600 text-center mb-20">
            총 12년 4개월의 디지털 콘텐츠 및 플랫폼 경력
          </p>
        </ScrollSection>
        
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
          
          {experiences.map((exp, index) => (
            <ScrollSection key={exp.company} delay={index * 300} className="animate-scale-in">
              <div className={`flex items-center mb-20 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-full md:w-5/12 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <Card className="overflow-hidden shadow-md hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2">
                    <CardHeader className="bg-gradient-to-r from-gray-100 to-white">
                      <CardTitle className="text-2xl font-medium">{exp.company}</CardTitle>
                      <CardDescription className="text-md text-[#007ACC] font-medium">{exp.position}</CardDescription>
                      <CardDescription>{exp.period}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <ul className="space-y-3">
                        {exp.details.map((detail, i) => (
                          <li key={i} className="text-gray-700 leading-relaxed">{detail}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-[#007ACC] border-4 border-white shadow-md"></div>
              </div>
            </ScrollSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
