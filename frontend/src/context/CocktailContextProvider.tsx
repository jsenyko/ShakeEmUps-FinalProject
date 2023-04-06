import { ReactNode, useState } from "react";
import { Drink } from "../models/Recipe";
import CocktailContext from "./CocktailContext";
import arrayShuffle from "array-shuffle"

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

    const sortFavoritesAZ = () => {
        setFavorites([...favorites].sort((a, b) => a.strDrink > b.strDrink ? 1 : -1))
    }

    const sortFavoritesZA = () => {
        setFavorites([...favorites].sort((a, b) => a.strDrink < b.strDrink ? 1 : -1))
    }

    const sortFavoritesRandom = () => {
        setFavorites(arrayShuffle([...favorites]))
    }

    return(<CocktailContext.Provider value={{
        favorites: favorites,
        addCocktail: addCocktail,
        removeCocktail: removeCocktail,
        sortFavoritesAZ: sortFavoritesAZ,
        sortFavoritesZA: sortFavoritesZA,
        sortFavoritesRandom: sortFavoritesRandom,
    }}>{children}</CocktailContext.Provider>)
};

export default CocktailContextProvider;