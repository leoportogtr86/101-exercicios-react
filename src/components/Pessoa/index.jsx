// 5. **Props**: Crie um componente que receba uma prop de texto e a exiba em um `h1`.
const Pessoa = ({nome, sobrenome}) => {
    return (
        <h1>{nome} {sobrenome}</h1>
    )
}

export default Pessoa;