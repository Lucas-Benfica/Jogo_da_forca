import palavras from "../palavras"
import Imagem from "./imagem";
import Palavra from "./palavra";

export default function Jogo({palavra, setPalavra, selecionadas, setSelecionadas, qtdErros, resultado, setResultado, setQtdErros, setQtdAcertos, setInGame}){

    function selecionarPalavra(){
        const posi = obterPosicaoAleatoria();
        console.log(palavras[posi]);
        setPalavra(palavras[posi]);
        setSelecionadas([]);
        setInGame(true);
        setQtdErros(0);
        setQtdAcertos(0);
        setResultado('');
    }
    
    return (
        <div className="jogo">
            <Imagem qtdErros={qtdErros} resultado={resultado} />
            <div className="containerPalavraJogo">
                <button className="choose" onClick={selecionarPalavra} data-test="choose-word" >Escolher Palavra</button>
                <Palavra palavra={palavra} selecionadas={selecionadas} resultado={resultado}/>
            </div>
        </div>
    );
}

function obterPosicaoAleatoria() {
    const posicaoAleatoria = Math.floor(Math.random() * palavras.length);
    
    return posicaoAleatoria;
}
