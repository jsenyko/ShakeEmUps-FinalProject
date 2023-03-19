import { Drink } from "../models/Recipe";

export interface CocktailContextModel {
    favorites: Drink[],
    addCocktail: (cocktail:Drink) => void,
    removeCocktail: (idDrink:string) => void,
};