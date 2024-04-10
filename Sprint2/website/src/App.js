import "./App.css";
import ProductList from "./components/ProductList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import CheckOut from "./components/CheckOut";

import { useState } from "react";

// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  let [products, setProducts] = useState([
    {
      id: 1,
      name: "Product 1",
      description: "Description of Product 1",
      price: 10,
    },

    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2",
      price: 20,
    },

    {
      id: 3,
      name: "Product 3",
      description: "Description of Product 3",
      price: 30,
    },
  ]);

  return (
    <div class="App">
      <div className="header">
        <Header title="Welcome to Ikea" />
      </div>
      <div className="container">
        <About />
        <ProductList products={products} />
        <CheckOut />
        <br />
        <hr />
        <br />
        <Footer />
      </div>
    </div>
  );
}

export default App;
