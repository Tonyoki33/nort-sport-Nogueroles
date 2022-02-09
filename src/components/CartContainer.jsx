import React, { useContext, useEffect, useState } from "react";
import Cart from "./Cart";
import "./styles/cart.css";
import EmptyCart from "./elements/EmptyCart";
import { CartContext } from "./context/CartContext";

const CartContainer = () => {
  const { items } = useContext(CartContext);
  const [price, setPrice] = useState(0);


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
          <div className="cart_detail-body">
            {items.map((el) => {
              return (
                <Cart
                  title={el.title}
                  thumbnail={el.thumbnail}
                  domain_id={el.domain_id}
                  price={el.price}
                  length={el.length}
                  available_quantity={el.available_quantity}
                />
              );
            })}
          </div>
          <div className="cart_detail-body">
            Total price:{}
          </div>
          <div className="cart_detail-btn">
          <button>Comprar</button>
          </div>
      </div>
      )}
      
    </section>
  );
};

export default CartContainer;
