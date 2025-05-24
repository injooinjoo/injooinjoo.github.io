
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import ScrollSection from './ScrollSection';
import ProjectCard from './ProjectCard';
import { LanguageProps } from '../types';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious 
} from "@/components/ui/carousel";

interface ProjectsSectionProps extends LanguageProps {}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ isEnglish }) => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects = [
    {
      title: isEnglish ? "Best BJ Application Page Overhaul" : "베스트 BJ 신청 페이지 개편",
      description: isEnglish ? "User-friendly UI/UX redesign" : "스트리머 친화적 UI/UX로 전면 개편",
      details: isEnglish ? "Analyzed issues with the existing Best BJ application process and completely redesigned the UI/UX to be more streamer-friendly. Simplified the application procedure and clarified required information." : "기존 베스트 BJ 신청 프로세스의 문제점을 분석하고, 사용자(스트리머) 친화적인 UI/UX로 전면 개편. 신청 절차 간소화 및 필요 정보 명확화.",
      role: isEnglish ? "Planning, collaboration with design team, development requirement definition, testing and deployment management" : "기획, 디자인 협업, 개발 요건 정의, 테스트 및 배포 관리",
      results: isEnglish ? "Reduced application time, decreased information omission, improved streamer satisfaction" : "신청 시간 단축, 정보 누락 감소, 스트리머 만족도 향상",
      color: "from-blue-400 to-[#007ACC]"
    },
    {
      title: isEnglish ? "Platform Category System Redefinition" : "플랫폼 카테고리 시스템 재정립",
      description: isEnglish ? "Enhanced content exploration efficiency" : "콘텐츠 탐색 효율성 증대",
      details: isEnglish ? "Redefined the platform's game and various content category structure to match rapidly changing content trends and user demands. Introduction of new categories and consolidation of existing ones." : "급변하는 콘텐츠 트렌드와 사용자 요구에 맞춰 플랫폼 내 게임 및 다양한 콘텐츠 카테고리 구조를 재정립. 신규 카테고리 도입 및 기존 카테고리 통폐합.",
      role: isEnglish ? "Data analysis-based category classification criteria establishment, user feedback collection, collaboration with development team for system implementation" : "데이터 분석 기반 카테고리 분류 기준 수립, 사용자 피드백 수렴, 개발팀과 협업하여 시스템 반영",
      results: isEnglish ? "Enhanced content exploration efficiency, improved user segmentation and targeting accuracy, established foundation for niche category activation" : "콘텐츠 탐색 효율성 증대, 사용자 세분화 및 타겟팅 정확도 향상, 비주류 카테고리 활성화 기반 마련",
      color: "from-[#001F3F] to-blue-700"
    },
    {
      title: isEnglish ? "Main Page Recommendation Algorithm Improvement" : "메인 페이지 추천 알고리즘 개선",
      description: isEnglish ? "4x increase in streamer exposure" : "스트리머 노출 4배 증가",
      details: isEnglish ? "Enhanced personalized content recommendation algorithm by analyzing user viewing data, preferences, and activity patterns. Expanded opportunities for exposure to diverse content and strengthened anti-abuse logic." : "사용자 시청 데이터, 선호도, 활동 패턴 등을 분석하여 개인화된 콘텐츠 추천 알고리즘 고도화. 다양한 콘텐츠 노출 기회 확대 및 어뷰징 방지 로직 강화.",
      role: isEnglish ? "Suggestion of algorithm improvement direction, collaboration with data analysis and modeling team, performance verification through A/B testing. (Web Planner role)" : "알고리즘 개선 방향성 제시, 데이터 분석 및 모델링 팀과 협업, A/B 테스트를 통한 성과 검증. (Web Planner 역할)",
      results: isEnglish ? "Enhanced user engagement on main page (CTR, dwell time), secured content diversity, expanded exposure opportunities for new streamers" : "메인 페이지 사용자 참여도(CTR, 체류 시간) 증진, 콘텐츠 다양성 확보, 신규 스트리머 노출 기회 확대",
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: isEnglish ? "Hashtag System Redefinition and Feature Enhancement" : "해시태그 시스템 재정립 및 기능 강화",
      description: isEnglish ? "Improved content search accuracy" : "콘텐츠 검색 정확도 향상",
      details: isEnglish ? "Improved search accuracy and usability issues of the existing hashtag system. Introduced popular hashtag recommendations, related hashtag features, and hashtag-based content curation functionality." : "기존 해시태그 시스템의 검색 정확도 및 활용성 문제를 개선. 인기 해시태그 추천, 연관 해시태그 기능 도입, 해시태그 기반 콘텐츠 큐레이션 기능 기획.",
      role: isEnglish ? "Problem analysis, improvement plan derivation, user interface design, development guideline presentation" : "문제점 분석, 개선안 도출, 사용자 인터페이스 설계, 개발 가이드라인 제시",
      results: isEnglish ? "Improved content search accuracy and ease of discovery, enhanced voluntary tag use by users" : "콘텐츠 검색 정확도 및 발견 용이성 향상, 사용자들의 자발적인 태그 활용 증진",
      color: "from-[#007ACC] to-[#001F3F]"
    },
    {
      title: isEnglish ? "Streamer and Internal Operation Dashboard Development" : "스트리머 및 내부 운영 대시보드 개발",
      description: isEnglish ? "30% improvement in work efficiency" : "업무 효율성 30% 개선",
      details: isEnglish ? "Provided customized dashboards for streamers to analyze broadcast performance and viewer reactions. Built integrated dashboards for internal operations teams to monitor platform metrics, anomaly detection, and resource management." : "스트리머의 방송 성과 분석 및 시청자 반응 확인을 위한 맞춤형 대시보드 제공. 내부 운영팀을 위한 플랫폼 지표, 이상 감지, 리소스 관리용 통합 대시보드 구축.",
      role: isEnglish ? "Defining necessary data items, planning visualization methods, building in cooperation with BI and development teams" : "필요 데이터 항목 정의, 시각화 방안 기획, BI팀 및 개발팀과 협력하여 구축",
      results: isEnglish ? "Support for streamers' data-based broadcasting strategy development, improved internal operation efficiency and decision-making speed" : "스트리머의 데이터 기반 방송 전략 수립 지원, 내부 운영 효율성 및 의사결정 속도 향상",
      color: "from-indigo-500 to-purple-600"
    },
    {
      title: isEnglish ? "'Destruction War' e-sports League Point System" : "'멸망전' e스포츠 리그 포인트 시스템",
      description: isEnglish ? "3x increase in participants" : "참가자 수 3배 증가",
      details: isEnglish ? "Planned and introduced a point system for fair and exciting competition in AfreecaTV's representative e-sports league 'Destruction War' (Overwatch, Sudden Attack, Kartrider, FC Online, etc.). Improved and stably operated the system over multiple seasons." : "아프리카TV의 대표적인 e스포츠 리그 '멸망전'(오버워치, 서든어택, 카트라이더, FC 온라인 등)의 공정하고 흥미로운 경쟁을 위한 포인트 시스템 기획 및 도입. 다수 시즌에 걸쳐 시스템 개선 및 안정적 운영.",
      role: isEnglish ? "League format and point system design, reflection of community feedback, overall planning and operation of the competition. (Content Planner role)" : "리그 방식 및 포인트 제도 설계, 커뮤니티 피드백 반영, 대회 기획 및 운영 총괄. (Content Planner 역할)",
      results: isEnglish ? "Increased league participation and viewer interest, activated community, strengthened platform e-sports brand. (Contributed to 60% increase in participation)" : "리그 참여도 및 시청자 관심 증대, 커뮤니티 활성화, 플랫폼 e스포츠 브랜드 강화. (참여율 60% 증가 기여)",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: isEnglish ? "Streamer-led Events and Competitions" : "스트리머 주도 이벤트 및 대회",
      description: isEnglish ? "40% increase in viewer participation" : "시청자 참여도 40% 증가",
      details: isEnglish ? "Planned and supported events that showcased streamer personalities, such as 'Gamst K-League World Cup' and 'Etusha Pokemon Tournament'. Planned and executed platform's own large-scale special broadcasts and competitions." : "'감스트 K리그 월드컵', '에투샤 포켓몬 대회' 등 스트리머 개성을 살린 이벤트 기획 및 지원. 플랫폼 자체 대규모 특집 방송 및 대회 기획 및 실행.",
      role: isEnglish ? "Idea discovery, budget securing, promotional marketing, broadcast transmission support, result analysis. (Content Planner role)" : "아이디어 발굴, 예산 확보, 홍보 마케팅, 방송 송출 지원, 결과 분석. (Content Planner 역할)",
      results: isEnglish ? "Platform content diversification, strengthened streamer branding, provided new fun for viewers" : "플랫폼 콘텐츠 다양화, 스트리머 브랜딩 강화, 시청자들에게 새로운 재미 제공",
      color: "from-cyan-500 to-emerald-500"
    },
    {
      title: isEnglish ? "G-Star Game Show Booth Operation" : "G-Star 게임쇼 부스 운영",
      description: isEnglish ? "Enhanced brand awareness" : "브랜드 인지도 제고",
      details: isEnglish ? "Overall management of AfreecaTV booth at Korea's largest game show G-Star. Planned and executed various programs including on-site streaming events, fan meetings, and mini-game tournaments." : "국내 최대 게임쇼 G-Star에서 아프리카TV 부스 운영 총괄. 현장 스트리밍 이벤트, 팬미팅, 미니 게임 대회 등 다양한 프로그램 기획 및 실행.",
      role: isEnglish ? "Booth concept planning, budget execution, partner company communication, on-site operation and personnel management. (Content Planner role)" : "부스 콘셉트 기획, 예산 집행, 협력사 커뮤니케이션, 현장 운영 및 인력 관리. (Content Planner 역할)",
      results: isEnglish ? "Enhanced brand awareness, attracted on-site visitors and increased platform traffic, strengthened partnerships" : "브랜드 인지도 제고, 현장 관람객 유치 및 플랫폼 트래픽 증대, 파트너십 강화",
      color: "from-emerald-500 to-teal-600"
    },
    {
      title: isEnglish ? "Key Streamer Recruitment and Contract Management" : "핵심 스트리머 영입 및 계약 관리",
      description: isEnglish ? "Securing exclusive content" : "독점 콘텐츠 확보",
      details: isEnglish ? "Discovered and negotiated recruitment of key streamers who would contribute to platform growth. Managed satisfaction through regular communication with existing partner streamers, re-contracting, and growth support." : "플랫폼 성장에 기여할 핵심 스트리머 발굴 및 영입 협상. 기존 파트너 스트리머와의 주기적인 소통을 통한 만족도 관리, 재계약 및 성장 지원.",
      role: isEnglish ? "Streamer market analysis, contacting and persuading potential recruitment targets, contract terms negotiation, supporting streamer settlement and activities. (Streamer Partnership Manager role)" : "스트리머 시장 분석, 잠재적 영입 대상 컨택 및 설득, 계약 조건 협의, 스트리머 정착 및 활동 지원. (Streamer Partnership Manager 역할)",
      results: isEnglish ? "Strengthened platform competitiveness, secured exclusive content, prevented streamer churn and increased loyalty" : "플랫폼 경쟁력 강화, 독점 콘텐츠 확보, 스트리머 이탈 방지 및 로열티 증대",
      color: "from-teal-500 to-green-600"
    },
    {
      title: isEnglish ? "Partner Streamer Support Fund System" : "파트너 스트리머 지원금 시스템",
      description: isEnglish ? "30% increase in BJ revenue" : "BJ 수익 30% 증가",
      details: isEnglish ? "Designed and introduced a systematic support fund system to support stable creative activities of excellent partner streamers (Pabi). Planned and operated the 'Pabi of the Month' system to select outstanding active streamers monthly." : "우수 파트너 스트리머(파비)의 안정적인 창작 활동을 지원하기 위한 체계적인 지원금 시스템 설계 및 도입. 매월 우수 활동 스트리머를 선정하는 '이달의 파비' 제도 기획 및 운영.",
      role: isEnglish ? "Support fund policy establishment, selection criteria definition, internal review process building, awards and promotion. (Streamer Partnership Manager role)" : "지원금 정책 수립, 선정 기준 정의, 내부 심사 프로세스 구축, 시상 및 홍보. (Streamer Partnership Manager 역할)",
      results: isEnglish ? "Motivated streamer creation, improved content quality, built positive relationship between platform and streamers" : "스트리머 창작 동기 부여, 콘텐츠 질 향상, 플랫폼과 스트리머 간의 긍정적 관계 구축",
      color: "from-green-500 to-[#007ACC]"
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollSection>
          <h2 className="text-5xl md:text-6xl font-thin text-gray-900 dark:text-white text-center mb-10">
            {isEnglish ? "Projects" : "프로젝트"}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-16 max-w-3xl mx-auto">
            {isEnglish 
              ? "Each project contributed to platform growth through data-driven decision making and user-centered design."
              : "각 프로젝트는 데이터 기반 의사결정과 사용자 중심 설계를 통해 플랫폼 성장에 기여했습니다."}
          </p>
        </ScrollSection>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ScrollSection key={project.title} delay={index * 100} direction={index % 3 === 0 ? 'up' : index % 3 === 1 ? 'left' : 'right'} speed={0.8} opacity={true}>
              <div 
                className="cursor-pointer relative"
                onClick={() => setExpandedProject(expandedProject === index ? null : index)}
              >
                <ProjectCard 
                  {...project} 
                  index={index} 
                  isExpanded={expandedProject === index}
                  isEnglish={isEnglish}
                />
              </div>
            </ScrollSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
