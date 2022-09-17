import React from "react";

function MagnificientEqualButton({operation}) {

    var calculClick = () => {
        operation()
    }

    return(
        <div>
            <button className="bg-orange-300 border-2 border-gray-900 rounded p-5 m-0.5" onClick={ () => calculClick() }>=</button>
        </div>
    )
}

export default MagnificientEqualButton;