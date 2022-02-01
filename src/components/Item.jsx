import React, {Fragment,useState} from 'react';
import './styles/items.css'
import './ItemListContainer'
import { useNavigate } from 'react-router-dom';

/*Noté que si pongo los parámetros entre {} me los toma, pero aún así no se imprimen dentro del contenedor*/
const Item = ({id,title,img,stock,price}) => {
    const navigate = useNavigate();

    const goToProduct = () =>{
        navigate(`/nort-sport-Nogueroles/${id}`);
    }    
    return ( 
        <Fragment>
            
                {/*Datos del Item<*/}
            <div className='item_container' >
                <h2>{title}</h2>
                <img src={img} alt="imagen-item" />
                
                <p>Price:{price}</p>

                <button onClick={()=>goToProduct()}>Ver detalles del producto</button>
             
            </div>
        </Fragment>
     );
    }
    
    
    export default Item;