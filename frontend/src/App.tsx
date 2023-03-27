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
import { RecipeList } from './components/RecipeList/RecipeList';
import CocktailContextProvider from './context/CocktailContextProvider';
import { AddNewRecipeForm } from './components/AddNewRecipeForm/AddNewRecipeForm';
import { ContactUs } from './components/ContactUs/ContactUs';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <CocktailContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<div><Hero /> <RecommendationsCarousel />  <SearchForm /> <AddNewRecipeForm /></div>} />
            <Route path="/details/:idDrink" element={<Details />} />
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
