import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer-section">
      <div className="footer-container">
        
        <div className="footer-col">
          <h3 className="footer-logo">&lt;NULL CHAPTER /&gt;</h3>
          <p className="footer-tagline">Think. Break. Secure.</p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#news">News</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Connect</h4>
          <div className="social-links">
            <a href="#" className="social-icon">GitHub</a>
            <a href="#" className="social-icon">Discord</a>
            <a href="#" className="social-icon">LinkedIn</a>
            <a href="#" className="social-icon">Instagram</a>
          </div>
          <p className="contact-email">contact@nullchapter.com</p>
        </div>

      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Null Chapter. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
