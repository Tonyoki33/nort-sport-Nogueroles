import React, { Fragment,useEffect,useState } from 'react';
import Item from "./Item"
import './styles/items.css'
import {getProducts, getProductsFromCategory} from './services/itemsServer';

const ItemListContainer = () => {
    const  [items, setItems] = useState([])
    useEffect(() => {
        let mounted = true;
        setTimeout(()=>{
            getProductsFromCategory("MLA1430").then(items=>{
                if (mounted){
                    setItems(items.results)
                    console.log(items.results);
                }
            })
            
        },2000)
    return () => mounted = false;
      
    }, []);
    
    
    // const  [items, setItems] = useState([
    //     {
    //         name:"zapatilla",stock:13,price:110
    //     },
    //     {
    //         name:"Remera",stock:35,price:27
    //     },
    //     {
    //         name:"Camisa",stock:24,price:35
    //     },
    //     {
    //         name:"Pantalon",stock:20,price:10
    //     }
    // ])
   

    
/*Componentes dentro del contenedor*/
    return(

        <>
            <div className='items_container'>
                {items.map(product =>{
                    return <Item id={product.id} title={product.title} img={product.thumbnail} stock={product.sold_quantity} price={product.price}/>
                })}
            </div> 
        
        </>
    )
}

export default ItemListContainer; 
