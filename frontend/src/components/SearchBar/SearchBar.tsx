import "./searchBar.css";
import { useState, useEffect } from "react";
import { Recipe } from "../../models/Recipe";
import { getRandomCocktail, getCocktailByName, getCocktailByFirstLetter, getCocktailByIngredient, getCocktailDetails } from "../../services/RecipeService"
import { DefaultSerializer } from "v8";
import { RecipeList } from "../RecipeList/RecipeList";

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
    const [value, setValue] = useState("");
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [selectedSearchType, setSelectedSearchType] = useState("random");

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const onSearchClick = () => {
        switch (selectedSearchType){
            case "findByName":
                getCocktailByName(value).then((recipes) => {
                    setRecipes(recipes);
                });
                break;
            case "findByFirstLetter":
                getCocktailByFirstLetter(value).then((recipes) => {
                    setRecipes(recipes);
                });
                break;
            case "findByIngredient":
                getCocktailByIngredient(value).then((recipes) => {
                    setRecipes(recipes);
                });
                break;
            case "findByRandom":
                getRandomCocktail().then((recipes) => {
                    setRecipes(recipes);
                });
                break;
                default:
                break;
        }
    };

    return (
        <div className="SearchBar">
            <div className="SearchContainer">
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

                <button id="btn-search" onClick={onSearchClick}>Search</button>
            </div>
            
            {recipes &&<RecipeList recipes={recipes}/>}
            
        </div>
    )
}