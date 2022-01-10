import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <Nav/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My first store
        </p>
        <a
          className="App-link"
          href="https://es.reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver más
        </a>
      </header>
      <Footer  />
    </div>
  );
}

export default App;
