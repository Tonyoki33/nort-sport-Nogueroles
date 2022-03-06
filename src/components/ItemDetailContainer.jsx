import React, { useEffect, useState } from "react";
import "./styles/items.css";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import ItemDetail from "./itemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProdcut] = useState(null);

  useEffect(() => {
    let mounted = true;
    getDoc(doc(db, "items", id)).then((doc) => {
      let prod = [];
      prod.push({ id: doc.id, ...doc.data() });
      setProdcut(prod[0]);
    });

    return () => {
      mounted = false;
    };
  }, [id]);

  return (
    <>
      <div className="item_detail">
        {product ? <ItemDetail product={product} /> : null}
      </div>
    </>
  );
};

export default ItemDetailContainer;
