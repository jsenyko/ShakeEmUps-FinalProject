import "./recipeItem.css";
import { useContext, useState } from "react";
import CocktailContext from "../../context/CocktailContext";
import { Drink } from "../../models/Recipe";
import { useNavigate } from 'react-router-dom';

interface IRecipeItemProps {
    cocktail: Drink
    isFavorite: boolean;
};

export function RecipeItem(props:IRecipeItemProps){

    const {cocktail} = props;
    const navigate = useNavigate()

    // Context used so you can call the function addCocktail that adds
    // the cocktail selected to the Favorites array / page
    const { addCocktail, removeCocktail } = useContext(CocktailContext);

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
                    className={props.isFavorite ? "Button-Favorites clicked" : "Button-Favorites unclicked"}
                    onClick={() => {props.isFavorite ? removeCocktail(cocktail.idDrink) : addCocktail(cocktail)} }>
                    <i className="fa-solid fa-heart"></i>
                </button>
            </div>
            </div>
        </div>
    );
};
