import Jogo from "./components/jogo"
import Letras from "./components/letras"
import { useState } from "react";

function App() {
  let [palavra, setPalavra] = useState('');
  let [selecionadas, setSelecionadas] = useState([]);
  let [resultado, setResultado] = useState('');
  let [qtdErros, setQtdErros] = useState(0);
  let [inGame, setInGame] = useState(false);


  return (
    <div className="main">
      <Jogo 
      palavra={palavra} setPalavra={setPalavra} 
      selecionadas={selecionadas} setSelecionadas={setSelecionadas} 
      qtdErros={qtdErros} resultado={resultado}
      setInGame={setInGame}
      />
      <Letras 
      palavra={palavra}
      selecionadas={selecionadas} setSelecionadas={setSelecionadas}
      qtdErros={qtdErros} setQtdErros={setQtdErros}
      resultado={resultado} setResultado={setResultado}
      inGame={inGame} 
      />
    </div>
  );
}

export default App;
