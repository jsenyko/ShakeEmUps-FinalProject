import "./recipeList.css";
import { RecipeItem } from "../RecipeItem/RecipeItem";
import { Drink, Root } from "../../models/Recipe";

export interface IRecipeListProps {
    cocktails: Root;
    favorites: Drink[];
};

export function RecipeList(props: IRecipeListProps){

    let { cocktails } = props;
    
    return (
        <div className="RecipeList">
            <div className="RecipeCards">
                {cocktails.drinks.slice(0,10).map((cocktail) => <RecipeItem cocktail={cocktail} key={cocktail.idDrink} isFavorite={props.favorites.map(favorite => favorite.idDrink).includes(cocktail.idDrink) } />)}
            </div>
        </div>
    );
};