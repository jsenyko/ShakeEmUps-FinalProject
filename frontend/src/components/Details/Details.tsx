import "./details.css";
import { useContext, useState, useEffect } from "react";
import CocktailContext from "../../context/CocktailContext";
import { useParams } from "react-router-dom";
import { getCocktailDetails } from "../../services/RecipeService";
import { Recipe } from "../../models/Recipe";
import React from "react";

export function Details(){

    const [details, setDetails] = useState<Recipe>();
    const [disable, setDisable] = React.useState(false);

    const drinkId = useParams().idDrink;

    const { addCocktail } = useContext(CocktailContext);

    useEffect(() => {
        let recipeResult = getCocktailDetails(Number(drinkId));

        recipeResult.then((x) => setDetails(x))
    }, [])

    return (
        <div className="Details" id="details">
            {details !== undefined && 
            <div>
                <div className="Details_Header">
                    <h2>Your Detailed Cocktail</h2>
                </div>
                <div key={details.idDrink} className="Details_Card">
                    <div className="Details_Card-Head">
                        <div className="Card-Image">
                            <img src={details.strDrinkThumb} alt="" />
                        </div>
                        <div className="Details_Card-Body">
                            <div className="Card-Title">{details.strDrink}</div>
                            <button className="AddToFavorites" disabled = {disable} onClick={() => {addCocktail(details); setDisable(true)}}></button>

                            <div className="Card-Glass">{details.strGlass}</div>
                            
                            {/* This will require a loop to determine how many ingredients + measurements there are in the recipe */}
                            <div className="Card-Ingredient">{details.strIngredient1} {details.strMeasure1}</div>
                            <div className="Card-Ingredient">{details.strIngredient2} {details.strMeasure2}</div>
                            <div className="Card-Ingredient">{details.strIngredient3} {details.strMeasure3}</div>
                            <div className="Card-Ingredient">{details.strIngredient4} {details.strMeasure4}</div>
                            <div className="Card-Ingredient">{details.strIngredient5} {details.strMeasure5}</div>
                            <div className="Card-Ingredient">{details.strIngredient6} {details.strMeasure6}</div>
                            <div className="Card-Ingredient">{details.strIngredient7} {details.strMeasure7}</div>
                            <div className="Card-Ingredient">{details.strIngredient8} {details.strMeasure8}</div>

                            <div className="Card-Instructions">{details.strInstructions}</div>
                        </div>
                    </div>
                </div>
            </div>
            }
        </div>
    )
};