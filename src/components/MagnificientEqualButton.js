import React from "react";

function MagnificientEqualButton({operation}) {

    var calculClick = () => {
        operation()
    }

    return(
        <div>
            <button onClick={ () => calculClick() }>=</button>
        </div>
    )
}

export default MagnificientEqualButton;