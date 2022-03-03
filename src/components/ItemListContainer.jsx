import ItemList from "./ItemList";
import {  useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { collection, getDocs} from "firebase/firestore";
import { db } from "../firebase";
import './styles/items.css'

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const [setLoading] = useOutletContext();
    
    
  
      useEffect(() => {
        let mounted = true;
        setLoading(true);
        getDocs(collection(db, "items")).then((docs) => {
          let prods = [];
          docs.forEach((doc) => {
            prods.push({ id: doc.id, ...doc.data() });
          });
          setProducts(prods);
          setTimeout(() => {
            setLoading(false);
          }, 3000);
        });
        return () => (mounted = false);
      }, []);

      return(

        <>
            <div className='items_container'>
                <ItemList products={products}/>
            </div> 
        
        </>
    )
}

export default ItemListContainer; 
