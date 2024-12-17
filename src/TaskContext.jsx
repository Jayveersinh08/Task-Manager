import { useState, React, createContext } from 'react';


export const TaskContext = createContext();


export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    const deleteTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId))
    };

    const toggleComplete = (taskId) => {
        setTasks(tasks.map(task =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
        ));
    };


return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, toggleComplete }}>
        {children}
    </TaskContext.Provider>
)
};


