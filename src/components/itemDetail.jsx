import './styles/items.css'
import React, { Fragment,useContext,useState } from 'react';
import ItemCounter from './ItemCount';
import { CartContext } from './context/CartContext';



const ItemDetail = ({product}) => {
    
    const {onAdd} = useContext(CartContext)
   
    const {name, desc, price, imageURL, stock} = product
    const [itemsQty, setItemsQty] = useState(0);

/*Componentes dentro del contenedor*/
    return(

        <Fragment>
    <div className='item_detail-container'>
        <h2>{name}</h2>
        <img src={imageURL} alt="imagen-item" />
        <span>Detalle:{desc}</span>
        <h3>Stock:{stock}</h3>
        <h3>Precio:{price}</h3>
        <ItemCounter itemsQty={itemsQty} availableQty={stock} setItemsQty={setItemsQty}/>
        <button onClick={()=> onAdd(product, itemsQty)} variant="primary">Añadir al carrito</button>
    </div> 
        </Fragment>
    )
}

export default ItemDetail; 
