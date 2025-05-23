
import React from 'react';
import ScrollSection from './ScrollSection';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Project One",
      description: "A revolutionary app that changes everything",
      tech: ["React", "TypeScript", "Tailwind"],
      image: "bg-gradient-to-br from-blue-400 to-purple-600"
    },
    {
      title: "Project Two", 
      description: "Beautiful design meets powerful functionality",
      tech: ["Next.js", "Node.js", "MongoDB"],
      image: "bg-gradient-to-br from-green-400 to-blue-600"
    },
    {
      title: "Project Three",
      description: "Innovation at its finest",
      tech: ["React Native", "Firebase", "Redux"],
      image: "bg-gradient-to-br from-orange-400 to-red-600"
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollSection>
          <h2 className="text-5xl md:text-6xl font-thin text-gray-900 text-center mb-20">
            Projects
          </h2>
        </ScrollSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScrollSection key={project.title} delay={index * 200}>
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className={`h-64 ${project.image}`}></div>
                <div className="p-8">
                  <h3 className="text-2xl font-medium text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
