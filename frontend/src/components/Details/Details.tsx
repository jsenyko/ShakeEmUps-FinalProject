import "./details.css";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getCocktailDetails } from "../../services/RecipeService";
import CocktailContext from "../../context/CocktailContext";
import { Root, Drink } from "../../models/Recipe";
import React from "react";

export function Details(){

    const [details, setDetails] = useState<Root>();
    const [disable, setDisable] = React.useState(false);
    const idDrink = useParams().idDrink;

    useEffect(() => {
        let recipeResult = getCocktailDetails(String(idDrink));

        recipeResult.then((x) => setDetails(x))
    }, [])

    const { addCocktail } = useContext(CocktailContext);

    return (
        <div className="Details" id="details">
            {details !==undefined && 
            <div>
                <div className="Details_Header">
                    <h2>Let's get Shakin'!</h2>
                </div>
                <div key={details?.drinks[0].idDrink} className="Details_Card">
                        <div className="Card-Image">
                            <img src={details?.drinks[0].strDrinkThumb} alt="" />
                        </div>
                        <div className="Card-Body">
                            <div className="Card-Title">{details?.drinks[0].strDrink}</div>
                            <button className="AddToFavorites" disabled = {disable} onClick={() => {setDisable(true)}}></button>

                            <ul className="Card-Glass">
                                <li className="GlassType-Text">Glass Type:</li>
                                <li className="GlassType-Result">{details?.drinks[0].strGlass}</li>
                            </ul>

                            {/* This will require a loop to determine how many ingredients + measurements there are in the recipe */}
                            <div className="Card-Ingredients">
                                <ul className="Ingredients">
                                    <li>{details?.drinks[0].strIngredient1}</li>
                                    <li>{details?.drinks[0].strIngredient2}</li>
                                    <li>{details?.drinks[0].strIngredient3}</li>
                                    <li>{details?.drinks[0].strIngredient4}</li>
                                    <li>{details?.drinks[0].strIngredient5}</li>
                                    <li>{details?.drinks[0].strIngredient6}</li>
                                    <li>{details?.drinks[0].strIngredient7}</li>
                                    <li>{details?.drinks[0].strIngredient8}</li>
                                    <li>{details?.drinks[0].strIngredient9}</li>
                                    <li>{details?.drinks[0].strIngredient10}</li>
                                    <li>{details?.drinks[0].strIngredient11}</li>
                                    <li>{details?.drinks[0].strIngredient12}</li>
                                    <li>{details?.drinks[0].strIngredient13}</li>
                                    <li>{details?.drinks[0].strIngredient14}</li>
                                    <li>{details?.drinks[0].strIngredient15}</li>
                                </ul>
                                <ul className="Measurements">
                                    <li>{details?.drinks[0].strMeasure1}</li>
                                    <li>{details?.drinks[0].strMeasure2}</li>
                                    <li>{details?.drinks[0].strMeasure3}</li>
                                    <li>{details?.drinks[0].strMeasure4}</li>
                                    <li>{details?.drinks[0].strMeasure5}</li>
                                    <li>{details?.drinks[0].strMeasure6}</li>
                                    <li>{details?.drinks[0].strMeasure7}</li>
                                    <li>{details?.drinks[0].strMeasure8}</li>
                                    <li>{details?.drinks[0].strMeasure9}</li>
                                    <li>{details?.drinks[0].strMeasure10}</li>
                                    <li>{details?.drinks[0].strMeasure11}</li>
                                    <li>{details?.drinks[0].strMeasure12}</li>
                                    <li>{details?.drinks[0].strMeasure13}</li>
                                    <li>{details?.drinks[0].strMeasure14}</li>
                                    <li>{details?.drinks[0].strMeasure15}</li>
                                </ul>

                            </div>

                            <div className="Card-Instructions">{details?.drinks[0].strInstructions}</div>
                        </div>
                </div>
            </div>
            }
        </div>
    )
};