import "./favorites.css";
import { useContext, useEffect, useState } from "react";
import CocktailContext from "../../context/CocktailContext";
import { useNavigate } from "react-router-dom";
import { Drink } from "../../models/Recipe";
import { getUserDrinks } from "../../services/RecipeService";

export function Favorites(){

    const [active, setActive] = useState<Boolean>(true)
    const [userDrinks, setUserDrinks] = useState<any>([])
    const {favorites, removeCocktail, sortFavoritesAZ, sortFavoritesZA, sortFavoritesRandom } = useContext(CocktailContext);

    const navigate = useNavigate();

    const sortAscending = [...favorites].sort((a, b) => a.strDrink > b.strDrink ? 1 : -1)

    // Holds the value of the 'spirit' selected with the radio buttons below; default is 'All'
    const [value, setValue] = useState<string>("All");

    // Array of spirit types, which are ultimately compared to an ingredient in the cocktail info pulled from the API
    const spirits = ["All", "Whiskey", "Gin", "Rum", "Vodka", "Tequila", "Bourbon", "Cognac", "Brandy"];
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    // Initial state of the Filter by Category option is blank
    const [category, setCategory] = useState<string>("")
    const categories = [{name: "All"},{name: "Cocktail"}, {name: "Shot"}, {name: "Ordinary Drink"}, {name: "Homemade Liqueur"}, {name: "Beer"}, {name: "Shake"}, {name: "Coffee / Tea"}, {name: "Punch / Party Drink"}, {name: "Cocoa"}, {name: "Soft Drink"}]
    const clear = (event:any) => {
        event.target.value = ""
    };
    
    // When a user selects a category from the dropdown list, then set that as the useState variable
    const onCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCategory(event.target.value);
    };


    useEffect(() => {
        getUserDrinks().then((data) =>{
            setUserDrinks(data);
            console.log(userDrinks)
        })
    },[])

    // Allows users to sort results A->Z or Z->A
    const [sortAlpha, setSortAlpha] = useState<boolean>(true)
    const changeSortAlpha = () => {
        setSortAlpha(!sortAlpha)
    }

    return (
        <div className="Favorites" id="favorites">
            <div className="Favorites_Header">
                <h2 className="Favorites_Header-Title">Your Favorite Cocktails</h2>
                <p className="Favorites_Header-Count">Total Recipes: {favorites.length}</p>
            </div>

            <section className="Favorites_Filter">

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

            <div className="Filter-Misc">

                <div className="Filter-SortAlpha" onClick={changeSortAlpha}>
                    <button className={sortAlpha? "SortAZ" : "SortZA"} onClick={sortAlpha? sortFavoritesAZ : sortFavoritesZA}>{sortAlpha? "Sort A-Z" : "Sort Z-A"}</button>
                </div>

                <div className="Filter-SortRandom">
                    <button className="SortRandom" onClick={sortFavoritesRandom}>Sort Random</button>
                </div>

            </div>

            </section>

            <div className="Favorites_Recipe-Container">
                {/* The cocktails saved to the Favorites array (found in context) are mapped into individual cocktails */}
                {favorites.map((cocktail) => 
                    // The className is determined by comparing the useState 'value' to the strIngredient1 of that RecipeItem, which then determines if it is hidden or not
                    // By using || (or) and && (and), if the value is 'All' or if the strIngredient matches, then change every other card to 'hidden'
                    // To make sure the case matches and it is comparing whole word to whole word, then .toLowerCase and .split was used with .includes
                    <div key={cocktail.idDrink} data-item={cocktail.strIngredient1}
                            className={
                                (value === "All" && category === "" || category === "All")
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
                                && (category===cocktail.strCategory)? "RecipeCard active" : "RecipeCard hidden"
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
                            <button className="Button-Details" onClick={() => navigate(`/details/${cocktail.idDrink}/0`)}>
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
                {userDrinks.map((cocktail:Drink) => 
                    <div className={active? "RecipeCard active" : "RecipeCard hidden"} key={cocktail._id} data-item={cocktail.strIngredient1}>
                        <div className="card">
                        <div className="RecipeCard-Image">
                            <img src={cocktail.strDrinkThumb} alt="user created drink" />
                        </div>
                        <div className="RecipeCard-Content">
                            <h2>{cocktail.strDrink}</h2>
                        </div>
                        <div className="RecipeCard-Buttons">
                            <button className="Button-Details" onClick={() => navigate(`/details/${cocktail._id}/1`)}>
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