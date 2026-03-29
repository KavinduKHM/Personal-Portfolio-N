import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/Projects.css';

const Projects = () => {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState('all');

  const technologies = ['all', ...new Set(projects.flatMap(p => p.technologies))];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.technologies.includes(filter));

  return (
    <div className="projects">
      <h2>My Work</h2>
      
      <div className="filter-buttons">
        {technologies.slice(0, 6).map(tech => (
          <button
            key={tech}
            className={`filter-btn ${filter === tech ? 'active' : ''}`}
            onClick={() => setFilter(tech)}
          >
            {tech}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt /> Live Demo
                </a>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <FaGithub /> Code
                </a>
              </div>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p className="project-role">{project.role}</p>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;