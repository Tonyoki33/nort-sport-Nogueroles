import './App.css';
import { Fragment, useState } from 'react';
import Footer from './components/Footer';
import Nav from './components/Nav';
import ItemListContainer from './components/ItemListContainer';
import ItemDetail from './components/itemDetail'
import './components/server/itemsServer'
import './components/styles/main.css'
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  
  return (
    <Fragment>
      <Nav/>
      {/* <ItemListContainer /> */}
      <ItemDetailContainer/>
      <Footer  />
    </Fragment>
  );
}

export default App;
