import React from 'react';
import './ProfileHeader.css';

const ProfileHeader: React.FC = () => {
  return (
    <header className="profile-header">
      <div className="profile-image">
        <img 
          src="/profile-image.jpg" 
          alt="InJoo Kim" 
          className="profile-img"
        />
      </div>
      <div className="profile-info">
        <h1 className="profile-name">InJoo Kim</h1>
        <p className="profile-location">Seoul, Korea</p>
        <p className="profile-bio">
          Project Manager with 12+ years of experience specializing in product planning, growth strategy, 
          and creator ecosystem operations at SOOP (formerly AfreecaTV). Currently pursuing ALM in Data Science 
          at Harvard Extension School and completed MITx MicroMasters in Statistics and Data Science.
        </p>
        <div className="profile-links">
          <a href="mailto:ink595@harvard.edu" className="profile-link">
            Email
          </a>
          <a href="https://linkedin.com/in/jooooo" target="_blank" rel="noopener noreferrer" className="profile-link">
            LinkedIn
          </a>
          <a href="tel:+821050606843" className="profile-link">
            Phone
          </a>
        </div>
      </div>
    </header>
  );
};

export default ProfileHeader;