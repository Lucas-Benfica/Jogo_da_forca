
export default function LetraBotton({ letra, inGame, selecionadas, setSelecionadas, palavra, qtdErros, setQtdErros, qtdAcertos, setQtdAcertos, resultado, setResultado }) {
    function selected(letra) {
        
        let letrasSelecionadas = [...selecionadas, letra];
        setSelecionadas(letrasSelecionadas);

        let erros = qtdErros;
        let acertos = qtdAcertos;

        const arrayLetras = palavra.split('');
        
        if (!arrayLetras.includes(letra)) {
            if (qtdErros !== 6) {
                erros = qtdErros + 1;
                setQtdErros(erros);
            }
        } 
        else {
            for (let i = 0; i < arrayLetras.length; i++) {
                if (letra === arrayLetras[i]) {
                    acertos++;
                }
            }
            setQtdAcertos(acertos);
        }

        verificarVitoriaDerrota(erros, acertos, arrayLetras, setResultado);
    }

    return (
        <button key={letra} data-test="letter"
            className={((selecionadas.includes(letra)) || (!inGame) || (resultado !== '')) ? "letras selecionado" : "letras naoSelecionado"}
            onClick={() => selected(letra)}
            disabled={((selecionadas.includes(letra)) || (!inGame) || (resultado !== '')) ? true : false} > {letra}
        </button>
    );
}

function verificarVitoriaDerrota(qtdErros, acertos, arrayLetras, setResultado) {
    if (qtdErros === 6) {
        setResultado('perdeu');
    }
    else if (acertos === arrayLetras.length) {
        setResultado('ganhou');
    }
}