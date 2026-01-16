import React, { useState, useEffect, useRef } from 'react';
import './Stats.css';

const Stats = () => {
  const [counts, setCounts] = useState({ members: 0, events: 0, ctfs: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const targets = {
    members: 250,
    events: 40,
    ctfs: 15
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 1500; // ms
      const intervalTime = 20;
      const steps = duration / intervalTime;

      const increments = {
        members: targets.members / steps,
        events: targets.events / steps,
        ctfs: targets.ctfs / steps
      };

      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        setCounts(prev => ({
          members: Math.min(Math.round(prev.members + increments.members), targets.members),
          events: Math.min(Math.round(prev.events + increments.events), targets.events),
          ctfs: Math.min(Math.round(prev.ctfs + increments.ctfs), targets.ctfs)
        }));

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, intervalTime);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="stats-container">
        <div className="stat-card">
          <h2 className="stat-number cyan">{counts.members}+</h2>
          <p className="stat-label">Active Members</p>
        </div>
        <div className="stat-card">
          <h2 className="stat-number purple">{counts.events}+</h2>
          <p className="stat-label">Events Conducted</p>
        </div>
        <div className="stat-card">
          <h2 className="stat-number pink">{counts.ctfs}+</h2>
          <p className="stat-label">CTFs Hosted</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
