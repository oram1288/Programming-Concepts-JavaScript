import logo from "./logo.svg";
import "./App.css";
// import ProductList from "./components/ProductList";
// import ProductDetails from "./components/ProductDetails";
// import ShoppingCart from "./components/ShoppingCart";
// import CheckOut from "./components/CheckOut";

import { useState, useEffect } from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <ProductList /> */}
        {/* <ProductDetails />
        <ShoppingCart />
        <CheckOut /> */}
      </header>
    </div>
  );
}

export default App;
