import {  useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import ItemListContainer from "../ItemListContainer";
// import { getProductsFromCategory } from "../services/itemsServer";
import { collection, getDocs} from "firebase/firestore";
import { db } from "../../firebase";
import "../styles/main.css";
import "../services/itemsServer";


export const Home = () => {

  const [products, setProducts] = useState([]);
  const [setLoading] = useOutletContext();
  const { id } = useParams();
  
  

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
  
  
  return (
    <div>
      <ItemListContainer products={products} />
    </div>
  );
};




 // useEffect(() => {
  //   let mounted = true;
  //   setLoading(true)

  //     getProductsFromCategory("MLA", "MLA1430").then(items => {
  //       if(mounted) {
  //         setProducts(items.results)
  //         console.log(`hola${products}`)
  //         setTimeout(() => {
  //           setLoading(false)
  //         }, 3000)
  //       }
  //     })
  //     return () => mounted = false;
       
  //   }, [id]);

   // useEffect(() => {
    //   const getFromFirebase = async () => {
    //     const query = collection(db, "items");
    //     const snapshot = await getDocs(query)
    //     snapshot.forEach(doc => {
    //       console.log(doc.data())
    //     })
        
    //   }
      
    //   getFromFirebase()
      
    // }, [])