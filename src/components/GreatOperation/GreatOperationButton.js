import React from "react";


function GreatOperationButton({operator, handleClickOperatorParent}) {

    var handleClickOperatorEnfant = () => {
        handleClickOperatorParent(operator)
    }

    return(
        <div>
            <button onClick={ () => handleClickOperatorEnfant() }>{operator}</button>
        </div>
    )
}

export default GreatOperationButton;