// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  let firstName = "Cody";
  return (
    <div className="App">
      <h1>My First react progject</h1>
      <p>React is fun to learn!!!</p>
      <p>this is going to be a jsx thing...</p>
      <p>Welcome {firstName}</p>
      <p>Welcome {2 + 2}</p>
      <Header
        title="Calculator App"
        text="This is going to be a calculator app used for calculations"
      />
      <p>Welcome {firstName}</p>
      <Header title="To-Do App" text="To-Do App for different purpose" />
      <p>Welcome {firstName}</p>
      <Footer />
    </div>
  );
}

export default App;

// Code that was in the div before i changed it...
//<header className="App-header">
// <img src={logo} className="App-logo" alt="logo" />
// <p>
// Edit <code>src/App.js</code> and save to reload.
// </p>
// <a
//   className="App-link"
//   href="https://reactjs.org"
//   target="_blank"
//   rel="noopener noreferrer"
// >
// Learn React
// </a>
//</header>
