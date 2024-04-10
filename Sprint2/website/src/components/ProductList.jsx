import Product from "./Product";
import ProductDetails from "./ProductDetails";

const ProductList = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
      {/* <ProductDetails /> */}
    </>
  );
};

export default ProductList;
