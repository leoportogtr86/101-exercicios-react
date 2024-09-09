// 9. **Atualizar State**: Adicione um botão para alterar
// o estado e exibir o valor atualizado.
import {useState} from "react";

const ComEstado = () => {
    const [value, setValue] = useState("Inicial");

    const handleClick = () => {
        setValue("Mudou");
    }

    return (
        <div>
            <p>{value}</p>
            <button type="button" onClick={handleClick}>Click</button>
        </div>
    )
}

export default ComEstado;