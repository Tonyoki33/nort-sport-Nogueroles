import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import ItemListContainer from './components/ItemListContainer';
import './components/styles/main.css'
function App() {
  return (
    <div className="App">
      <Nav/>
      <div className='items_container'>
        <ItemListContainer item="Zapatilla"/>
        <ItemListContainer item="Remera"/>
        <ItemListContainer item="Camisa"/>
        <ItemListContainer item="Pantalon"/>
      </div>
      <Footer  />
    </div>
  );
}

export default App;
