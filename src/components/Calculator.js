import React, { useEffect, useState } from "react";
import BeautifulScreen from "./BeautifulScreen";
import AmazingNumberButton from './AmazingNumber/AmazingNumberButton'
import GreatOperationButton from "./GreatOperation/GreatOperationButton";
import {Operators} from './Operators'
import MagnificientEqualButton from './MagnificientEqualButton';
import ItSOverNineThousand from "./ItSOverNineThousand";
import Clear from "./Clear";
import Save from "./Save";
import Historic from "./Historic";


function Calculator() {

    //??? CHANGEMENT D'ETAT DANS LE SCREEN
    //à voir les states comme des "variables" : on y stocke ce que l'on veut montrer pas comme un tout mais tous les petits trucs qu'on veut montrer.
    //on veut montrer : le premier nombre, mais aussi l'opérateur, et le second nombre et le résultat -> dans n'importe quel code procédural avec langage classique, j'utiliserai des variables pour ce faire; 
    //ce n'est pas juste "une seule image"
    const [valeurFirst, setValeurFirst] = useState("")
    const [valeurSecond, setValeurSecond] = useState("")
    const [operatoR, setOperator] = useState("")
    const [result, setResult] = useState("")
    const [data, setData] = useState("")
    
    let handleClickNumberParent = (valeur) => {
        //le nombre premier sera toujours celui tapé, dans la seconde partie, dès qu'on clique sur un opérateur on le fait migré en "second nombre" qu'on ne touche donc pas
        var value = "" + valeur
        var numberOne = valeurFirst + value
        setValeurFirst(numberOne)  
        console.log(valeurFirst)
    }

    let handleClickOperatorParent = (operator) => {
        //s'il n'y a pas de résultat, tu remplaces le second nombre par le premier tapé : c'est le premier qui trouvera toujours ce qui est tapé. 
        //SINON le second nombre est le résultat du premier calcul
        if (valeurFirst === "") {
            setValeurFirst("") 
        }
        else if(result === "") {
            setOperator(operator)
            setValeurSecond(valeurFirst)
            setValeurFirst("")            
        }
        else {
            setResult("") 
            setOperator(operator)
            setValeurSecond(result)
            setValeurFirst("")  
        }
    }

    let calcul = () => {

        let firstNumber = parseInt(valeurFirst)
        let secondNumber = parseInt(valeurSecond)

            if(operatoR === "/") {
                setResult(secondNumber / firstNumber)
            }
            else if (operatoR === "+") {
                setResult(secondNumber + firstNumber)
            }
            else if (operatoR === "-") {
                setResult(secondNumber - firstNumber)
            }
            else {
                setResult(secondNumber * firstNumber)
            }

        // console.log(result)
    }

    let clear = () => {
        setResult("")
        setOperator("")
        setValeurFirst("")
        setValeurSecond("")
    }
   
    


var calculEntier = valeurSecond + operatoR + valeurFirst
let save = () => {
    if (result !== "") {
        fetch('http://localhost:8080/calculator9000/PHP/server.php',{
            method: 'POST',
            body: JSON.stringify({résultat: result, calcul: calculEntier})
        })
        .then ((response) => response.text())
        .then ((response) => {
            console.log(response)
            window.location.reload(false);
        })
        .catch((error) => console.log(error))         
    }
}


    //??? GET TOUS LES RESULTATS PRECEDENTS
    useEffect(() => {
        async function catchData () {
            await fetch('http://localhost:8080/calculator9000/PHP/getdata.php')
            .then ((response) => response.json())
            .then ((response) => {
                setData(response)
            })
            .catch((error) => console.log(error)) 
        } 
        catchData()
}, [])





    //??? MULTIPLICATION DE MON BOUTON NUMBER
    var ButtonNumbers = [];

    for(let i = 0; i <= 9; i++){
        //!!! on ne peut pas mettre de onClick dans les composants : un composant est un "tout" ce n'est pas seulement le rendu
        //si on met {handClickNumberParent()} ça va lancer la fonction directement, or, ce n'est pas ce que l'on souhaite
        ButtonNumbers.push(<AmazingNumberButton handleClickNumberParent={handleClickNumberParent} key={i} value={i} />);
    }    

    //??? MON RETURN
    return (
            <main className="mt-20">

                <div>
                    {
                        result > 9000 ? <ItSOverNineThousand /> : null
                    }
                </div>

                <article className="flex flex-row justify-around pr-5">  
                    <section className="w-96 border-2 border-gray-500 rounded p-5 font-mono">
                        <div>
                        {console.log(result)}
                            <BeautifulScreen keypress={
                                result === "" ? valeurSecond + operatoR + valeurFirst : result
                                } />
                        </div>   
                    
                        <div className="flex flex-wrap justify-around">
                            {ButtonNumbers}

                        {/* You have to use your switch statement in a function. 
                        Le for ne marche pas à l'intérieur du return contrairement à map*/}
                            {            
                                Operators.map((operator, index) => {
                                    {/* attention ma value renvoie un objet !!!!!!! c'est pour ceci qu'après je dois préciser que c'est operator, c'est un json il ne faut pas oublier */}
                                    {/* console.log(value) */}
                                    return (
                                        <GreatOperationButton  handleClickOperatorParent={handleClickOperatorParent} key={index} operator={operator.operator} />
                                    )
                                }
                                )
                            } 
                            <Clear clear={clear}/> 

                            <MagnificientEqualButton operation={calcul} /> 

                            <Save save={save} />
                        </div>  
                    </section>
                    
                    <section className="bg-orange-50 text-center">
                        <Historic value={data} />
                    </section>  
                </article>   
        </main>
    )

}


export default Calculator;