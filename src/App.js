import Jogo from "./components/jogo"
import Letras from "./components/letras"
import { useState } from "react";

function App() {
  let [palavra, setPalavra] = useState('');
  let [selecionadas, setSelecionadas] = useState([]);


  return (
    <div className="main">
      <Jogo palavra={palavra} setPalavra={setPalavra} selecionadas={selecionadas} setSelecionadas={setSelecionadas} />
      <Letras />
    </div>
  );
}

export default App;
