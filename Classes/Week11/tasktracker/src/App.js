import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
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

  let [showAddTask, setShowAddTask] = useState(false);

  let deleteTask = (id) => {
    // console.log("Delete", id);

    setTasks(tasks.filter((task) => task.id !== id)); // return all task BUT the one with the task.id
  };

  // toggle reminder

  let toggleReminder = (id) => {
    // console.log(id);

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  // to add new task...

  let addTask = (task) => {
    let id = Math.floor(Math.random() * 1000) + 1;
    let newTask = { id, ...task };

    setTasks([...tasks, newTask]);
  };

  let onClick = (e) => {
    console.log("click from App component");
  };
  return (
    <div className="container">
      <Header title="Task Tracker" onClick={onClick} />
      {showAddTask && <AddTask onAdd={addTask} />}

      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No taks to show"
      )}

      {/* <Temp1 /> */}
      {/* <Temp2 /> */}
      {/* <Temp3 /> */}
    </div>
  );
}

export default App;
