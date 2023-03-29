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

    let recommendations = ["17255", "11202", "17253", "17206", "178325", "11690", "17249", "12127", "17828", "17218"];

    // Trying to take the recommendations array above and map it over this useState and useEffect so I can avoid
    // repeating the code for every API call and result
    const [reco, setReco] = useState<Root>();
    useEffect(() => {
    let recoA = getCocktailDetails(String(recommendations[0]))
        recoA.then((reco) => setReco(reco))
    }, []);


    const recoList = ["17255", "11202", "17253", "17206", "178325", "11690", "17249", "12127", "17828", "17218"];

    // Recommendation API Call - Cocktail A (Gimlet)
    const [cocktailA, setCocktailA] = useState<Root>();
    useEffect(() => {
    let recommendationA = getCocktailDetails(String("17255"))
        recommendationA.then((cocktailA) => setCocktailA(cocktailA))
    }, []);

    // Recommendation API Call - Cocktail B (Caipirinha)
    const [cocktailB, setCocktailB] = useState<Root>();
    useEffect(() => {
        let recommendationB = getCocktailDetails(String("11202"))
            recommendationB.then((cocktailB) => setCocktailB(cocktailB))
        }, []);

    // Recommendation API Call - Cocktail C (Paloma)
    const [cocktailC, setCocktailC] = useState<Root>();
    useEffect(() => {
        let recommendationC = getCocktailDetails(String("17253"))
            recommendationC.then((cocktailC) => setCocktailC(cocktailC))
        }, []);

    // Recommendation API Call - Cocktail D (Mint Julep)
    const [cocktailD, setCocktailD] = useState<Root>();
    useEffect(() => {
        let recommendationD = getCocktailDetails(String("17206"))
            recommendationD.then((cocktailD) => setCocktailD(cocktailD))
        }, []);

    // Recommendation API Call - Cocktail E (Aperol Spritz)
    const [cocktailE, setCocktailE] = useState<Root>();
    useEffect(() => {
        let recommendationE = getCocktailDetails(String("178325"))
            recommendationE.then((cocktailE) => setCocktailE(cocktailE))
        }, []);

    // Recommendation API Call - Cocktail F (Mai Tai)
    const [cocktailF, setCocktailF] = useState<Root>();
    useEffect(() => {
        let recommendationF = getCocktailDetails(String("11690"))
            recommendationF.then((cocktailF) => setCocktailF(cocktailF))
        }, []);

    // Recommendation API Call - Cocktail G (Pegu Club)
    const [cocktailG, setCocktailG] = useState<Root>();
    useEffect(() => {
        let recommendationG = getCocktailDetails(String("17249"))
            recommendationG.then((cocktailG) => setCocktailG(cocktailG))
        }, []);

    // Recommendation API Call - Cocktail H (Sazerac)
    const [cocktailH, setCocktailH] = useState<Root>();
    useEffect(() => {
        let recommendationH = getCocktailDetails(String("12127"))
            recommendationH.then((cocktailH) => setCocktailH(cocktailH))
        }, []);

    // Recommendation API Call - Cocktail I (Tiperary)
    const [cocktailI, setCocktailI] = useState<Root>();
    useEffect(() => {
        let recommendationI = getCocktailDetails(String("17828"))
            recommendationI.then((cocktailI) => setCocktailI(cocktailI))
        }, []);

    // Recommendation API Call - Cocktail J (Vesper Martini)
    const [cocktailJ, setCocktailJ] = useState<Root>();
    useEffect(() => {
        let recommendationJ = getCocktailDetails(String("17218"))
            recommendationJ.then((cocktailJ) => setCocktailJ(cocktailJ))
        }, []);
    

    return (
    <div className="RecommendationsCarousel">
        <h2>Checkout some seasonal recommendations we think you'll love!</h2>

        <div className="media-container">
            <div className="media-scroller">
    
            {/* Group 1 */}
            <div className="media-group" id="group-1">
                <div className="media-element" onClick={() => navigate(`/details/${cocktailA?.drinks[0].idDrink}`)} >
                    <img src={cocktailA?.drinks[0].strDrinkThumb} />
                    <p>{cocktailA?.drinks[0].strDrink}{favorites.filter(fav => fav.idDrink === cocktailA?.drinks[0].idDrink).length > 0 && <i className="fa-solid fa-heart"></i>}</p>
                </div>
                <div className="media-element" onClick={() => navigate(`/details/${cocktailB?.drinks[0].idDrink}`)} >
                    <img src={cocktailB?.drinks[0].strDrinkThumb} />
                    <p>{cocktailB?.drinks[0].strDrink}{favorites.filter(fav => fav.idDrink === cocktailB?.drinks[0].idDrink).length > 0 && <i className="fa-solid fa-heart"></i>}</p>
                </div>
                <div className="media-element" onClick={() => navigate(`/details/${cocktailC?.drinks[0].idDrink}`)} >
                    <img src={cocktailC?.drinks[0].strDrinkThumb} />
                    <p>{cocktailC?.drinks[0].strDrink}{favorites.filter(fav => fav.idDrink === cocktailC?.drinks[0].idDrink).length > 0 && <i className="fa-solid fa-heart"></i>}</p>
                </div>
                <div className="media-element" onClick={() => navigate(`/details/${cocktailD?.drinks[0].idDrink}`)} >
                    <img src={cocktailD?.drinks[0].strDrinkThumb} />
                    <p>{cocktailD?.drinks[0].strDrink}{favorites.filter(fav => fav.idDrink === cocktailD?.drinks[0].idDrink).length > 0 && <i className="fa-solid fa-heart"></i>}</p>
                </div>
                <div className="media-element" onClick={() => navigate(`/details/${cocktailE?.drinks[0].idDrink}`)} >
                    <img src={cocktailE?.drinks[0].strDrinkThumb} />
                    <p>{cocktailE?.drinks[0].strDrink}{favorites.filter(fav => fav.idDrink === cocktailE?.drinks[0].idDrink).length > 0 && <i className="fa-solid fa-heart"></i>}</p>
                </div>
    
                <a className="next" href="#group-2" aria-label="next">
                    <svg><use href="#next"></use></svg>
                </a>
            </div>
    
            {/* Group 2 */}
            <div className="media-group" id="group-2">
                <a className="previous" href="#group-1">
                    <svg><use href="#previous"></use></svg>
                </a>
                <div className="media-element" onClick={() => navigate(`/details/${cocktailF?.drinks[0].idDrink}`)} >
                    <img src={cocktailF?.drinks[0].strDrinkThumb} />
                    <p>{cocktailF?.drinks[0].strDrink}</p>
                </div>
                <div className="media-element" onClick={() => navigate(`/details/${cocktailG?.drinks[0].idDrink}`)} >
                    <img src={cocktailG?.drinks[0].strDrinkThumb} />
                    <p>{cocktailG?.drinks[0].strDrink}</p>
                </div>
                <div className="media-element" onClick={() => navigate(`/details/${cocktailH?.drinks[0].idDrink}`)} >
                    <img src={cocktailH?.drinks[0].strDrinkThumb} />
                    <p>{cocktailH?.drinks[0].strDrink}</p>
                </div>
                <div className="media-element" onClick={() => navigate(`/details/${cocktailI?.drinks[0].idDrink}`)} >
                    <img src={cocktailI?.drinks[0].strDrinkThumb} />
                    <p>{cocktailI?.drinks[0].strDrink}</p>
                </div>
                <div className="media-element" onClick={() => navigate(`/details/${cocktailJ?.drinks[0].idDrink}`)} >
                    <img src={cocktailJ?.drinks[0].strDrinkThumb} />
                    <p>{cocktailJ?.drinks[0].strDrink}</p>
                </div>
            
                <a className="next" href="#group-2" aria-label="next">
                    <svg><use href="#next"></use></svg>
                </a>

            </div>
    
            <div className="navigation-indicators">
                <div></div>
                <div></div>
            </div>

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
    );
};