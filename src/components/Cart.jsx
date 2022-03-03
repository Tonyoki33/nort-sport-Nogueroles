const Cart = ({ product }) => {
  const {name, qty , imageURL, domain_id, price} = product;

  return (
    <div className="cart_detail-product">
      {name}({qty})
      <img width="100rem" src={imageURL} alt={domain_id} />
      Precio: {price}
     
    </div>
  );
};

export default Cart;
