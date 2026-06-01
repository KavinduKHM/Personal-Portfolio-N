import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  return (
    <footer className="footer footer-simple">
      <div className="footer-row">
        <div className="brand">
          <div className="brand-logo">{(portfolioData.personal.name || 'N D').split(' ').map(n=>n[0]).join('').slice(0,2)}</div>
          <div className="brand-copy">
            <h4>{portfolioData.personal.name}</h4>
            <div className="muted">{portfolioData.personal.headline}</div>
          </div>
        </div>

        

        <div className="contact-socials">
          <a className="email" href={`mailto:${portfolioData.personal.email}`}>{portfolioData.personal.email}</a>
          <div className="social-row">
            {portfolioData.socialLinks.github && (<a href={portfolioData.socialLinks.github} target="_blank" rel="noreferrer"><FaGithub /></a>)}
            {portfolioData.socialLinks.linkedin && (<a href={portfolioData.socialLinks.linkedin} target="_blank" rel="noreferrer"><FaLinkedin /></a>)}
            {portfolioData.socialLinks.twitter && (<a href={portfolioData.socialLinks.twitter} target="_blank" rel="noreferrer"><FaTwitter /></a>)}
          </div>
        </div>
      </div>

      <center>
      <div className="footer-bottom">
        <center><div className="copy">&copy; {currentYear} {portfolioData.personal.name}. All rights reserved.</div></center>
      </div>
      </center>
    </footer>
  );
};

export default Footer;