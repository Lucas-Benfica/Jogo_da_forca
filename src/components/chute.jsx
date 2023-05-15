import { useState } from "react";


export default function Chute({palavra, setResultado, resultado, inGame}){
    let [chute, letChute] = useState('');

    return (
        <div  className="containerChute" >
            <h1>Já sabe a palavra?</h1>
            <input type="text" onChange={(event) => letChute(event.target.value)}/>
            <button 
                onClick={()=> verificarChute(chute, palavra, setResultado)}
                disabled={( (!inGame) || (resultado !== '' || chute === '')) ? true : false}
            >
                Chutar
            </button>
        </div>
    );
}
function verificarChute(chute, palavra, setResultado){
    if(chute === palavra){
        setResultado('venceu');
    }else{
        setResultado('perdeu');
    }
}