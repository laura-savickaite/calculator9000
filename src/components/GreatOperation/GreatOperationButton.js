import React from "react";


function GreatOperationButton({operator, handleClickOperatorParent}) {

    var handleClickOperatorEnfant = () => {
        handleClickOperatorParent(operator)
    }

    return(
        <div>
            <button className="bg-orange-100 border-2 border-gray-900 rounded p-3 m-0.5" onClick={ () => handleClickOperatorEnfant() }>{operator}</button>
        </div>
    )
}

export default GreatOperationButton;