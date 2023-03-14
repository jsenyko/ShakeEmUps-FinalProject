import "./recipeItem.css";
import * as React from 'react';
import { useContext } from "react";
import { Recipe } from "../../models/Recipe";
import { useNavigate } from 'react-router-dom';
import CocktailContext from "../../context/CocktailContext";

interface IRecipeItemProps {
    recipe: Recipe
};

export function RecipeItem(props: IRecipeItemProps){

    const recipe = props.recipe;
    const navigate = useNavigate()
    const [disable, setDisable] = React.useState(false);

    const { addCocktail } = useContext(CocktailContext);

    return (
        <div className="Recipe_Card">
            <div className="Card-Image"><img alt="" src={recipe.strDrinkThumb}/></div>
            <div className="Card-Body">
                <div className="Card-Title"><h5>{recipe.strDrink}</h5></div>
                <div className='Card-Buttons'>
                    <button className="btn-details" onClick={() => navigate(`/Details/${props.recipe.idDrink}`)}>
                        Details
                    </button>
                    <button  className="btn-favorites" disabled = {disable} onClick={() => {addCocktail(recipe); setDisable(true)} }>
                        Add to Favorites
                    </button>
                </div>
            </div>
        </div>
    );
};