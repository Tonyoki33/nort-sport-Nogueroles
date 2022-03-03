import { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  console.log("cartlist",items)

  const cartItems = () => {
    return items.lenght;
  };
  const onAdd = (product, qty) => {
    product.qty = qty;

    console.log("prod",product)

    const productIndex = items.findIndex(i => i.id === product.id)
    if (productIndex === -1){
      setItems([...items, product]);
    }
    console.log("soy prod index",productIndex)
  };

  return (
    <CartContext.Provider value={{ items, cartItems, onAdd }}>
      {children}
    </CartContext.Provider>
  );
};
