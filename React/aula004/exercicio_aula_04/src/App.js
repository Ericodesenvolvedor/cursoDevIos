import Header from './Components/Header';
import Notas from './Components/Nota'
function App() {
  const nota1 = Number(prompt('Digite sua primeira nota:'));
  const nota2 = Number(prompt('Digite sua Segunda nota:'));
  const nota3 = Number(prompt('Digite sua Terceira nota:'));
  const nota4 = Number(prompt('Digite sua Quarta nota:'));
  // console.log(typeof nota1);
  return (
    <div className="centralizado">
      <Header />
      <Notas nota1={nota1} nota2={nota2} nota3={nota3} nota4={nota4}/>
    </div>
  )
}

export default App;