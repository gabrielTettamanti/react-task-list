import React, { useState } from "react";
import TaskForm from './TaskForm';
import Task from './Task';
import '../stylesheets/TaskList.css';

function TaskList() {

  const [ task, setTask ] = useState([]);

  const toAddTask = taskToAdd => {
    if (taskToAdd.text.trim()){
      taskToAdd.text = taskToAdd.text.trim();
      const updatedTask = [taskToAdd, ...task];
      setTask(updatedTask);
    }
  };

  const toDelete = id => {
    console.log("TRATO DE ELIMINAR")
    const updatedTask = task.filter(someTask => someTask.id !== id);
    setTask(updatedTask);
  };

  const toFinish = id => {
    const updatedTask = task.map( someTask => {
      if (someTask.id === id) {
        someTask.finished = !someTask.finished;
      }
      return someTask;
    });
    setTask(updatedTask);
  }

  return (
    <>
      <TaskForm onSubmit = { toAddTask }/>
      <div className="task-list-container">
         {
          task.map((someTask) => 
            <Task 
              key = { someTask.id }
              id = { someTask.id }
              text = { someTask.text }
              finished = { someTask.finished }
              toFinish = { toFinish }
              toDelete = { toDelete }
            />
          )
         }
      </div>
    </>
  );
}

export default TaskList