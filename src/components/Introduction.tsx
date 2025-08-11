import React from 'react';

const Introduction: React.FC = () => {
  return (
    <section className="p-4">
      <h2 className="text-3xl font-bold mb-4">InJoo Kim</h2>
      <p className="mb-4">
        Project Manager at SOOP (formerly AfreecaTV) with over 12 years of experience in product planning, growth strategy, and creator ecosystem operations.
      </p>
      <div className="flex space-x-4">
        <a href="mailto:ink595@harvard.edu" className="text-blue-500">Email</a>
        <a href="https://linkedin.com/in/jooooo" target="_blank" rel="noopener noreferrer" className="text-blue-500">LinkedIn</a>
        <a href="#" className="text-blue-500">CV</a>
      </div>
    </section>
  );
};

export default Introduction;