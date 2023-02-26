import logo from './logo.svg';
import './App.css';

function App() {
  // ambiente produccion
  return (
    <div className="App">
      <header className="App-header">
        <h1 style ={{color:'red'}}>Produccion</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
