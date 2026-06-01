import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { FaDownload, FaGraduationCap, FaTools } from 'react-icons/fa';
import '../styles/Resume.css';

const Resume = () => {
  const { education, personal } = portfolioData;

  const coreSkills = [
    {
    category: 'Backend Development',
    items: [

      'MongoDB',
      'JAVA',
      'PHP',
      'Node.js',
      'JavaScript (ES6+)',
      'Express.js',
      'SQL',
      'C++'

    ]
    },
    {
    category: 'Frontend Development',
    items: [
      'React.js',
      'Next.js',
      'HTML5 & modern CSS',
      'Tailwind CSS',
      'Bootstrap',
      'API integration, error handling and loading states'
    ]
    },
    {
    category: 'Technologies',
    items: [
      'MERN Stack',
      'Spring Boot',
      'JavaScript (ES6+), TypeScript (basics)',
      'Git & GitHub workflows (branches, PRs, reviews)',
      'Basic cloud/deployment exposure (Netlify, Render, etc.)'
    ]
    },
    {
    category: 'Mobile App Development',
    items: [
      'Kotlin, Java (Native Android)',
      'Android Studio',
      'Android Jetpack (Navigation, ViewModel, Room)',
      'Background work and notifications with WorkManager'
    ]
    },
    {
    category: 'QA Testing',
    items: [
      'Postman',
      'SDLC & Test Case writing',
      'Manual and basic automated testing',
      'Performance testing',
      'Debugging and tracking issues using GitHub Issues'
    ]
    },
    {
    category: 'Soft Skills',
    items: [
      'Leadership',
      'Team Work',
      'Project Management',
      'Critical Thinking',
      'Communication',
      'Problem Solving',
      'Adaptability',
      'Quick Learning',
      'Experimenting'
    ]
    },
    {
    category: 'Version Control & Tools',
    items: [
      'Git & GitHub',
      'Jira',
      'VS Code, Android Studio, Postman',
      'Agile-inspired workflows with task boards and iterations'
    ]
    }
  ];

  const certifications = [
    {
    name: 'Full-Stack Web Development (Project-Based)',
    issuer: 'University & Self-Driven Projects',
    year: '2024',
    details: 'Delivered multiple MERN and Android projects from idea to deployment.'
    },
    {
    name: 'Cloud & DevOps Fundamentals',
    issuer: 'Online Learning Platform',
    year: '2023',
    details: 'Covered CI/CD basics, containers, and deployment best practices.'
    }
  ];

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
        <h3><FaTools /> Core Skills</h3>
        <div className="timeline">
        {coreSkills.map((group, index) => (
          <div key={group.category} className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h4>{group.category}</h4>
            <ul className="skills-list">
            {group.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
            </ul>
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

      <div className="certifications">
        <h3>Certifications</h3>
        <div className="timeline">
        {certifications.map((cert) => (
          <div key={cert.name} className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h4>{cert.name}</h4>
            <p className="company">{cert.issuer}</p>
            <p className="period">{cert.year}</p>
            <p className="description">{cert.details}</p>
          </div>
          </div>
        ))}
        </div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;