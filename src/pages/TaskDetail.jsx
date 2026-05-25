import { useParams } from "react-router-dom";

export default function TaskDetail() {
  const { id } = useParams();

  const data = localStorage.getItem("taskflow_data");
  const tasks = data ? JSON.parse(data) : [];

  const task = tasks.find((t) => t.id === Number(id));

  if (!task) {
    return <h2>Tâche introuvable</h2>;
  }

  return (
    <div>
      <h1>Détail de la tâche</h1>

      <h2>{task.titre}</h2>
      <p>{task.description}</p>
      <p><strong>Statut :</strong> {task.statut}</p>
    </div>
  );
}