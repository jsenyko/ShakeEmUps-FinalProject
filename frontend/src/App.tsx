import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { FavoritesCarousel } from './components/FavoritesCarousel/FavoritesCarousel';
import { SearchBar } from './components/SearchBar/SearchBar';
import { AboutUs } from './components/AboutUs/AboutUs';
import { Footer } from './components/Footer/Footer';
import { Details } from "./components/Details/Details";
import CocktailContextProvider from './context/CocktailContextProvider';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <CocktailContextProvider>
          <Header />
          <Hero />
          <FavoritesCarousel />
          {/* <Routes> */}
            <SearchBar />
            <Details />
            <AboutUs />
          {/* </Routes> */}
          <Footer />
        </CocktailContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
