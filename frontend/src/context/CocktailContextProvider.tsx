import { ReactNode, useState} from "react";
import { Recipe } from "../models/Recipe";
import CocktailContext from "./CocktailContext";

interface ICocktailContextProviderProps {
    children: ReactNode,
};

const CocktailContextProvider = ({children}:ICocktailContextProviderProps) => {
    const [favorites, setCocktail] = useState<Recipe[]>([]);

    const addCocktail = (recipe:Recipe) => {
        setCocktail([...favorites, recipe]);
    };

    const removeCocktail = (idDrink:number) => {
        setCocktail(favorites.filter((x) => x.idDrink !== idDrink));
    };

    return(<CocktailContext.Provider value={{
        favorites: favorites,
        addCocktail: addCocktail,
        removeCocktail: removeCocktail
    }}>{children}</CocktailContext.Provider>)
};

export default CocktailContextProvider;