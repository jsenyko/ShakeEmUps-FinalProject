// Axios is the library primarily used for React apps, versus Fetch for JavaScript
import axios from "axios";


// The model Recipe is used because this provides the JSON and structure for the API call
import { Root } from "../models/Recipe";



// Axios used with the HTTP verb 'get' and we expect a Recipe to be returned
export function getRandomCocktail(): Promise<Root>{
    return axios
    // The API call for a Random Cocktail uses this URL with no inputs
    // To return multiple random cocktails, we would need to call this multiple times
    .get<Root>('https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php', {
    })
    .then((response) => response.data)
};


export function getCocktailByName(strDrink: string): Promise<Root>{
    return axios
    // The API call to Search By Name requires the name (strDrink) in the URL
    .get<Root>(`https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=${strDrink}`, {
    })
    // .then is a callback to execute when the Promise is resolved
    .then((response) => response.data)
};


export function getCocktailByFirstLetter(letter: string): Promise<Root>{
    return axios
    // The API call to Search By First Letter requires a letter in the URL
    .get<Root>(`https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=${letter}`, {
    })
    .then((response) => response.data)
};


export function getCocktailByIngredient(value: string): Promise<Root>{
    return axios
    // The API call to Search By Ingredient requires an Ingredient Name be provided in the URL
    // The base spirit appears to always come first in the recipe so that is what was used
    .get<Root>(`https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=${value}`, {
    })
    .then((response) => response.data)
};


export function getCocktailDetails(idDrink: string): Promise<Root>{
    return axios
    // The API call to Search By ID Letter requires the drink's ID (idDrink) in the URL
    .get<Root>(`https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=${idDrink}`, {
    })
    .then((response) => response.data)
};


// Filter by Category (Shot, Cocktail, Ordinary Drink) - first line is Category List
// www.thecocktaildb.com/api/json/v2/9973533/list.php?c=list
// www.thecocktaildb.com/api/json/v2/9973533/filter.php?c=Ordinary_Drink
// www.thecocktaildb.com/api/json/v2/9973533/filter.php?c=Cocktail

// Filter by multi-ingredient (only available to $2+ Patreon supporters)
// www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Dry_Vermouth,Gin,Anis

// List Popular cocktails
// www.thecocktaildb.com/api/json/v2/9973533/popular.php **

// List most latest cocktails
// www.thecocktaildb.com/api/json/v2/9973533/latest.php