import './App.css'
import Produto from "./components/Produto/index.jsx";

function App() {
    return (
        <div>
            <Produto
                produto={
                    {
                        nome: "Nome",
                        descricao: "Descrição",
                        preco: 5000
                    }
                }
            />
        </div>
    )
}

export default App;
