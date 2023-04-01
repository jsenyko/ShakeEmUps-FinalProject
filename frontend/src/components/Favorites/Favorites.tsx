import "./favorites.css";
import { useContext, useEffect, useState } from "react";
import CocktailContext from "../../context/CocktailContext";
import { useNavigate } from "react-router-dom";
import { Drink } from "../../models/Recipe";
import { getUserDrinks } from "../../services/RecipeService";

export function Favorites(){

    const [active, setActive] = useState<Boolean>(true)
    const [userDrinks, setUserDrinks] = useState<any>([])
    const { favorites, removeCocktail } = useContext(CocktailContext);
    const navigate = useNavigate();

    function changeActive(){

    }

    useEffect(() => {
        getUserDrinks().then((data) =>{
            setUserDrinks(data);
            console.log(userDrinks)
        })
    //
    },[])

    return (
        <div className="Favorites" id="favorites">
            <div className="Favorites_Header">
                <h2 className="Favorites_Header-Title">Your Favorite Cocktails</h2>
                <p className="Favorites_Header-Count">Total Recipes: {favorites.length}</p>
            </div>

            {/* <div>
            <ul>
                <li className="list active" data-filter="all" onClick={() => changeActive}>All</li>
                <li className="list" data-filter="gin" onClick={() => changeActive}>Gin</li>
                <li className="list" data-filter="vodka" onClick={() => changeActive}>Vodka</li>
                <li className="list" data-filter="rum" onClick={() => changeActive}>Rum</li>
                <li className="list" data-filter="whiskey" onClick={() => changeActive}>Whiskey</li>
                <li className="list" data-filter="" onClick={() => changeActive}></li>
            </ul>
            </div> */}

            <div className="Favorites_Recipe-Container">
                {favorites.map((cocktail) => 
                    <div className={active? "RecipeCard active" : "RecipeCard hidden"} key={cocktail.idDrink} data-item={cocktail.strIngredient1}>
                        <div className="card">
                        <div className="RecipeCard-Image">
                            <img src={cocktail.strDrinkThumb} alt="" />
                        </div>
                        <div className="RecipeCard-Content">
                            <h2>{cocktail.strDrink}</h2>
                        </div>
                        <div className="RecipeCard-Buttons">
                            <button className="Button-Details" onClick={() => navigate(`/details/${cocktail.idDrink}`)}>
                                Details
                            </button>
                            <button className="Button-Remove" onClick={() => {removeCocktail(cocktail.idDrink)}}>
                                Remove
                            </button>
                        </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="Favorites_Recipe-Container">
                {userDrinks.map((cocktail:any) => 
                    <div className={active? "RecipeCard active" : "RecipeCard hidden"} key={cocktail._id} data-item={cocktail.strIngredient1}>
                        <div className="card">
                        <div className="RecipeCard-Image">
                            <img src='#' alt="user created drink" />
                        </div>
                        <div className="RecipeCard-Content">
                            <h2>{cocktail.strDrink}</h2>
                        </div>
                        <div className="RecipeCard-Buttons">
                            <button className="Button-Details" onClick={() => navigate(`/details/${cocktail._id}`)}>
                                Details
                            </button>
                            <button className="Button-Remove" onClick={() => {removeCocktail(cocktail._id)}}>
                                Remove
                            </button>
                        </div>
                        </div>
                    </div>
                )}
            </div>

        </div>
    );
};