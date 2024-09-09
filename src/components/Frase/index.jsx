// 3. **JSX**: Escreva um componente que exibe uma frase dentro de um elemento `h1` usando JSX.
const Frase = ({frase}) => {
    return (
        <div>
            <h1>{frase}</h1>
        </div>
    )
}

export default Frase;