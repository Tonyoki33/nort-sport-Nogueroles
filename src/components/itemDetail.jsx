import './styles/items.css'
import {getProducts} from './services/itemsServer';
import React, { Fragment,useEffect,useState } from 'react';
import Item from './Item'

const ItemDetail = ({product}) => {
    const {title, description, price, sold_quantity,warranty,thumbnail} = product
    const [itemsQty, setItemsQty] = useState(0);

    const setRealStock = (qty) => {
        if (qty <= sold_quantity){
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

        <Fragment>
    <div className='item_detail-container'>
        <h2>{title}</h2>
        <img src={thumbnail} alt="imagen-item" />
        <span>Detalle:{description}</span>
        <h3>Stock:{sold_quantity}</h3>
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
            
        
        </Fragment>
    )
}

export default ItemDetail; 
