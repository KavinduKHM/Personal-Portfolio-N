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

  return (
    <div className="case-study">
      <button className="back-link" onClick={() => navigate(-1)}>
        
        Back
      </button>

      <h2>{project.title}</h2>
      <p className="case-role">{project.role}</p>

      <div className="case-layout">
        <div className="case-main">
          <section>
            <h3>Key Features</h3>
            <ul>
              {caseStudy.keyFeatures.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </section>

          <section>
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

          <section>
            <h3>Key Learnings</h3>
            <ul>
              {caseStudy.keyLearnings.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </section>
        </div>

        <aside className="case-sidebar">
          <section>
            <h3>Technologies Used</h3>
            <div className="case-tags">
              {caseStudy.technologiesUsed.map((tech, idx) => (
                <span key={idx} className="tech-tag">{tech}</span>
              ))}
            </div>
          </section>

          {caseStudy.githubLinks && (
            <section>
              <h3>Code Repositories</h3>
              <div className="case-repos">
                {caseStudy.githubLinks.frontend && (
                  <a
                    href={caseStudy.githubLinks.frontend}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    COCOSMART Frontend
                  </a>
                )}
                {caseStudy.githubLinks.backend && (
                  <a
                    href={caseStudy.githubLinks.backend}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    COCOSMART Backend
                  </a>
                )}
              </div>
            </section>
          )}

          <section>
            <h3>Images</h3>
            <div className="case-images">
              {caseStudy.images.map((src, idx) => (
                <img key={idx} src={src} alt={`${project.title} screenshot ${idx + 1}`} />
              ))}
            </div>
          </section>

          {caseStudy.videoUrl && (
            <section>
              <h3>Video</h3>
              <div className="case-video">
                <iframe
                  src={caseStudy.videoUrl}
                  title={`${project.title} case study video`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </section>
          )}
        </aside>
      </div>
    </div>
  );
};

export default CaseStudy;
