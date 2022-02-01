export const getProductsFromCategory = (category) => {
    return fetch(`https://api.mercadolibre.com/sites/MLA/search?category=${category}`).then(data=>data.json())
}


export const getProductDetail = (id) => {
    return fetch(`https://api.mercadolibre.com/items/${id}`)
        .then(data => data.json())
}

export const getProductDescription = (id) => {
    return fetch(`https://api.mercadolibre.com/items/${id}/description`)
        .then(data=>data.json())
}


export const getProducts = () => {
    const items = [
        {
            id:1,name:"zapatilla",stock:13,detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elementum condimentum purus id euismod. Aliquam lobortis felis et dolor bibendum dignissim. Aliquam urna velit, viverra.",price:110
        },
        {
            id:2,name:"Remera",stock:35,detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elementum condimentum purus id euismod. Aliquam lobortis felis et dolor bibendum dignissim. Aliquam urna velit, viverra.",price:27
        },
        {
            id:3,name:"Camisa",stock:24,detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elementum condimentum purus id euismod. Aliquam lobortis felis et dolor bibendum dignissim. Aliquam urna velit, viverra.",price:35
        },
        {
            id:4,name:"Pantalon",stock:20,detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elementum condimentum purus id euismod. Aliquam lobortis felis et dolor bibendum dignissim. Aliquam urna velit, viverra.",price:10
        }
    ]
    return new Promise((resolve,reject)=>{
        resolve(items);
    }
    )
}
export default getProducts;

