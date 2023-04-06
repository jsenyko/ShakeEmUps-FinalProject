import "./recipeList.css";
import { RecipeItem } from "../RecipeItem/RecipeItem";
import { Drink, Root } from "../../models/Recipe";
import { NoResultsFound } from "./NoResultsFound";
import { useState } from "react";

export interface IRecipeListProps {
    cocktails: Root;
    favorites: Drink[];
    category: string;
    count: number;
};


export function RecipeList(props: IRecipeListProps){

    let { cocktails, favorites, category, count } = props;

    return (
        <div className="RecipeList">
            <div className="RecipeCards">
                {typeof cocktails?.drinks==="string"? <NoResultsFound /> : cocktails.drinks.slice(0,(count===0? 10 : count)).map((cocktail) => 
                <RecipeItem 
                    cocktail={cocktail} 
                    key={cocktail.idDrink} 
                    isCategory={category!=="All" && category!=="" && (category)===cocktail.strCategory} 
                    isFavorite={favorites.map(favorite => favorite.idDrink).includes(cocktail.idDrink)} />)}
            </div>
        </div>
    );
};