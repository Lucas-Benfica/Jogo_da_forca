import palavras from "../palavras"
import Imagem from "./imagem";

export default function Jogo({palavra, setPalavra, selecionadas, setSelecionadas, qtdErros, resultado, setInGame}){

    function selecionarPalavra(){
        const posi = obterPosicaoAleatoria();
        setPalavra(palavras[posi]);
        setSelecionadas([]);
        setInGame(true);
    }
    
    return (
        <div className="jogo">
            <Imagem qtdErros={qtdErros} />
            <div className="containerPalavraJogo">
                <button className="choose" onClick={selecionarPalavra}>Escolher Palavra</button>
                <Palavra palavra={palavra} selecionadas={selecionadas} resultado={resultado}/>
            </div>
        </div>
    );
}
function Palavra({palavra, selecionadas, resultado}){
    if(palavra){
        const arrayLetras = palavra.split('');
        if(resultado === ''){
            return(
                <div className="palavraDaForca" >{arrayLetras.map((letra) => selecionadas.includes(letra) ? letra : "_ ")}</div>
            );
        }
        else if(resultado === 'perdeu'){
            return(
                <div className="palavraDaForca jogoPerdido" >{arrayLetras.map((letra) => letra)}</div>
            );
        }
        else if(resultado === 'ganhou'){
            return(
                <div className="palavraDaForca jogoGanho" >{arrayLetras.map((letra) => letra)}</div>
            );
        }
    }
}

function obterPosicaoAleatoria() {
    const posicaoAleatoria = Math.floor(Math.random() * palavras.length);
    
    return posicaoAleatoria;
}
