import { ReactNode, useState} from "react";
import { Drink } from "../models/Recipe";
import CocktailContext from "./CocktailContext";

interface ICocktailContextProviderProps {
    children: ReactNode,
};

const CocktailContextProvider = ({children}:ICocktailContextProviderProps) => {
    const [favorites, setCocktail] = useState<Drink[]>([]);

    const addCocktail = (recipe:Drink) => {
        setCocktail([...favorites, recipe]);
    };

    const removeCocktail = (idDrink:string) => {
        setCocktail(favorites?.filter((x) => x.idDrink !== idDrink));
    };

    return(<CocktailContext.Provider value={{
        favorites: favorites,
        addCocktail: addCocktail,
        removeCocktail: removeCocktail
    }}>{children}</CocktailContext.Provider>)
};

export default CocktailContextProvider;