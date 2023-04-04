import "./details.css";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getCertainUserDrink, getCocktailDetails } from "../../services/RecipeService";
import CocktailContext from "../../context/CocktailContext";
import { Drink, Root } from "../../models/Recipe";
import React from "react";
import { FaStar } from "react-icons/fa";

export function Details(){

    // useState that brings in cocktails details from API Call return
    const [details, setDetails] = useState<Root>();
    const [userDetails, setUserDetails] = useState<Drink[]>();

    // useState related to Cocktail Rating element
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    // Gets the idDrink from the URL provided when you route here

    const idDrink = useParams().idDrink;
    const _id = useParams()._id;
    console.log(_id);

    // Makes the API Call using the idDrink param and returns a result
    useEffect(() => {
        let recipeResult = getCocktailDetails(String(idDrink));

        recipeResult.then((x) => setDetails(x))
    }, [])
    ///
    useEffect(() => {
        let recipeResult = getCertainUserDrink(String(_id));

        recipeResult.then((x) => setUserDetails(x))
    }, [])

    // Context used so you can call the function addCocktail that adds
    // the cocktail selected to the Favorites array / page
    const { addCocktail, removeCocktail } = useContext(CocktailContext);

    // Toggles the Button-Favorite styling when it is clicked
    const [favoriteButtonClicked, setFavoriteButtonClicked] = useState<Boolean>(false)
    const ToggleFavoriteButtonClass = () => {
        setFavoriteButtonClicked(!favoriteButtonClicked);
    };


    return (
        <div className="Details" id="details">
            {details !==undefined && 
            <div>
                <div className="Details_Header">
                    <h2>Let's get Shakin'!</h2>
                </div>

                {/* Prop drilling required based on how the API result is structured */}
                <div key={details?.drinks[0].idDrink} className="Details_Card">
                        
                        <div className="Card-Image">
                            <img src={details?.drinks[0].strDrinkThumb} alt="" />
                        </div>

                        <div className="Card-Body">
                            <div className="Card-Title">{details?.drinks[0].strDrink}</div>

                            {/* Button that when clicked uses context to add this cocktail to Favorites array */}
                            <div className="Card-Favorites">
                                <p>Add to Favorites</p>
                                {/* Button's current className determines whether to addCocktail or removeCocktail via Context */}
                                <button
                                    className={favoriteButtonClicked ? "Button-Favorites clicked" : "Button-Favorites unclicked"}
                                    onClick={() => {favoriteButtonClicked ? removeCocktail(details?.drinks[0].idDrink) : addCocktail(details?.drinks[0]); ToggleFavoriteButtonClass();} }>
                                    <i className="fa-solid fa-heart"></i>
                                </button>
                            </div>

                            <div className="Card-Rating">
                                <p>Rate this Cocktail</p>
                                <div className="Rating-Container">
                                    <div className="Rating">
                                        {/* Import the FaStar icon and map it into an empty array
                                        Using "i" gives each star a number when iterating with .map
                                        Note it is zero indexed */}
                                        {[...Array(5)].map((star, i) => {
                                            const ratingValue = i + 1

                                            return <label>
                                                    {/* The star clicked changes the rate and sets it to that star's ratingValue (i+1) */}
                                                    <input
                                                        type="radio"
                                                        name="rating"
                                                        value={ratingValue}
                                                        onClick={() => setRating(ratingValue)}
                                                    />
                                                        {/* Star's color is based on the current ratingValue and rating, red or gray,
                                                        but the hover state overrides this */}
                                                        <FaStar
                                                            className="star"
                                                            size={25}
                                                            color={ratingValue <= (hover || rating) ? "#d83133" : "#e4e5e9"} 
                                                            onMouseEnter={() => setHover(ratingValue)}
                                                            onMouseLeave={() => setHover(0)}
                                                        />
                                                    </label>
                                        })}
                                    </div>
                                </div>
                            </div>

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

            <div className="User-Drink-Details">
                {/* <p>{userDetails?.idDrink}</p> */}
            </div>

        </div>
        
    )
};