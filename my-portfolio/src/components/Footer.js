import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {currentYear} Alex Johnson. All rights reserved.</p>
        <p>Built with React & ❤️</p>
      </div>
    </footer>
  );
};

export default Footer;