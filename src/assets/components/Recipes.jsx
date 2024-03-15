import { useState } from "react";
import Sidebar from "./Sidebar";
import { useEffect } from "react";
import Recipe from "./Recipe";

const Recipes = () => {
    const [cookingList, setCookingList] = useState([]);

    const setCooking = cookingItem => {
        setCookingList([...cookingList, cookingItem])
    }
    

    const [recipes, setRecipe] = useState([]);
    useEffect(() => {
        fetch('recipe_data.json')
            .then(res => res.json())
            .then(data => setRecipe(data))
    }, [])
    return (
        <div className="mt-24">
            <div className="lexend space-y-6">
                <h1 className="text-center text-4xl font-semibold text-[#150B2B]">Our Recipes</h1>
                <p className="text-center px-56 text-[#150b2b99] leading-7">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
                <div className="flex gap-6 mt-12">
                    <div>
                        <div className="grid grid-cols-2 gap-6">
                            {
                                recipes.map(recipe => <Recipe key={recipe.recipe_id} setCooking={setCooking} recipe={recipe}></Recipe>)
                            }
                        </div>
                    </div>
                    <Sidebar cookingList={cookingList} setCookingList={setCookingList}></Sidebar>
                </div>
            </div>
        </div>
    );
};

export default Recipes;