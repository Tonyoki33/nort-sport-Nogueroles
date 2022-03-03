import React, { useContext, useEffect, useState } from "react";
import "./styles/cart.css";
import EmptyCart from "./elements/EmptyCart";
import { CartContext } from "./context/CartContext";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import CartList from "./CartList";

const CartContainer = () => {
  const { items } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);
  
  const checkout = () => {
    if (items.length === 0 ){
      alert("no tienes items en el carrito")
      return
    }
      const itemsToBuy = items.map(item => {
        return{
          id: item.id,
          titel: item.name,
          price: item.price,
          qty: item.qty
        }
      })
      const buyer = {
        name: "Martin Nogueroles",
        phone: "1155225566",
        email: "martin@nogueroles.com"
      }

      const totalPriceGlobal = items.reduce((a,b) =>{
        return ((a.qty * a.price) + (b.qty * b.price))
      }, 0)

      const order = {buyer: buyer, items: itemsToBuy, total:totalPriceGlobal}
      addDoc( collection(db, "orders"), order)
      .then(doc => {
        alert(`Tu compra se ha realizado con éxito, esta es la id de tu orden: ${doc.id}`)
      })
      .catch(err => {
        alert(`ha ocurrido un error,${err}`)
      })

  }

  useEffect(() => {
    if (items.length > 0){
    const prevTotal = items.reduce((itemA, itemB)=>{
      return(itemA.qty * itemA.price) + (itemB.qty * itemB.price);
    }, 0)
    console.log(prevTotal)
  }
    
  }, [items])
  

  return (
    <section className="cart_detail">
      <div className="cart_detail-title">
        Cantidad de productos : {items.length}
      </div>
      {(items.length == 0) ? (
       <div className="empty-cart">
          <EmptyCart />
       </div>
      ) : (
        
      <div>
          <CartList products = {items}/>
          <div className="cart_detail-body">
            Total price:{totalPrice}
          </div>
          <div className="cart_detail-btn">
          <button variant="succes" onClick={((event)=>{
            event.preventDefault()
            checkout()
          })}>Comprar</button>
          </div>
      </div>
      )}
      
    </section>
  );
};

export default CartContainer;
