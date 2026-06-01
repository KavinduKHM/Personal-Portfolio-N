import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';
import CaseStudy from './components/CaseStudy';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  useEffect(() => {
    // show preloader for at least 2000ms (2s) then hide
    const minDelay = 2000;
    const t = setTimeout(() => setIsLoading(false), minDelay);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="app">
      {isLoading ? (
        <div className="preloader-root">
          <div className="preloader-overlay">
            <div className="preloader">
              <div className="preloader-badge">ND</div>
              <div className="preloader-sub">Nilumi Dakshika</div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <main>
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/case-study/:id" element={<CaseStudy />} />
            </Routes>
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;