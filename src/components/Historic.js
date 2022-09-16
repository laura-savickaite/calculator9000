import { toBeInTheDocument } from "@testing-library/jest-dom/dist/matchers";
import React from "react";

function Historic({value}) {
    // console.log(typeof value)
    // console.log(value[0].calcul)

    return(
        <div>
            <p className="text-2xl font-bold underline font-mono">Historique des résultats</p>
            <ul>
                {            
                    Object.keys(value).map((key, index) => {
                       return(
                            <li key={index}>
                                {value[key].calcul} = {value[key].résultat}
                            </li>
                            ) 
                    })
                }
            </ul>            
        </div>

    )
}

export default Historic;