import logo from './logo.svg';
import './App.css';
import Conversor from './components/Conversor.js'


function App() {
  return (
    <div className="App">
      <h1>Conversor USD para BRL</h1>
      <Conversor moedaA="USD" moedaB="BRL"></Conversor>

    </div>
  );
}

export default App;
