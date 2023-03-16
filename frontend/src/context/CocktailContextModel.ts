import { Drink } from "../models/Recipe";

export interface CocktailContextModel {
    favorites: Drink[],
    addCocktail: (recipe:Drink) => void,
    removeCocktail: (idDrink:string) => void,
};