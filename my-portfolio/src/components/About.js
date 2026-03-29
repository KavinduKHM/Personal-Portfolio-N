import React from 'react';
import { portfolioData } from '../data/portfolioData';
import '../styles/About.css';

const About = () => {
  const { bio, uniqueFact } = portfolioData.personal;
  const skills = portfolioData.skills || [];

  return (
    <div className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p className="bio">{bio}</p>
          <div className="unique-fact">
            <h4>✨ Fun Fact</h4>
            <p>{uniqueFact}</p>
          </div>
        </div>
        <div className="skills-section">
          <h3>Technologies I Work With</h3>
          <div className="skills-cloud">
            {skills.map((skill, index) => (
              <span key={index} className="skill-tag" style={{
                animationDelay: `${index * 0.1}s`,
                fontSize: `${Math.random() * 0.5 + 0.8}rem`
              }}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;