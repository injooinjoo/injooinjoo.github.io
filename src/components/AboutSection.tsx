
import React from 'react';
import ScrollSection from './ScrollSection';

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen py-20 flex items-center bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollSection>
            <div className="space-y-8">
              <h2 className="text-5xl md:text-6xl font-thin text-gray-900">
                Profile
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p className="text-xl text-[#007ACC] font-medium">
                  Harvard ALM(Data Science) candidate
                </p>
                <p>
                  경력: 총 12년 4개월 (디지털 콘텐츠 및 플랫폼)
                </p>
                <p>
                  현 직책: SOOP(前 아프리카TV) 플랫폼 전략기획 총괄
                </p>
                <p>
                  MITx MicroMasters 수료
                </p>
                <p>
                  글로벌 시장 경험: 태국, 북유럽, 중국
                </p>
              </div>
            </div>
          </ScrollSection>
          
          <ScrollSection delay={300}>
            <div className="bg-gradient-to-br from-gray-100 to-white rounded-3xl shadow-sm p-10 space-y-8">
              <div className="space-y-4">
                <div className="h-1 w-20 bg-[#007ACC]"></div>
                <h3 className="text-3xl font-thin text-gray-900">현 직무</h3>
                <p className="text-lg text-gray-600">
                  SOOP(前 아프리카TV) 플랫폼 전략기획 총괄
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
                  글로벌 마케팅 및 이벤트 기획
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
