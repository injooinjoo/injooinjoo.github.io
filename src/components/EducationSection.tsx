
import React from 'react';
import ScrollSection from './ScrollSection';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

const EducationSection = () => {
  const educations = [
    {
      institution: "국가평생교육진흥원",
      degree: "학사 (B.S.), 컴퓨터 공학 & 경영학",
      period: "2018",
      description: "복수 전공: 컴퓨터 공학 및 경영학"
    },
    {
      institution: "University of California, Irvine",
      degree: "인문학부 (School of Humanities)",
      period: "2009",
      description: "중퇴 (dropout)"
    }
  ];

  const certifications = [
    {
      title: "Google Data Analytics Professional",
      issuer: "Google",
      date: "2022"
    },
    {
      title: "Google Business Analytics",
      issuer: "Google",
      date: "2022"
    }
  ];

  return (
    <section id="education" className="min-h-screen py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollSection className="mb-16">
          <h2 className="text-5xl md:text-6xl font-thin text-gray-900 text-center mb-4">
            Education
          </h2>
        </ScrollSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <ScrollSection delay={200} direction="up" speed={0.5}>
              <h3 className="text-3xl font-thin text-gray-900 mb-8 border-b pb-4 border-gray-200">
                Academic Background
              </h3>
              
              <ScrollArea className="h-[400px] pr-4">
                <div className="space-y-6">
                  {educations.map((edu, i) => (
                    <Card key={i} className="hover:shadow-md transition-shadow duration-300">
                      <CardHeader className="bg-gradient-to-r from-gray-50 to-white">
                        <CardTitle>{edu.institution}</CardTitle>
                        <CardDescription>{edu.degree}</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-[#007ACC] font-medium">{edu.period}</span>
                        </div>
                        <p className="text-gray-700">{edu.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </ScrollArea>
            </ScrollSection>
          </div>
          
          <div>
            <ScrollSection delay={400} direction="up" speed={0.5}>
              <h3 className="text-3xl font-thin text-gray-900 mb-8 border-b pb-4 border-gray-200">
                Certifications
              </h3>
              
              <ScrollArea className="h-[400px] pr-4">
                <div className="space-y-6">
                  {certifications.map((cert, i) => (
                    <Card key={i} className="hover:shadow-md transition-shadow duration-300">
                      <CardHeader>
                        <CardTitle>{cert.title}</CardTitle>
                        <CardDescription>{cert.issuer}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-[#007ACC]">{cert.date}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </ScrollArea>
            </ScrollSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
