import {  useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import ItemListContainer from "../ItemListContainer";
import { getProductsFromCategory } from "../services/itemsServer";
import "../styles/main.css";
import "../services/itemsServer";


export const Home = () => {

  const [products, setProducts] = useState([]);
  const [setLoading] = useOutletContext();
  const { id } = useParams();
  
  
  useEffect(() => {
    let mounted = true;
    setLoading(true)

      getProductsFromCategory("MLA", "MLA1430").then(items => {
        if(mounted) {
          setProducts(items.results)
          setTimeout(() => {
            setLoading(false)
          }, 3000)
        }
      })
      return () => mounted = false;
       
    }, [id]);

  
  return (
    <div>
      <ItemListContainer products={products} />
    </div>
  );
};
