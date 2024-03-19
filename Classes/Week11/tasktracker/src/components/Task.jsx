import { FaTimes } from "react-icons/fa";
import { BiAtom } from "react-icons/bi";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}{" "}
        <FaTimes
          style={{ color: "green", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>
        <BiAtom />
        {task.day}
      </p>
    </div>
  );
};

export default Task;
