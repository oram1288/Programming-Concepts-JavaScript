// import React from "react";
// import Button from "./Button";
// import Product from "./Product";
// import ProductList from "./ProductList";

const ShoppingCart = ({ products, onDelete, onToggle }) => {
  return (
    <>
      <h2>Shoppping Cart</h2>
      {/* {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
      <Button text="Check Out" color="navy" onClick={onDelete} /> */}

      <a href="/">Go Back</a>
    </>
  );
};

export default ShoppingCart;
