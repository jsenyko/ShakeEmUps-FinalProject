import "./searchBar.css";
import { useState, useEffect } from "react";
import { Root, Drink } from "../../models/Recipe";
import { getRandomCocktail, getCocktailByName, getCocktailByFirstLetter, getCocktailByIngredient } from "../../services/RecipeService"
import { RecipeList } from "../RecipeList/RecipeList";


// Labels that appear in the Search Bar, which are passed to determine which API Call to make
const searchTypes = [
    {
        value: "findByName",
        label: "Find by Name",
    },
    {
        value: "findByFirstLetter",
        label: "Find By First Letter",
    },
    {
        value: "findByIngredient",
        label: "Find By Ingredient",
    },
    {
        value: "findByRandom",
        label: "Find Random Cocktail",
    },
];

export function SearchBar(){
    
    const [cocktails, setCocktails] = useState<Root>();

    useEffect(() => {
        getCocktailByFirstLetter("j").then(data => setCocktails(data))
    }, []);

    useEffect(() => {
        console.log(cocktails)
    }, [cocktails]);


    // Saves the value enter in the search bar, which is then passed to the API Call as a parameter
    const [value, setValue] = useState("");

    // The empty array created to hold the API Call results
    const [recipes, setRecipes] = useState<Root>();

    // Default search type entered, useState changes this based on radio button selected
    const [selectedSearchType, setSelectedSearchType] = useState("findByName");

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };


    // Radio button selection impacts useState for the selectedSearchType
    const onSearchClick = () => {
        switch (selectedSearchType){
            case "findByName":
                getCocktailByName(value).then((cocktails) => {
                    setRecipes(cocktails);
                });
                break;
            case "findByFirstLetter":
                getCocktailByFirstLetter(value).then((cocktails) => {
                    setRecipes(cocktails);
                });
                break;
            case "findByIngredient":
                getCocktailByIngredient(value).then((cocktails) => {
                    setRecipes(cocktails);
                });
                break;
            case "findByRandom":
                getRandomCocktail().then((cocktails) => {
                    setRecipes(cocktails);
                });
                break;
                default:
                break;
        };
    };

    return (
        <div className="SearchBar">
            <div className="SearchContainer">

                {/* Map out different search types into radio buttons */}
                <div>{searchTypes.map((searchType) => (
                    <label className="radio" key={searchType.value}>
                    <input
                        type="radio"
                        name="searchType"
                        id="input"
                        value={searchType.value}
                        checked={selectedSearchType === searchType.value}
                        onChange={(e) => setSelectedSearchType(e.target.value)}
                    />
                    {searchType.label}</label>
                ))}
                </div>
                
                {/* Search Types with search bar input
                when clicked, uses onChange above to update screen
                with value passed to the API Call as a parameter */}
                {selectedSearchType === "findByName" && (
                    <input
                        className="bar"
                        type="text"
                        value={value}
                        onChange={onChange}
                        placeholder="What sounds good?"
                    />
                )}
                {selectedSearchType === "findByFirstLetter" && (
                    <input
                        className="bar"
                        type="text"
                        value={value}
                        onChange={onChange}
                        placeholder="What does it start with?"
                    />
                )}
                {selectedSearchType === "findByIngredient" && (
                    <input
                        className="bar"
                        type="text"
                        value={value}
                        onChange={onChange}
                        placeholder="What's your spirit of choice?"
                    />
                )}
                {selectedSearchType === "findByRandom" && (
                    <input
                        className="bar"
                        type="text"
                        value={value}
                        onChange={onChange}
                        placeholder="Not sure what you want?"
                    />
                )}

                {/* Clicking submit button makes the appropriate API Call */}
                <button id="btn-search" onClick={onSearchClick}>Search</button>
            </div>
            
            {/* Generate the Recipe List, passing the recipes, which are then turned to cards */}
            { cocktails !==undefined && <RecipeList cocktails={cocktails.drinks} /> }
        </div>
    );
};