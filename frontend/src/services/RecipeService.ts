// Axios is the library primarily used for React apps, versus Fetch for JavaScript
import axios from "axios";



// The model Recipe is used because this provides the JSON and structure for the API call
import { Drink, Root } from "../models/Recipe";

// Axios used with the HTTP verb 'get' and we expect a Recipe to be returned

// The API call to Search By Name uses the cocktail's name (strDrink)
export function getCocktailByName(strDrink: string): Promise<Root>{
    return axios
    .get<Root>(`https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=${strDrink}`, {
    })
    // .then is a callback to execute when the Promise is resolved
    .then((response) => response.data)
};


// The API call to Search By First Letter uses the letter provided
export function getCocktailByFirstLetter(letter: string): Promise<Root>{
    return axios
    .get<Root>(`https://www.thecocktaildb.com/api/json/v2/9973533/search.php?f=${letter}`, {
    })
    .then((response) => response.data)
};


// The API call to Search By Ingredient filters the strIngredients to find the value provided
export function getCocktailByIngredient(value: string): Promise<Root>{
    return axios
    .get<Root>(`https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=${value}`, {
    })
    .then((response) => response.data)
};


// The API call for a Random Cocktail uses no inputs and returns 10 cocktails (without selection only returns 1)
export function getRandomCocktail(): Promise<Root>{
    return axios
    .get<Root>('https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php', {
    })
    .then((response) => response.data)
};


// Allows use to search for Cocktail recipes using multiple ingredients
// Example - filter.php?i=Dry_Vermouth,Gin,Anis
export function getCocktailByMultipleIngredients(value: string): Promise<Root>{
    return axios
    .get<Root>(`https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=${value}`, {
    })
    .then((response) => response.data)
};


// Get the Lastest Cocktails added, with no input values required
export function getLatestCocktails(): Promise<Root>{
    return axios
    .get<Root>('https://www.thecocktaildb.com/api/json/v2/9973533/latest.php', {
    })
    .then((response) => response.data)
};


// Get recent Popular Cocktails, with no input values required
export function getPopularCocktails(): Promise<Root>{
    return axios
    .get<Root>('https://www.thecocktaildb.com/api/json/v2/9973533/popular.php', {
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

const baseUrl = "https://us-central1-shakeemup-c22e5.cloudfunctions.net/api"

export function fetchDrink():Promise<Drink[]> {
    return axios.get<Drink[]>(`${baseUrl}/newfavorite`)
    .then(res => res.data)
}

export function addDrink(userDrink: Drink):Promise<Drink> {
 
    return axios.post<Drink>(`${baseUrl}/favorites`, userDrink)
    .then(res => res.data);
  }
  
  export function fetchDrinkTo(user: string):Promise<Drink[]> {

    return axios.get<Drink[]>(`${baseUrl}/`, {
      params: { to: user }
    })
    .then(res => res.data)
  }

// Give the user the option to filter the results by Category (i.e. - only return cocktails, not shots)
// Would likely make the API call and return all results then use .filter if Category matches this value

// Filter by Category (Shot, Cocktail, Ordinary Drink) - first line is Category List
// www.thecocktaildb.com/api/json/v2/9973533/list.php?c=list
// www.thecocktaildb.com/api/json/v2/9973533/filter.php?c=Ordinary_Drink
// www.thecocktaildb.com/api/json/v2/9973533/filter.php?c=Cocktail
