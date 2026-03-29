import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { FaGithub, FaLinkedin, FaTwitter, FaDribbble, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
  const { email, phone, location } = portfolioData.personal;
  const { socialLinks } = portfolioData;
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission - frontend only
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact">
      <h2>Get In Touch</h2>
      
      <div className="contact-content">
        <div className="contact-info">
          <h3>Let's Connect</h3>
          <p>I'm always interested in hearing about new opportunities, collaborations, or just having a chat about tech and design.</p>
          
          <div className="contact-details">
            <div className="contact-item">
              <FaEnvelope />
              <a href={`mailto:${email}`}>{email}</a>
            </div>
            <div className="contact-item">
              <FaPhone />
              <a href={`tel:${phone}`}>{phone}</a>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt />
              <span>{location}</span>
            </div>
          </div>

          <div className="social-links">
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href={socialLinks.dribbble} target="_blank" rel="noopener noreferrer">
              <FaDribbble />
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          {submitted && <div className="success-message">Message sent successfully!</div>}
          
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          
          <button type="submit" className="btn-primary">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;