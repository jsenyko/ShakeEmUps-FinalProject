import "./favorites.css";
import { useContext, useEffect, useState } from "react";
import CocktailContext from "../../context/CocktailContext";
import { useNavigate } from "react-router-dom";
import { Drink } from "../../models/Recipe";
import { getUserDrinks } from "../../services/RecipeService";

export function Favorites(){

    const [active, setActive] = useState<Boolean>(true)
    const [userDrinks, setUserDrinks] = useState<any>([])
    const {favorites, removeCocktail } = useContext(CocktailContext);
    const navigate = useNavigate();

    // Initial state of the search bar is blank
    const [value, setValue] = useState<string>("All");

    const spirits = ["all", "whiskey", "gin", "rum", "vodka", "tequila", "bourbon"];
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };


    useEffect(() => {
        getUserDrinks().then((data) =>{
            setUserDrinks(data);
            console.log(userDrinks)
        })
    },[])

    return (
        <div className="Favorites" id="favorites">
            <div className="Favorites_Header">
                <h2 className="Favorites_Header-Title">Your Favorite Cocktails</h2>
                <p className="Favorites_Header-Count">Total Recipes: {favorites.length}</p>
            </div>

            <div className="SpiritTypes">
            {spirits.map((spirit) => {
                return(
                <div className="SpiritType">
                    <label className={value === spirit ? "radio active" : "radio"}>
                        <input
                            type="radio"
                            name="searchType"
                            id="input"
                            value={spirit}
                            checked={value === spirit}
                            // This calls the function above to set the searchType state and reset the search bar text to a blank string (so you can see the placeholder text)
                            onChange={onChange}
                        />{spirit}
                    </label>
                </div>
                )
            })}
            </div>

            <div className="Favorites_Recipe-Container">
                {favorites.map((cocktail) => 
                    <div className={value === "All" || (cocktail.strIngredient1.toLowerCase()).includes(value.toLowerCase())? "RecipeCard active" : "RecipeCard hidden"} key={cocktail.idDrink} data-item={cocktail.strIngredient1}>
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
                            <button className="Button-Remove" onClick={() => {removeCocktail(cocktail.idDrink)}}>
                                Remove
                            </button>
                        </div>
                        </div>
                    </div>
                )}
            </div>


                {/* user submitted drinks from the form */}
            <div><h1>The Drinks You Created!</h1></div>

            <div className="Favorites_Recipe-Container">
                {userDrinks.map((cocktail:any) => 
                    <div className={active? "RecipeCard active" : "RecipeCard hidden"} key={cocktail._id} data-item={cocktail.strIngredient1}>
                        <div className="card">
                        <div className="RecipeCard-Image">
                            <img src={cocktail.strDrinkThumb} alt="user created drink" />
                        </div>
                        <div className="RecipeCard-Content">
                            <h2>{cocktail.strDrink}</h2>
                        </div>
                        <div className="RecipeCard-Buttons">
                            <button className="Button-Details" onClick={() => navigate(`/details/${cocktail._id}`)}>
                                Details
                            </button>
                            <button className="Button-Remove" onClick={() => {removeCocktail(cocktail._id)}}>
                                Remove
                            </button>
                        </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};