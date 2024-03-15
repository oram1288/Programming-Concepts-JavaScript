import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Temp1 from "./components/Temp1";
import Temp2 from "./components/Temp2";
import Temp3 from "./components/Temp3";
import { useState } from "react";

function App() {
  let [tasks, setTasks] = useState([
    {
      id: 1,
      text: "School App",
      day: "March 18th at 3:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Gym",
      day: "March 20th at 2:30pm",
      reminder: false,
    },
    {
      id: 3,
      text: "Interview App",
      day: "March 21th at 1:30pm",
      reminder: true,
    },
  ]);

  const onClick = (e) => {
    console.log("click from App component");
  };
  return (
    <div className="container">
      <Header title="Task Tracker" onClick={onClick} />
      <Tasks tasks={tasks} />
      {/* <Temp1 /> */}
      {/* <Temp2 /> */}
      {/* <Temp3 /> */}
    </div>
  );
}

export default App;
