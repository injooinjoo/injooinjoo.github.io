
import React from 'react';
import ScrollSection from './ScrollSection';

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen py-20 flex items-center bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollSection className="animate-slide-in-left">
            <div className="space-y-8">
              <h2 className="text-5xl md:text-6xl font-thin text-gray-900">
                Profile
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p className="text-xl text-[#007ACC] font-medium">
                  콘텐츠 플랫폼 매니저
                </p>
                <p>
                  경력: 총 12년 4개월
                </p>
                <p>
                  현 직책: SOOP Co., Ltd.(Formerly AfreecaTV) Streamer Ops. Lead (Game)
                </p>
                <p>
                  데이터 분석 기반 문제 해결 및 플랫폼 성장 전략 전문가
                </p>
                <p>
                  게임 커뮤니티 및 라이브 스트리밍 생태계 이해
                </p>
              </div>
            </div>
          </ScrollSection>
          
          <ScrollSection delay={300} className="animate-slide-in-right">
            <div className="bg-gradient-to-br from-gray-100 to-white rounded-3xl shadow-sm p-10 space-y-8 hover:shadow-md transition-all duration-500">
              <div className="space-y-4">
                <div className="h-1 w-20 bg-[#007ACC]"></div>
                <h3 className="text-3xl font-thin text-gray-900">현 직무</h3>
                <p className="text-lg text-gray-600">
                  SOOP Co., Ltd.(Formerly AfreecaTV) Streamer Ops. Lead (Game)
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="h-1 w-20 bg-[#007ACC]"></div>
                <h3 className="text-3xl font-thin text-gray-900">경력 분야</h3>
                <p className="text-lg text-gray-600">
                  콘텐츠 플랫폼 기획 및 개발
                </p>
                <p className="text-lg text-gray-600">
                  데이터 기반 성과 관리
                </p>
                <p className="text-lg text-gray-600">
                  스트리머 파트너십 및 이벤트 기획
                </p>
              </div>
            </div>
          </ScrollSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
