import "./recipeList.css";
import { RecipeItem } from "../RecipeItem/RecipeItem";
import { Root } from "../../models/Recipe";

export interface IRecipeListProps {
    cocktails: Root;
};

export function RecipeList(props: IRecipeListProps){

    return (
        <div className="RecipeList">
            <div className="RecipeCards">
                {props.cocktails.drinks.slice(0,10).map((cocktail) => <RecipeItem cocktail={cocktail} key={cocktail.idDrink} />)}
            </div>
        </div>
    );
};