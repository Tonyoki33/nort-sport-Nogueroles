import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import ItemListContainer from './components/ItemListContainer';
import './components/Item';
import './components/styles/main.css'
import { Fragment } from 'react';


function App() {

  return (
    <Fragment className="App">
      <Nav/>
      <div>
        <ItemListContainer />
      </div>
      <Footer  />
    </Fragment>
  );
}

export default App;
