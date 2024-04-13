// import React from "react";
// import Button from "./Button";
// import Product from "./Product";
// import ProductList from "./ProductList";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      const response = await fetch("http://localhost:5000/cart");
      if (response.ok) {
        const data = await response.json();
        setCart(data);
      } else {
        console.error("Failed to fetch cart");
      }
    };
    fetchCart();
  }, [cart]);

  let deleteCart = async (id) => {
    await fetch(`http://localhost:5000/cart/${id}`, {
      method: "DELETE",
    });
    console.log(cart.id);

    setCart(cart.filter((cart) => cart.id !== id));
  };

  return (
    <>
      <h2>Shoppping Cart</h2>
      <div class="product">
        {cart.map((product) => (
          <div>
            {" "}
            <p key={product.id}>
              {product.name} - ${product.price}
            </p>
            <button className="btn" onClick={() => deleteCart(product.id)}>
              X
            </button>
          </div>
        ))}
      </div>
      <br />
      <Link class="btn" to="/checkout">
        Check Out
      </Link>
      <br />

      {/* <a class="btn" href="/checkout">
        Check Out
      </a> */}
    </>
  );
};

export default ShoppingCart;
