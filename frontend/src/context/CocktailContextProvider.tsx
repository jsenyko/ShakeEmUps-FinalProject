import { ReactNode, useState } from "react";
import { Drink } from "../models/Recipe";
import CocktailContext from "./CocktailContext";

interface ICocktailContextProviderProps{
    children: ReactNode
};

const CocktailContextProvider = ({children}:ICocktailContextProviderProps) => {
    const [favorites, setFavorites] = useState<Drink[]>([]);

    const addCocktail = (cocktail:Drink) => {
        setFavorites([...favorites, cocktail]);
    };

    const removeCocktail = (idDrink: string) => {
        setFavorites(favorites.filter((x) => x.idDrink !== idDrink));
    };

    return(<CocktailContext.Provider value={{
        favorites: favorites,
        addCocktail: addCocktail,
        removeCocktail: removeCocktail,
    }}>{children}</CocktailContext.Provider>)
};

export default CocktailContextProvider;