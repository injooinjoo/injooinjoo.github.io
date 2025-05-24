
import React, { useState, useEffect } from 'react';
import ScrollSection from './ScrollSection';
import ProjectCard from './ProjectCard';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious 
} from "@/components/ui/carousel";

interface ProjectsSectionProps {
  isEnglish?: boolean;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ isEnglish = false }) => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  // Add overflow hidden to body when a project is expanded
  useEffect(() => {
    if (expandedProject !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [expandedProject]);

  const projects = [
    {
      title: "베스트 BJ 신청 페이지 개편",
      titleEn: "Best Streamer Application Page Redesign",
      description: "스트리머 친화적 UI/UX로 전면 개편",
      descriptionEn: "Complete UI/UX redesign with a streamer-friendly approach",
      details: "기존 베스트 BJ 신청 프로세스의 문제점을 분석하고, 사용자(스트리머) 친화적인 UI/UX로 전면 개편. 신청 절차 간소화 및 필요 정보 명확화.",
      detailsEn: "Analyzed the existing Best Streamer application process problems and completely redesigned it with user (streamer) friendly UI/UX. Simplified application procedures and clarified required information.",
      role: "기획, 디자인 협업, 개발 요건 정의, 테스트 및 배포 관리",
      roleEn: "Planning, design collaboration, development requirement definition, testing and deployment management",
      results: "신청 시간 단축, 정보 누락 감소, 스트리머 만족도 향상",
      resultsEn: "Reduced application time, decreased information omissions, improved streamer satisfaction",
      color: "from-blue-400 to-[#007ACC]"
    },
    {
      title: "플랫폼 카테고리 시스템 재정립",
      titleEn: "Platform Category System Restructuring",
      description: "콘텐츠 탐색 효율성 증대",
      descriptionEn: "Improved content exploration efficiency",
      details: "급변하는 콘텐츠 트렌드와 사용자 요구에 맞춰 플랫폼 내 게임 및 다양한 콘텐츠 카테고리 구조를 재정립. 신규 카테고리 도입 및 기존 카테고리 통폐합.",
      detailsEn: "Restructured gaming and various content category structures within the platform to match rapidly changing content trends and user needs. Introduced new categories and consolidated existing ones.",
      role: "데이터 분석 기반 카테고리 분류 기준 수립, 사용자 피드백 수렴, 개발팀과 협업하여 시스템 반영",
      roleEn: "Established data-driven category classification criteria, incorporated user feedback, collaborated with development team for system implementation",
      results: "콘텐츠 탐색 효율성 증대, 사용자 세분화 및 타겟팅 정확도 향상, 비주류 카테고리 활성화 기반 마련",
      resultsEn: "Increased content discovery efficiency, improved user segmentation and targeting accuracy, created foundation for niche category activation",
      color: "from-[#001F3F] to-blue-700"
    },
    {
      title: "메인 페이지 추천 알고리즘 개선",
      titleEn: "Main Page Recommendation Algorithm Enhancement",
      description: "스트리머 노출 4배 증가",
      descriptionEn: "4x increase in streamer exposure",
      details: "사용자 시청 데이터, 선호도, 활동 패턴 등을 분석하여 개인화된 콘텐츠 추천 알고리즘 고도화. 다양한 콘텐츠 노출 기회 확대 및 어뷰징 방지 로직 강화.",
      detailsEn: "Enhanced personalized content recommendation algorithms by analyzing user viewing data, preferences, and activity patterns. Expanded exposure opportunities for diverse content and strengthened anti-abuse logic.",
      role: "알고리즘 개선 방향성 제시, 데이터 분석 및 모델링 팀과 협업, A/B 테스트를 통한 성과 검증. (Web Planner 역할)",
      roleEn: "Set algorithm improvement direction, collaborated with data analysis and modeling team, verified performance through A/B testing. (Web Planner role)",
      results: "메인 페이지 사용자 참여도(CTR, 체류 시간) 증진, 콘텐츠 다양성 확보, 신규 스트리머 노출 기회 확대",
      resultsEn: "Increased main page user engagement (CTR, time spent), secured content diversity, expanded exposure opportunities for new streamers",
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "해시태그 시스템 재정립 및 기능 강화",
      titleEn: "Hashtag System Restructuring and Enhancement",
      description: "콘텐츠 검색 정확도 향상",
      descriptionEn: "Improved content search accuracy",
      details: "기존 해시태그 시스템의 검색 정확도 및 활용성 문제를 개선. 인기 해시태그 추천, 연관 해시태그 기능 도입, 해시태그 기반 콘텐츠 큐레이션 기능 기획.",
      detailsEn: "Improved search accuracy and usability issues of the existing hashtag system. Introduced popular hashtag recommendations, related hashtag features, and planned hashtag-based content curation functionality.",
      role: "문제점 분석, 개선안 도출, 사용자 인터페이스 설계, 개발 가이드라인 제시",
      roleEn: "Problem analysis, improvement plan development, user interface design, development guideline creation",
      results: "콘텐츠 검색 정확도 및 발견 용이성 향상, 사용자들의 자발적인 태그 활용 증진",
      resultsEn: "Enhanced content search accuracy and discovery ease, increased voluntary tag usage by users",
      color: "from-[#007ACC] to-[#001F3F]"
    },
    {
      title: "스트리머 및 내부 운영 대시보드 개발",
      titleEn: "Streamer and Internal Operations Dashboard Development",
      description: "업무 효율성 30% 개선",
      descriptionEn: "30% improvement in operational efficiency",
      details: "스트리머의 방송 성과 분석 및 시청자 반응 확인을 위한 맞춤형 대시보드 제공. 내부 운영팀을 위한 플랫폼 지표, 이상 감지, 리소스 관리용 통합 대시보드 구축.",
      detailsEn: "Provided customized dashboards for streamers to analyze broadcast performance and viewer reactions. Built integrated dashboards for internal operations teams for platform metrics, anomaly detection, and resource management.",
      role: "필요 데이터 항목 정의, 시각화 방안 기획, BI팀 및 개발팀과 협력하여 구축",
      roleEn: "Defined required data points, planned visualization approaches, collaborated with BI and development teams for implementation",
      results: "스트리머의 데이터 기반 방송 전략 수립 지원, 내부 운영 효율성 및 의사결정 속도 향상",
      resultsEn: "Supported streamers in developing data-driven broadcast strategies, improved internal operational efficiency and decision-making speed",
      color: "from-indigo-500 to-purple-600"
    },
    {
      title: "'멸망전' e스포츠 리그 포인트 시스템",
      titleEn: "'Extinction Battle' Esports League Point System",
      description: "참가자 수 3배 증가",
      descriptionEn: "3x increase in participant numbers",
      details: "아프리카TV의 대표적인 e스포츠 리그 '멸망전'(오버워치, 서든어택, 카트라이더, FC 온라인 등)의 공정하고 흥미로운 경쟁을 위한 포인트 시스템 기획 및 도입. 다수 시즌에 걸쳐 시스템 개선 및 안정적 운영.",
      detailsEn: "Planned and introduced a point system for fair and exciting competition in AfreecaTV's flagship esports league 'Extinction Battle' (Overwatch, Sudden Attack, Kart Rider, FC Online, etc.). Improved the system and maintained stable operations across multiple seasons.",
      role: "리그 방식 및 포인트 제도 설계, 커뮤니티 피드백 반영, 대회 기획 및 운영 총괄. (Content Planner 역할)",
      roleEn: "Designed league format and point system, incorporated community feedback, oversaw tournament planning and operations. (Content Planner role)",
      results: "리그 참여도 및 시청자 관심 증대, 커뮤니티 활성화, 플랫폼 e스포츠 브랜드 강화. (참여율 60% 증가 기여)",
      resultsEn: "Increased league participation and viewer interest, activated community, strengthened platform's esports brand. (Contributed to a 60% increase in participation rate)",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "스트리머 주도 이벤트 및 대회",
      titleEn: "Streamer-led Events and Tournaments",
      description: "시청자 참여도 40% 증가",
      descriptionEn: "40% increase in viewer engagement",
      details: "'감스트 K리그 월드컵', '에투샤 포켓몬 대회' 등 스트리머 개성을 살린 이벤트 기획 및 지원. 플랫폼 자체 대규모 특집 방송 및 대회 기획 및 실행.",
      detailsEn: "Planned and supported events showcasing streamer personalities, such as 'Gamst K-League World Cup' and 'Etoosha Pokemon Tournament'. Planned and executed platform's own large-scale special broadcasts and tournaments.",
      role: "아이디어 발굴, 예산 확보, 홍보 마케팅, 방송 송출 지원, 결과 분석. (Content Planner 역할)",
      roleEn: "Idea discovery, budget securing, promotional marketing, broadcast support, results analysis. (Content Planner role)",
      results: "플랫폼 콘텐츠 다양화, 스트리머 브랜딩 강화, 시청자들에게 새로운 재미 제공",
      resultsEn: "Diversified platform content, strengthened streamer branding, provided new entertainment to viewers",
      color: "from-cyan-500 to-emerald-500"
    },
    {
      title: "G-Star 게임쇼 부스 운영",
      titleEn: "G-Star Game Show Booth Operation",
      description: "브랜드 인지도 제고",
      descriptionEn: "Enhanced brand awareness",
      details: "국내 최대 게임쇼 G-Star에서 아프리카TV 부스 운영 총괄. 현장 스트리밍 이벤트, 팬미팅, 미니 게임 대회 등 다양한 프로그램 기획 및 실행.",
      detailsEn: "Managed AfreecaTV booth operations at Korea's largest game show, G-Star. Planned and executed various programs including live streaming events, fan meetings, and mini-game tournaments.",
      role: "부스 콘셉트 기획, 예산 집행, 협력사 커뮤니케이션, 현장 운영 및 인력 관리. (Content Planner 역할)",
      roleEn: "Booth concept planning, budget execution, partner communications, on-site operations and staff management. (Content Planner role)",
      results: "브랜드 인지도 제고, 현장 관람객 유치 및 플랫폼 트래픽 증대, 파트너십 강화",
      resultsEn: "Increased brand awareness, attracted on-site visitors and increased platform traffic, strengthened partnerships",
      color: "from-emerald-500 to-teal-600"
    },
    {
      title: "핵심 스트리머 영입 및 계약 관리",
      titleEn: "Core Streamer Recruitment and Contract Management",
      description: "독점 콘텐츠 확보",
      descriptionEn: "Secured exclusive content",
      details: "플랫폼 성장에 기여할 핵심 스트리머 발굴 및 영입 협상. 기존 파트너 스트리머와의 주기적인 소통을 통한 만족도 관리, 재계약 및 성장 지원.",
      detailsEn: "Discovered and negotiated recruitment of key streamers to contribute to platform growth. Managed satisfaction, contract renewals, and growth support through regular communication with existing partner streamers.",
      role: "스트리머 시장 분석, 잠재적 영입 대상 컨택 및 설득, 계약 조건 협의, 스트리머 정착 및 활동 지원. (Streamer Partnership Manager 역할)",
      roleEn: "Streamer market analysis, contacting and convincing potential recruitment targets, contract terms negotiation, streamer onboarding and activity support. (Streamer Partnership Manager role)",
      results: "플랫폼 경쟁력 강화, 독점 콘텐츠 확보, 스트리머 이탈 방지 및 로열티 증대",
      resultsEn: "Strengthened platform competitiveness, secured exclusive content, prevented streamer churn and increased loyalty",
      color: "from-teal-500 to-green-600"
    },
    {
      title: "파트너 스트리머 지원금 시스템",
      titleEn: "Partner Streamer Support Fund System",
      description: "BJ 수익 30% 증가",
      descriptionEn: "30% increase in streamer revenue",
      details: "우수 파트너 스트리머(파비)의 안정적인 창작 활동을 지원하기 위한 체계적인 지원금 시스템 설계 및 도입. 매월 우수 활동 스트리머를 선정하는 '이달의 파비' 제도 기획 및 운영.",
      detailsEn: "Designed and introduced a systematic support fund system for outstanding partner streamers (PaBi) to support stable creative activities. Planned and operated a 'PaBi of the Month' program to select outstanding active streamers monthly.",
      role: "지원금 정책 수립, 선정 기준 정의, 내부 심사 프로세스 구축, 시상 및 홍보. (Streamer Partnership Manager 역할)",
      roleEn: "Established support fund policies, defined selection criteria, built internal review processes, managed awards and promotion. (Streamer Partnership Manager role)",
      results: "스트리머 창작 동기 부여, 콘텐츠 질 향상, 플랫폼과 스트리머 간의 긍정적 관계 구축",
      resultsEn: "Motivated streamer creativity, improved content quality, built positive relationships between platform and streamers",
      color: "from-green-500 to-[#007ACC]"
    }
  ];

  // Handle the overlay background when a card is expanded
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setExpandedProject(null);
    }
  };

  const sectionTitle = isEnglish ? "Projects" : "Projects";
  const sectionDescription = isEnglish 
    ? "Each project contributed to platform growth through data-driven decision making and user-centered design."
    : "각 프로젝트는 데이터 기반 의사결정과 사용자 중심 설계를 통해 플랫폼 성장에 기여했습니다.";

  return (
    <section id="projects" className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollSection>
          <h2 className="text-5xl md:text-6xl font-thin text-gray-900 text-center mb-10">
            {sectionTitle}
          </h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            {sectionDescription}
          </p>
        </ScrollSection>
        
        <div className={cn(
          "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6",
          expandedProject !== null ? "pointer-events-none" : ""
        )}>
          {projects.map((project, index) => (
            <ScrollSection 
              key={project.title} 
              delay={index * 100} 
              direction={index % 3 === 0 ? 'up' : index % 3 === 1 ? 'left' : 'right'} 
              speed={0.8} 
              opacity={true}
            >
              <div 
                className={cn(
                  "cursor-pointer relative",
                  expandedProject === index ? "z-50 pointer-events-auto" : expandedProject !== null ? "opacity-50" : ""
                )}
              >
                <ProjectCard 
                  {...project} 
                  index={index} 
                  isExpanded={expandedProject === index}
                  onToggleExpand={() => setExpandedProject(expandedProject === index ? null : index)}
                  isEnglish={isEnglish}
                />
              </div>
            </ScrollSection>
          ))}
        </div>

        {/* Overlay for expanded project */}
        {expandedProject !== null && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={handleBackdropClick}
          />
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
