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
        <ItemListContainer price={110} item="Zapatilla"/>
        <ItemListContainer price={15} item="Remera"/>
        <ItemListContainer price={30} item="Camisa"/>
        <ItemListContainer price={38} item="Pantalon"/>
      </div>
      <Footer  />
    </div>
  );
}

export default App;
