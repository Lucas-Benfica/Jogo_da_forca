import { useState } from "react";


export default function Chute({palavra, setResultado, resultado, inGame}){
    let [chute, setChute] = useState('');

    return (
        <div  className="containerChute" >
            <h1>Já sabe a palavra?</h1>
            <input type="text" value={chute} onChange={(event) => setChute(event.target.value)}/>
            <button 
                onClick={()=> verificarChute(chute, palavra, setResultado, setChute)}
                disabled={( (!inGame) || (resultado !== '' || chute === '')) ? true : false}
            >
                Chutar
            </button>
        </div>
    );
}
function verificarChute(chute, palavra, setResultado, setChute){
    if(chute === palavra){
        setResultado('ganhou');
    }else{
        setResultado('perdeu');
    }
    setChute('');
}