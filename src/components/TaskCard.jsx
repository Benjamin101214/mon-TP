import { Link } from "react-router-dom";

export default function TaskCard({ task, onDelete }) {
  return (
    <Link to={`/task/${task.id}`} style={{ textDecoration: "none", color: "inherit" }}>
      <div style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "15px",
        marginBottom: "10px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
      }}>
        <h3>{task.titre}</h3>
        <p>{task.description}</p>
        <span><strong>Statut :</strong> {task.statut}</span>

        <br /><br />

        <button onClick={(e) => {
          e.preventDefault(); // 🔥 empêche le clic du Link
          onDelete(task.id);
        }}>
          Supprimer
        </button>
      </div>
    </Link>
  );
}