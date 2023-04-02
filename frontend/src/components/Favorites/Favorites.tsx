import "./favorites.css";
import { useContext, useState } from "react";
import CocktailContext from "../../context/CocktailContext";
import { useNavigate } from "react-router-dom";

export function Favorites(){

    const [active, setActive] = useState<Boolean>(true)

    const { favorites, removeCocktail } = useContext(CocktailContext);
    const navigate = useNavigate();

    // Holds the value of the 'spirit' selected with the radio buttons below; default is 'All'
    const [value, setValue] = useState<string>("All");

    // Array of spirit types, which are ultimately compared to an ingredient in the cocktail info pulled from the API
    const spirits = ["All", "Whiskey", "Gin", "Rum", "Vodka", "Tequila", "Bourbon", "Cognac", "Brandy"];
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };


    return (
        <div className="Favorites" id="favorites">
            <div className="Favorites_Header">
                <h2 className="Favorites_Header-Title">Your Favorite Cocktails</h2>
                <p className="Favorites_Header-Count">Total Recipes: {favorites.length}</p>
            </div>

            <p className="SpiritTypes-Header">Filter by Base Spirit</p>
            <div className="SpiritTypes">
                {/* Takes the array of string above and maps them out to individual radio buttons */}
                {spirits.map((spirit) => {
                    return(
                    <div className="SpiritType">
                        {/* If the State value matches the spirit's value, then change the className, which impacts styling */}
                        <label className={value === spirit ? "radio active" : "radio"}>
                            <input
                                type="radio"
                                name="searchType"
                                id="input"
                                // The value is set to the individual spirit's string and if checked, then set the value equal to that
                                value={spirit}
                                checked={value === spirit}
                                // As the radio button is checked, then "setValue" is used to change the state of "value"
                                onChange={onChange}
                            />{spirit}
                        </label>
                    </div>
                )
                })}
            </div>

            <div className="Favorites_Recipe-Container">
                {/* The cocktails saved to the Favorites array (found in context) are mapped into individual cocktails */}
                {favorites.map((cocktail) => 
                    // The className is determined by comparing the useState 'value' to the strIngredient1 of that RecipeItem, which then determines if it is hidden or not
                    // By using || (or) and && (and), if the value is 'All' or if the strIngredient matches, then change every other card to 'hidden'
                    // To make sure the case matches and it is comparing whole word to whole word, then .toLowerCase and .split was used with .includes
                    <div key={cocktail.idDrink} data-item={cocktail.strIngredient1}
                            className={
                                (value === "All")
                                || ((cocktail.strIngredient1.toLowerCase().split(" ")).includes(value.toLowerCase()))? "RecipeCard active" : "RecipeCard hidden"
                                && ((cocktail.strIngredient2?.toLowerCase().split(" "))?.includes(value.toLowerCase()))? "RecipeCard active" : "RecipeCard hidden"
                                && ((cocktail.strIngredient3?.toLowerCase().split(" "))?.includes(value.toLowerCase()))? "RecipeCard active" : "RecipeCard hidden"
                                && ((cocktail.strIngredient4?.toLowerCase().split(" "))?.includes(value.toLowerCase()))? "RecipeCard active" : "RecipeCard hidden"
                                && ((cocktail.strIngredient5?.toLowerCase().split(" "))?.includes(value.toLowerCase()))? "RecipeCard active" : "RecipeCard hidden"
                                && ((cocktail.strIngredient6?.toLowerCase().split(" "))?.includes(value.toLowerCase()))? "RecipeCard active" : "RecipeCard hidden"
                                && ((cocktail.strIngredient7?.toLowerCase().split(" "))?.includes(value.toLowerCase()))? "RecipeCard active" : "RecipeCard hidden"
                                && ((cocktail.strIngredient8?.toLowerCase().split(" "))?.includes(value.toLowerCase()))? "RecipeCard active" : "RecipeCard hidden"
                                && ((cocktail.strIngredient9?.toLowerCase().split(" "))?.includes(value.toLowerCase()))? "RecipeCard active" : "RecipeCard hidden"
                                && ((cocktail.strIngredient10?.toLowerCase().split(" "))?.includes(value.toLowerCase()))? "RecipeCard active" : "RecipeCard hidden"
                                && ((cocktail.strIngredient11?.toLowerCase().split(" "))?.includes(value.toLowerCase()))? "RecipeCard active" : "RecipeCard hidden"
                                && ((cocktail.strIngredient12?.toLowerCase().split(" "))?.includes(value.toLowerCase()))? "RecipeCard active" : "RecipeCard hidden"
                                && ((cocktail.strIngredient13?.toLowerCase().split(" "))?.includes(value.toLowerCase()))? "RecipeCard active" : "RecipeCard hidden"
                                && ((cocktail.strIngredient14?.toLowerCase().split(" "))?.includes(value.toLowerCase()))? "RecipeCard active" : "RecipeCard hidden"
                                && ((cocktail.strIngredient15?.toLowerCase().split(" "))?.includes(value.toLowerCase()))? "RecipeCard active" : "RecipeCard hidden"
                            }
                    >
                        <div className="card">
                        <div className="RecipeCard-Image">
                            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
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
        </div>
    );
};