// 11. **Condicionais com `if`**: Renderize conteúdo condicionalmente com base no estado.
import {useState} from "react";

const Condicional = () => {
    const [show, setShow] = useState(true);

    const handleClick = () => {
        setShow(!show);
    }

    return (
        <div>
            {show && <p>Conteúdo</p>}
            <button onClick={handleClick} type="button">Mostrar/Esconder</button>
        </div>
    )
}

export default Condicional;