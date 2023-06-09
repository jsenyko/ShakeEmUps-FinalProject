import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { RecommendationsCarousel } from "./components/RecommendationsCarousel/RecommendationsCarousel";
import { AboutUs } from './components/AboutUs/AboutUs';
import { Footer } from './components/Footer/Footer';
import { Favorites } from './components/Favorites/Favorites';
import { Details } from "./components/Details/Details";
import { SearchForm } from './components/SearchForm/SearchForm';
import CocktailContextProvider from './context/CocktailContextProvider';
import { AddNewRecipeForm } from './components/AddNewRecipeForm/AddNewRecipeForm';
import { ContactUs } from './components/ContactUs/ContactUs';
import ScrollToTop  from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ScrollToTop />
        <CocktailContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<div className="HomePage"><Hero /> <RecommendationsCarousel /> <SearchForm /> <AddNewRecipeForm /></div>} />
            <Route path="/details/:idDrink/:isUserGen" element={<Details />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contactus" element={<ContactUs />} />
          </Routes>
          <Footer />
        </CocktailContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
