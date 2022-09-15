import React from "react";

function Save({save}) {

    var clickedSave = () => {
        save()
    }

    return(
        <button onClick={ () => clickedSave() }>Save</button>
    ) 
}

export default Save;