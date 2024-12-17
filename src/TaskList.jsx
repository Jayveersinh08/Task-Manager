// src/TaskList.js
import React, { useContext } from 'react';
import { TaskContext } from './TaskContext.jsx';
import TaskItem from './TaskItem.jsx';

const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <div>
      { tasks.length === 0 ? (
        <p>No tasks available. Add a task!</p>
      ) : (
        tasks.map((task,index) => <TaskItem key={index} task={task} />)
      )}
    </div>
  );
};

export default TaskList;
