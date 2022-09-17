import React from "react";

function Clear({clear}) {

    var clickedClear = () => {
        clear()
    }

    return (
    <button className="bg-orange-200 border-2 border-gray-900 rounded p-3 m-0.5" onClick={ () => clickedClear() }>C</button>
    )      
    
}

export default Clear;