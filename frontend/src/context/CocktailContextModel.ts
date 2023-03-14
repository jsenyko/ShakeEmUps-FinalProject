import { Recipe } from "../models/Recipe";

export interface CocktailContextModel {
    favorites: Recipe[],
    addCocktail: (recipe:Recipe) => void,
    removeCocktail: (idDrink:number) => void,
};