
import React from 'react';
import ScrollSection from './ScrollSection';
import ProjectCard from './ProjectCard';
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious 
} from "@/components/ui/carousel";

const ProjectsSection = () => {
  const projects = [
    {
      title: "베스트 BJ 신청 페이지 개편",
      description: "스트리머 친화적 UI/UX로 전면 개편",
      details: "기존 베스트 BJ 신청 프로세스의 문제점을 분석하고, 사용자(스트리머) 친화적인 UI/UX로 전면 개편. 신청 절차 간소화 및 필요 정보 명확화.",
      role: "기획, 디자인 협업, 개발 요건 정의, 테스트 및 배포 관리",
      results: "신청 시간 단축, 정보 누락 감소, 스트리머 만족도 향상",
      color: "from-blue-400 to-[#007ACC]"
    },
    {
      title: "플랫폼 카테고리 시스템 재정립",
      description: "콘텐츠 탐색 효율성 증대",
      details: "급변하는 콘텐츠 트렌드와 사용자 요구에 맞춰 플랫폼 내 게임 및 다양한 콘텐츠 카테고리 구조를 재정립. 신규 카테고리 도입 및 기존 카테고리 통폐합.",
      role: "데이터 분석 기반 카테고리 분류 기준 수립, 사용자 피드백 수렴, 개발팀과 협업하여 시스템 반영",
      results: "콘텐츠 탐색 효율성 증대, 사용자 세분화 및 타겟팅 정확도 향상, 비주류 카테고리 활성화 기반 마련",
      color: "from-[#001F3F] to-blue-700"
    },
    {
      title: "메인 페이지 추천 알고리즘 개선",
      description: "스트리머 노출 4배 증가",
      details: "사용자 시청 데이터, 선호도, 활동 패턴 등을 분석하여 개인화된 콘텐츠 추천 알고리즘 고도화. 다양한 콘텐츠 노출 기회 확대 및 어뷰징 방지 로직 강화.",
      role: "알고리즘 개선 방향성 제시, 데이터 분석 및 모델링 팀과 협업, A/B 테스트를 통한 성과 검증. (Web Planner 역할)",
      results: "메인 페이지 사용자 참여도(CTR, 체류 시간) 증진, 콘텐츠 다양성 확보, 신규 스트리머 노출 기회 확대",
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "해시태그 시스템 재정립 및 기능 강화",
      description: "콘텐츠 검색 정확도 향상",
      details: "기존 해시태그 시스템의 검색 정확도 및 활용성 문제를 개선. 인기 해시태그 추천, 연관 해시태그 기능 도입, 해시태그 기반 콘텐츠 큐레이션 기능 기획.",
      role: "문제점 분석, 개선안 도출, 사용자 인터페이스 설계, 개발 가이드라인 제시",
      results: "콘텐츠 검색 정확도 및 발견 용이성 향상, 사용자들의 자발적인 태그 활용 증진",
      color: "from-[#007ACC] to-[#001F3F]"
    },
    {
      title: "스트리머 및 내부 운영 대시보드 개발",
      description: "업무 효율성 30% 개선",
      details: "스트리머의 방송 성과 분석 및 시청자 반응 확인을 위한 맞춤형 대시보드 제공. 내부 운영팀을 위한 플랫폼 지표, 이상 감지, 리소스 관리용 통합 대시보드 구축.",
      role: "필요 데이터 항목 정의, 시각화 방안 기획, BI팀 및 개발팀과 협력하여 구축",
      results: "스트리머의 데이터 기반 방송 전략 수립 지원, 내부 운영 효율성 및 의사결정 속도 향상",
      color: "from-indigo-500 to-purple-600"
    },
    {
      title: "'멸망전' e스포츠 리그 포인트 시스템",
      description: "참가자 수 3배 증가",
      details: "아프리카TV의 대표적인 e스포츠 리그 '멸망전'(오버워치, 서든어택, 카트라이더, FC 온라인 등)의 공정하고 흥미로운 경쟁을 위한 포인트 시스템 기획 및 도입. 다수 시즌에 걸쳐 시스템 개선 및 안정적 운영.",
      role: "리그 방식 및 포인트 제도 설계, 커뮤니티 피드백 반영, 대회 기획 및 운영 총괄. (Content Planner 역할)",
      results: "리그 참여도 및 시청자 관심 증대, 커뮤니티 활성화, 플랫폼 e스포츠 브랜드 강화. (참여율 60% 증가 기여)",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "스트리머 주도 이벤트 및 대회",
      description: "시청자 참여도 40% 증가",
      details: "'감스트 K리그 월드컵', '에투샤 포켓몬 대회' 등 스트리머 개성을 살린 이벤트 기획 및 지원. 플랫폼 자체 대규모 특집 방송 및 대회 기획 및 실행.",
      role: "아이디어 발굴, 예산 확보, 홍보 마케팅, 방송 송출 지원, 결과 분석. (Content Planner 역할)",
      results: "플랫폼 콘텐츠 다양화, 스트리머 브랜딩 강화, 시청자들에게 새로운 재미 제공",
      color: "from-cyan-500 to-emerald-500"
    },
    {
      title: "G-Star 게임쇼 부스 운영",
      description: "브랜드 인지도 제고",
      details: "국내 최대 게임쇼 G-Star에서 아프리카TV 부스 운영 총괄. 현장 스트리밍 이벤트, 팬미팅, 미니 게임 대회 등 다양한 프로그램 기획 및 실행.",
      role: "부스 콘셉트 기획, 예산 집행, 협력사 커뮤니케이션, 현장 운영 및 인력 관리. (Content Planner 역할)",
      results: "브랜드 인지도 제고, 현장 관람객 유치 및 플랫폼 트래픽 증대, 파트너십 강화",
      color: "from-emerald-500 to-teal-600"
    },
    {
      title: "핵심 스트리머 영입 및 계약 관리",
      description: "독점 콘텐츠 확보",
      details: "플랫폼 성장에 기여할 핵심 스트리머 발굴 및 영입 협상. 기존 파트너 스트리머와의 주기적인 소통을 통한 만족도 관리, 재계약 및 성장 지원.",
      role: "스트리머 시장 분석, 잠재적 영입 대상 컨택 및 설득, 계약 조건 협의, 스트리머 정착 및 활동 지원. (Streamer Partnership Manager 역할)",
      results: "플랫폼 경쟁력 강화, 독점 콘텐츠 확보, 스트리머 이탈 방지 및 로열티 증대",
      color: "from-teal-500 to-green-600"
    },
    {
      title: "파트너 스트리머 지원금 시스템",
      description: "BJ 수익 30% 증가",
      details: "우수 파트너 스트리머(파비)의 안정적인 창작 활동을 지원하기 위한 체계적인 지원금 시스템 설계 및 도입. 매월 우수 활동 스트리머를 선정하는 '이달의 파비' 제도 기획 및 운영.",
      role: "지원금 정책 수립, 선정 기준 정의, 내부 심사 프로세스 구축, 시상 및 홍보. (Streamer Partnership Manager 역할)",
      results: "스트리머 창작 동기 부여, 콘텐츠 질 향상, 플랫폼과 스트리머 간의 긍정적 관계 구축",
      color: "from-green-500 to-[#007ACC]"
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollSection>
          <h2 className="text-5xl md:text-6xl font-thin text-gray-900 text-center mb-10">
            Projects
          </h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            각 프로젝트는 데이터 기반 의사결정과 사용자 중심 설계를 통해 플랫폼 성장에 기여했습니다.
          </p>
        </ScrollSection>
        
        <Carousel className="w-full">
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={project.title} className="md:basis-full">
                <div className="p-1 h-[80vh] flex items-center">
                  <ProjectCard {...project} index={index} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-4">
            <CarouselPrevious className="relative static left-auto translate-y-0 mr-2" />
            <CarouselNext className="relative static right-auto translate-y-0 ml-2" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default ProjectsSection;
