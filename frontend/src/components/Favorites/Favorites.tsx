import "./favorites.css";
import { useContext } from "react";
import CocktailContext from "../../context/CocktailContext";
import { useNavigate } from "react-router-dom";

export function Favorites(){

    const { favorites, removeCocktail } = useContext(CocktailContext);
    const navigate = useNavigate();

    return (
        <div className="Favorites" id="favorites">
            <div className="Favorites_Header">
                <h2 className="Favorites_Header-Title">Your Favorite Cocktails</h2>
                <p className="Favorites_Header-Count">Total Recipes: {favorites.length}</p>
            </div>

            <div className="Favorites_Recipe-Container">
                {favorites.map((cocktail) => 
                    <div className="RecipeCard">
                        <div className="card">
                        <div className="RecipeCard-Image">
                            <img src={cocktail.strDrinkThumb} alt="" />
                        </div>
                        <div className="RecipeCard-Content">
                            <h2>{cocktail.strDrink}</h2>
                        </div>
                        <div className="RecipeCard-Buttons">
                            <button className="Button-Details" onClick={() => navigate(`/Details/${cocktail.idDrink}`)}>
                                Details
                            </button>
                            <button className="Button-Remove" onClick={() => {removeCocktail(cocktail.idDrink)}}>
                                Remove from Favorites
                            </button>
                        </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};