import './styles/items.css'
import React, { Fragment,useContext,useState } from 'react';
import ItemCounter from './ItemCount';
import { CartContext } from './context/CartContext';



const ItemDetail = ({product}) => {
    
    const {onAdd} = useContext(CartContext)
   
    const {title, description, price, sold_quantity,warranty,thumbnail,available_quantity} = product
    const [itemsQty, setItemsQty] = useState(0);
    console.log(available_quantity)

/*Componentes dentro del contenedor*/
    return(

        <Fragment>
    <div className='item_detail-container'>
        <h2>{title}</h2>
        <img src={thumbnail} alt="imagen-item" />
        <span>Detalle:{description}</span>
        <h3>Stock:{available_quantity}</h3>
        <h3>Precio:{price}</h3>
        <button onClick={()=> onAdd(product, itemsQty)} variant="primary">Añadir al carrito</button>
    </div> 
        </Fragment>
    )
}

export default ItemDetail; 
