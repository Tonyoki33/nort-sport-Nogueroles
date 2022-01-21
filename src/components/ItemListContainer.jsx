import React, { Fragment,useState } from 'react';
import Item from './Item';
import './styles/items.css'



const ItemListContainer = () => {

    const [items, setItems] = useState([
        {
            name:"zapatilla",stock:13,
        },
        {
            name:"Remera",stock:35,
        },
        {
            name:"Camisa",stock:24,
        },
        {
            name:"Pantalon",stock:20,
        }
    ])
/*Componentes dentro del contenedor*/
    return(
        <Fragment>
            {/*En esta sección inserto el array*/}
            <div className='items_container'>
                {items.map((data) =>{
                    return <Item title={data.name} stock={data.stock} />
                }
                )}
            </div>
        </Fragment>
    )
}

export default ItemListContainer; 
