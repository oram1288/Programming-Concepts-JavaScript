// import Product from "./Product";
import Button from "./Button";
// import ipad from "../images/IPad.jpeg";
import picture from "../images/logos.jpeg";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("http://localhost:5000/products");
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      } else {
        console.error("failed to fetch products");
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <h2>Product List</h2>
      {products.map((product) => (
        <div class="product" key={product.id}>
          <h3>{product.name}</h3>
          <br />
          <p>{product.description}</p>
          <p>${product.price}</p>

          <img src={picture} alt={product.image} class={"listimages"} />
          <br />
          {/* <Link to={`/productdetails/${products.id}`}>View Details</Link> */}
          <Link to="/productdetails">View Details</Link>
          <Button product={product} />
        </div>
      ))}
      <br />
      <a class="btn" href="/shoppingcart">
        Shopping Cart
      </a>
      <br />
    </>
  );
};

export default ProductList;
