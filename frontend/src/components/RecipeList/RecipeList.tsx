import "./recipeList.css";
import { useState, useEffect } from "react";
import { RecipeItem } from "../RecipeItem/RecipeItem";
import { Recipe } from "../../models/Recipe";

export interface IRecipeListProps {
    recipes: Recipe[];
};

export function RecipeList(props: IRecipeListProps){

    return (
        <div className="RecipeList">
            <div className="RecipeCard">
                {props.recipes.map((recipe) => <RecipeItem recipe={recipe} />)}
            </div>
        </div>
    );
};