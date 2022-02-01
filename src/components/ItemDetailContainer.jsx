import React, { Fragment,useEffect,useState } from 'react';
import Item from "./Item"
import './styles/items.css'
import {getProductDescription, getProductDetail, getProducts} from './services/itemsServer';
import ItemDetail from './itemDetail';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {
    const { id } = useParams();
    const [product, setProdcut] = useState(null);
    useEffect(() => {
        let mounted = true;
        
            Promise.all([getProductDetail(id),getProductDescription(id)])
                .then(results =>{
                    console.log(results);
                    let item = results[0];
                    item.description = results[1].plain_text;
                    if(mounted){
                        setProdcut(item)
                        
                    }
                })
        
        return () => mounted = false;{
        
        };
    },  [id]);
    

    
/*Componentes dentro del contenedor*/
    return(

        <>
            <div style={{fontSize:40, color:"white"}}>
                {product ? <ItemDetail product={product}/>:null}
            </div>
        
        </>
    )
}

export default ItemDetailContainer; 
