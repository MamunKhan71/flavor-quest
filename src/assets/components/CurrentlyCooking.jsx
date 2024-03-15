const CurrentlyCooking = () => {
    return (
        <div className="w-full">
            <div className="space-y-4 w-full px-12">
                <h1 className="text-center font-semibold lexend text-[#282828] text-2xl">Currently cooking: 02</h1>
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
                            <tr className="bg-[#28282808]">
                                <th>1</th>
                                <td>Chicken Caesar Salad</td>
                                <td>20 minutes</td>
                                <td>400 calories</td>
                            </tr>
                            <tr className="bg-[#28282808]">
                                <th>1</th>
                                <td>Chicken Caesar Salad</td>
                                <td>20 minutes</td>
                                <td>400 calories</td>
                            </tr>
                            <tr className="lexend font-base font-medium text-[#282828cc]">
                                <th></th>
                                <td></td>
                                <td>Total Time = 20 minutes</td>
                                <td>Total Calories = 400 calories</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CurrentlyCooking;