import MeuComponente from "./components/MeuComponente";
import MeuBotao from "./components/MeuBotao";

function App() {
  return (
    <div>
      <h1>Olá Mundo, React!</h1>
      <MeuComponente />
      <MeuBotao nome="Click qui"/>
      <MeuBotao nome="depois aqui"/>
      <MeuBotao nome="e por fim aqui"/>
    </div>
  );
}

export default App;
