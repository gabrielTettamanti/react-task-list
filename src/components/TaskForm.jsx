import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid'
import '../stylesheets/TaskForm.css'

function TaskForm(props) {

    const [ input, setInput ] = useState('');

    const changeManage = e => {
        setInput(e.target.value);
    };

    const sendManage = e => {
        e.preventDefault();
        const newTask = {
            id: uuidv4(),
            text: input,
            finished: false
        }
        props.onSubmit(newTask);
    };

    return(
        <form 
            className = "task-form"
            onSubmit = { sendManage }
            >
            <input
                className = "input-task"
                type = 'text'
                placeholder="Write a Task"
                name="text"
                onChange = { changeManage }
            />
            <button className="button-task">Add Task</button>
        </form>
    )
}

export default TaskForm