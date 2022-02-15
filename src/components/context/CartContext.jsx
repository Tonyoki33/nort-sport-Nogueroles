import { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  console.log(items)

  const cartItems = () => {
    return items.lenght;
  };
  const onAdd = (product, qty) => {
    product.qty = qty;
    setItems([...items, product]);
  };

  return (
    <CartContext.Provider value={{ items, cartItems, onAdd }}>
      {children}
    </CartContext.Provider>
  );
};
