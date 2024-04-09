import "./App.css";
import ProductList from "./components/ProductList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";

// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div class="App">
      <div className="header">
        <Header title="Welcome to Ikea" />
      </div>
      <div className="container">
        <About />
        <ProductList />
        <br />
        <hr />
        <br />
        <Footer />
      </div>
    </div>
  );
}

export default App;
