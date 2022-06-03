import BoasVindas from './Components/BoasVindas';
import Sobre from './Components/Sobre'

const nomePessoa = prompt('Qual é o seu nome?')
function App() {
  return (
    <div className="App">
      <BoasVindas nome= {nomePessoa} />
      <Sobre />
    </div>
  );
}

export default App;