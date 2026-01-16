import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper to check active state
  const isActive = (path) => {
    if (path === 'Home' && location.pathname === '/' && !location.hash) return true;
    if (path === 'About' && location.pathname === '/about') return true;
    if (location.hash === `#${path.toLowerCase().replace(' ', '-')}`) return true;
    return false;
  };

  const navLinks = ['Home', 'About', 'Events', 'Team', 'News', 'Contact Us'];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo-container" onClick={() => window.scrollTo(0, 0)}>
          <img src={logo} alt="Null Chapter Logo" className="navbar-logo-img" />
        </Link>

        <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => {
            let toPath = "/";
            if (link === 'Home') toPath = "/";
            else if (link === 'About') toPath = "/about";
            else toPath = `/#${link.toLowerCase().replace(' ', '-')}`;

            return (
              <Link
                key={link}
                to={toPath}
                className={`nav-link ${isActive(link) ? 'active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </Link>
            );
          })}
        </div>

        <div className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
