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
        {cart.map((products) => (
          <div class="product-cart">
            {" "}
            <p key={products.id}>
              {products.name} - ${products.price}
            </p>
            <button className="btn" onClick={() => deleteCart(products.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
      {/* <br /> */}
      <Link class="btn" to="/checkout">
        Check Out
      </Link>
      <br />
      <a class="btn2" href="/productlist">
        Go Back
      </a>
      <br />

      {/* <a class="btn" href="/checkout">
        Check Out
      </a> */}
    </>
  );
};

export default ShoppingCart;
