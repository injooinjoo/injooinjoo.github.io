import React from 'react';
import './Experience.css';

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string[];
  skills: string[];
  color: string;
  videoUrl?: string;
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      company: "SOOP Co., Ltd. (formerly AfreecaTV)",
      role: "Live-streaming Ecosystem (Game) Lead",
      period: "2025년 7월 - 현재 (2개월)",
      description: [
        "Lead growth and operational strategy for a 5,000+ creator ecosystem, driving platform engagement, monetization, and community health",
        "Increased active creator engagement by 170% through targeted acquisition, onboarding, and retention programs",
        "Enhanced homepage CTR by 2.3x via data-driven algorithm optimization and improved user funnels",
        "Directed large-scale creator events & partnerships (e.g., G-Star), boosting participation rates by 60%",
        "Engineered scalable creator monetization models and performance dashboards, improving ROI and leadership decision-making"
      ],
      skills: ["PowerPoint", "Marketing", "Growth Strategy", "Creator Ecosystem", "Data Analytics", "Event Management"],
      color: "#e0f2fe",
      videoUrl: "/videos/soop-lead-demo.mp4"
    },
    {
      company: "SOOP Co., Ltd. (formerly AfreecaTV)",
      role: "Community Manager Lead",
      period: "2023년 7월 - 2025년 6월 (2년)",
      description: [
        "Managed day-to-day creator ecosystem operations, optimizing engagement and monetization strategies",
        "Implemented acquisition and retention initiatives, maintaining double-digit engagement growth year-over-year",
        "Partnered with cross-functional teams to integrate analytics-driven platform features",
        "Launched incentive programs and creator tools that improved content output quality and frequency"
      ],
      skills: ["Python", "SQL", "Analytics", "Creator Management", "Cross-functional Collaboration"],
      color: "#e8f4fd",
      videoUrl: "/videos/soop-lead-demo.mp4"
    },
    {
      company: "SOOP Co., Ltd. (formerly AfreecaTV)",
      role: "Community Manager",
      period: "2016년 2월 - 2023년 6월 (7년 5개월)",
      description: [
        "Built and nurtured a thriving live-streaming community, managing relationships with top-tier creators",
        "Developed creator support programs, increasing satisfaction and retention rates by over 30%",
        "Managed communication channels and resolved community escalations",
        "Organized and executed online/offline promotional events to boost visibility and interaction"
      ],
      skills: ["Community Relations", "Event Management", "Creator Support", "Communication"],
      color: "#f0f8ff",
      videoUrl: "/videos/soop-community-demo.mp4"
    },
    {
      company: "MMXXII (자영업/개인사업)",
      role: "Founder",
      period: "2021년 1월 - 2024년 1월 (3년 1개월)",
      description: [
        "Founded and scaled an e-commerce venture from zero to six-figure monthly revenue",
        "Achieved $100K/month revenue through multi-channel growth strategies (Ads, SEO/SEM, influencer collaborations)",
        "Ranked 1st page for 15+ target keywords on Naver/Google",
        "Improved conversion rates by 32% using A/B testing and segmented user targeting",
        "Built automation pipelines with Python & MongoDB, saving 200+ hours/month in operations"
      ],
      skills: ["Entrepreneurship", "E-commerce", "SEO/SEM", "Python", "MongoDB", "Business Development"],
      color: "#f3e8ff",
      videoUrl: "/videos/entrepreneur-demo.mp4"
    },
    {
      company: "POPJOY",
      role: "Marketing Manager",
      period: "2015년 4월 - 2016년 1월 (10개월)",
      description: [
        "Led app review processes for Android/iOS, optimizing UX and engagement strategies",
        "Planned and executed targeted in-game events based on behavioral analytics",
        "Managed paid ad campaigns with optimization and A/B testing to maximize ROI"
      ],
      skills: ["Mobile Marketing", "UX Optimization", "A/B Testing", "Paid Advertising", "Analytics"],
      color: "#ecfdf5",
      videoUrl: "/videos/popjoy-demo.mp4"
    },
    {
      company: "highbrow, Inc.",
      role: "Project Manager",
      period: "2014년 8월 - 2014년 12월 (5개월)",
      description: [
        "Coordinated updates and promotions with global game publishers",
        "Secured new publisher contracts and managed G-Star booth operations"
      ],
      skills: ["Project Management", "Publisher Relations", "Event Operations", "Contract Negotiation"],
      color: "#fef3e8",
      videoUrl: "/videos/highbrow-demo.mp4"
    },
    {
      company: "Ntreev Soft.",
      role: "Project Manager",
      period: "2012년 3월 - 2013년 6월 (1년 4개월)",
      description: [
        "Managed global publishing for 'Pangya' (Thailand & U.S.)",
        "Designed localized in-game events (e.g., Songkran festival), increasing performance by 130% over previous benchmarks"
      ],
      skills: ["Global Publishing", "Localization", "Event Design", "Market Analysis"],
      color: "#fff7ed",
      videoUrl: "/videos/ntreev-demo.mp4"
    }
  ];

  return (
    <div className="experience">
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className="experience-item"
            style={{ backgroundColor: exp.color }}
          >
            <div className="experience-header">
              <div className="experience-main">
                <h3 className="experience-company">{exp.company}</h3>
                <h4 className="experience-role">{exp.role}</h4>
              </div>
              <div className="experience-period">{exp.period}</div>
            </div>
            
            {exp.videoUrl && (
              <div className="experience-video">
                <video
                  src={exp.videoUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="experience-video-element"
                />
              </div>
            )}
            
            <div className="experience-description">
              <ul>
                {exp.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
            
            <div className="experience-skills">
              {exp.skills.map((skill, idx) => (
                <span key={idx} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;