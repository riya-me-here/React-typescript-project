import React from "react";
import { ITask } from "../Interface";

interface Props{
    task: ITask
    deleteTask(taskName:string): void;
}

const TodoTask = ({task, deleteTask}: Props) =>{
    return (
    <div>
        <div className="task">
            <div className="content">
                <span>{task.taskName}</span>
                <span>{task.deadline}</span>
            </div>
            <button onClick={() => {deleteTask(task.taskName)}}>X</button>
        </div>
    </div>)
}

export default TodoTask