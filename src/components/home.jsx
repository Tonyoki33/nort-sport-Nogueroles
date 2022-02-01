import Footer from './Footer';
import Nav from './Nav';
import ItemListContainer from './ItemListContainer';
import { Fragment, useState } from 'react';
import ItemDetail from './itemDetail'
import './services/itemsServer'
import './styles/main.css'
import ItemDetailContainer from './ItemDetailContainer';


export const Home = () => {
  
  return (
    <Fragment>
      <ItemListContainer />
      {/* <ItemDetailContainer/> */}
      <Footer  />
    </Fragment>
  );
}