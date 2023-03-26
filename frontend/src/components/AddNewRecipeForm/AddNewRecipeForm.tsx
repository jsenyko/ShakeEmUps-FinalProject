import "./addNewRecipeForm.css"
import DrinkModel from "../models/DrinkModel"
import { FormEvent, useEffect, useState } from "react";
import { addDrink } from "../../services/RecipeService";

interface Props {
    initialTo?: string;
    onAdd?: (drink: DrinkModel) => void
}



export function AddNewRecipeForm( {initialTo = "", onAdd}: Props){

    const [ strDrink, setStrDrink ] = useState(initialTo);
    const [ strGlass, setGlass ] = useState("");
    const [ strTags, setTags ] = useState("");
    const [ stVideo, setVideo ] = useState("");
    const [ strIBA, setIBA ] = useState("");
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
    const [ volume1, setVolume1 ] = useState("");
    const [ volume2, setVolume2 ] = useState("");
    const [ volume3, setVolume3 ] = useState("");
    const [ volume4, setVolume4 ] = useState("");
    const [ volume5, setVolume5 ] = useState("");
    const [ volume6, setVolume6 ] = useState("");
    const [ volume7, setVolume7 ] = useState("");
    const [ volume8, setVolume8 ] = useState("");
    const [ volume9, setVolume9 ] = useState("");
    const [ volume10, setVolume10 ] = useState("");
    const [ volume11, setVolume11 ] = useState("");
    const [ volume12, setVolume12 ] = useState("");
    const [ volume13, setVolume13 ] = useState("");
    const [ volume14, setVolume14 ] = useState("");
    const [ volume15, setVolume15 ] = useState("");
    const [ strMeasure1, setStrmeasure1] = useState("")
    const [ strMeasure2, setStrmeasure2] = useState("")
    const [ strMeasure3, setStrmeasure3] = useState("")
    const [ strMeasure4, setStrmeasure4] = useState("")
    const [ strMeasure5, setStrmeasure5] = useState("")
    const [ strMeasure6, setStrmeasure6] = useState("")
    const [ strMeasure7, setStrmeasure7] = useState("")
    const [ strMeasure8, setStrmeasure8] = useState("")
    const [ strMeasure9, setStrmeasure9] = useState("")
    const [ strMeasure10, setStrmeasure10] = useState("")
    const [ strMeasure11, setStrmeasure11] = useState("")
    const [ strMeasure12, setStrmeasure12] = useState("")
    const [ strMeasure13, setStrmeasure13] = useState("")
    const [ strMeasure14, setStrmeasure14] = useState("")
    const [ strMeasure15, setStrmeasure15] = useState("")
    const [ strInstructions, setStrInstructions] = useState("")
    const [ addtionalInfo, setadditionalInfo] = useState("")
   
   
   
  
    useEffect(() => setStrDrink(initialTo), [initialTo]);
  
    function handleSubmit(e: FormEvent) {
      e.preventDefault();
      console.log(strGlass);
      addDrink({
        strDrink, 
        strGlass, 
        strIngredient1,
        volume1: Number(volume1),
        strMeasure1,
        strInstructions,
        addtionalInfo  
      }).then(data => {
        console.log(data);
      });
    //   setStrDrink(initialTo);
    //   setGlass("");
    //   setTags("");
    }


    return (
        <div className="AddNewRecipe" onSubmit={handleSubmit}>
        <h3>Let's add a new recipe!</h3>
        <form className="AddNewRecipe-Form">

            {/* User provides name of the cocktail */}
            <label className="Form-Name">Cocktail Name: </label>
            <input
                type="text"
                name="name"
                placeholder="What's it called?"
                required
                value = {strDrink}
                onChange = {(e) => setStrDrink(e.target.value)}
            />

            {/* User provides recommended glassware from drop-down list */}
            <label className="Form-Glass">Glass Used: </label>

            <input
                type="list"
                name="glasses"
                placeholder="Recommended glass?"
                required
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
            
            {/* User provides ingredients, with options to add more onClick */}
            <div className="Cocktail-Ingredients">

            <label className="Ingredient-Name">Ingredient Name: </label>
            <input
                type="text"
                name="ingredient-name"
                placeholder="Ingredient #1"
                required
                value = {strIngredient1}
                onChange = {(e) => setStrIngredient1(e.target.value)}
            />
            
            <label className="Ingredient-Volume">Ingredient Volume: </label>
            <input
                type="list"
                name="ingredient-volume"
                placeholder="How much?"
                required
                list="volumes"
                value = {volume1}
                onChange = {(e) => setVolume1(e.target.value)}
                
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


            <label className="Ingredient-Measurement">Ingredient Measurement: </label>
            <input
                type="list"
                name="ingredient-measurement"
                placeholder="What scale?"
                required
                list="measurements"
                value = {strMeasure1}
                onChange = {(e) => setStrmeasure1(e.target.value)}
            />
                <datalist id="measurements">
                    <option value="oz" />
                    <option value="ml" />
                    <option value="bar spoon" />
                    <option value="dashes" />
                    <option value="" />
                    <option value="" />
                </datalist>
            
            <button className="Ingredient-Add">Add another ingredient</button>
            
            </div>

            {/* User provides instructions, currently in paragraph format */}
            <label>Instructions: </label>
            <input
                type="text"
                name="instructions"
                placeholder="How is it made?"
                required
                value = {strInstructions}
                onChange = {(e) => setStrInstructions(e.target.value)}
            />

            {/* User provides where they found the cocktail */}
            {/* Options will be provided for Book, URL, etc. */}
            {/* Based on selection the Book Source will change - Book Name/Page #, URL, App Name */}
            <label>Source Type: </label>
            <input
                type="list"
                name="source-type"
                placeholder="Where's it from?"
                required
                list="source-types"
                value = {addtionalInfo}
                onChange = {(e) => setadditionalInfo(e.target.value)}
            />
                <datalist id="source-types">
                    <option value="book" />
                    <option value="website" />
                    <option value="app" />
                    <option value="" />
                    <option value="" />
                    <option value="" />
                </datalist>

            {/* User clicks button to POST recipe to backend (yet to be built) */}
            <button>Add new cocktail!</button>
        </form>

        </div>
    )
}


