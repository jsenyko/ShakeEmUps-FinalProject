import "./details.css";
import { useContext, useState, useEffect } from "react";
import CocktailContext from "../../context/CocktailContext";
import { useParams } from "react-router-dom";
import { getCocktailDetails } from "../../services/RecipeService";
import { Root, Drink } from "../../models/Recipe";
import React from "react";

export function Details(){

    const [details, setDetails] = useState<Root>();
    const [disable, setDisable] = React.useState(false);

    const idDrink = useParams().idDrink;

    const { addCocktail } = useContext(CocktailContext);

    useEffect(() => {
        let recipeResult = getCocktailDetails(String(idDrink));

        recipeResult.then((x) => setDetails(x))
    }, [])

    return (
        <div className="Details" id="details">
            {details !==undefined && 
            <div>
                <div className="Details_Header">
                    <h2>Let's get Shakin'!</h2>
                </div>
                <div key={details?.drinks[0].idDrink} className="Details_Card">
                    <div className="Details_Card-Head">
                        <div className="Card-Image">
                            <img src={details?.drinks[0].strDrinkThumb} alt="" />
                        </div>
                        <div className="Details_Card-Body">
                            <div className="Card-Title">{details?.drinks[0].strDrink}</div>
                            <button className="AddToFavorites" disabled = {disable} onClick={() => {setDisable(true)}}></button>

                            <div className="Card-Glass">{details?.drinks[0].strGlass}</div>
                            
                            {/* This will require a loop to determine how many ingredients + measurements there are in the recipe */}
                            <div className="Card-Ingredient">{details?.drinks[0].strIngredient1} {details?.drinks[0].strMeasure1}</div>
                            <div className="Card-Ingredient">{details?.drinks[0].strIngredient2} {details?.drinks[0].strMeasure2}</div>
                            <div className="Card-Ingredient">{details?.drinks[0].strIngredient3} {details?.drinks[0].strMeasure3}</div>
                            <div className="Card-Ingredient">{details?.drinks[0].strIngredient4} {details?.drinks[0].strMeasure4}</div>
                            <div className="Card-Ingredient">{details?.drinks[0].strIngredient5} {details?.drinks[0].strMeasure5}</div>
                            <div className="Card-Ingredient">{details?.drinks[0].strIngredient6} {details?.drinks[0].strMeasure6}</div>
                            <div className="Card-Ingredient">{details?.drinks[0].strIngredient7} {details?.drinks[0].strMeasure7}</div>
                            <div className="Card-Ingredient">{details?.drinks[0].strIngredient8} {details?.drinks[0].strMeasure8}</div>

                            <div className="Card-Instructions">{details?.drinks[0].strInstructions}</div>
                        </div>
                    </div>
                </div>
            </div>
            }
        </div>
    )
};