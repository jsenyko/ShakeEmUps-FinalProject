import "./searchForm.css";
import React, { useContext, useState } from "react";
import { Root } from "../../models/Recipe";
import { getCocktailByFirstLetter, getCocktailByName, getRandomCocktail, getCocktailByMultipleIngredients, getLatestCocktails, getPopularCocktails } from "../../services/RecipeService";
import { RecipeList } from "../RecipeList/RecipeList";
import CocktailContext from "../../context/CocktailContext";


export function SearchForm(){

    // Uses context to determine if a cocktail in the search results already appears in the
    // user's Favorites array and updates the styling of the heart icon to reflect that
    const { favorites } = useContext(CocktailContext);

    // Initial state of cocktails returned is empty.  Root is an array of drinks, which contains type Drink, which is an object that contains the props.
    const [cocktails, setCocktails] = useState<Root>();


    // Initial state of the search bar is blank
    const [value, setValue] = useState<string>("");
  
    // When onChange is called, use the target's value as the value passed into useState
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };


    // Initial state of the Filter by Category option is blank
    const [category, setCategory] = useState<string>("")
    const categories = [{name: "All"}, {name: "Cocktail"}, {name: "Shot"}, {name: "Ordinary Drink"}, {name: "Homemade Liqueur"}, {name: "Beer"}, {name: "Shake"}, {name: "Coffee / Tea"}, {name: "Punch / Party Drink"}, {name: "Cocoa"}, {name: "Soft Drink"}]
    const clearCategory = (event:any) => {
        event.target.value = ""
    };

    // When a user selects a category from the dropdown list, then set that as the useState variable
    const onCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCategory(event.target.value);
    };


    // User has the option to select how many results they want displayed
    const [count, setCount] = useState<number>(10)
    const resultCount = [5, 10, 20, 30, 40, 50]
    const clearCount = (event:any) => {
        setCount(event.target.value = 0)
    };
      
    // When a user selects a category from the dropdown list, then set that as the useState variable
    // These come back as strings despite the type being number, so have to use Number to ensure it is a number when passed to .slice on RecipeList
    const onCountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCount(Number(event.target.value));
    };

    // Sets default value of radio button selection and
    // useState updates the value of that based on selection
    const [searchType, setSearchType] = useState<string>("");

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
    const handleRandomChange = () => {
        setSearchType("findByRandom");
        setValue("");
    };
    const handleMultiChange = () => {
        setSearchType("findByMulti");
        setValue("");
    };
    const handleLatestChange = () => {
        setSearchType("findByLatest");
        setValue("");
    };
    const handlePopularChange = () => {
        setSearchType("findByPopular");
        setValue("");
    };

    // Value of 'searchType' variable determines which API call to make
    const onSearchClick = () => {
        switch (searchType) {
            case "findByName":
                // If the search value is blank (""), then alert the user they need to enter something (repeated in other searchTypes below)
                if(value === ""){
                    alert("It looks like you forgot to enter a search term")
                } else {
                getCocktailByName(value).then((cocktails) => {
                    setCocktails(cocktails);
                })};
                break;

            case "findByFirstLetter":
                if(value === ""){
                    alert("It looks like you forgot to enter a search term")
                } else {
                getCocktailByFirstLetter(value).then((cocktails) => {
                    setCocktails(cocktails);
                })};
                break;

            case "findByRandom":
                    getRandomCocktail().then((cocktails) => { setCocktails(cocktails) });
                break;

            case "findByMulti":
                if(value === ""){
                    alert("It looks like you forgot to enter a search term")
                // The API call requires ingredients be entered without spaces, so .split was used first to remove the space after the comma, then replace any spaces with underscores
                } else if (getCocktailByMultipleIngredients(value.replaceAll(", ", ",").replaceAll(" ", "_")).then((cocktails) => {setCocktails(cocktails)}) === undefined){
                    alert("Sorry, no results found")
                    console.log(cocktails);
                } else {
                    getCocktailByMultipleIngredients(value.replaceAll(", ", ",").replaceAll(" ", "_")).then((cocktails) => { setCocktails(cocktails) })};
                break;

            case "findByLatest":
                    getLatestCocktails().then((cocktails) => { setCocktails(cocktails) });
                    console.log(cocktails);
                break;

            case "findByPopular":
                    getPopularCocktails().then((cocktails) => { setCocktails(cocktails) });
                break;

            case "":
                // Working on adding a modal to pop up if you don't select a search type
                if(value === ""){
                    alert("It looks like you forgot to select a search type")
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
                    // This calls the function above to set the searchType state and reset the search bar text to a blank string (so you can see the placeholder text)
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

            {/* This searchType (along with Popular and Latest) allow you to call the onSearchClick by double clicking the label */}
            <label className={searchType === "findByRandom" ? "radio active" : "radio"} onDoubleClickCapture={onSearchClick}>
                <input
                    type="radio"
                    name="searchType"
                    id="input"
                    value="findByRandom"
                    checked={searchType === "findByRandom"}
                    onChange={handleRandomChange}
                />I'm Feeling Lucky
                <span className="tooltiptext">Double Click to Search!</span>
            </label>

            <label className={searchType === "findByMulti" ? "radio active" : "radio"}>
                <input
                    type="radio"
                    name="searchType"
                    id="input"
                    value="findByMulti"
                    checked={searchType === "findByMulti"}
                    onChange={handleMultiChange}
                />Find by Ingredients (3)
            </label>

            <label className={searchType === "findByLatest" ? "radio active" : "radio"} onDoubleClickCapture={onSearchClick}>
                <input
                    type="radio"
                    name="searchType"
                    id="input"
                    value="findByLatest"
                    checked={searchType === "findByLatest"}
                    onChange={handleLatestChange}
                />Show Recently Added
                <span className="tooltiptext">Double Click to Search!</span>
            </label>

            <label className={searchType === "findByPopular" ? "radio active" : "radio"} onDoubleClickCapture={onSearchClick}>
                <input
                    type="radio"
                    name="searchType"
                    id="input"
                    value="findByPopular"
                    checked={searchType === "findByPopular"}
                    onChange={handlePopularChange}
                />Show Most Popular
                <span className="tooltiptext">Double Click to Search!</span>
            </label>
            </div>

            <div className="SearchBar">
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
            {searchType === "findByMulti" && (
                <input
                    className="bar"
                    type="search"
                    value={value}
                    onChange={onChange}
                    placeholder="What ingredients does it include (up to 3, separated by commas)"
                    onKeyDown={(e) => {
                        if(e.key === "Enter"){
                            onSearchClick()
                        }
                    }}
                />
            )}
            {searchType === "findByLatest" && (
                <input
                    className="bar"
                    type="search"
                    value={value}
                    onChange={onChange}
                    placeholder="Not sure what you want? Here are the newest cocktails added!"
                    onKeyDown={(e) => {
                        if(e.key === "Enter"){
                            onSearchClick()
                        }
                    }}
                />
            )}
            {searchType === "findByPopular" && (
                <input
                    className="bar"
                    type="search"
                    value={value}
                    onChange={onChange}
                    placeholder="Not sure what you want? Check out our most popular cocktails currently!"
                    onKeyDown={(e) => {
                        if(e.key === "Enter"){
                            onSearchClick()
                        }
                    }}
                />
            )}

                {/* When Search button is clicked it makes the appropriate API call based on current searchType */}
                <div className="Search-Button">
                    <button onClick={onSearchClick}>Search</button>
                </div>
            </div>    
                
            <div className="Search-Filter">

                <div className="Filter-Category">
                    <label>Category</label>
                    <input
                        type="select"
                        name="categories"
                        placeholder="Cocktail, Shot, etc.?"
                        list="categories"
                        value={category}
                        onChange={onCategoryChange}
                        onClick={clearCategory}
                    />
                    <datalist id="categories">
                        {categories.map((category) => <option value={category.name} key={category.name}/>)}
                    </datalist>
                </div>

                <div className="Filter-Count">
                    <label># Results</label>
                    <input
                        type="select"
                        name="count"
                        placeholder="10"
                        list="count"
                        value={count}
                        onChange={onCountChange}
                        onClick={clearCount}
                    />
                    <datalist id="count">
                        {resultCount.map((count) => <option value={count} key={count}/>)}
                    </datalist>
                </div>

            </div>

        {cocktails && <RecipeList cocktails={cocktails} favorites={favorites} category={category} count={count} />}

    </div>
    )
}