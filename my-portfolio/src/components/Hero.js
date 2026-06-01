import React from 'react';
import { useNavigate } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import '../styles/Hero.css';

const Hero = () => {
  const navigate = useNavigate();
  const { name, headline } = portfolioData.personal;

  return (
    <div className="hero">
      <div className="hero-bg" />
      <div className="hero-content">
        <div className="hero-text card-glass">
          <div className="intro">
            <h1 className="greeting">Hi, I'm <span className="name">{name}</span></h1>
            <p className="sub">{headline} — building delightful, accessible web experiences.</p>
          </div>

          <h2 className="headline-creative">Crafting interfaces that feel alive</h2>

          <p className="description">
            Turning complex problems into seamless digital experiences. Beautiful by design and powerful by function — I focus on clarity, performance, and delightful micro-interactions.
          </p>

          <div className="hero-actions">
            <button className="btn-cta" onClick={() => navigate('/projects')}>Explore Projects</button>
            <button className="btn-ghost" onClick={() => navigate('/contact')}>Get in touch</button>
          </div>

          <div className="hero-socials">
            {portfolioData.socialLinks.github && (
              <a href={portfolioData.socialLinks.github} target="_blank" rel="noreferrer"><FaGithub /></a>
            )}
            {portfolioData.socialLinks.linkedin && (
              <a href={portfolioData.socialLinks.linkedin} target="_blank" rel="noreferrer"><FaLinkedin /></a>
            )}
            {portfolioData.socialLinks.twitter && (
              <a href={portfolioData.socialLinks.twitter} target="_blank" rel="noreferrer"><FaTwitter /></a>
            )}
          </div>
        </div>

        <div className="hero-image">
          <div className="image-frame">
            <div className="image-surface">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
                <rect x="0" y="0" width="200" height="200" rx="20" fill="url(#g2)" />
                <text x="100" y="110" textAnchor="middle" fill="white" fontSize="48">👩‍💻</text>
              </svg>
            </div>

            <div className="floating-tags">
              {(portfolioData.skills || []).slice(0,12).map((s, i) => (
                <span key={s} className={`tag t-${i}`}>{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;