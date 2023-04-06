import { Drink, Root } from "../models/Recipe";

export interface CocktailContextModel {
    favorites: Drink[],
    addCocktail: (cocktail:Drink) => void,
    removeCocktail: (idDrink:string) => void,
    sortFavoritesAZ: () => void,
    sortFavoritesZA: () => void,
    sortFavoritesRandom: () => void,
};