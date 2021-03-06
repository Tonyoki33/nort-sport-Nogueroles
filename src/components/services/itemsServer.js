import { collection, getDocs} from "firebase/firestore";
import { db } from "../../firebase";

export const getProductsFromCategory = (site, category) => {
    return fetch(`https://api.mercadolibre.com/sites/${site}/search?category=${category}`).then(data=>data.json())
}


export const getFireBaseData = () => {
    getDocs(collection(db, "items"))
}

export const getProductDetail = (id) => {
    return fetch(`https://api.mercadolibre.com/items/${id}`)
        .then(data => data.json())
}

export const getProductDescription = (id) => {
    return fetch(`https://api.mercadolibre.com/items/${id}/description`)
        .then(data=>data.json())
}

export const getCategories = (site) => {
    return fetch(`https://api.mercadolibre.com/sites/${site}/categories`).then(data=>data.json())
}





