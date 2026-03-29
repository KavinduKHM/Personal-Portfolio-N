import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { FaDownload, FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import '../styles/Resume.css';

const Resume = () => {
  const { experience, education, personal } = portfolioData;

  return (
    <div className="resume">
      <h2>Resume</h2>
      
      <div className="resume-download">
        <button className="btn-primary" onClick={() => window.open(personal.resumeLink, '_blank')}>
          <FaDownload /> Download PDF Resume
        </button>
      </div>

      <div className="resume-content">
        <div className="resume-section">
          <h3><FaBriefcase /> Work Experience</h3>
          <div className="timeline">
            {experience.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>{exp.role}</h4>
                  <p className="company">{exp.company}</p>
                  <p className="period">{exp.period}</p>
                  <p className="description">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="resume-section">
          <h3><FaGraduationCap /> Education</h3>
          <div className="timeline">
            {education.map((edu, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>{edu.degree}</h4>
                  <p className="company">{edu.institution}</p>
                  <p className="period">{edu.year}</p>
                  <p className="description">GPA: {edu.gpa}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;