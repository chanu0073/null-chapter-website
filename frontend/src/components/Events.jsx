import React from 'react';
import './Events.css';

const Events = () => {
  const eventsData = [
    {
      id: 1,
      name: "Cyber Warfare Workshop",
      date: "Oct 25, 2025",
      description: "Hands-on session on network penetration testing and defense strategies.",
      link: "#"
    },
    {
      id: 2,
      name: "NullCTF 2025",
      date: "Nov 10, 2025",
      description: "Our annual flagship Capture The Flag competition. Open to all students.",
      link: "#"
    },
    {
      id: 3,
      name: "Intro to Cryptography",
      date: "Nov 22, 2025",
      description: "Learn the basics of encryption, hashing, and digital signatures.",
      link: "#"
    }
  ];

  return (
    <section id="events" className="events-section">
      <h2 className="section-title">Upcoming <span className="highlight-text">Events</span></h2>
      
      <div className="events-container">
        {eventsData.length > 0 ? (
          eventsData.map(event => (
            <div key={event.id} className="event-card">
              <div className="event-date">{event.date}</div>
              <h3 className="event-name">{event.name}</h3>
              <p className="event-desc">{event.description}</p>
              <a href={event.link} className="event-btn">Register Now</a>
            </div>
          ))
        ) : (
          <p className="no-events">No upcoming events currently.</p>
        )}
      </div>
    </section>
  );
};

export default Events;
