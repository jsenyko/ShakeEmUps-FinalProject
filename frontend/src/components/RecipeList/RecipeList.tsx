import "./recipeList.css";
import { useState, useEffect } from "react";
import { RecipeItem } from "../RecipeItem/RecipeItem";
import { Drink } from "../../models/Recipe";

export interface IRecipeListProps {
    cocktails: Drink[];
};

export function RecipeList(props: IRecipeListProps){

    return (
        <div className="RecipeList">
            <div className="RecipeCards">
                {props.cocktails.slice(0,10).map((cocktail) => <RecipeItem cocktail={cocktail} key={cocktail.idDrink} />)}
            </div>
        </div>
    );
};