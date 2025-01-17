import PropTypes from 'prop-types';
const Recipe = ({ recipe, setCooking }) => {
    const {recipe_image, short_description, recipe_name, ingredients, preparing_time, calories} = recipe
    return (
            <div className="card bg-base-100 border border-[#28282833]">
                <figure className="px-4 pt-4">
                    <img src={recipe_image} alt="Shoes" className="rounded-xl h-48 w-full object-cover" />
                </figure>
                <div className="card-body items-center text-left w-full px-4 pt-4">
                    <h2 className="text-xl font-semibold text-[#282828] text-left w-full lexend">{recipe_name}</h2>
                    <p className="fira text-[#878787]">{short_description}</p>
                    <hr className="w-full" />
                    <div className="w-full space-y-4">
                        <p className="text-lg text-[#282828] lexend font-medium">Ingredients: <span>{ingredients.length}</span></p>
                        <ul className="list-disc list-inside text-[#878787] fira text-lg">
                            {
                                ingredients.map(ingredient => <li key={ingredient.recipe_id}>{ingredient}</li>)
                            }
                        </ul>
                        <hr className="w-full" />
                        <div className="flex gap-4 items-center justify-center lg:justify-start">
                            <div className="flex gap-2 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <g clipPath="url(#clip0_22_7)">
                                        <path d="M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 10.8181 20.7672 9.64778 20.3149 8.55585C19.8626 7.46392 19.1997 6.47177 18.364 5.63604C17.5282 4.80031 16.5361 4.13738 15.4442 3.68508C14.3522 3.23279 13.1819 3 12 3C10.8181 3 9.64778 3.23279 8.55585 3.68508C7.46392 4.13738 6.47177 4.80031 5.63604 5.63604C4.80031 6.47177 4.13738 7.46392 3.68508 8.55585C3.23279 9.64778 3 10.8181 3 12Z" stroke="#282828" strokeOpacity="0.8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12 12H15.5" stroke="#282828" strokeOpacity="0.8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12 7V12" stroke="#282828" strokeOpacity="0.8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_22_7">
                                            <rect width="24" height="24" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <span className="text-[#282828cc] text-base fira">{preparing_time}</span>
                            </div>
                            <div className="flex gap-2 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <g clipPath="url(#clip0_34_2)">
                                        <path d="M12 12C14 9.04 12 5 11 4C11 7.038 9.227 8.741 8 10C6.774 11.26 6 13.24 6 15C6 16.5913 6.63214 18.1174 7.75736 19.2426C8.88258 20.3679 10.4087 21 12 21C13.5913 21 15.1174 20.3679 16.2426 19.2426C17.3679 18.1174 18 16.5913 18 15C18 13.468 16.944 11.06 16 10C14.214 13 13.209 13 12 12Z" stroke="#282828" strokeOpacity="0.8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_34_2">
                                            <rect width="24" height="24" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <span className="text-[#282828cc] text-base fira">{calories}</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center lg:justify-start w-full mt-4">
                        <button onClick={()=> setCooking(recipe)} className="btn rounded-full px-6 bg-[#0be58a] text-lg lexend font-medium">Want to Cook</button>
                    </div>
                </div>
            </div>
    );
};


Recipe.propTypes = {
    recipe : PropTypes.object,
    setCooking : PropTypes.func,
}
export default Recipe;