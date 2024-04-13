// import PropTypes from "prop-types";

import React from "react";

const Button = ({ product }) => {
  const handleAddToCart = async () => {
    const response = await fetch("http://localhost:5000/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    if (response.ok) {
      console.log("Product added to cart");
    } else {
      console.error("Failed to add product to cart");
    }
  };

  return (
    <button
      className="btn"
      // style={{ backgroundColor: navy }}
      onClick={handleAddToCart}
    >
      {" "}
      <p>Add</p>
      {/* {text} */}
    </button>
  );
};

// Button.defaultProps = {
//   color: "navy",
//   text: "default",
// };

// Button.propTypes = {
//   text: PropTypes.string.isRequired,
//   color: PropTypes.string.isRequired,
// };

export default Button;
