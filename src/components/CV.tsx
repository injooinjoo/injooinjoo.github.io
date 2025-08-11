import React from 'react';
import './CV.css';

const CV: React.FC = () => {
  return (
    <div className="cv">
      <div className="cv-content">
        
        <section className="cv-section">
          <h2 className="cv-section-title">Professional Summary</h2>
          <p className="cv-summary">
            Project Manager with 12+ years of experience specializing in product planning, growth strategy, 
            and creator ecosystem operations. Currently pursuing Data Science, Master of Liberal Arts in Extension Studies 
            at Harvard University. Proven track record of leading high-impact initiatives at scale, 
            with expertise in data-driven decision making and cross-functional team leadership.
          </p>
        </section>

        <section className="cv-section">
          <h2 className="cv-section-title">Work Experience</h2>
          
          <div className="cv-job">
            <div className="cv-job-header">
              <h3 className="cv-job-title">Live-streaming Ecosystem Lead / Community Manager</h3>
              <span className="cv-job-period">2016년 2월 - 현재 (9년 7개월)</span>
            </div>
            <h4 className="cv-company">SOOP Co., Ltd. (formerly AfreecaTV)</h4>
            <ul className="cv-job-details">
              <li>Lead growth and operational strategy for a 5,000+ creator ecosystem</li>
              <li>Increased active creator engagement by 170% through targeted acquisition programs</li>
              <li>Enhanced homepage CTR by 2.3x via data-driven algorithm optimization</li>
              <li>Directed large-scale creator events (G-Star), boosting participation rates by 60%</li>
              <li>Built and nurtured thriving live-streaming community with top-tier creators</li>
              <li>Developed creator support programs, increasing retention rates by over 30%</li>
              <li>Engineered scalable creator monetization models and performance dashboards</li>
              <li>Managed communication channels and cross-functional team collaboration</li>
            </ul>
          </div>

          <div className="cv-job">
            <div className="cv-job-header">
              <h3 className="cv-job-title">Founder</h3>
              <span className="cv-job-period">2021년 1월 - 2024년 1월 (3년 1개월)</span>
            </div>
            <h4 className="cv-company">MMXXII (자영업/개인사업)</h4>
            <ul className="cv-job-details">
              <li>Founded and scaled e-commerce venture from zero to six-figure monthly revenue</li>
              <li>Achieved $100K/month revenue through multi-channel growth strategies</li>
              <li>Ranked 1st page for 15+ target keywords on Naver/Google</li>
              <li>Improved conversion rates by 32% using A/B testing and segmented targeting</li>
              <li>Built automation pipelines with Python & MongoDB, saving 200+ hours/month</li>
            </ul>
          </div>

          <div className="cv-job">
            <div className="cv-job-header">
              <h3 className="cv-job-title">Marketing Manager</h3>
              <span className="cv-job-period">2015년 4월 - 2016년 1월 (10개월)</span>
            </div>
            <h4 className="cv-company">POPJOY</h4>
            <ul className="cv-job-details">
              <li>Led app review processes for Android/iOS, optimizing UX and engagement</li>
              <li>Planned and executed targeted in-game events based on behavioral analytics</li>
              <li>Managed paid ad campaigns with optimization and A/B testing to maximize ROI</li>
            </ul>
          </div>

          <div className="cv-job">
            <div className="cv-job-header">
              <h3 className="cv-job-title">Project Manager</h3>
              <span className="cv-job-period">2014년 8월 - 2014년 12월 (5개월)</span>
            </div>
            <h4 className="cv-company">highbrow, Inc.</h4>
            <ul className="cv-job-details">
              <li>Coordinated updates and promotions with global game publishers</li>
              <li>Secured new publisher contracts and managed G-Star booth operations</li>
            </ul>
          </div>

          <div className="cv-job">
            <div className="cv-job-header">
              <h3 className="cv-job-title">Project Manager</h3>
              <span className="cv-job-period">2012년 3월 - 2013년 6월 (1년 4개월)</span>
            </div>
            <h4 className="cv-company">Ntreev Soft.</h4>
            <ul className="cv-job-details">
              <li>Managed global publishing for 'Pangya' (Thailand & U.S.)</li>
              <li>Designed localized in-game events (Songkran festival), increasing performance by 130%</li>
            </ul>
          </div>
        </section>

        <section className="cv-section">
          <h2 className="cv-section-title">Education</h2>
          
          <div className="cv-education">
            <div className="cv-education-item">
              <div className="cv-education-header">
                <h3 className="cv-degree">Data Science, Master of Liberal Arts in Extension Studies</h3>
                <span className="cv-education-period">Expected 2026</span>
              </div>
              <h4 className="cv-school">Harvard University</h4>
              <p className="cv-education-details">
                Currently pursuing Master's degree in Data Science, focusing on advanced statistical methods, 
                machine learning applications, and data-driven business strategy.
              </p>
            </div>
          </div>
        </section>

        <section className="cv-section">
          <h2 className="cv-section-title">Key Skills</h2>
          <div className="cv-skills">
            <div className="cv-skill-category">
              <h4 className="cv-skill-category-title">Management & Strategy</h4>
              <div className="cv-skill-tags">
                <span className="cv-skill-tag">Product Planning</span>
                <span className="cv-skill-tag">Growth Strategy</span>
                <span className="cv-skill-tag">Project Management</span>
                <span className="cv-skill-tag">Cross-functional Leadership</span>
              </div>
            </div>
            <div className="cv-skill-category">
              <h4 className="cv-skill-category-title">Data & Analytics</h4>
              <div className="cv-skill-tags">
                <span className="cv-skill-tag">Data Science</span>
                <span className="cv-skill-tag">Statistical Analysis</span>
                <span className="cv-skill-tag">Machine Learning</span>
                <span className="cv-skill-tag">Python</span>
                <span className="cv-skill-tag">R</span>
              </div>
            </div>
            <div className="cv-skill-category">
              <h4 className="cv-skill-category-title">Platform & Operations</h4>
              <div className="cv-skill-tags">
                <span className="cv-skill-tag">Creator Monetization</span>
                <span className="cv-skill-tag">User Engagement</span>
                <span className="cv-skill-tag">Operations Automation</span>
                <span className="cv-skill-tag">Digital Transformation</span>
              </div>
            </div>
          </div>
        </section>

        <section className="cv-section">
          <h2 className="cv-section-title">Contact Information</h2>
          <div className="cv-contact">
            <div className="cv-contact-item">
              <span className="cv-contact-label">Location:</span>
              <span className="cv-contact-value">Seoul, Korea</span>
            </div>
            <div className="cv-contact-item">
              <span className="cv-contact-label">Email:</span>
              <span className="cv-contact-value">ink595@harvard.edu</span>
            </div>
            <div className="cv-contact-item">
              <span className="cv-contact-label">Phone:</span>
              <span className="cv-contact-value">+82 10-5060-6843</span>
            </div>
            <div className="cv-contact-item">
              <span className="cv-contact-label">LinkedIn:</span>
              <span className="cv-contact-value">linkedin.com/in/jooooo</span>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default CV;