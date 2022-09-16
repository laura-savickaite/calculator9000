import React from "react";

function Historic({value}) {
    return(
        <div>
            <p>Historique des résultats</p>
            <ul>
                <li><p>{value}</p></li>
            </ul>            
        </div>

    )
}

export default Historic;