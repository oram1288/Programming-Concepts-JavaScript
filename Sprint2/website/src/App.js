import "./App.css";
import ProductList from "./components/ProductList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import ShoppingCart from "./components/ShoppingCart";
import CheckOut from "./components/CheckOut";

import { useState } from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  let [products, setProducts] = useState([
    {
      id: 1,
      name: "Product 1",
      description: "Description of Product 1",
      price: 10,
      warranty: true,
    },

    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2",
      price: 20,
      warranty: false,
    },

    {
      id: 3,
      name: "Product 3",
      description: "Description of Product 3",
      price: 30,
      warranty: true,
    },
  ]);

  // Delete Button
  let deleteProduct = (id) => {
    // console.log("Delete", id);

    setProducts(products.filter((product) => product.id !== id)); // return all task BUT the one with the task.id

    // await fetch(`http://localhost:5000/tasks/${id}`, { method: "DELETE" });

    // setTasks(tasks.filter((task) => task.id !== id));
  };

  // Warranty
  let toggleWarranty = (id) => {
    // console.log(id);
    setProducts(
      products.map((product) =>
        product.id === id
          ? { ...product, warranty: !product.warranty }
          : product
      )
    );
  };

  // Add Button - should add products to the shopping cart
  let addProduct = (product) => {
    let id = Math.floor(Math.random() * 1000) + 1;
    let newProduct = { id, ...product };

    setProducts([...products, newProduct]);
  };

  return (
    <Router>
      <div className="App">
        <div className="header">
          <Header title="Welcome to Spark!" />
        </div>
        <div className="container">
          <About />
          <Routes>
            {/* <Route path="/about" element={<About />} /> */}
            <Route
              path="/productlist"
              element={
                products.length > 0 ? (
                  <ProductList
                    products={products}
                    onDelete={deleteProduct}
                    onAdd={addProduct}
                    onToggle={toggleWarranty}
                  />
                ) : (
                  "No Products in Shoppping Cart"
                )
              }
            />
            <Route path="/shoppingcart" element={<ShoppingCart />} />
            <Route path="/checkout" element={<CheckOut />} />
          </Routes>
          <br />
          <hr />
          <br />
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
