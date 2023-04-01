import "./recommendationsCarousel.css";
import { Root } from "../../models/Recipe";
import { useState, useEffect, useContext } from "react";
import { getCocktailDetails } from "../../services/RecipeService";
import { useNavigate } from 'react-router-dom';
import CocktailContext from "../../context/CocktailContext";


export function RecommendationsCarousel(){

    const { favorites } = useContext(CocktailContext);
    const navigate = useNavigate()
    console.log(favorites);

    // A list of the the ID and cocktail name (optional) that can be called
    // with the MakeReco function below
    let recos = [
        {id: "17255", name: "Gimlet"},
        {id: "11202", name: "Caipirinha"},
        {id: "17253", name: "Paloma"},
        {id: "17206", name: "Mint Julep"},
        {id: "178325", name: "Aperol Spritz"},
        {id: "11690", name: "Mai Tai"},
        {id: "17249", name: "Pegu Club"},
        {id: "12127", name: "Sazerac"},
        {id: "17828", name: "Tipperary"},
        {id: "17218", name: "Vesper Martini"}
    ];

    // This takes the id from the recos list and plugs it into the useEffect to make the API call
    function MakeReco(id: string){
        const [cocktail, setCocktail] = useState<Root>();
        useEffect(() => {
        let recommendation = getCocktailDetails(String(id))
            recommendation.then((cocktail) => setCocktail(cocktail))
        }, []);

        // API call is made with that ID and we want the cocktail Name and Image (uses Name for the alt)
        return (
                <div className="media-element" onClick={() => navigate(`/details/${cocktail?.drinks[0].idDrink}`)} >
                <img src={cocktail?.drinks[0].strDrinkThumb} alt={cocktail?.drinks[0].strDrink} />
                <div className="content">
                    <p>{cocktail?.drinks[0].strDrink}</p>
                    <div>{favorites.filter(fav => fav.idDrink === cocktail?.drinks[0].idDrink).length > 0 && <i className="fa-solid fa-heart"></i>}</div>
                </div>
            </div>
        )
    }    

    return (
    <div className="RecommendationsCarousel">
        <h2>Checkout some seasonal recommendations we think you'll love!</h2>

        <div className="media-container">
            <div className="media-scroller">
    
            {/* Group 1 */}
            <div className="media-group" id="group-1">

                {/* Call the MakeReco function above, which looks at the index position's id and plugs it in */}
                {/* This creates the repeatable DIV with the cocktail image and name */}
                {MakeReco(recos[0].id)}
                {MakeReco(recos[1].id)}
                {MakeReco(recos[2].id)}
                {MakeReco(recos[3].id)}
                {MakeReco(recos[4].id)}
    
                {/* You click on the SVG file to advance to the next media-group */}
                <a className="next" href="#group-2" aria-label="next">
                    <svg><use href="#next"></use></svg>
                </a>
            </div>
    
            {/* Group 2 */}
            <div className="media-group" id="group-2">

                {/* You click on the SVG file to advance to the previous media-group */}
                <a className="previous" href="#group-1">
                    <svg><use href="#previous"></use></svg>
                </a>

                {MakeReco(recos[5].id)}
                {MakeReco(recos[6].id)}
                {MakeReco(recos[7].id)}
                {MakeReco(recos[8].id)}
                {MakeReco(recos[9].id)}

            </div>
    
            <div className="navigation-indicators">
                <div></div>
                <div></div>
            </div>

            </div>

            <svg>
                <symbol id="next" viewBox="0 0 256 512">
                    <path fill="white"
                    d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
                </symbol>
    
                <symbol id="previous" viewBox="0 0 256 512">
                    <path fill="white"
                    d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z" />
                </symbol>
            </svg>
        </div>
    


    </div>
    );
};