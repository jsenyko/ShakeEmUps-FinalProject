import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Favorites } from './components/Favorites/Favorites';
import { AboutUs } from './components/AboutUs/AboutUs';
import { Footer } from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Favorites />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
