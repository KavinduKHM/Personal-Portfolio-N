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
        <div className="about-left">
          <div className="about-avatar" aria-hidden>
            {/* If you add a personal image path to portfolioData.personal.image, replace this div with an <img> */}
            <span className="avatar-initials">{(portfolioData.personal.name || 'N D').split(' ').map(n=>n[0]).join('').slice(0,2)}</span>
          </div>

          <div className="unique-fact">
            <h4>Quick Fact</h4>
            <p>{portfolioData.personal.location || 'Based remotely'}</p>
          </div>
        </div>

        <div className="about-right">
          <div className="about-text">
            <p className="bio">{bio}</p>
            <div className="about-cta">
              <a href="/contact" className="btn-primary">Contact Me</a>
              <a href={portfolioData.personal.resumeLink} className="btn-outline" target="_blank" rel="noreferrer">Download CV</a>
            </div>
          </div>
          <br></br>
          <div className="skills-section">
            <h3>Technologies I Work With</h3>
            <div className="skills-cloud">
              {skills.map((skill, index) => (
                <span key={index} className="skill-tag" style={{ animationDelay: `${index * 0.08}s` }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;