import "./App.css";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";

// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const products = [
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
  ];

  const getProducts = () => products;

  const getProductById = (productId) =>
    products.find((product) => product.id === productId);

  return (
    <div class="App">
      <div className="container">
        <h1>Welcome to _________</h1>
        <Footer />
      </div>
    </div>
  );
}

export default App;
