import "./App.css";
import ProductList from "./components/ProductList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import ShoppingCart from "./components/ShoppingCart";
import CheckOut from "./components/CheckOut";
import ProductDetails from "./components/ProductDetails";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="header">
          <Header title="Welcome to Spark" />
        </div>
        <div className="container">
          <About />
          <Routes>
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route
              path="/shoppingcart"
              element={
                products.length > 0 ? (
                  <ShoppingCart
                    products={products}
                    onDelete={deleteCart}
                  />
                ) : (
                  "No Products in Shoppping Cart"
                )
              }
            /> */}
            <Route path="/productlist" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetails />} />
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
