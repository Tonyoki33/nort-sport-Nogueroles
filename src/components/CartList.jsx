import React from "react";
import Cart from "./Cart";

const CartList = ({ products }) => {
  return (
    <div className="cart_detail-product">
      {products.map((product) => {
        return <Cart key={product.id} product={product} />;
      })}
    </div>
  );
};

export default CartList;
