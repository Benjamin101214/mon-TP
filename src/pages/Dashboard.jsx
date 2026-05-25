import { useState, useEffect } from "react";
import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";

export default function Dashboard() {

  const [tasks, setTasks] = useState(() => {
    const data = localStorage.getItem("taskflow_data");
    return data ? JSON.parse(data) : [];
  });

  useEffect(() => {
    localStorage.setItem("taskflow_data", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (nouvelleTache) => {
    setTasks([...tasks, nouvelleTache]);
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <h1>Dashboard</h1>

      <TaskForm onAddTask={handleAddTask} />

      {tasks.map((task) => (
        <TaskCard 
          key={task.id} 
          task={task} 
          onDelete={handleDeleteTask}
        />
      ))}
    </div>
  );
}