// 13. **Mapear uma lista**: Renderize uma lista de itens usando o método `map()`.
const Lista = () => {
    const paises = ["Brasil", "EUA", "Angola", "Espanha", "França"];

    return (
        <div>
            <ul>
                {
                    paises.map((pais, index) => {
                        return <li key={index}>{pais}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default Lista;