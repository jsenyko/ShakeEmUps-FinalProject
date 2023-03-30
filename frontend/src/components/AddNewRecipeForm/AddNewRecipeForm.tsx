import "./addNewRecipeForm.css"
import { Drink, Root } from "../../models/Recipe";
import { Ingredient } from "./Ingredient";
import { FormEvent, useEffect, useState, useContext } from "react";
import { addDrink } from "../../services/RecipeService";
import CocktailContext from "../../context/CocktailContext";
import { getCocktailDetails } from "../../services/RecipeService";
import { FaStar } from "react-icons/fa";

interface Props {
    initialTo?: string;
    onAdd?: (drink: Drink) => void
}

export function AddNewRecipeForm( {initialTo = "", onAdd}: Props){
    
    const [ idDrink, setIdDrink ] = useState(initialTo);
    const [ strDrink, setStrDrink ] = useState("");
    const [ strDrinkAlternate, setStrDrinkAlternate ] = useState("");
    const [ strGlass, setGlass ] = useState("");
    const [ strInstructions, setStrInstructions] = useState("");
    const [ strInstructionsES, setStrInstructionsES] = useState("");
    const [ strInstructionsDE, setStrInstructionsDE] = useState("");
    const [ strInstructionsFR, setStrInstructionsFR] = useState("");
    const [ strInstructionsIT, setStrInstructionsIT] = useState("");
    const [ strTags, setTags ] = useState("");
    const [ strVideo, setStrVideo ] = useState("");
    const [ strCategory, setStrCategory ] = useState("");
    const [ strIBA, setIBA ] = useState("");
    const [ strAlcoholic, setStrAlcoholic ] = useState("");
    const [ strDrinkThumb, setStrDrinkThumb ] = useState("");
    const [ strIngredient1, setStrIngredient1 ] = useState("");
    const [ strIngredient2, setStrIngredient2 ] = useState("");
    const [ strIngredient3, setStrIngredient3 ] = useState("");
    const [ strIngredient4, setStrIngredient4 ] = useState("");
    const [ strIngredient5, setStrIngredient5 ] = useState("");
    const [ strIngredient6, setStrIngredient6 ] = useState("");
    const [ strIngredient7, setStrIngredient7 ] = useState("");
    const [ strIngredient8, setStrIngredient8 ] = useState("");
    const [ strIngredient9, setStrIngredient9 ] = useState("");
    const [ strIngredient10, setStrIngredient10 ] = useState("");
    const [ strIngredient11, setStrIngredient11 ] = useState("");
    const [ strIngredient12, setStrIngredient12 ] = useState("");
    const [ strIngredient13, setStrIngredient13 ] = useState("");
    const [ strIngredient14, setStrIngredient14 ] = useState("");
    const [ strIngredient15, setStrIngredient15 ] = useState("");
    const [ strMeasure1, setStrMeasure1] = useState("");
    const [ strMeasure2, setStrMeasure2] = useState("");
    const [ strMeasure3, setStrMeasure3] = useState("");
    const [ strMeasure4, setStrMeasure4] = useState("");
    const [ strMeasure5, setStrMeasure5] = useState("");
    const [ strMeasure6, setStrMeasure6] = useState("");
    const [ strMeasure7, setStrMeasure7] = useState("");
    const [ strMeasure8, setStrMeasure8] = useState("");
    const [ strMeasure9, setStrMeasure9] = useState("");
    const [ strMeasure10, setStrMeasure10] = useState("");
    const [ strMeasure11, setStrMeasure11] = useState("");
    const [ strMeasure12, setStrMeasure12] = useState("");
    const [ strMeasure13, setStrMeasure13] = useState("");
    const [ strMeasure14, setStrMeasure14] = useState("");
    const [ strMeasure15, setStrMeasure15] = useState("");
    const [ strImageSource, setStrImageSource] = useState("");
    const [ strImageAttribution, setStrImageAttribution] = useState("");
    const [ strCreativeCommonsConfirmed, setStrCreativeCommonsConfirmed] = useState("");
    const [ dateModified, setDateModified] = useState("");
  
    useEffect(() => setIdDrink(initialTo), [initialTo]);
  
    function handleSubmit(e: FormEvent) {
      e.preventDefault();
       addDrink({
        idDrink, strDrink,strDrinkAlternate, strTags, strVideo, strCategory, strIBA, 
    strAlcoholic, strGlass, strInstructions, strInstructionsES, strInstructionsDE, 
    strInstructionsFR, strInstructionsIT, 
    strDrinkThumb, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, 
    strIngredient6, strIngredient7, strIngredient8, strIngredient9,strIngredient10, 
    strIngredient11, strIngredient12, strIngredient13, strIngredient14, strIngredient15, 
    strMeasure1, strMeasure2,strMeasure3, strMeasure4, strMeasure5, strMeasure6, strMeasure7,
    strMeasure8, strMeasure9, strMeasure10, strMeasure11,strMeasure12,strMeasure13,strMeasure14, strMeasure15,
    strImageSource, strImageAttribution, strCreativeCommonsConfirmed, dateModified
       }).then(onAdd); /* eslint-disable-next-line */
       setIdDrink(initialTo), setStrDrink(""), setStrDrinkAlternate(""), setTags(""), setStrVideo(""), 
       setStrCategory(""), setIBA(""), setStrAlcoholic(""), setGlass(""), setStrInstructions(""), 
       setStrInstructionsES(""), setStrInstructionsDE(""), setStrInstructionsFR, setStrInstructionsIT, 
       setStrDrinkThumb(""), setStrIngredient1(""), setStrIngredient2(""), setStrIngredient3(""), setStrIngredient4(""), setStrIngredient5(""), 
       setStrIngredient6(""), setStrIngredient7(""), setStrIngredient8(""), setStrIngredient9(""), setStrIngredient10(""), 
       setStrIngredient11(""), setStrIngredient12(""), setStrIngredient13(""), setStrIngredient14(""), setStrIngredient15(""), 
       setStrMeasure1(""), setStrMeasure2(""), setStrMeasure3(""), setStrMeasure4(""), setStrMeasure5(""), setStrMeasure6(""), setStrMeasure7(""),
       setStrMeasure8(""), setStrMeasure9(""), setStrMeasure10(""), setStrMeasure11(""), setStrMeasure12(""), setStrMeasure13(""), setStrMeasure14(""), 
       setStrMeasure15(""), setStrImageSource(""), setStrImageAttribution(""), setStrCreativeCommonsConfirmed(""), setDateModified("")
      
    }

    const [caretDirection, changeCaretDirection] = useState<Boolean>(true)
    const flipCaret = () => {
        changeCaretDirection(!caretDirection);
    };

    // Context used so you can call the function addCocktail that adds
    // the cocktail selected to the Favorites array / page
    const { addCocktail, removeCocktail } = useContext(CocktailContext);

    // Toggles the Button-Favorite styling when it is clicked
    const [favoriteButtonClicked, setFavoriteButtonClicked] = useState<Boolean>(false)
    const ToggleFavoriteButtonClass = () => {
        setFavoriteButtonClicked(!favoriteButtonClicked);
    };

    // useState related to Cocktail Rating element
    const [rating, setRating] = useState<Number>(0);
    const [hover, setHover] = useState<Number>(0);

    // useState that brings in cocktails details from API Call return
    const [details, setDetails] = useState<Root>();

    // Makes the API Call using the idDrink param and returns a result
    useEffect(() => {
        let recipeResult = getCocktailDetails(String(idDrink));
            recipeResult.then((x) => setDetails(x))
        }, []);

    
    // Toggles the Add New Cocktail button styling when clicked
    const [addNewButtonClicked, setAddNewButtonClicked] = useState<Boolean>(false)
    const ToggleAddNewButtonClass = () => {
        setAddNewButtonClicked(!addNewButtonClicked);
    };


    return (

        <div className={caretDirection? "AddNewRecipe-Open" : "AddNewRecipe-Closed"}>
        <div className="AddNewRecipe-Header">
            <h1>Want to submit a new cocktail?</h1>
            <h3>Add it here!</h3>
            <div className="Caret" onClick={flipCaret}><i className={caretDirection? "fa-regular fa-square-caret-up" : "fa-solid fa-square-caret-down"}></i><p>{caretDirection? "Close Form" : "Open Form"}</p></div>
        </div>

        <div className="AddNewRecipe" onSubmit={handleSubmit}>
        <form className="AddNewRecipe-Form">

            {/* This includes the Form-Left and Form-Right sections for CSS styling */}
            <div className="Form-Top">

            {/* This section holds the Cocktail Name, Glass Type, and Source info */}
            <div className="Form-Left">

                {/* User provides name of the cocktail */}
                <div className="Form-Name">
                <label>Cocktail Name: </label>
                <input
                    type="text"
                    name="name"
                    placeholder="What's it called?"
                    required
                    value = {strDrink}
                    onChange = {(e) => setStrDrink(e.target.value)}
                />
                </div>

                {/* User provides recommended glassware from drop-down list */}
                <div className="Form-Glass">
                <label>Glass Used: </label>
                <input
                    type="list"
                    name="glasses"
                    placeholder="Recommended glass?"
                    list="glasses"
                    value = {strGlass}
                    onChange = {(e) => setGlass(e.target.value)}
                />
                    <datalist id="glasses">
                        <option value="Martini Glass" />
                        <option value="Highball Glass" />
                        <option value="Collins Glass" />
                        <option value="Rocks Glass" />
                        <option value="Coupe Glass" />
                        <option value="Copper Mug" />
                        <option value="Margarita Glass" />
                        <option value="Nick & Nora" />
                        <option value="Hurricane Glass" />
                        <option value="Pint Glass" />
                        <option value="Shot Glass" />
                        <option value="Lowball Glass" />
                        <option value="Sniftter Glass" />
                        <option value="Julep Cup" />
                        <option value="Sour Glass" />
                        <option value="Zombie Glass" />
                    </datalist>
                </div>

                {/* User provides where they found the cocktail */}
                {/* Options will be provided for Book, URL, etc. */}
                {/* Based on selection the Book Source will change - Book Name/Page #, URL, App Name */}
                <div className="Form-Source">

                    <div className="Source-Type">   
                    <label>Source Type: </label>
                    <input
                        type="list"
                        name="source-type"
                        placeholder="Where did you find it?"
                        list="source-types"
                        value = {strVideo}
                        onChange = {(e) => setStrVideo(e.target.value)}
                    />
                        <datalist id="source-types">
                            <option value="Book" />
                            <option value="Website" />
                            <option value="App" />
                            <option value="" />
                            <option value="" />
                            <option value="" />
                        </datalist>
                    </div>

                    <div className="Source-Name">
                    <label>Source Type: </label>
                    <input
                        type="text"
                        name="source-name"
                        placeholder="Book Name, Website, Youtube, etc."
                        />
                    </div>

                    <div className="Source-Addl">
                    <label>Source Addl: </label>
                    <input
                        type="text"
                        name="source-addl"
                        placeholder="Book Page(s), URL, etc."
                        />
                    </div>
                </div>

                <div className="Form-Left-Addl">

                {/* Button that when clicked uses context to add this cocktail to Favorites array */}
                <div className="Form-Favorite">
                    <p>Add to Favorites</p>
                    {/* Button's current className determines whether to addCocktail or removeCocktail via Context */}
                    <button
                        className={favoriteButtonClicked ? "Button-Favorites clicked" : "Button-Favorites unclicked"}
                        onClick={() => {ToggleFavoriteButtonClass();} }>
                        <i className="fa-solid fa-heart"></i>
                    </button>
                </div>

                <div className="Form-Rating">
                    <p>Rate this Cocktail</p>
                        <div className="Rating-Container">
                            <div className="Rating">
                                {/* Import the FaStar icon and map it into an empty array
                                Using "i" gives each star a number when iterating with .map
                                Note it is zero indexed */}
                                {[...Array(5)].map((star, i) => {
                                    const ratingValue = i + 1

                                    return <label>
                                    {/* The star clicked changes the rate and sets it to that star's ratingValue (i+1) */}
                                    <input
                                        type="radio"
                                        name="rating"
                                        value={ratingValue}
                                        onClick={() => setRating(ratingValue)}
                                    />
                                    
                                    {/* Star's color is based on the current ratingValue and rating, red or gray, but the hover state overrides this */}
                                    <FaStar
                                        className="star"
                                        size={25}
                                        color={ratingValue <= (hover || rating) ? "#d83133" : "#e4e5e9"} 
                                        onMouseEnter={() => setHover(ratingValue)}
                                        onMouseLeave={() => setHover(0)}
                                        />
                                    </label>
                                        })}
                                    </div>
                                </div>
                            </div>
                
                </div>

            </div>

            {/* This section holds the Cocktail Image + button to add to the form */}
            <div className="Form-Right">
                <div className="Image-Container">
                    <img src="#" alt="" />
                </div>
                <button>Add Cocktail Image</button>
            </div>

            </div>

            {/* This section holds the Ingredients, Instructions, Add to Favorites, and Cocktail Rating along with the Button to POST in backend */}
            <div className="Form-Bottom">

                <p className="Bottom-Header">Add the Ingredients</p>

                {/* User provides ingredients, with options to add more onClick */}
                <div className="Form-Ingredients">

                <div className="Ingredient-Name" id="strIngredient1"> 
                <label>Ingredient Name: </label>
                <input
                    type="text"
                    name="ingredient-name"
                    placeholder="Ingredient #1"
                    required
                    value = {strIngredient1}
                    onChange = {(e) => setStrIngredient1(e.target.value)}
                />
                </div>

                <div className="Ingredient-Volume oz" id="strMeasure1"> 
                <label>Ingredient Volume: </label>
                <input
                    type="list"
                    name="ingredient-volume"
                    placeholder="How much?"
                    list="volumes"
                    value = {strMeasure1}
                    onChange = {(e) => setStrMeasure1(e.target.value)}
                />
                    <datalist id="volumes">
                        <option value="1/4 oz"/>
                        <option value="1/2 oz" />
                        <option value="3/4 oz" />
                        <option value="1 oz" />
                        <option value="1 1/4 oz" />
                        <option value="1 1/2 oz" />
                        <option value="1 3/4 oz" />
                        <option value="2 oz" />
                        <option value="2 1/4 oz" />
                        <option value="2 1/2 oz" />
                        <option value="2 3/4 oz" />
                        <option value="3 oz" />
                        <option value="3 1/4 oz" />
                        <option value="3 1/2 oz" />
                        <option value="" />
                        <option value="" />
                        <option value="" />
                        <option value="" />
                        <option value="" />
                        <option value="" />
                    </datalist>
                </div>
            
                <div className="Ingredient-Add"><i className="fa-regular fa-square-plus"><span className="tooltiptext">Click to add another</span></i></div>
            
                </div>

                {/* User provides instructions, currently in paragraph format */}
                <div className="Form-Instructions">
                    <label>Instructions: </label>
                    <input
                        type="text"
                        name="instructions"
                        placeholder="How is it made? Please be descriptive and specific."
                        required
                    />
                </div>

                <div className="Form-Additional">
                    <label>Additional Info: </label>
                    <input
                        type="text"
                        name="additional"
                        placeholder="Any other details you want to share? Recommended spirit brand, flavor notes, etc.?"
                        required
                    />
                </div>

                {/* User clicks button to POST recipe to backend (yet to be built) */}
                <div onClick={ToggleAddNewButtonClass} className={addNewButtonClicked? "AddNew-Button" : "AddNew-Button clicked"}>
                    <button><p>{addNewButtonClicked? "Success!" : "Add new cocktail!"}</p></button>
                </div>

            </div>

        </form>

    </div>

        {/* function addDrink(arg0: { strDrink: string; strGlass: string; strTags: string; }) {
    throw new Error("Function not implemented.");
} */}
    </div>
    )

}
