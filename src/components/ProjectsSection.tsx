
import React, { useState } from 'react';
import ScrollSection from './ScrollSection';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Best BJ Application Page Redesign",
      description: "Streamer-friendly UI/UX Complete Redesign",
      details: "Analyzed issues in the existing Best BJ application process and completely redesigned it with a streamer-friendly UI/UX. Simplified the application procedure and clarified necessary information.",
      role: "Planning, Design Collaboration, Development Requirements Definition, Testing and Deployment Management",
      results: "Reduced application time, decreased information omission, improved streamer satisfaction",
      color: "from-blue-400 to-[#007ACC]"
    },
    {
      title: "Platform Category System Restructuring",
      description: "Improved Content Exploration Efficiency",
      details: "Restructured the platform's game and various content category structure to align with rapidly changing content trends and user needs. Introduced new categories and consolidated existing ones.",
      role: "Established data analysis-based category classification criteria, gathered user feedback, collaborated with development team for system implementation",
      results: "Enhanced content exploration efficiency, improved user segmentation and targeting accuracy, established foundation for niche category activation",
      color: "from-[#001F3F] to-blue-700"
    },
    {
      title: "Main Page Recommendation Algorithm Improvement",
      description: "4x Increase in Streamer Exposure",
      details: "Enhanced personalized content recommendation algorithm by analyzing user viewing data, preferences, and activity patterns. Expanded opportunities for diverse content exposure and strengthened anti-abuse logic.",
      role: "Suggested algorithm improvement direction, collaborated with data analysis and modeling team, verified performance through A/B testing (Web Planner role)",
      results: "Improved user engagement on main page (CTR, dwell time), secured content diversity, expanded exposure opportunities for new streamers",
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Hashtag System Restructuring and Enhancement",
      description: "Improved Content Search Accuracy",
      details: "Improved the accuracy and usability issues of the existing hashtag system. Introduced popular hashtag recommendations, related hashtag features, and planned hashtag-based content curation functionality.",
      role: "Problem analysis, solution development, user interface design, development guideline provision",
      results: "Improved content search accuracy and ease of discovery, enhanced users' voluntary tag utilization",
      color: "from-[#007ACC] to-[#001F3F]"
    },
    {
      title: "Streamer and Internal Operations Dashboard Development",
      description: "30% Improvement in Work Efficiency",
      details: "Provided customized dashboards for streamers to analyze broadcast performance and check viewer reactions. Built integrated dashboards for internal operations teams to monitor platform metrics, detect anomalies, and manage resources.",
      role: "Defined necessary data elements, planned visualization methods, built dashboards in collaboration with BI and development teams",
      results: "Supported streamers in developing data-driven broadcasting strategies, improved internal operation efficiency and decision-making speed",
      color: "from-indigo-500 to-purple-600"
    },
    {
      title: "'Extinction War' e-sports League Point System",
      description: "3x Increase in Participants",
      details: "Planned and introduced a point system for fair and exciting competition in AfreecaTV's representative e-sports league 'Extinction War' (Overwatch, Sudden Attack, Kart Rider, FC Online, etc.). Improved the system and maintained stable operation across multiple seasons.",
      role: "Designed league format and point system, incorporated community feedback, supervised tournament planning and operations (Content Planner role)",
      results: "Increased league participation and viewer interest, activated community, strengthened platform's e-sports brand (contributed to 60% increase in participation)",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Streamer-led Events and Tournaments",
      description: "40% Increase in Viewer Participation",
      details: "Planned and supported streamer-personalized events such as 'Gamst K-League World Cup' and 'Etosha Pokémon Tournament'. Planned and executed platform's own large-scale special broadcasts and tournaments.",
      role: "Idea discovery, budget securing, promotional marketing, broadcast transmission support, result analysis (Content Planner role)",
      results: "Diversified platform content, strengthened streamer branding, provided viewers with new entertainment",
      color: "from-cyan-500 to-emerald-500"
    },
    {
      title: "G-Star Game Show Booth Operation",
      description: "Enhanced Brand Awareness",
      details: "Supervised AfreecaTV booth operations at Korea's largest game show G-Star. Planned and executed various programs including live streaming events, fan meetings, and mini-game tournaments.",
      role: "Booth concept planning, budget execution, communication with partners, on-site operation and staff management (Content Planner role)",
      results: "Enhanced brand awareness, attracted on-site visitors and increased platform traffic, strengthened partnerships",
      color: "from-emerald-500 to-teal-600"
    },
    {
      title: "Core Streamer Recruitment and Contract Management",
      description: "Secured Exclusive Content",
      details: "Discovered and negotiated recruitment of core streamers who would contribute to platform growth. Managed satisfaction through regular communication with existing partner streamers, supporting renewals and growth.",
      role: "Streamer market analysis, contacting and persuading potential recruits, negotiating contract terms, supporting streamer establishment and activities (Streamer Partnership Manager role)",
      results: "Strengthened platform competitiveness, secured exclusive content, prevented streamer churn and increased loyalty",
      color: "from-teal-500 to-green-600"
    },
    {
      title: "Partner Streamer Support Fund System",
      description: "30% Increase in BJ Revenue",
      details: "Designed and introduced a systematic support fund system to support stable creative activities of excellent partner streamers (Pabi). Planned and operated the 'Pabi of the Month' system that selects outstanding active streamers every month.",
      role: "Established support fund policies, defined selection criteria, built internal review processes, awards and promotion (Streamer Partnership Manager role)",
      results: "Motivated streamer creativity, improved content quality, built positive relationships between platform and streamers",
      color: "from-green-500 to-[#007ACC]"
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollSection>
          <h2 className="text-5xl md:text-6xl font-thin text-gray-900 dark:text-gray-100 text-center mb-10">
            Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-16 max-w-3xl mx-auto">
            Each project contributed to platform growth through data-driven decision making and user-centered design.
          </p>
        </ScrollSection>
        
        <div className="relative min-h-[800px]">
          <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500 ${expandedProject !== null ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            {projects.map((project, index) => (
              <ScrollSection key={project.title} delay={index * 100} direction={index % 3 === 0 ? 'up' : index % 3 === 1 ? 'left' : 'right'} speed={0.8} opacity={true}>
                <div 
                  className="cursor-pointer relative"
                  onClick={() => setExpandedProject(index)}
                >
                  <ProjectCard 
                    {...project} 
                    index={index} 
                    isExpanded={false}
                  />
                </div>
              </ScrollSection>
            ))}
          </div>
          
          {expandedProject !== null && (
            <div className="absolute top-0 left-0 right-0 min-h-[800px] z-10">
              <div className="relative">
                <button 
                  onClick={() => setExpandedProject(null)} 
                  className="absolute -top-10 right-0 bg-gray-700 text-white p-2 rounded-full z-20 hover:bg-gray-600 transition-colors"
                >
                  Close
                </button>
                <div 
                  className="cursor-pointer"
                  onClick={() => setExpandedProject(null)}
                >
                  <ProjectCard 
                    {...projects[expandedProject]} 
                    index={expandedProject} 
                    isExpanded={true}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
