import React, {Fragment,useState} from 'react';
import './styles/items.css'
import './ItemListContainer'

/*Noté que si pongo los parámetros entre {} me los toma, pero aún así no se imprimen dentro del contenedor*/
const Item = ({title,stock,price}) => {
    const [itemsQty, setItemsQty] = useState(0);

    const createElementsForBask = () =>{
        let bask = [];
        bask.push({
            title,stock,price
        });
    }



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
    return ( 
        <Fragment>
            
                {/*Datos del Item<*/}
            <div className='item_container' >
                <h2>{title}</h2>
                <img src="https://via.placeholder.com/60" alt="imagen-item" />
                <p>Stock:{stock}</p>
                <p>Price:{price}</p>
                {/*Contador*/}
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
                console.log(createElementsForBask());
                }} type="submit">AGREGAR</button>
            </div>
            </div>
        </Fragment>
     );
    }
    
    export default Item;