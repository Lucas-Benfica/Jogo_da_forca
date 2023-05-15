export default function Palavra({palavra, selecionadas, resultado}){
    if(palavra){
        const arrayLetras = palavra.split('');
        if(resultado === ''){
            return(
                <div className="palavraDaForca" data-test="word">{arrayLetras.map((letra) => selecionadas.includes(letra) ? letra : " _ ")}</div>
            );
        }
        else if(resultado === 'perdeu'){
            return(
                <div className="palavraDaForca jogoPerdido" data-test="word">{arrayLetras.map((letra) => letra)}</div>
            );
        }
        else if(resultado === 'ganhou'){
            return(
                <div className="palavraDaForca jogoGanho" data-test="word">{arrayLetras.map((letra) => letra)}</div>
            );
        }
    }
}