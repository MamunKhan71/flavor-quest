const CurrentlyCooking = ({ currentCook }) => {
    return (
        <div className="w-full">
            <div className="space-y-4 w-full px-12">
                <h1 className="text-center font-semibold lexend text-[#282828] text-2xl">Currently cooking: {currentCook.length>0 && currentCook.length<10 ? <>0{currentCook.length}</> : <>{currentCook.length}</>}</h1>
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
                            </tr>
                        </thead>
                        <tbody className="text-[#282828b3] fira text-base">
                            {
                                currentCook.map(cooking => (
                                    <>
                                        <tr className="bg-[#28282808]">
                                            <th>1</th>
                                            <td>{cooking.recipe_name}</td>
                                            <td>{cooking.preparing_time}</td>
                                            <td>{cooking.calories}</td>
                                        </tr>
                                    </>
                                ))
                            }
                            <tr className="lexend font-base font-medium text-[#282828cc]">
                                <th></th>
                                <td></td>
                                <td>Total Time = {
                                    currentCook.reduce((acc, curr) => acc + parseInt(curr.preparing_time), 0)
                                }<span> minutes</span></td>
                                <td>Total Calories = {
                                    currentCook.reduce((acc, curr) => acc + parseInt(curr.calories), 0)
                                }<span> calories</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CurrentlyCooking;