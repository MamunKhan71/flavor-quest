import { useState } from "react";
import Sidebar from "./Sidebar";
import { useEffect } from "react";
import Recipe from "./Recipe";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Recipes = () => {
    const [cookingList, setCookingList] = useState([]);

    const setCooking = cookingItem => {

        if (cookingList.includes(cookingItem)) {
            toast("This item is already in your cooking list.");
        } else {
            setCookingList([...cookingList, cookingItem])
        }
    }


    const [recipes, setRecipe] = useState([]);
    useEffect(() => {
        fetch('recipe_data.json')
            .then(res => res.json())
            .then(data => setRecipe(data))
    }, [])
    return (
        <div className="mt-8 lg:mt-24 px-4 lg:px-0 mb-8">
            <div className="lexend space-y-4 lg:space-y-6">
                <h1 className="text-center text-2xl lg:text-4xl font-semibold text-[#150B2B]">Our Recipes</h1>
                <p className="text-center lg:px-56 text-[#150b2b99] leading-7">Delve into a Treasury of Expertly Crafted Recipes, Designed to Ignite Your Culinary Passion and Elevate Your Cooking Mastery to New Heights!</p>
                <div className="flex flex-col lg:flex-row gap-6 mt-12">
                    <div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                            {
                                recipes.map(recipe => <Recipe key={recipe.recipe_id} setCooking={setCooking} recipe={recipe}></Recipe>)
                            }
                        </div>
                    </div>
                    <Sidebar cookingList={cookingList} setCookingList={setCookingList}></Sidebar>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Recipes;