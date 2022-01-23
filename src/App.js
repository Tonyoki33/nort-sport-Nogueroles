import './App.css';
import { Fragment, useState } from 'react';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Item from './components/Item';
import './components/Item';
import './components/styles/main.css'


function App() {
  const [items, setItems] = useState([
    {
        name:"zapatilla",stock:13,price:110
    },
    {
        name:"Remera",stock:35,price:27
    },
    {
        name:"Camisa",stock:24,price:35
    },
    {
        name:"Pantalon",stock:20,price:10
    }
])
  return (
    <Fragment className="App">
      <Nav/>
      <div className='items_container'>
                {items.map((data) =>{
                    return <Item title={data.name} stock={data.stock} price={data.price} />
                }
                )}
            </div>
      <Footer  />
    </Fragment>
  );
}

export default App;
