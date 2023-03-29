import "./recipeList.css";
import { RecipeItem } from "../RecipeItem/RecipeItem";
import { Drink, Root } from "../../models/Recipe";

export interface IRecipeListProps {
    cocktails: Root;
    favorites: Drink[];
};

export function RecipeList(props: IRecipeListProps){

    
    return (
        <div className="RecipeList">
            <div className="RecipeCards">
                {props.cocktails.drinks.slice(0,10).map((cocktail) => <RecipeItem cocktail={cocktail} key={cocktail.idDrink} isFavorite={props.favorites.map(favorite => favorite.idDrink).includes(cocktail.idDrink) } />)}
            </div>
        </div>
    );
};