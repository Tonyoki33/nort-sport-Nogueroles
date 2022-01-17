import { useState, useEffect } from 'react';
import React, { Fragment } from 'react';
import './styles/items.css'



const ItemListContainer = (props) => {
    const [itemsQty, setItemsQty] = useState(0);
    
    useEffect(() => {   
        let itemList = [];
        itemList.push(itemsQty);
        console.log(itemList);
        console.log("tengo", itemsQty);
        return () => {
            console.log("desmonto el componente")
        }
    }, [itemsQty])

    return(
        <Fragment>
            <div className='item_container'>
                <h2>{props.item}</h2>
                <img src="https://via.placeholder.com/60" alt="imagen-item" />
                <span>{props.price}</span>
                <div className='stock_container'>
                    <button onClick={()=>setItemsQty(itemsQty==0 ? itemsQty-0 : itemsQty-1)}>
                        <p>-</p>
                    </button>
                        <p value={itemsQty} className='stock_qty'>{itemsQty}</p>
                    <button onClick={()=>setItemsQty(itemsQty+1)}>
                        <p>+</p>
                    </button>
                </div>
                <button type="submit">AGREGAR</button>
            </div>
        </Fragment>
    )
}

export default ItemListContainer; 
