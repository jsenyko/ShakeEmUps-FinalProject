import { CocktailContextModel } from "./CocktailContextModel";
import { createContext } from "react";

const defaultValue: CocktailContextModel = {
    favorites: [],
    addCocktail: () => {
        
    },
    removeCocktail: () => {
    
    },
}

const CocktailContext = createContext(defaultValue);

export default CocktailContext