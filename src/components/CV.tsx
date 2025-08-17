import React from 'react';
import './CV.css';

const CV: React.FC = () => {
  return (
    <div className="cv-page">
      <div className="cv-container">
        
        {/* Header Section */}
        <div className="cv-header">
          <h1 className="cv-name">InJoo Kim</h1>
          <div className="cv-contact">
            <span>Seoul, Korea</span>
            <span>•</span>
            <span>82)10-5060-6843</span>
            <span>•</span>
            <span>ink595@g.harvard.edu</span>
            <span>•</span>
            <a href="https://linkedin.com/in/jooooo" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/jooooo
            </a>
          </div>
        </div>

        {/* Work Experience */}
        <section className="cv-section">
          <h2 className="cv-section-title">Work Experience</h2>
          
          <div className="cv-experience-item">
            <div className="cv-experience-header">
              <div className="cv-company-logo">
                <div className="company-logo-placeholder">SOOP</div>
              </div>
              <div className="cv-experience-content">
                <div className="cv-experience-main">
                  <h3 className="cv-company-name">SOOP Co., Ltd.</h3>
                  <span className="cv-company-subtitle">formerly AfreecaTV</span>
                </div>
                <div className="cv-experience-details">
                  <div className="cv-role-period">
                    <span className="cv-role">Live-streaming Ecosystem Lead / Community Manager</span>
                    <span className="cv-period">2016년 2월 - 현재 (9년 7개월)</span>
                  </div>
                  <div className="cv-description">
                    <p>Lead growth and operational strategy for a 5,000+ creator ecosystem, driving platform engagement, monetization, and community health.</p>
                    <ul>
                      <li>Increased active creator engagement by <strong>170%</strong> through targeted acquisition, onboarding, and retention programs</li>
                      <li>Enhanced homepage CTR by <strong>2.3x</strong> via data-driven algorithm optimization and improved user funnels</li>
                      <li>Directed large-scale creator events & partnerships (e.g., G-Star), boosting participation rates by <strong>60%</strong></li>
                      <li>Built and nurtured thriving live-streaming community, managing relationships with top-tier creators</li>
                      <li>Developed creator support programs, increasing satisfaction and retention rates by over <strong>30%</strong></li>
                      <li>Engineered scalable creator monetization models and performance dashboards for leadership decision-making</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="cv-experience-item">
            <div className="cv-experience-header">
              <div className="cv-company-logo">
                <div className="company-logo-placeholder">MMXXII</div>
              </div>
              <div className="cv-experience-content">
                <div className="cv-experience-main">
                  <h3 className="cv-company-name">MMXXII</h3>
                  <span className="cv-company-subtitle">자영업/개인사업</span>
                </div>
                <div className="cv-experience-details">
                  <div className="cv-role-period">
                    <span className="cv-role">Founder</span>
                    <span className="cv-period">2021년 1월 - 2024년 1월 (3년 1개월)</span>
                  </div>
                  <div className="cv-description">
                    <p>Founded and scaled an e-commerce venture from zero to six-figure monthly revenue.</p>
                    <ul>
                      <li>Achieved <strong>$100K/month revenue</strong> through multi-channel growth strategies (Ads, SEO/SEM, influencer collaborations)</li>
                      <li>Ranked <strong>1st page for 15+ target keywords</strong> on Naver/Google</li>
                      <li>Improved conversion rates by <strong>32%</strong> using A/B testing and segmented user targeting</li>
                      <li>Built automation pipelines with Python & MongoDB, saving <strong>200+ hours/month</strong> in operations</li>
                      <li>Negotiated and secured <strong>8 major B2B contracts</strong> with domestic e-commerce platforms</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="cv-experience-item">
            <div className="cv-experience-header">
              <div className="cv-company-logo">
                <div className="company-logo-placeholder">POPJOY</div>
              </div>
              <div className="cv-experience-content">
                <div className="cv-experience-main">
                  <h3 className="cv-company-name">POPJOY</h3>
                </div>
                <div className="cv-experience-details">
                  <div className="cv-role-period">
                    <span className="cv-role">Marketing Manager</span>
                    <span className="cv-period">2015년 4월 - 2016년 1월 (10개월)</span>
                  </div>
                  <div className="cv-description">
                    <ul>
                      <li>Led app review processes for Android/iOS, optimizing UX and engagement strategies</li>
                      <li>Planned and executed targeted in-game events based on behavioral analytics</li>
                      <li>Managed paid ad campaigns with optimization and A/B testing to maximize ROI</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="cv-experience-item">
            <div className="cv-experience-header">
              <div className="cv-company-logo">
                <div className="company-logo-placeholder">HB</div>
              </div>
              <div className="cv-experience-content">
                <div className="cv-experience-main">
                  <h3 className="cv-company-name">highbrow, Inc.</h3>
                </div>
                <div className="cv-experience-details">
                  <div className="cv-role-period">
                    <span className="cv-role">Project Manager</span>
                    <span className="cv-period">2014년 8월 - 2014년 12월 (5개월)</span>
                  </div>
                  <div className="cv-description">
                    <ul>
                      <li>Coordinated updates and promotions with global game publishers</li>
                      <li>Secured new publisher contracts and managed G-Star booth operations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="cv-experience-item">
            <div className="cv-experience-header">
              <div className="cv-company-logo">
                <div className="company-logo-placeholder">NS</div>
              </div>
              <div className="cv-experience-content">
                <div className="cv-experience-main">
                  <h3 className="cv-company-name">Ntreev Soft.</h3>
                </div>
                <div className="cv-experience-details">
                  <div className="cv-role-period">
                    <span className="cv-role">Project Manager</span>
                    <span className="cv-period">2012년 3월 - 2013년 6월 (1년 4개월)</span>
                  </div>
                  <div className="cv-description">
                    <ul>
                      <li>Managed global publishing for 'Pangya' (Thailand & U.S.)</li>
                      <li>Designed localized in-game events (e.g., Songkran festival), increasing performance by <strong>130%</strong> over previous benchmarks</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="cv-section">
          <h2 className="cv-section-title">Education</h2>
          
          <div className="cv-education-item">
            <div className="cv-education-header">
              <div className="cv-education-logo">
                <div className="education-logo-placeholder">H</div>
              </div>
              <div className="cv-education-content">
                <div className="cv-education-main">
                  <h3 className="cv-school-name">Harvard University</h3>
                </div>
                <div className="cv-education-details">
                  <div className="cv-degree-period">
                    <span className="cv-degree">Data Science, Master of Liberal Arts in Extension Studies</span>
                    <span className="cv-education-period">Expected 2026</span>
                  </div>
                  <div className="cv-education-description">
                    <p>Currently pursuing Master's degree in Data Science, focusing on advanced statistical methods, machine learning applications, and data-driven business strategy.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills & Toolkits */}
        <section className="cv-section">
          <h2 className="cv-section-title">Skills & Toolkits</h2>
          
          <div className="cv-skills-grid">
            <div className="cv-skills-category">
              <h4 className="cv-skills-category-title">Management & Strategy</h4>
              <div className="cv-skills-list">
                <span>Product Planning</span>
                <span>Growth Strategy</span>
                <span>Project Management</span>
                <span>Cross-functional Leadership</span>
                <span>Creator Ecosystem Operations</span>
              </div>
            </div>
            
            <div className="cv-skills-category">
              <h4 className="cv-skills-category-title">Technical & Analytics</h4>
              <div className="cv-skills-list">
                <span>Python</span>
                <span>SQL</span>
                <span>MongoDB</span>
                <span>Data Analytics</span>
                <span>A/B Testing</span>
                <span>SEO/SEM</span>
              </div>
            </div>
            
            <div className="cv-skills-category">
              <h4 className="cv-skills-category-title">Marketing & Growth</h4>
              <div className="cv-skills-list">
                <span>Digital Marketing</span>
                <span>Community Management</span>
                <span>Event Management</span>
                <span>User Acquisition</span>
                <span>E-commerce</span>
              </div>
            </div>
          </div>
        </section>

        {/* Download Button */}
        <div className="cv-download">
          <button className="cv-download-btn">
            Download PDF
          </button>
        </div>

      </div>
    </div>
  );
};

export default CV;