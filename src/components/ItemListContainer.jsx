import ItemList from "./ItemList";
import './styles/items.css'

const ItemListContainer = ({products}) => {


/*Componentes dentro del contenedor*/
    return(

        <>
            <div className='items_container'>
                <ItemList products={products}/>
            </div> 
        
        </>
    )
}

export default ItemListContainer; 
