import './styles/items.css'
import {getProducts} from './server/itemsServer';
import React, { Fragment,useEffect,useState } from 'react';
import Item from './Item'

const ItemDetail = ({name,stock, price, detail}) => {

    const [itemsQty, setItemsQty] = useState(0);

    const setRealStock = (qty) => {
        if (qty <= stock){
            setItemsQty(qty);
        }
    }
    const removeStock = (qty) => {
        if (qty >= 0){
            setItemsQty(qty)
            console.log(`remove${qty}`);
        }
    }
    

    
/*Componentes dentro del contenedor*/
    return(

        <>
    <div className='item_detail-container'>
        <h2>{name}</h2>
        <img src="https://via.placeholder.com/120" alt="imagen-item" />
        <span>Detalle:{detail}</span>
        <h3>Stock:{stock}</h3>
        <h3>Precio:{price}</h3>
                
                
                <div className='stock_container'>
                    <button onClick={()=>removeStock(itemsQty-1)}>
                        <p>-</p>
                    </button>
                        <p value={itemsQty} className='stock_qty'>{itemsQty}</p>
                    <button onClick={()=>setRealStock(itemsQty+1)}>
                        <p>+</p>
                    </button>
                    <button onClick={(event)=>{
                    event.preventDefault();
                    console.log();
                    }} type="submit">AGREGAR</button>
                </div>
    </div>
            
        
        </>
    )
}

export default ItemDetail; 
