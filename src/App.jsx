// src/App.js
import React from 'react';
import { TaskProvider } from './TaskContext.jsx';
import TaskForm from './TaskForm.jsx';
import TaskList from './TaskList.jsx';
import './App.css';

const App = () => {
  return (
    <>
      <TaskProvider>
        <div style={{ justifyContent: "center" }}>
          <h1>Task Manager</h1>
          <TaskForm />
          <TaskList />
        </div>
      </TaskProvider>
    </>
  );
};

export default App;
