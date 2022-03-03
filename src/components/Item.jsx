import React, {Fragment,useState} from 'react';
import './styles/items.css'
import './ItemListContainer'
import { useNavigate } from 'react-router-dom';

const Item = ({product}) => {
    const {id, name, imageURL, price} = product
    const navigate = useNavigate();

    const goToProduct = () =>{
        navigate(`/nort-sport-Nogueroles/${id}`);
    }    
    return ( 
        <Fragment>
            <div className='item_container' >
                <h2>{name}</h2>
                <img src={imageURL} alt="imagen-item" />
                <p>Price:{price}</p>
                <button onClick={()=>goToProduct()}>Ver detalles del producto</button>
            </div>
        </Fragment>
     );
    }
    
    
    export default Item;