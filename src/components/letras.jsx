import { useState } from "react";

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

export default function Letras({palavra, selecionadas, setSelecionadas, qtdErros, resultado, setResultado, inGame}){
    const [click, setClick] = useState(false);

    return (
        <div className="containerLetras">
            {alfabeto.map((letra) => <LetraBotton key={letra} letra={letra} inGame={inGame}  selecionadas={selecionadas} setSelecionadas={setSelecionadas} /> )}
        </div>
    );

}

function LetraBotton({letra, inGame, selecionadas, setSelecionadas}){

    function selected(letra){
        let letrasSelecionadas = [...selecionadas, letra];
        setSelecionadas(letrasSelecionadas);
        console.log(letrasSelecionadas);
    }
    // botaoDesabilitado
    return (
        <button key={letra} 
        className={((selecionadas.includes(letra)) || ( !inGame ) ) ? "letras selecionado" : "letras naoSelecionado"} 
        onClick={() => selected(letra)} 
        disabled={((selecionadas.includes(letra)) || ( !inGame ) ) ? true : false} > {letra}          
        </button>
        );
}
