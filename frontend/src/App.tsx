import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { FavoritesCarousel } from './components/FavoritesCarousel/FavoritesCarousel';
import { SearchBar } from './components/SearchBar/SearchBar';
import { AboutUs } from './components/AboutUs/AboutUs';
import { Footer } from './components/Footer/Footer';
import { Favorites } from './components/Favorites/Favorites';
import { Details } from "./components/Details/Details";
import CocktailContextProvider from './context/CocktailContextProvider';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <CocktailContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<div><Hero /> <FavoritesCarousel /> <SearchBar /></div>} />
            <Route path="/Details/:id" element={<Details />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/aboutus" element={<AboutUs />} />
          </Routes>
          <Footer />
        </CocktailContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
