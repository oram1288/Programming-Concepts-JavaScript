import "./App.css";
import ProductList from "./components/ProductList";
import Header from "./components/Header";
import Footer from "./components/Footer";

// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div class="App">
      <div className="container">
        <Header
        // title="Welcome to '' "
        // onAdd={() => setShowAddTask(!showAddTask)}
        // showAdd={showAddTask}
        />
        <br />
        <hr />
        <br />
        <Footer />
      </div>
    </div>
  );
}

export default App;
