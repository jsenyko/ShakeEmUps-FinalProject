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
                {favorites.map((recipe) =>
                <div key={recipe.idDrink} className="Recipe_Card">
                    <div className="Recipe_Card-Image">
                        <img src={recipe.strDrinkThumb} alt="" />
                    </div>
                    <div className="Recipe_Card-Body">
                        <div className="Recipe_Card-Title">{recipe.strDrink}</div>
                        <div className="Recipe_Card-Buttons">
                            <button className="Button-Details" onClick={() => navigate(`/Details/${recipe.idDrink}`)} />
                            <button className="Button-Favorites" onClick={() => removeCocktail(recipe.idDrink)} />
                        </div>
                    </div>
                </div>
                )}
            </div>
        </div>
    );
};