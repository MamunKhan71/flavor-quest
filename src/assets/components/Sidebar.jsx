import { useState } from "react";
import CurrentlyCooking from "./CurrentlyCooking";

const Sidebar = ({ cookingList, setCookingList }) => {
    const [currentCook, setCurrentCook] = useState([])

    const currentlyCook = cookId => {
        setCurrentCook([...currentCook, cookId])
        setCookingList(cookingList.filter(list => list.recipe_id != cookId.recipe_id))
    }
    return (
        <div>
            <div className="min-w-96 space-y-8 rounded-2xl border border-[#28282833] ">
                <div>
                    <div className="space-y-4 w-full mt-8 px-20">
                        <h1 className="text-center font-semibold lexend text-[#282828] text-2xl">Want to cook: {cookingList.length>0 && cookingList.length<10 ? <>0{cookingList.length}</> : <>{cookingList.length}</>}</h1>
                        <hr className="w-full" />
                    </div>
                    <div>
                        <div className="overflow-x-auto fira">
                            <table className="table">
                                <thead>
                                    <tr className="text-[#878787] fira text-base font-medium">
                                        <th></th>
                                        <th>Name</th>
                                        <th>Time</th>
                                        <th>Calories</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody className="text-[#282828b3] fira text-base">

                                    {
                                        cookingList.map(list => (
                                            <>
                                                <tr className="bg-[#28282808]">
                                                    <th>1</th>
                                                    <td>{list.recipe_name}</td>
                                                    <td>{list.preparing_time}</td>
                                                    <td>{list.calories}</td>
                                                    <td><button onClick={()=> currentlyCook(list)} className="btn rounded-full bg-[#0BE58A] px-4 text-[#150B2B] lexend">Preparing</button></td>
                                                </tr>
                                            </>
                                        ))
                                    }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <CurrentlyCooking currentCook={currentCook}></CurrentlyCooking>
        </div>
        </div >
    );
};

export default Sidebar;