// src/TaskItem.js
import {React, useContext} from 'react';
import { TaskContext } from './TaskContext.jsx';

const TaskItem = ({ task }) => {
  const { deleteTask, toggleComplete } = useContext(TaskContext);

  const handleComplete = () => {
    toggleComplete(task.id);
  };

  const handleDelete = () => {
    deleteTask(task.id);
  };

  return (
    <div style={{ marginBottom: '10px', padding: '10px', border: '1px solid white', backgroundColor : task.completed ? 'rgb(132, 221, 137)' :'white' }}>
      <h3 style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.title}
      </h3>
      <p>{task.description}</p>
      <button onClick={handleComplete}>
        {task.completed ? 'undo': 'completed'}
      </button>
      <button onClick={handleDelete} style={{ backgroundColor: 'red', color: 'white' }}>
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
