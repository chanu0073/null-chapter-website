import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Events from '../components/Events';
import News from '../components/News';
import Team from '../components/Team';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <main>
      <Hero />
      <Stats />
      <Events isPreview={true} />
      <News />
      <Team isPreview={true} />
    </main>
  );
};

export default Home;
