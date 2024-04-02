// import logo from "./logo.svg";
import "./App.css";
import ProductList from "./components/ProductList";

import { useState, useEffect } from "react";

function App() {
  let [tasks, setTasks] = useState([
    // {
    //   id: 1,
    //   text: "School App",
    //   day: "March 18th at 3:30pm",
    //   reminder: true,
    // },
    // {
    //   id: 2,
    //   text: "Gym",
    //   day: "March 20th at 2:30pm",
    //   reminder: false,
    // },
    // {
    //   id: 3,
    //   text: "Interview App",
    //   day: "March 21th at 1:30pm",
    //   reminder: true,
    // },
  ]);

  return (
    <div className="App">
      <ProductList />
    </div>
  );
}

export default App;
