import React from 'react';
import Hero from '../components/Hero';
import LatestCollection from '../components/LatestCollection';
import BestSeller from '../components/BestSeller';
import Story from '../components/Story';
import OurFeatures from '../components/OurFeatures';

const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <BestSeller/>
      <Story/>
      <OurFeatures/>
    </div>
  );
}

export default Home;
