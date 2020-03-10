import React from 'react';
import NavBar from './components/navbar';
import Carousel from './components/carousel';
import Category from './components/category';

function App() {
  return (
    <div>
      <NavBar />
      <Carousel />
      <Category title="Sporto Salės" />
    </div>
  );
}

export default App;
