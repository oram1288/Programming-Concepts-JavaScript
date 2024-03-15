import Task from "./Task";

// let tasks = [
//   {
//     id: 1,
//     text: "School App",
//     day: "March 18th at 3:30pm",
//     reminder: true,
//   },
//   {
//     id: 2,
//     text: "Gym",
//     day: "March 20th at 2:30pm",
//     reminder: false,
//   },
//   {
//     id: 3,
//     text: "Interview App",
//     day: "March 21th at 1:30pm",
//     reminder: true,
//   },
// ];

const Tasks = ({ tasks }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task task={task} />
        // <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  );
};

export default Tasks;
