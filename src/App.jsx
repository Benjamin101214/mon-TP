import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import TaskDetail from "./pages/TaskDetail";

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/task/:id" element={<TaskDetail />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}