import {Fragment} from 'react';

const ItemCounter = ({itemsQty,availableQty,setItemsQty}) => {

    const setRealStock = (qty) => {
        if (qty <= availableQty){
            setItemsQty(qty);
        }
    }
    const removeStock = (qty) => {
        if (qty >= 0){
            setItemsQty(qty)
        }
    }
    

    return (
    <div  className='stock_container'>
        <button onClick={()=>removeStock(itemsQty-1) }variant="primary">
            <p>-</p>
        </button>
        <p className='stock_qty'>{itemsQty}</p>
        <button onClick={()=>setRealStock(itemsQty+1)}variant="primary">
            <p>+</p>
        </button>
    </div>
                    )
}
export default ItemCounter;