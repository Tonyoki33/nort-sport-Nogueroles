import React, { Fragment } from 'react';
import ItemListContainer from './ItemListContainer';

const CardWidget = () => {
   

    return(
        <Fragment>
        <a id="nav_btn-basket" className="nav_basket">
            <i className="fas fa-shopping-basket"></i>
        </a>
        <p style={{color:"white"}}></p>
        </Fragment>
    )
}


export default CardWidget;