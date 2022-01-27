import React, { Fragment,useEffect,useState } from 'react';
import Item from "./Item"
import './styles/items.css'
import {getProducts} from './server/itemsServer';
import ItemDetail from './itemDetail';


const ItemDetailContainer = () => {
    const  [items, setItems] = useState([])
    useEffect(() => {
        let mounted = true;
        setTimeout(()=>{

            getProducts().then(items => {
                if (mounted) {
                    setItems(items)
                    console.log(items[0])
                }
            })
        },2000)
    return () => mounted = false;
      
    }, []);
    
/*Componentes dentro del contenedor*/
    return(

        <>
            <div>
            {items.map(product =>{
                    return <ItemDetail name={product.name} detail={product.detail} stock={product.stock} price={product.price}/>
                })}
            </div>
        
        </>
    )
}

export default ItemDetailContainer; 
