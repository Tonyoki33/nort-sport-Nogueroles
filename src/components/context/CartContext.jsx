import { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [items, setItems] = useState([]);

    const cartItems = () => {
        return items.lenght;
    }
    const onAdd = (product, qty) => {
        console.log(product,qty);
        product.qty = qty
        setItems([...items,product])
        console.log(items)
    }

    return(
        <CartContext.Provider value={{items,cartItems,onAdd}}>
            {children}
        </CartContext.Provider>
    )
}