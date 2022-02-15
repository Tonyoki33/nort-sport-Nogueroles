const Cart = ({ title, qty , thumbnail, domain_id, price}) => {
  

  return (
    <div className="cart_detail-product">
      {title}({qty})
      <img width="100rem" src={thumbnail} alt={domain_id} />
      Precio: {price}
     
    </div>
  );
};

export default Cart;
