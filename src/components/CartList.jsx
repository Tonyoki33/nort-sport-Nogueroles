import React from 'react'
import Cart from './Cart'

const CartList = ({products}) => {
  return (
    <div>
        {products.map((product)=>{
            return(<Cart key={product.id} product={product}/>)
        })}
    </div>
  )
}

export default CartList;