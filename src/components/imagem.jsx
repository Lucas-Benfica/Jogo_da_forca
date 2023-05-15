import forca0 from "../assets/forca0.png"
import forca1 from "../assets/forca1.png"
import forca2 from "../assets/forca2.png"
import forca3 from "../assets/forca3.png"
import forca4 from "../assets/forca4.png"
import forca5 from "../assets/forca5.png"
import forca6 from "../assets/forca6.png"


export default function Imagem({qtdErros}){
    let img = '';
    switch(qtdErros){
        case 0:
            img = forca0
        break;
        
        case 1:
            img = forca1
        break;
        
        case 2:
            img = forca2
        break;

        case 3:
            img = forca3
        break;

        case 4:
            img = forca4
        break;

        case 5:
            img = forca5
        break;
        
        case 6:
            img = forca6
        break;
    }

    return (
        <img src={img} />
    );
}