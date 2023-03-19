import "./recommendationsCarousel.css";
import { Root } from "../../models/Recipe";
import { getCocktailDetails } from "../../services/RecipeService";
import { useState, useEffect, useContext } from "react";

export function RecommendationsCarousel(){

    // Here I'm trying to figure out how to make manual getCocktailDetails calls
    // to return specific recommendations by the cocktail idDrink with an image + title
    // Then the user can click the image to go to the Details page for that cocktail

    // useState that brings in cocktails details from API Call return
    // const [details, setDetails] = useState<Root>();

    // let recommendation1 = useEffect(() => {
    //     let recipeResult = getCocktailDetails(String("11007"));

    //     recipeResult.then((x) => setDetails(x))
    // }, [])

    return (
    <div className="RecommendationsCarousel">
        <h2>Checkout some seasonal recommendations we think you'll love!</h2>
        <div className="media-container">
            <div className="media-scroller">
            {/* Currently this is done manually, but instead we would map and slice to return the results from MongoDB into groups */}
    
            {/* Group 1 */}
            <div className="media-group" id="group-1">
                <div className="media-element">
                    <img src="https://images.unsplash.com/photo-1641353989082-9b15fa661805?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400" alt="" />
                </div>
                <div className="media-element">
                    <img src="https://images.unsplash.com/photo-1642190672487-22bde32965f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400" alt="" />
                </div>
                <div className="media-element">
                    <img src="https://images.unsplash.com/photo-1641841344411-49dbd02896f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400" alt="" />
                </div>
                <div className="media-element">
                    <img src="https://images.unsplash.com/photo-1643223723262-7ce785730cf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400" alt="" />
                </div>
                <div className="media-element">
                    <img src="https://images.unsplash.com/photo-1640938776314-4d303f8a1380?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODc2Mw&ixlib=rb-1.2.1&q=80&w=400" alt="" />
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
                <div className="media-element">
                    <img src="https://images.unsplash.com/photo-1641259041823-e09935369105?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODc2Mw&ixlib=rb-1.2.1&q=80&w=400" alt="" />
                </div>
                <div className="media-element">
                    <img src="https://images.unsplash.com/photo-1642543492481-44e81e3914a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODc2Mw&ixlib=rb-1.2.1&q=80&w=400" alt="" />
                </div>
                <div className="media-element">
                    <img src="https://images.unsplash.com/photo-1641118961077-440391095cdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODc2Mw&ixlib=rb-1.2.1&q=80&w=400" alt="" />
                </div>
                <div className="media-element">
                    <img src="https://images.unsplash.com/photo-1640767014413-b7d27c58b058?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODc5NQ&ixlib=rb-1.2.1&q=80&w=400" alt="" />
                </div>
                <div className="media-element">
                    <img src="https://images.unsplash.com/photo-1640948612546-3b9e29c23e98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODc5NQ&ixlib=rb-1.2.1&q=80&w=400" alt="" />
                </div>
            
                <a className="next" href="#group-3" aria-label="next">
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