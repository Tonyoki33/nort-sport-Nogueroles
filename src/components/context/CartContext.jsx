import { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const cartItems = () => {
    return items.lenght;
  };
  const onAdd = (product, qty) => {
    product.qty = qty;

    const productIndex = items.findIndex((i) => i.id === product.id);
    if (productIndex === -1) {
      setItems([...items, product]);
    }
  };

  return (
    <CartContext.Provider value={{ items, cartItems, onAdd }}>
      {children}
    </CartContext.Provider>
  );
};
