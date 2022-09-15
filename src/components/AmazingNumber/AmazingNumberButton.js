import React from "react";


function AmazingNumberButton({value, handleClickNumberParent}) {


    var handleClickNumberEnfant = () => {
        //ici on précise bien que c'est une fonction !!!
        // Ce qu'il se passe : je passe en props à mon component enfant, une fonction de traitement de données. Une fois ceci fait, je lui dis que lorsque tu cliques, tu me réalises une fonction. Mais cette fonction-ci, appelles ma fonction mère (idée de callback)
        //C'est dans la fonction mère que le traitement se réalise = si je veux récupérer la valeur de mon bouton par exemple, je reprends la props originale de value et je la passe en argument de la fonction mère appelée, dans ce cas, dans la fonction mère je fais attention que je lui demande bien un argument !!!
        handleClickNumberParent(value)
    }


    return (
        <div>
            <button onClick={ () => handleClickNumberEnfant() } className="buttonsNumber">{value}</button>
        </div>    
    )

}

// attention à ne pas exporter AmazingNumberButton() !!!! pck on ne peut importer que des strings, array -> ici exporte le RESULTAT d'une fonction et pas cette dernière donc !!!
export default AmazingNumberButton;