import { useState } from "react";

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

export default function Letras({palavra, selecionadas, setSelecionadas, qtdErros, setQtdErros, resultado, setResultado, inGame, qtdAcertos, setQtdAcertos}){
    const [click, setClick] = useState(false);

    return (
        <div className="containerLetras">
            {alfabeto.map((letra) => <LetraBotton key={letra} 
            letra={letra} inGame={inGame}  
            selecionadas={selecionadas} setSelecionadas={setSelecionadas} 
            palavra={palavra} qtdErros={qtdErros} setQtdErros={setQtdErros}
            qtdAcertos={qtdAcertos} setQtdAcertos={setQtdAcertos} 
            resultado={resultado} setResultado={setResultado}/> )}
        </div>
    );

}

function LetraBotton({letra, inGame, selecionadas, setSelecionadas, palavra, qtdErros, setQtdErros, qtdAcertos, setQtdAcertos, resultado, setResultado}){
    function selected(letra){
        let letrasSelecionadas = [...selecionadas, letra];
        setSelecionadas(letrasSelecionadas);
        console.log(letrasSelecionadas);
        let erros = qtdErros;
        let acertos = qtdAcertos;

        const arrayLetras = palavra.split('');
        if(!arrayLetras.includes(letra)){
            if(qtdErros !== 6){
                erros = qtdErros + 1;
                setQtdErros(erros);
            }     
        }else{
            for(let i=0; i < arrayLetras.length; i++){
                if(letra === arrayLetras[i]){
                    acertos++;
                }
            }
            setQtdAcertos(acertos);
        }
        
        verificarVitoriaDerrota(erros, acertos, arrayLetras, setResultado);
    }
    
    return (
        <button key={letra} 
        className={((selecionadas.includes(letra)) || ( !inGame ) || (resultado !== '')) ? "letras selecionado" : "letras naoSelecionado"} 
        onClick={() => selected(letra)} 
        disabled={((selecionadas.includes(letra)) || ( !inGame ) || (resultado !== '')) ? true : false} > {letra}          
        </button>
        );
}

function verificarVitoriaDerrota(qtdErros, acertos, arrayLetras, setResultado){
    if(qtdErros === 6){
        setResultado('perdeu');
    } 
    else if(acertos === arrayLetras.length){
        setResultado('ganhou');
    }
}