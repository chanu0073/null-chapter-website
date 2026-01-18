import React, { useState, useEffect } from 'react';
import './Events.css';
import { eventsData, currentYear } from '../data/eventsData';

const Events = ({ isPreview = false }) => {
  const [selectedYear, setSelectedYear] = useState(currentYear);

  useEffect(() => {
    if (!isPreview) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedYear, isPreview]);
  
  const displayYear = isPreview ? currentYear : selectedYear;

  // Constants
  const isCurrentYearSelected = displayYear === currentYear;
  const today = new Date(); // Uses system time (Jan 2026 per metadata)

  // Get raw events for the year
  const yearData = eventsData.find(d => d.year === displayYear);
  const rawEvents = yearData ? yearData.events : [];

  // Filter Logic
  let upcomingEvents = [];
  let pastEvents = [];

  if (isCurrentYearSelected) {
    // Split into Upcoming and Past for current year
    rawEvents.forEach(event => {
      const eventDate = new Date(event.date);
      // Reset hours to compare dates only
      eventDate.setHours(0,0,0,0);
      const todayDate = new Date(today);
      todayDate.setHours(0,0,0,0);

      if (eventDate >= todayDate) {
        upcomingEvents.push(event);
      } else {
        pastEvents.push(event);
      }
    });

    // Sort upcoming: ASC (soonest first)
    upcomingEvents.sort((a,b) => new Date(a.date) - new Date(b.date));
    // Sort past: DESC (most recent first)
    pastEvents.sort((a,b) => new Date(b.date) - new Date(a.date));

  } else {
    // For past years, treat everything as one list (conceptually "past" but displayed as main list)
    // The requirement says "Show ALL events together under a single heading"
    // So we put them all in one bucket to render. Let's use `upcomingEvents` bucket for the main loop 
    // OR just handle it in the render.
    // Let's keep `rawEvents` for past years to avoid confusion.
  }

  // Preview Mode: Show limited UPCOMING events only
  if (isPreview) {
    upcomingEvents = upcomingEvents.slice(0, 3);
  }

  // Render Helpers
  const renderEventCard = (event) => (
    <div key={event.id} className="event-card">
      <div className="event-date">{event.date}</div>
      <h3 className="event-name">{event.name}</h3>
      <div className="event-type-badge">{event.type}</div>
      <p className="event-desc">{event.description}</p>
      <a href={event.link} className="event-btn">
          {displayYear === currentYear ? 'Register Now' : 'View Details'}
      </a>
    </div>
  );

  return (
    <section id="events" className="events-section">
      <div className="section-header">
         <h2 className="section-title">
            {isPreview ? (
                <>Upcoming <span className="highlight-text">Events</span></>
            ) : (
                <>{displayYear} <span className="highlight-text">Events</span></>
            )}
         </h2>
      </div>
      
      {/* 
        LOGIC:
        1. IF isPreview: Show `upcomingEvents` only.
        2. IF !isPreview AND isCurrentYearSelected:
           - Show "Upcoming Events" Header + List
           - Show "Past Events" Header + List
        3. IF !isPreview AND !isCurrentYearSelected (Past Year view):
           - Show `rawEvents` list (unified)
      */}

      {isPreview ? (
         <div className="events-container">
            {upcomingEvents.length > 0 ? (
                upcomingEvents.map(renderEventCard)
            ) : (
                <p className="no-events">No upcoming events currently.</p>
            )}
         </div>
      ) : isCurrentYearSelected ? (
          <div className="split-events-container">
              {/* Upcoming Section */}
              <h3 className="sub-section-title">Upcoming Events</h3>
              <div className="events-container">
                {upcomingEvents.length > 0 ? (
                    upcomingEvents.map(renderEventCard)
                ) : (
                    <p className="no-events">No upcoming events.</p>
                )}
              </div>

              {/* Past Section */}
              <h3 className="sub-section-title">Past Events</h3>
              <div className="events-container">
                {pastEvents.length > 0 ? (
                    pastEvents.map(renderEventCard)
                ) : (
                    <p className="no-events">No past events yet this year.</p>
                )}
              </div>
          </div>
      ) : (
          /* Past Academic Year View - Unified */
          <div className="events-container">
            {rawEvents.length > 0 ? (
                rawEvents.map(renderEventCard)
            ) : (
                <p className="no-events">No events found for {displayYear}.</p>
            )}
          </div>
      )}

      {/* Past Years Selector */}
      {!isPreview && (
        <div className="past-years-section">
            <h3 className="past-years-title">Academic Years</h3>
            <div className="past-years-list">
                {eventsData.map(d => d.year).map(year => (
                    <button 
                        key={year} 
                        className={`year-btn ${selectedYear === year ? 'active' : ''}`}
                        onClick={() => setSelectedYear(year)}
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

export default Events;
