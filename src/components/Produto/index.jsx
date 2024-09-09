// 6. **Props de objeto**: Passe um objeto como prop e use-o dentro do componente.
const Produto = ({produto}) => {
    return (
        <div>
            <p>Nome: {produto.nome}</p>
            <p>Nome: {produto.descricao}</p>
            <p>Nome: {produto.preco}</p>
        </div>
    )
}

export default Produto;