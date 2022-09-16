import { toBeInTheDocument } from "@testing-library/jest-dom/dist/matchers";
import React from "react";

function Historic({value}) {
    // console.log(typeof value)
    // console.log(value[0].calcul)

    return(
        <div>
            <p>Historique des résultats</p>
            <ul>
                {            
                    Object.keys(value).map((key, index) => {
                        console.log(value[key].calcul);
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