import React from "react";

function Save({save}) {

    var clickedSave = () => {
        save()
    }

    return(
        <button className="border-2 border-dashed border-orange-400 rounded p-3 m-0.5" onClick={ () => clickedSave() }>Save</button>
    ) 
}

export default Save;