import React, { useState, useEffect } from 'react';
import './Team.css';
import { teamData, currentYear } from '../data/teamData';

const Team = ({ isPreview = false }) => {
  const [selectedYear, setSelectedYear] = useState(currentYear);
  
  useEffect(() => {
    if (!isPreview) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedYear, isPreview]);

  // If Preview, force current year
  const displayYear = isPreview ? currentYear : selectedYear;

  const currentYearData = teamData.find(d => d.year === displayYear);
  const groups = currentYearData ? currentYearData.groups : [];

  // If Preview, only show the first group (Leadership)
  const groupsToDisplay = isPreview && groups.length > 0 ? [groups[0]] : groups;

  // Get ALL years for selector
  const allYears = teamData.map(d => d.year);
  
  const handleYearClick = (year) => {
    setSelectedYear(year);
  };

  return (
    <section id="team" className="team-section">
      <div className="section-header">
        <h2 className="section-title">
            {isPreview ? (
                <>Core <span className="highlight-text-cyan">Team</span></>
            ) : (
                <>{displayYear} <span className="highlight-text-cyan">Team</span></>
            )}
        </h2>
      </div>

      <div className="team-groups-wrapper">
        {groupsToDisplay.length > 0 ? (
            groupsToDisplay.map((group, index) => (
                <div key={group.id} className="team-group">
                    {/* 
                        Show Group Title if:
                        1. It's NOT preview mode
                        2. OR if it is preview mode, we usually hide "Chapter Leads" title to keep it clean like "Core Team" main header? 
                           The prompt says "Home page Team preview logic... Same behavior as previous".
                           Previous behavior was just names.
                           But now we have a "Chapter Leads" title in data.
                           Let's show it if !isPreview. If isPreview, the section title "Core Team" covers it.
                           Actually, for the full page, we definitely need sub-headers for "Admin Team", etc.
                           For 2025 Chapter Leads, we should show "Chapter Leads" as sub-header or relies on page title?
                           Let's show sub-headers for all groups to be safe and clear, EXCEPT maybe the first one if isPreview?
                    */}
                    {!isPreview && (
                        <h3 className="team-group-title">{group.title}</h3>
                    )}
                    
                    <div className="team-container">
                        {group.members.map(member => (
                        <div key={member.id} className="team-card">
                            <div className="team-img-wrapper">
                            <img src={member.image} alt={member.name} className="team-img" />
                            </div>
                            <h3 className="team-name">{member.name}</h3>
                            <p className="team-role">{member.role}</p>
                        </div>
                        ))}
                    </div>
                </div>
            ))
        ) : (
            <p className="no-events">No team members found for {displayYear}.</p>
        )}
      </div>

      {/* Selector only if NOT preview */}
      {!isPreview && (
        <div className="past-years-section">
            <h3 className="past-years-title">Academic Years</h3>
            <div className="past-years-list">
                {allYears.map(year => (
                    <button 
                        key={year} 
                        className={`year-btn ${selectedYear === year ? 'active' : ''}`}
                        onClick={() => handleYearClick(year)}
                    >
                        {year}
                    </button>
                ))}
            </div>
        </div>
      )}
    </section>
  );
};

export default Team;
