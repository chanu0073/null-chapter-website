import React, { useState, useEffect } from 'react';
import './News.css';

const News = () => {
  const newsData = [
    {
      id: 1,
      category: "Announcement",
      title: "Recruitment Drive 2025 Started",
      date: "Sep 15, 2025",
      description: "We are looking for passionate individuals to join our core team. Apply now!"
    },
    {
      id: 2,
      category: "Event",
      title: "HackTheBox Meetup Success",
      date: "Aug 20, 2025",
      description: "Over 100 participants joined us for the local HTB meetup locally."
    },
    {
      id: 3,
      category: "Notice",
      title: "Server Maintenance Scheduled",
      date: "Oct 01, 2025",
      description: "Our main CTF platform will be down for upgrades this weekend."
    },
    {
      id: 4,
      category: "Achievement",
      title: "Null Chapter Wins Inter-College CTF",
      date: "Jul 10, 2025",
      description: "Our team secured 1st place in the regional cyber security challenge."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % newsData.length);
      }, 3500);
      return () => clearInterval(interval);
    }
  }, [isPaused, newsData.length]);

  const getVisibleItems = () => {
    // Logic to show 3 items in a loop
    const items = [];
    for (let i = 0; i < 3; i++) {
        items.push(newsData[(currentIndex + i) % newsData.length]);
    }
    return items;
  };

  const visibleNews = getVisibleItems();

  return (
    <section id="news" className="news-section">
      <h2 className="section-title">Latest <span className="highlight-text-purple">News</span></h2>
      
      <div 
        className="news-carousel-container"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <button 
          className="carousel-btn prev"
          onClick={() => setCurrentIndex((prev) => (prev - 1 + newsData.length) % newsData.length)}
        >
          &lt;
        </button>

        <div className="news-track">
           {visibleNews.map((news, index) => (
             <div key={`${news.id}-${index}`} className="news-card">
               <span className={`news-badge ${news.category.toLowerCase()}`}>{news.category}</span>
               <div className="news-date">{news.date}</div>
               <h3 className="news-title">{news.title}</h3>
               <p className="news-desc">{news.description}</p>
             </div>
           ))}
        </div>

        <button 
          className="carousel-btn next"
          onClick={() => setCurrentIndex((prev) => (prev + 1) % newsData.length)}
        >
          &gt;
        </button>
      </div>

      <div className="carousel-indicators">
        {newsData.map((_, idx) => (
            <span 
                key={idx} 
                className={`indicator ${idx === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(idx)}
            ></span>
        ))}
      </div>
    </section>
  );
};

export default News;
