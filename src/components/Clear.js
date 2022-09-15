import React from "react";

function Clear({clear}) {

    var clickedClear = () => {
        clear()
    }

    return (
    <button onClick={ () => clickedClear() }>C</button>
    )      
    
}

export default Clear;