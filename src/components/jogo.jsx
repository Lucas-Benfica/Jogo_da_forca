import forca0 from "../assets/forca0.png"

export default function Jogo(){
    return (
        <div className="jogo">
            <img src={forca0} />
            <div>
                <button className="choose">Escolher Palavra</button>
            </div>
        </div>
    );
}