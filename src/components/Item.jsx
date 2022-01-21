import React, {Fragment,useState} from 'react';
import './styles/items.css'
import './ItemListContainer'

/*Noté que si pongo los parámetros entre {} me los toma, pero aún así no se imprimen dentro del contenedor*/
const Item = ({title},{stock}) => {
    const [itemsQty, setItemsQty] = useState(0);
    return ( 
        <Fragment>

                {/*Datos del Item<*/}
            <div className='item_container' >
                <h2>{title}</h2>
                <img src="https://via.placeholder.com/60" alt="imagen-item" />
                <p style={{fontSyze:"3rem"}}>Stock:{stock}</p>

                {/*Contador*/}
            <div className='stock_container'>
                <button onClick={()=>setItemsQty(itemsQty==0 ? itemsQty-0 : itemsQty-1)}>
                    <p>-</p>
                </button>
                    <p value={itemsQty} className='stock_qty'>{itemsQty}</p>
                <button onClick={()=>setItemsQty(itemsQty==={stock}?itemsQty+0:itemsQty+1)}>
                    <p>+</p>
                </button>
                <button onClick={(event)=>{
                event.preventDefault();
                }} type="submit">AGREGAR</button>
            </div>
            </div>
        </Fragment>
     );
    }
    
    export default Item;