import { useState } from "react";
import forca0 from "../assets/forca0.png"
import palavras from "../palavras"

export default function Jogo({palavra, setPalavra, selecionadas, setSelecionadas}){

    function selecionarPalavra(){
        const posi = obterPosicaoAleatoria();
        setPalavra(palavras[posi]);
        setSelecionadas('');
    }
    
    return (
        <div className="jogo">
            <img src={forca0} />
            <div className="containerPalavraJogo">
                <button className="choose" onClick={selecionarPalavra}>Escolher Palavra</button>
                <Palavra palavra={palavra} selecionadas={selecionadas} />
            </div>
        </div>
    );
}
function Palavra({palavra, selecionadas}){
    if(palavra){
        const arrayLetras = palavra.split('');        

        return(
            <div className="palavraDaForca" >{arrayLetras.map((letra) => selecionadas.includes(letra) ? letra : "_ ")}</div>
        );
    }
}

function obterPosicaoAleatoria() {
    const posicaoAleatoria = Math.floor(Math.random() * palavras.length);
    
    return posicaoAleatoria;
}
