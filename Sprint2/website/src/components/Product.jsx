const Product = ({ product }) => {
  return (
    <div className="product">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
};

export default Product;
