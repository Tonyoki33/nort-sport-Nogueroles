import { useState } from "react";
import ItemCounter from "./ItemCount"
const Cart = ({ title, thumbnail, domain_id, price, available_quantity, length }) => {
  const [itemsQty, setItemsQty] = useState(0);
  return (
    <div className="cart_detail-product">
      {title}
      <img width="100rem" src={thumbnail} alt={domain_id} />
      Precio: {price}
      <ItemCounter itemsQty={itemsQty} availableQty={available_quantity} setItemsQty={setItemsQty}/>
    </div>
  );
};

export default Cart;
