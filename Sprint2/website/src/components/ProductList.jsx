import Product from "./Product";
import Button from "./Button";
// import ProductDetails from "./ProductDetails";

const ProductList = ({ products, onDelete, onAdd, onToggle }) => {
  return (
    <>
      <h2>Product List</h2>
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          onDelete={onDelete}
          onAdd={onAdd}
          onToggle={onToggle}
        />
      ))}
      {/* <ProductDetails /> */}
      <br />
      <a class="btn" href="/shoppingcart">
        Shopping Cart
      </a>
      {/* <Button text="Shopping Cart" color="navy" onClick={onAdd} /> */}
      <br />
      {/* <a href="/">Go Back</a> */}
    </>
  );
};

export default ProductList;
