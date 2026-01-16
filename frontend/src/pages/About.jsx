import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* 1. Page Header */}
      <section className="about-header">
        <div className="about-header-content">
          <h1>About <span className="highlight-text-cyan">Null Chapter</span></h1>
          <p className="about-tagline">A student-driven cybersecurity community</p>
        </div>
      </section>

      {/* 2. About Content */}
      <section className="about-content-section">
        <div className="about-container">
          <p className="about-text">
            Null Chapter is a student-driven technical club focused on cybersecurity, ethical hacking,
            and secure system design. The club aims to create awareness, develop practical skills,
            and encourage responsible security practices among students through hands-on learning
            and collaborative initiatives.
          </p>
        </div>
      </section>

      {/* 3. Vision & Mission */}
      <section className="vision-mission-section">
        <div className="about-container grid-2">
          <div className="vm-card vision">
            <h2>Our <span className="highlight-text-purple">Vision</span></h2>
            <p>To build a strong community of security-aware and technically skilled students.</p>
          </div>
          <div className="vm-card mission">
            <h2>Our <span className="highlight-text-blue">Mission</span></h2>
            <ul>
              <li>Promote cybersecurity awareness and best practices</li>
              <li>Provide hands-on learning opportunities</li>
              <li>Encourage ethical and responsible technology use</li>
              <li>Foster peer learning and collaboration</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Core Domains */}
      <section className="domains-section">
        <div className="about-container">
          <h2 className="section-title-small">Core <span className="highlight-text-pink">Domains</span></h2>
          <div className="domains-grid">
            <div className="domain-card">Cybersecurity & Ethical Hacking</div>
            <div className="domain-card">Secure Systems & Network Security</div>
            <div className="domain-card">Web & Application Security</div>
            <div className="domain-card">Capture The Flag (CTF) Challenges</div>
            <div className="domain-card">Security Awareness & Best Practices</div>
          </div>
        </div>
      </section>

      {/* 5. What We Do */}
      <section className="activities-section">
        <div className="about-container">
          <h2 className="section-title-small">What We <span className="highlight-text-cyan">Do</span></h2>
          <ul className="activities-list">
            <li>Technical workshops and training sessions</li>
            <li>Internal learning meets and discussions</li>
            <li>Cybersecurity competitions and CTFs</li>
            <li>Collaboration with other technical clubs</li>
            <li>Knowledge-sharing sessions and talks</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default About;
