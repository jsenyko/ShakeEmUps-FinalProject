import { Ingredient } from "./Ingredient";
import React, { useState } from "react";

interface IIngredientProps {
    ingredient: Ingredient
}

export function Ingredient(props: IIngredientProps){
    const { ingredient } = props;
    let i = 1;

    const [ strIngredient, setStrIngredient ] = useState("");
    const [ strMeasure, setStrMeasure] = useState("");

    return (
        <div className="Form-Ingredient">

                <div className="Ingredient-Name" id="strIngredient"> 
                <label>Ingredient Name: </label>
                <input
                    type="text"
                    name="ingredient-name"
                    placeholder="Ingredient #1"
                    required
                    value = {strIngredient}
                    onChange = {(e) => setStrIngredient(e.target.value)}
                />
                </div>

                <div className="Ingredient-Volume oz" id="strMeasure1"> 
                <label>Ingredient Volume: </label>
                <input
                    type="list"
                    name="ingredient-volume"
                    placeholder="How much?"
                    list="volumes"
                    value = {strMeasure}
                    onChange = {(e) => setStrMeasure(e.target.value)}
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
    )
}