import axios from "axios";
import { Recipe } from "../models/Recipe";

export function getRandomCocktail(): Promise<Recipe[]>{
    return axios
    .get<Recipe[]>('www.thecocktaildb.com/api/json/v1/1/random.php', {
    })
    .then((response) => response.data)
};

export function getCocktailByName(strDrink: string): Promise<Recipe[]>{
    return axios
    .get<Recipe[]>(`www.thecocktaildb.com/api/json/v1/1/search.php?s=${strDrink}`, {
        params: { strDrink }
    })
    .then((response) => response.data)
};

export function getCocktailByFirstLetter(strDrink: string): Promise<Recipe[]>{
    return axios
    .get<Recipe[]>(`www.thecocktaildb.com/api/json/v1/1/search.php?f=${strDrink}`, {
        params: { strDrink }
    })
    .then((response) => response.data)
};

export function getCocktailByIngredient(strIngredient1: string): Promise<Recipe[]>{
    return axios
    .get<Recipe[]>(`www.thecocktaildb.com/api/json/v1/1/search.php?i=${strIngredient1}`, {
        params: { strIngredient1 }
    })
    .then((response) => response.data)
};

export function getCocktailDetails(idDrink: number): Promise<Recipe>{
    return axios
    .get<Recipe>(`www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=${idDrink}`, {
    })
    .then((response) => response.data)
};