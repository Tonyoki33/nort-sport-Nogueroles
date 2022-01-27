import React, {Fragment,useState} from 'react';
import './styles/items.css'
import './ItemListContainer'

/*Noté que si pongo los parámetros entre {} me los toma, pero aún así no se imprimen dentro del contenedor*/
const Item = ({title,stock,price}) => {
    
    return ( 
        <Fragment>
            
                {/*Datos del Item<*/}
            <div className='item_container' >
                <h2>{title}</h2>
                <img src="https://via.placeholder.com/60" alt="imagen-item" />
                
                <p>Price:{price}</p>

                <button>Ver detalles del producto</button>
             
            </div>
        </Fragment>
     );
    }
    
    
    export default Item;