import "./recipeItem.css";
import * as React from 'react';
import { useContext, useState } from "react";
import { Drink } from "../../models/Recipe";
import { useNavigate } from 'react-router-dom';
import CocktailContext from "../../context/CocktailContext";

interface IRecipeItemProps {
    cocktail: Drink
};

export function RecipeItem(props: IRecipeItemProps){

    const cocktail = props.cocktail;
    const navigate = useNavigate()
    const [disable, setDisable] = React.useState(false);

    // Calls the 'addCocktail' function found in Context to add recipe to Favorites page
    const { addCocktail } = useContext(CocktailContext);

    // Changes the Button-Favorite styling when it is clicked
    const [favoriteButtonStyle, setfavoriteButtonStyle] = useState<string>("Button-Favorites unclicked");

    const changeStyle = () => {
       return (favoriteButtonStyle === "Button-Favorites unclicked") ? setfavoriteButtonStyle("Button-Favorites clicked") : setfavoriteButtonStyle("Button-Favorites unclicked")
    };

    return (
        <div className="RecipeCard">
            <div className="card">
            <div className="RecipeCard-Image">
                <img src={cocktail.strDrinkThumb} alt="" />
            </div>
            <div className="RecipeCard-Content">
                <h2>{cocktail.strDrink}</h2>
            </div>
            <div className="RecipeCard-Buttons">
                <button className="Button-Details" onClick={() => navigate(`/details/${cocktail.idDrink}`)}>
                    Details
                </button>
                <button  className={favoriteButtonStyle} disabled={disable} onClick={() => {addCocktail(cocktail); setDisable(true); changeStyle();} }>
                    <i className="fa-solid fa-heart"></i>
                </button>
            </div>
            </div>
        </div>
    );
};