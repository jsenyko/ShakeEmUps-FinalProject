import "./searchForm.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useContext, useState } from "react";
import { Root } from "../../models/Recipe";
import { getCocktailByFirstLetter, getCocktailByIngredient, getCocktailByName, getRandomCocktail } from "../../services/RecipeService";
import { RecipeList } from "../RecipeList/RecipeList";
import CocktailContext from "../../context/CocktailContext";


export function SearchForm(){

    const { favorites } = useContext(CocktailContext);

    // Initial state of cocktails returned is empty
    const [cocktails, setCocktails] = useState<Root>();

    // Initial state of the search bar is blank
    const [value, setValue] = useState<string>("");
    
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    // Sets default value of radio button selection and
    // useState updates the value of that based on selection
    // Default value selected is 'findByName'
    const [searchType, setSearchType] = useState("");

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
                // Working on adding a modal to pop up if you don't enter a search term
                if(value === ""){
                    alert("It looks like you forgot to enter a search term / select a search type")
                } else {
                getCocktailByName(value).then((cocktails) => {
                    setCocktails(cocktails);
                })};
                break;
            case "findByFirstLetter":
                // Working on adding a modal to pop up if you don't enter a search term
                if(value === ""){
                    alert("It looks like you forgot to enter a search term / select a search type")
                } else {
                getCocktailByFirstLetter(value).then((cocktails) => {
                    setCocktails(cocktails);
                })};
                break;
            case "findByIngredient":
                // Working on adding a modal to pop up if you don't enter a search term
                if(value === ""){
                    alert("It looks like you forgot to enter a search term / select a search type")
                } else {
                getCocktailByIngredient(value).then((cocktails) => {
                    setCocktails(cocktails);
                })};
                break;
            case "findByRandom":
                getRandomCocktail().then((cocktails) => {
                    setCocktails(cocktails);
                });
                break;
            case "":
                // Working on adding a modal to pop up if you don't select a search type
                if(value === ""){
                    alert("It looks like you forgot to enter a search term / select a search type")
                }
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
            {searchType === "" && (
                <input
                    className="bar"
                    type="search"
                    value={value}
                    onChange={onChange}
                    placeholder="Let's get started!"
                    onKeyDown={(e) => {
                        if(e.key === "Enter"){
                            onSearchClick()
                        }
                    }}
                />
            )}
            {searchType === "findByName" && (
                <input
                    className="bar"
                    type="search"
                    value={value}
                    onChange={onChange}
                    placeholder="What's it called?"
                    onKeyDown={(e) => {
                        if(e.key === "Enter"){
                            onSearchClick()
                        }
                    }}
                />
            )}
            {searchType === "findByFirstLetter" && (
                <input
                    className="bar"
                    type="search"
                    value={value}
                    onChange={onChange}
                    placeholder="What does it start with?"
                    onKeyDown={(e) => {
                        if(e.key === "Enter"){
                            onSearchClick()
                        }
                    }}
                />
            )}
            {searchType === "findByIngredient" && (
                <input
                    className="bar"
                    type="search"
                    value={value}
                    onChange={onChange}
                    placeholder="What's your spirit of choice?"
                    onKeyDown={(e) => {
                        if(e.key === "Enter"){
                            onSearchClick()
                        }
                    }}
                />
            )}
            {searchType === "findByRandom" && (
                <input
                    className="bar"
                    type="search"
                    value={value}
                    onChange={onChange}
                    placeholder="Not sure what you want?"
                    onKeyDown={(e) => {
                        if(e.key === "Enter"){
                            onSearchClick()
                        }
                    }}
                />
            )}

        {/* When Search button is clicked it makes the appropriate API call based on current searchType */}
        <button id="Button-Search" onClick={onSearchClick}>Search</button>

        {cocktails && <RecipeList cocktails={cocktails} favorites={favorites}/>}
    </div>
    )
}