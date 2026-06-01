import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';
import '../styles/CaseStudy.css';

const CaseStudy = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = portfolioData.projects.find(p => String(p.id) === id);

  if (!project || !project.caseStudy) {
    return (
      <div className="case-study">
        <h2>Case Study Not Found</h2>
        <p>The requested project case study could not be found.</p>
        <button className="btn-primary" onClick={() => navigate('/projects')}>
          Back to Projects
        </button>
      </div>
    );
  }

  const { caseStudy } = project;

  // Resolve hero image: support absolute URLs and public-folder relative paths
  const heroImage = project.image
    ? (project.image.startsWith('http') ? project.image : `${process.env.PUBLIC_URL}/${project.image}`)
    : '';

  return (
    <div className="case-study">
      <div className="case-hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="case-hero-overlay">
          <div className="case-hero-inner">
            <button className="back-link" onClick={() => navigate(-1)}>Back</button>
            <h1 className="case-title">{project.title}</h1>
            <p className="case-role">{project.role}</p>
            <div className="case-hero-ctas">
              
              {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noreferrer" className="btn-primary">View Code</a>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="case-container">
        <div className="case-layout">
          <div className="case-main">
            <section className="case-summary card">
              <h3>Project Summary</h3>
              {project.description && project.description.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <div className="case-meta">
                <div><strong>Stack:</strong> {project.technologies.join(', ')}</div>
              </div>
            </section>

            <section className="card">
              <h3>Key Features</h3>
              <ul className="features-list">
                {caseStudy.keyFeatures.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </section>

            <section className="card">
              <h3>My Role & Contribution</h3>
              {Array.isArray(caseStudy.contribution) ? (
                <ul>
                  {caseStudy.contribution.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p>{caseStudy.contribution}</p>
              )}
            </section>

            <section className="card">
              <h3>Key Learnings</h3>
              <ul>
                {caseStudy.keyLearnings.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="case-sidebar">
            <div className="card sticky">
              <h4>Technologies</h4>
              <div className="case-tags">
                {caseStudy.technologiesUsed.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>

            {caseStudy.githubLinks && (
              <div className="card">
                <h4>Code Repositories</h4>
                <div className="case-repos">
                  {caseStudy.githubLinks.frontend && (
                    <a href={caseStudy.githubLinks.frontend} target="_blank" rel="noopener noreferrer">Frontend Repo</a>
                  )}
                  {caseStudy.githubLinks.backend && (
                    <a href={caseStudy.githubLinks.backend} target="_blank" rel="noopener noreferrer">Backend Repo</a>
                  )}
                </div>
              </div>
            )}

            <div className="card">
              <h4>Screenshots</h4>
              <div className="case-images">
                {caseStudy.images.map((src, idx) => (
                  <img key={idx} src={src} alt={`${project.title} screenshot ${idx + 1}`} />
                ))}
              </div>
            </div>

            {caseStudy.videoUrl && (
              <div className="card">
                <h4>Demo Video</h4>
                <div className="case-video">
                  <iframe
                    src={caseStudy.videoUrl}
                    title={`${project.title} case study video`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
