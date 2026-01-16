import React from 'react';
import './Team.css';
import team1 from '../assets/team-1.png';
import team2 from '../assets/team-2.png';
import team3 from '../assets/team-3.png';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Alex 'Void' Mercer",
      role: "President & Lead Pentester",
      image: team1
    },
    {
      id: 2,
      name: "Sarah 'Cipher' Vance",
      role: "Vice President & Cryptographer",
      image: team2
    },
    {
      id: 3,
      name: "David 'Glitch' Chen",
      role: "Tech Lead & System Architect",
      image: team3
    }
  ];

  return (
    <section id="team" className="team-section">
      <h2 className="section-title">Core <span className="highlight-text-cyan">Team</span></h2>
      <div className="team-container">
        {teamMembers.map(member => (
          <div key={member.id} className="team-card">
            <div className="team-img-wrapper">
              <img src={member.image} alt={member.name} className="team-img" />
            </div>
            <h3 className="team-name">{member.name}</h3>
            <p className="team-role">{member.role}</p>
          </div>
        ))}
      </div>
      <div className="team-footer">
        <a href="#team-full" className="view-team-btn">View Full Team</a>
      </div>
    </section>
  );
};

export default Team;
