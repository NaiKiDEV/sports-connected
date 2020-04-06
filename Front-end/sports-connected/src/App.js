import React from 'react';
import NavBar from './components/navbar';
import Carousel from './components/carousel';
import Category from './components/category';
import Features from './components/features';
import CallToAction from './components/callToAction';

function App() {
  return (
    <div>
      <NavBar />
      <Carousel />
      <Category />
      <Features />
      {/* <CallToAction /> */}
    </div>
  );
}

export default App;
