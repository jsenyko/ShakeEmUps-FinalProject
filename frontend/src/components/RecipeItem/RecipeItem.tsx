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

    const { addCocktail } = useContext(CocktailContext);


    const [favoriteButtonStyle, setfavoriteButtonStyle] = useState<string>("Button-Favorites active");

    const changeStyle = () => {
       return (favoriteButtonStyle === "Button-Favorites active") ? setfavoriteButtonStyle("Button-Favorites disabled") : setfavoriteButtonStyle("Button-Favorites active")
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
                <button className="Button-Details" onClick={() => navigate(`/Details/${cocktail.idDrink}`)}>
                    Details
                </button>
                <button  className={favoriteButtonStyle} disabled={disable} onClick={() => {addCocktail(cocktail); setDisable(true)} }>
                    <i className="fa-regular fa-heart"></i>
                </button>
            </div>
            </div>
        </div>
    );
};