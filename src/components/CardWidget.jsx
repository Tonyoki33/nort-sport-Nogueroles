import { useContext , Fragment } from 'react';
import { CartContext } from './context/CartContext';
import ItemListContainer from './ItemListContainer';
import './styles/Nav.css'

const CardWidget = () => {
   
    const {items} = useContext(CartContext);

    return(
        <Fragment>
        <a id="nav_btn-basket" className="nav_basket">
            <i className="fas fa-shopping-basket"></i>
        </a>
        <div className="cart_items">
            {items.length}
        </div>
        </Fragment>
    )
}


export default CardWidget;