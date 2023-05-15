import { useState } from "react";
import LetraBotton from "./letra";

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

export default function Letras({ palavra, selecionadas, setSelecionadas, qtdErros, setQtdErros, resultado, setResultado, inGame, qtdAcertos, setQtdAcertos }) {

    return (
        <div className="containerLetras">
            {alfabeto.map((letra) => <LetraBotton key={letra}
                letra={letra} inGame={inGame}
                selecionadas={selecionadas} setSelecionadas={setSelecionadas}
                palavra={palavra} qtdErros={qtdErros} setQtdErros={setQtdErros}
                qtdAcertos={qtdAcertos} setQtdAcertos={setQtdAcertos}
                resultado={resultado} setResultado={setResultado}
            />)}
        </div>
    );

}

