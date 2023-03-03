import { Navigation } from './components/Navigation';
import './App.css';
import {Logo} from "./components/Logo";
import {CoinFlip} from './components/CoinFlip';

function App() {
  const today = new Date();
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        
        <h1>Blow...</h1>
        <p>{today.toLocaleString()}</p>
        <CoinFlip />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Navigation />
      </header>
    </div>
  );
}

export default App;
