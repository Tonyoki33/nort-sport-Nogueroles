import Footer from './Footer';
import ItemListContainer from './ItemListContainer';
import { Fragment, useEffect, useState } from 'react';
import './services/itemsServer'
import './styles/main.css'
import { getProductsFromCategory } from './services/itemsServer';
import { useParams } from 'react-router-dom';


export const Home = () => {

  const  [products, setProducts] = useState([])
  const { id } = useParams();
    useEffect(() => {
        let mounted = true;
        setTimeout(()=>{
            getProductsFromCategory("MLA","MLA1430").then(items=>{
                if (mounted){
                    setProducts(items.results)
                    console.log(items.results);
                }
            })
            
        },2000)
    return () => mounted = false;
      
    }, [id]);
  console.log(`hola${products}`)
  return (
    <Fragment>
      <ItemListContainer products={products} />
      <Footer  />
    </Fragment>
  );
}