import React from 'react';
import './App.css';
import { Hero } from './components/Hero/Hero';
import { AboutUs } from './components/AboutUs/AboutUs';
import { Footer } from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Hero />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
