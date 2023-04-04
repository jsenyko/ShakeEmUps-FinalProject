import "./recipeList.css";
import { RecipeItem } from "../RecipeItem/RecipeItem";
import { Drink, Root } from "../../models/Recipe";
import { NoResultsFound } from "./NoResultsFound";

export interface IRecipeListProps {
    cocktails: Root;
    favorites: Drink[];
    category: string;
};


export function RecipeList(props: IRecipeListProps){

    let { cocktails } = props;

    return (
        <div className="RecipeList">
            <div className="RecipeCards">
                {typeof cocktails?.drinks==="string"? <NoResultsFound /> : cocktails.drinks.slice(0,10).map((cocktail) => <RecipeItem cocktail={cocktail} key={cocktail.idDrink} isCategory={props.category!=="All" && props.category!=="" && (props.category)===cocktail.strCategory} isFavorite={props.favorites.map(favorite => favorite.idDrink).includes(cocktail.idDrink)} />)}
            </div>
        </div>
    );
};