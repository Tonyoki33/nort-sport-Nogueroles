import { useContext, Fragment, useState, useEffect } from "react";
import CartContainer from "./CartContainer";
import { CartContext } from "./context/CartContext";
import "./styles/Nav-scrolled.css";
import "./styles/Nav.css";
import "./styles/cart.css";

const CardWidget = () => {
  const { items } = useContext(CartContext);
  const [toggle, setToggle] = useState(false);

  const toggleSwitchBtn = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  return (
    <Fragment>
        <div className="cart-widget">
        <i onClick={toggleSwitchBtn} className="fas fa-shopping-basket"></i>
      <p className="cart_items">{items.length}</p>
      <section className={toggle ? "cart_container-on" : "cart_container-off"}>
        <CartContainer />
      </section>
    </div>
    </Fragment>
  );
};

export default CardWidget;
