// 17. **Formulário simples**: Crie um formulário com um campo de texto e um botão.
import {useState} from "react";
import "./styles.css";

const Formulario = () => {
    const [nome, setNome] = useState("");

    const handleNome = (e) => {
        setNome(e.target.value);
    }

    const sendAlert = (e) => {
        e.preventDefault();
        alert(nome);
    }

    return (
        <div className={"container"}>
            <p>Nome: {nome}</p>
            <form>
                <label htmlFor="nome">
                    Nome
                    <input type="text" name={"nome"} placeholder={"Digite o seu nome"} value={nome}
                           onChange={handleNome}/>
                </label>
                <button type="submit" onClick={sendAlert}>Enviar</button>
            </form>
        </div>
    )
}

export default Formulario;