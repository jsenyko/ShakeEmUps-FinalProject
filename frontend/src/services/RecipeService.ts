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
//
//
//the deployed URL
// const baseUrl = "https://us-central1-shakeemup-c22e5.cloudfunctions.net/api"
//
//
//local backend URL//
const baseUrl = "http://127.0.0.1:5001/shakeemup-c22e5/us-central1/api"


export function getUserDrinks():Promise<Drink[]> {
    return axios.get<Drink[]>(`${baseUrl}/userDrinks`)
    .then(res => res.data)
}

export function getCertainUserDrink(_id: string):Promise<Drink> {
    return axios.get<Drink>(`${baseUrl}/userDrinks/${_id}`)
    .then(res => res.data)
}

export function addDrink(userDrink: Drink):Promise<Drink[]> {
 
    return axios.post<Drink[]>(`${baseUrl}/userDrinks`, userDrink)
    .then(res => res.data);
  }
  
  export function fetchDrinkTo(user: string):Promise<Drink[]> {

    return axios.get<Drink[]>(`${baseUrl}/`, {
      params: { to: user }
    })
    .then(res => res.data)}