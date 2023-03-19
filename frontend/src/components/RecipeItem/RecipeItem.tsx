import "./recipeItem.css";
import * as React from 'react';
import { useContext, useState } from "react";
import CocktailContext from "../../context/CocktailContext";
import { Drink } from "../../models/Recipe";
import { useNavigate } from 'react-router-dom';

interface IRecipeItemProps {
    cocktail: Drink
};

export function RecipeItem(props:IRecipeItemProps){

    const cocktail = props.cocktail;
    const navigate = useNavigate()

<<<<<<< HEAD
    // Context used so you can call the function addCocktail that adds
    // the cocktail selected to the Favorites array / page
    const { addCocktail, removeCocktail } = useContext(CocktailContext);
=======
    // Calls the 'addCocktail' function found in Context to add recipe to Favorites page
    const { addCocktail } = useContext(CocktailContext);
>>>>>>> 9403dd9880d4d02c4385df0a078177bbce31aa04

    // Toggles the Button-Favorite styling when it is clicked
    const [favoriteButtonClicked, setFavoriteButtonClicked] = useState<Boolean>(false)
    const ToggleFavoriteButtonClass = () => {
        setFavoriteButtonClicked(!favoriteButtonClicked);
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
                <button
                    className={favoriteButtonClicked ? "Button-Favorites clicked" : "Button-Favorites unclicked"}
                    onClick={() => {favoriteButtonClicked ? addCocktail(cocktail) : removeCocktail(cocktail.idDrink); ToggleFavoriteButtonClass();} }>
                    <i className="fa-solid fa-heart"></i>
                </button>
            </div>
            </div>
        </div>
    );
};