import { useContext, Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
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

  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      let currentPosition = window.pageYOffset;
      if (currentPosition > scrollTop) {
        setScrolling(false);
        console.log("im false");
      } else {
        setScrolling(true);
        console.log("im true");
      }
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return (
    <Fragment>
        <div className="cart-widget">
        <i onClick={toggleSwitchBtn} className="fas fa-shopping-basket"></i>
      <p className="cart_items">{items.length}</p>
      <cart className={toggle ? "cart_container-on" : "cart_container-off"}>
        <CartContainer />
      </cart>
    </div>
    </Fragment>
  );
};

export default CardWidget;
