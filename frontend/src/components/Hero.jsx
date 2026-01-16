import React, { useState, useEffect } from 'react';
import './Hero.css';
import bg1 from '../assets/hero-bg-1.jpg';
import bg2 from '../assets/hero-bg-2.jpg';
import bg3 from '../assets/hero-bg-3.jpg';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: bg1,
      heading: "NULL CHAPTER",
      subheading: "Think. Break. Secure."
    },
    {
      image: bg2,
      heading: "CYBER SECURITY",
      subheading: "Defending the Future."
    },
    {
      image: bg3,
      heading: "JOIN THE ELITE",
      subheading: "Knowledge is Power."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="hero-section">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1 className="glitch-text" data-text={slide.heading}>{slide.heading}</h1>
            <p className="hero-subheading">{slide.subheading}</p>
          </div>
        </div>
      ))}

      <button className="slider-arrow left" onClick={prevSlide}>&lt;</button>
      <button className="slider-arrow right" onClick={nextSlide}>&gt;</button>

      <div className="slider-dots">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
