import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import TasksPage from "./pages/TasksPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  return (
    <main className="h-[100vh] pt-10">
      <Routes>
        <Route path="/" element={<Navigate to="tasks" />} />

        <Route path="/tasks" element={<TasksPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
  );
};

export default App;
