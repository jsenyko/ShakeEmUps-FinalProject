import "./addNewRecipeForm.css"
import DrinkModel from "../models/DrinkModel"
import { Drink } from "../../models/Recipe";
import { FormEvent, useEffect, useState } from "react";
import { addDrink } from "../../services/RecipeService";

interface Props {
    initialTo?: string;
    onAdd?: (drink: Drink) => void
}

export function AddNewRecipeForm( {initialTo = "", onAdd}: Props){

    const [caretDirection, changeCaretDirection] = useState<Boolean>(false)
    const flipCaret = () => {
        changeCaretDirection(!caretDirection);
    };
    
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
       }).then(onAdd);
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

    const [caretDirection, changeCaretDirection] = useState<Boolean>(false)
    const flipCaret = () => {
        changeCaretDirection(!caretDirection);
    };

    return (

        <div className={caretDirection? "AddNewRecipe-Open" : "AddNewRecipe-Closed"}>
        <h1>Find a new favorite?</h1>
        <h3>Add it here!</h3>
        <div className="Caret" onClick={flipCaret}><i className={caretDirection? "fa-regular fa-square-caret-up" : "fa-solid fa-square-caret-down"}></i><p>{caretDirection? "Close Form" : "Open Form"}</p></div>

        <div className="AddNewRecipe" onSubmit={handleSubmit}>
        <h3>Let's add a new recipe!</h3>
        <form className="AddNewRecipe-Form">
            <h3>Let's add a new recipe!</h3>

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

            {/* User provides ingredients, with options to add more onClick */}
            <div className="Form-Ingredients">

            <div className="Ingredient-Name"> 
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

            <div className="Ingredient-Volume"> 
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
                <option value="1/4" />
                <option value="1/2" />
                <option value="3/4" />
                <option value="1" />
                <option value="1 1/4" />
                <option value="1 1/2" />
                <option value="1 3/4" />
                <option value="2" />
                <option value="2 1/4" />
                <option value="2 1/2" />
                <option value="2 3/4" />
                <option value="3" />
                <option value="3 1/4" />
                <option value="3 1/2" />
                <option value="" />
                <option value="" />
                <option value="" />
                <option value="" />
                <option value="" />
                <option value="" />
            </datalist>
            </div>

            <div className="Ingredient-Measurement"> 
            <label>Ingredient Measurement: </label>
            <input
                type="list"
                name="ingredient-measurement"
                placeholder="What scale?"
                list="measurements"
                value = {strMeasure1}
                onChange = {(e) => setStrMeasure1(e.target.value)}
            />
                <datalist id="measurements">
                    <option value="oz" />
                    <option value="ml" />
                    <option value="bar spoon" />
                    <option value="dashes" />
                    <option value="" />
                    <option value="" />
                </datalist>
            </div>
            
            <div className="Ingredient-Add"><i className="fa-regular fa-square-plus" /></div>
            
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
                placeholder="Where's it from?"
                list="source-types"
                value = {strVideo}
                onChange = {(e) => setStrVideo(e.target.value)}
            />
                <datalist id="source-types">
                    <option value="book" />
                    <option value="website" />
                    <option value="app" />
                    <option value="" />
                    <option value="" />
                    <option value="" />
                </datalist>
            </div>
            </div> 

            {/* User provides instructions, currently in paragraph format */}
            <div className="Form-Instructions">
                <label>Instructions: </label>
                <input
                    type="text"
                    name="instructions"
                    placeholder="How is it made?"
                    required
                />
            </div>

            <div className="Form-Additional">
                <label>Additional Info: </label>
                <input
                    type="text"
                    name="additional"
                    placeholder="How is it made?"
                    required
                />
            </div>

            {/* User clicks button to POST recipe to backend (yet to be built) */}
            <button>Add new cocktail!</button>
        </form>

        </div>
        </div>

    )
}