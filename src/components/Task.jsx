import React from "react";
import '../stylesheets/Task.css';
import { AiOutlineCloseCircle } from 'react-icons/ai'

function Task({ id, text, finished, toFinish, toDelete }) {
  return (
    <div className={ finished ? 'task-container finished' : 'task-container' }>
      <div 
        className="text-task"
        onClick={() => toFinish(id)}
        >
        { text }
      </div>
      <div 
          className="icons-task-container"
          onClick={() => toDelete(id)}
        >
        <AiOutlineCloseCircle className="icon-task"/>
      </div>
    </div>
  );
}

export default Task;