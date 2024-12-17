// src/TaskForm.js
import React, { useContext, useState } from 'react';
import {TaskContext } from './TaskContext.jsx';

const TaskForm = () => {
  const { addTask } = useContext(TaskContext)
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() && description.trim()) {
      const now = new Date();
      const uniqueId = `${Date.now()}-${now.getHours()}${now.getMinutes()}${now.getSeconds()}${Math.random()}`;
        const newTask = {
        id: uniqueId,
        title,
        description,
        completed: false,
      };
      console.log(newTask)
      addTask(newTask);
      setTitle('');
      setDescription('');
    } else {
      alert('Please fill in both fields!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
