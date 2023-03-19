import "./addNewRecipeForm.css"

export function AddNewRecipeForm(){
    return (
        <form className="AddNewRecipeForm">

            {/* User provides name of the cocktail */}
            <label>Cocktail Name: </label>
            <input
                type="text"
                name="name"
                placeholder="What's it called?"
                required
            />

            {/* User provides recommended glassware from drop-down list */}
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
            
            {/* User provides ingredients, with options to add more onClick */}
            <label>Ingredient Name: </label>
            <input
                type="text"
                name="ingredient-name"
                placeholder="Ingredient #1"
                required
            />

            <label>Ingredient Volume: </label>
            <input
                type="list"
                name="ingredient-volume"
                placeholder="What scale?"
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

            {/* User provides instructions, currently in paragraph format */}
            <label>Instructions: </label>
            <input
                type="text"
                name="instructions"
                placeholder="How is it made?"
                required
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
    )
}