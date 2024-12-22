import "./TaskCard.css"; // Importar el archivo CSS
import {useTasks} from "../context/TaskProvider.jsx";

function TaskCard({ task }) {
    const {deleteTask}=useTasks();
  return (
    <div className="task-card">
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>{task.id}</p>
      <p>{task.created_at}</p>
      <div className="task-card-buttons">
        <button className="update-button">
          Update
        </button>
        <button className="delete-button" onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </div>
  );
}

export default TaskCard;
