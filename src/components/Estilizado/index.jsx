// 15. **Estilos inline**: Adicione estilos inline aos elementos JSX.
// 16. **Estilos externos**: Importe e aplique uma folha de estilos externa.
import "./styles.css";

const Estilizado = () => {
    return (
        <div>
            <p style={{
                color: "aliceblue",
                fontSize: 30,
                backgroundColor: "#222",
                width: 400,
                borderRadius: 12,
                padding: 5
            }}>Parágrafo estilizado.</p>
        </div>
    )
}

export default Estilizado;