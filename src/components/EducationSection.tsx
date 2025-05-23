
import React from 'react';
import ScrollSection from './ScrollSection';
import { ScrollArea } from '@/components/ui/scroll-area';

const EducationSection = () => {
  const educations = [
    {
      title: "Harvard ALM Data Science",
      period: "현재",
      type: "석사 과정",
      details: "데이터 사이언스 전공"
    },
    {
      title: "MITx MicroMasters",
      period: "수료",
      type: "Data Science & Statistics",
      details: "데이터 분석 및 통계학 과정 이수"
    },
    {
      title: "학점은행제",
      period: "학사",
      type: "컴퓨터공학 및 경영학",
      details: "학사 학위 취득"
    },
    {
      title: "UCI Japanese Language",
      period: "",
      type: "어학과정",
      details: "일본어 과정 이수"
    }
  ];

  const certifications = [
    "MITx MicroMasters 수료",
    "내부 우수 프로젝트상",
    "베스트 운영 혁신상"
  ];

  return (
    <section id="education" className="min-h-screen py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollSection>
          <h2 className="text-5xl md:text-6xl font-thin text-gray-900 text-center mb-20">
            Education & Certifications
          </h2>
        </ScrollSection>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <ScrollSection delay={200}>
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-thin text-gray-900 mb-8 border-b pb-2">Education</h3>
              <div className="space-y-10">
                {educations.map((edu, index) => (
                  <div key={edu.title} className="flex gap-6">
                    <div className="w-2 h-2 rounded-full bg-[#007ACC] mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-xl font-medium text-gray-900">{edu.title}</h4>
                      <p className="text-[#007ACC] font-medium">{edu.type}</p>
                      {edu.period && <p className="text-gray-500">{edu.period}</p>}
                      <p className="text-gray-600 mt-2">{edu.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollSection>
          
          <ScrollSection delay={400}>
            <div className="bg-gray-50 rounded-3xl p-8">
              <h3 className="text-3xl font-thin text-gray-900 mb-8 border-b pb-2">Certifications & Awards</h3>
              <ScrollArea className="h-[300px] pr-4">
                <div className="space-y-6">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-[#007ACC] text-white rounded-full flex items-center justify-center flex-shrink-0">
                        {index + 1}
                      </div>
                      <div className="pt-1">
                        <p className="text-gray-900">{cert}</p>
                      </div>
                    </div>
                  ))}
                  
                  <div className="pt-4">
                    <h4 className="text-xl font-medium text-gray-900 mb-3">컨퍼런스 참가 경험</h4>
                    <p className="text-gray-600">
                      다양한 산업 컨퍼런스 및 세미나 참가를 통한 최신 트렌드 습득 및 네트워킹
                    </p>
                  </div>
                </div>
              </ScrollArea>
            </div>
          </ScrollSection>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
