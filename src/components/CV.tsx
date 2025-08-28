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
                  <span className="cv-company-subtitle">formerly AfreecaTV — Major live-streaming platform in Korea</span>
                </div>
                <div className="cv-experience-details">
                  <div className="cv-role-period">
                    <span className="cv-role">Project Manager & Creator Operations Lead</span>
                    <span className="cv-period">2016년 2월 - 현재</span>
                  </div>
                  <div className="cv-description">
                    <ul>
                      <li>Revamped homepage algorithm, hashtag taxonomy, and category structure — increased mid-level creator exposure & homepage CTR by <strong>230%</strong></li>
                      <li>Designed monetization programs for creators — drove <strong>75% revenue growth</strong> among participants (+42% monthly)</li>
                      <li>Managed onboarding of <strong>1,200+ creators</strong> — implemented retention programs, growing active creators by 170%</li>
                      <li>Secured <strong>60+ major streamer contracts</strong>, strengthening the premium content ecosystem</li>
                      <li>Enhanced streaming services (TTS, membership, tournaments) — increased paid user conversions by <strong>31%</strong></li>
                      <li>Directed high-impact events (G-Star, in-platform competitions) — boosted monthly accumulated viewer by <strong>60%</strong></li>
                      <li>Built KPI dashboards & real-time monitoring tools — enabled data-driven decisions for executives</li>
                      <li>Automated reporting and operations — cut the equivalent of 20 staff days of monthly work to under 1 hour</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="cv-experience-item">
            <div className="cv-experience-header">
              <div className="cv-company-logo">
                <div className="company-logo-placeholder">YT</div>
              </div>
              <div className="cv-experience-content">
                <div className="cv-experience-main">
                  <h3 className="cv-company-name">YouTube Creator & App Developer</h3>
                </div>
                <div className="cv-experience-details">
                  <div className="cv-role-period">
                    <span className="cv-role">Content Creator & Entrepreneur</span>
                    <span className="cv-period">2021년 - 현재</span>
                  </div>
                  <div className="cv-description">
                    <ul>
                      <li>Produced video content, achieving <strong>over 2 million views</strong> on a single video and <strong>130k subscribers</strong></li>
                      <li>Sole developer — launched horoscope and education applications with <strong>GPT-trained models</strong> for personalization</li>
                      <li>Founded and scaled an e-commerce venture focusing on online shopping and app development</li>
                      <li>Built automation pipelines with Python, integrating AI/ML models for enhanced user experiences</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="cv-experience-item">
            <div className="cv-experience-header">
              <div className="cv-company-logo">
                <div className="company-logo-placeholder">GAMES</div>
              </div>
              <div className="cv-experience-content">
                <div className="cv-experience-main">
                  <h3 className="cv-company-name">Early Career (Paranoid Joy, highbrow, Ntreev Soft)</h3>
                  <span className="cv-company-subtitle">Mobile & online game publisher & developer</span>
                </div>
                <div className="cv-experience-details">
                  <div className="cv-role-period">
                    <span className="cv-role">Project Manager</span>
                    <span className="cv-period">2012년 - 2016년</span>
                  </div>
                  <div className="cv-description">
                    <ul>
                      <li>Directed user engagement strategies via targeted in-game events and optimized advertising campaigns — increased user retention by up to <strong>15%</strong> and improved advertising ROI</li>
                      <li>Managed global digital content publishing and secured strategic partnerships in Europe and China, including collaboration with Snail Games — significantly expanded market reach</li>
                      <li>Planned and executed localized seasonal events (e.g., Songkran Festival for Thailand) — achieved a <strong>130% increase</strong> in user engagement over previous benchmarks through tailored content and promotional initiatives</li>
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
                    <span className="cv-education-period">2025 – 2026</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="cv-education-item">
            <div className="cv-education-header">
              <div className="cv-education-logo">
                <div className="education-logo-placeholder">UIUC</div>
              </div>
              <div className="cv-education-content">
                <div className="cv-education-main">
                  <h3 className="cv-school-name">University of Illinois Urbana-Champaign</h3>
                </div>
                <div className="cv-education-details">
                  <div className="cv-degree-period">
                    <span className="cv-degree">Master of Business Administration</span>
                    <span className="cv-education-period">2025 – 2027</span>
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