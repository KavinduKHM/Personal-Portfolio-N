import React from 'react';
import { useNavigate } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';
import '../styles/Hero.css';

const Hero = () => {
  const navigate = useNavigate();
  const { name, headline } = portfolioData.personal;

  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="greeting">Hi, I'm <span className="name">{name}</span></h1>
          <h2 className="headline">{headline}</h2>
          <p className="description">
            Turning complex problems into seamless digital experiences.
             Beautiful by design. Powerful by function. Let's build the future together.
          </p>
          <div className="hero-buttons">
            <button 
              className="btn-primary"
              onClick={() => navigate('/projects')}
            >
              View My Work
            </button>
            <button 
              className="btn-secondary"
              onClick={() => navigate('/contact')}
            >
              Contact Me
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-placeholder">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="90" fill="url(#gradient)" />
              <text x="100" y="110" textAnchor="middle" fill="white" fontSize="40">👨‍💻</text>
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#667eea" />
                  <stop offset="100%" stopColor="#764ba2" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;