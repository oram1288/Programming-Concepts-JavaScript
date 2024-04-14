import Button from "./Button";
import { MdDescription } from "react-icons/md";
import { IoPricetag } from "react-icons/io5";
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
          {/* <br /> */}
          <p>
            <MdDescription style={{ color: "white", margin: "5px" }} />
            {product.description}
          </p>
          <p>
            <IoPricetag style={{ color: "white", margin: "5px" }} />$
            {product.price}
          </p>

          <img src={picture} alt={product.image} class={"listimages"} />
          <br />
          <Link to={`/products/${products.id}`} class="btn3">
            View Details
          </Link>
          {/* <br /> */}
          <Button product={product} />
        </div>
      ))}
      <br />

      <Link class="btn" to="/shoppingcart">
        Shopping Cart
      </Link>
      <br />
    </>
  );
};

export default ProductList;
