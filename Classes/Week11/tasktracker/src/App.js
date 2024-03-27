import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Temp1 from "./components/Temp1";
import Temp2 from "./components/Temp2";
import Temp3 from "./components/Temp3";
import Temp4 from "./components/Temp4";
import Footer from "./components/Footer";
import About from "./components/About";
import TaskDetails from "./components/TaskDetails";

import { useState, useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    // console.log(data);
    // setTasks(data);
    return data;
  };

  // Fetch task

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  };

  let [showAddTask, setShowAddTask] = useState(true);

  // Delete Button

  let deleteTask = async (id) => {
    // console.log("Delete", id);

    // setTasks(tasks.filter((task) => task.id !== id)); // return all task BUT the one with the task.id

    await fetch(`http://localhost:5000/tasks/${id}`, { method: "DELETE" });

    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle reminder

  let toggleReminder = async (id) => {
    // bring the task to which we want to toggle reminder

    const taskToToggle = await fetchTask(id);
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    // server update
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updTask),
    });
    const data = await res.json();

    // UI update here...
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  // to add new task...

  let addTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(task),
    });

    // let id = Math.floor(Math.random() * 1000) + 1;
    // let newTask = { id, ...task };

    const data = await res.json();

    setTasks([...tasks, data]);
  };

  return (
    <Router>
      <div className="container">
        <Header
          title="Task Tracker"
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {showAddTask && <AddTask onAdd={addTask} />}

                {tasks.length > 0 ? (
                  <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleReminder}
                  />
                ) : (
                  "No tasks to show"
                )}
              </>
            }
          />
          {/* {showAddTask && <AddTask onAdd={addTask} />}

          {tasks.length > 0 ? (
            <Tasks
              tasks={tasks}
              onDelete={deleteTask}
              onToggle={toggleReminder}
            />
          ) : (
            "No taks to show"
          )} */}

          {/* <Temp1 /> */}
          {/* <Temp2 /> */}
          {/* <Temp3 /> */}
          {/* {<Temp4 />} */}
          <Route path="/about" element={<About />} />
          <Route path="/task/:id" element={<TaskDetails />} />
          <Route path="/temp1" element={<Temp1 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
