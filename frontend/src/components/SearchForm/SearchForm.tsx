import "./searchForm.css";
import { useEffect, useState } from "react";
import { Root, Drink } from "../../models/Recipe";
import { getCocktailByFirstLetter, getCocktailByIngredient, getCocktailByName, getRandomCocktail } from "../../services/RecipeService";
import { RecipeList } from "../RecipeList/RecipeList";

export function SearchForm(){

    const [value, setValue] = useState("");
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
      };

    const [cocktails, setCocktails] = useState<Root>();

    // Sets default value of radio button selection and
    // useState updates the value of that based on selection
    // Default value selected is 'findByName'
    const [searchType, setSearchType] = useState("findByName");

    // When user clicks a different option the searchType changes
    // and the text in the Search Bar resets to blank so you can see the placeholder
    const handleNameChange = () => {
        setSearchType("findByName");
        setValue("");
    };
    const handleFirstLetterChange = () => {
        setSearchType("findByFirstLetter");
        setValue("");
    };
    const handleIngredientChange = () => {
        setSearchType("findByIngredient");
        setValue("");
    };
    const handleRandomChange = () => {
        setSearchType("findByRandom");
        setValue("");
    };

    // Value of 'searchType' variable determines which API call to make
    const onSearchClick = () => {
        switch (searchType) {
            case "findByName":
                getCocktailByName(value).then((cocktails) => {
                    setCocktails(cocktails);
                });
                console.log(value)
                break;
            case "findByFirstLetter":
                getCocktailByFirstLetter(value).then((cocktails) => {
                    setCocktails(cocktails);
                });
                console.log(value)
                break;
            case "findByIngredient":
                getCocktailByIngredient(value).then((cocktails) => {
                    setCocktails(cocktails);
                });
                console.log(value)
                break;
            case "findByRandom":
                getRandomCocktail().then((cocktails) => {
                    setCocktails(cocktails);
                });
                console.log(value)
                break;
            default:
                break;
        };
    };


    return (
        <div className="SearchForm">
            <h1>Find something new today!</h1>
            <div className="SearchTypes">
            {/* Label's className changes dynamically based on which one is selected, which impacts styling */}
            <label className={searchType === "findByName" ? "radio active" : "radio"}>
                <input
                    type="radio"
                    name="searchType"
                    id="input"
                    value="findByName"
                    checked={searchType === "findByName"}
                    onChange={handleNameChange}
                />Find by Name
            </label>
            <label className={searchType === "findByFirstLetter" ? "radio active" : "radio"}>
                <input
                    type="radio"
                    name="searchType"
                    id="input"
                    value="findByFirstLetter"
                    checked={searchType === "findByFirstLetter"}
                    onChange={handleFirstLetterChange}
                />Find by First Letter
            </label>
            <label className={searchType === "findByIngredient" ? "radio active" : "radio"}>
                <input
                    type="radio"
                    name="searchType"
                    id="input"
                    value="findByIngredient"
                    checked={searchType === "findByIngredient"}
                    onChange={handleIngredientChange}
                />Find by Ingredient
            </label>
            <label className={searchType === "findByRandom" ? "radio active" : "radio"}>
                <input
                    type="radio"
                    name="searchType"
                    id="input"
                    value="findByRandom"
                    checked={searchType === "findByRandom"}
                    onChange={handleRandomChange}
                />Find by Random
            </label>
            </div>

            {/* Search Bar text changes based on searchType selected, which impacts API call made */}
            {searchType === "findByName" && (
                <input
                    className="bar"
                    type="text"
                    value={value}
                    onChange={onChange}
                    placeholder="What's it called?"
                />
            )}
            {searchType === "findByFirstLetter" && (
                <input
                    className="bar"
                    type="text"
                    value={value}
                    onChange={onChange}
                    placeholder="What does it start with?"
                />
            )}
            {searchType === "findByIngredient" && (
                <input
                    className="bar"
                    type="text"
                    value={value}
                    onChange={onChange}
                    placeholder="What's your spirit of choice?"
                />
            )}
            {searchType === "findByRandom" && (
                <input
                    className="bar"
                    type="text"
                    value={value}
                    onChange={onChange}
                    placeholder="Not sure what you want?"
                />
            )}

        {/* When Search button is clicked it makes the appropriate API call based on current searchType */}
        <button id="Button-Search" onClick={onSearchClick}>Search</button>

        {cocktails && <RecipeList cocktails={cocktails.drinks}/>}
    </div>
    )
}