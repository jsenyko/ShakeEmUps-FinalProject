import "./addNewRecipeForm.css"
import { useState } from "react";

export function AddNewRecipeForm(){

    const [caretDirection, changeCaretDirection] = useState<Boolean>(false)
    const flipCaret = () => {
        changeCaretDirection(!caretDirection);
    };

    return (
        <div className={caretDirection? "AddNewRecipe-Open" : "AddNewRecipe-Closed"}>
        <h1>Find a new favorite?</h1>
        <h3>Add it here!</h3>
        <div className="Caret" onClick={flipCaret}><i className={caretDirection? "fa-regular fa-square-caret-up" : "fa-solid fa-square-caret-down"}></i><p>{caretDirection? "Close Form" : "Open Form"}</p></div>

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
            />
            </div>

            {/* User provides recommended glassware from drop-down list */}
            <div className="Form-Glass">
            <label>Glass Used: </label>

            <input
                type="list"
                name="glasses"
                placeholder="Recommended glass?"
                required
                list="glasses"
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
                />
                </div>
            
            <div className="Ingredient-Volume">
                <label>Ingredient Volume: </label>
                <input
                    type="list"
                    name="ingredient-volume"
                    placeholder="How much?"
                    required
                    list="volumes"
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
                    required
                    list="measurements"
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
            <label>Source Type: </label>
            <input
                type="list"
                name="source-type"
                placeholder="Where's it from?"
                required
                list="source-types"
            />
                <datalist id="source-types">
                    <option value="book" />
                    <option value="website" />
                    <option value="app" />
                    <option value="" />
                    <option value="" />
                    <option value="" />
                </datalist>

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
    )
}