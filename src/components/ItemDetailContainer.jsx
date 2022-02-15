import React, { useEffect,useState } from 'react';
import './styles/items.css'
import {getProductDescription, getProductDetail, getProducts} from './services/itemsServer';
import { collection,doc, getDoc} from "firebase/firestore";
import { db } from "../firebase";
import ItemDetail from './itemDetail';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {
    const { id } = useParams();
    const [product, setProdcut] = useState(null);


    useEffect(() => {
        let mounted = true;
        getDoc(doc(db, "items", id)).then(doc =>{
            let prod = [];
            prod.push({id: doc.id, ...doc.data()})
            console.log(prod)
            setProdcut(prod[0])
        })
    
      return () => {
        mounted = false;
      }
    }, [id])
    






    // useEffect(() => {
        
        // getDoc(collection(db, "items", `${id}`)).then((docs) => {
        //     let prods = [];
        //     docs.forEach((doc) => {
        //       prods.push({ id: doc.id, ...doc.data() });
        //     });
        //     setProdcut(prods)
        //     console.log("somos itemDetailContainer",product);
        // })


            // Promise.all([getProductDetail(id),getProductDescription(id)])
            //     .then(results =>{
            //         console.log(results);
            //         let item = results[0];
            //         item.description = results[1].plain_text;
            //         if(mounted){
            //             setProdcut(item)
                //     }
                // })
               
    //     return () => {

    //     };
    // },  [id]);



/*Componentes dentro del contenedor*/
    return(

        <>
            <div className='item_detail'>
                {product ? <ItemDetail product={product}/>:null}
            </div>

        </>
    )
}

export default ItemDetailContainer;
