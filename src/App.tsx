import './App.css';
import React, {FC, ChangeEvent ,useState} from 'react';
import {ITask} from './Interface'
import TodoTask from './components/TodoTask'

const App:FC = () => {

  const [task, setTask] = useState<string>("")
  const [deadline, setDeadline] = useState<number>(0)
  const [todoList, setTodoList] = useState<ITask[]>([])

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void =>{
    if(event.target.name === "task"){
      setTask(event.target.value)
    }
    else{
      setDeadline(Number(event.target.value))
    }
    
  };

  const addTask = ():void =>{
    const newTask ={ taskName : task, deadline : deadline}
    setTodoList([...todoList, newTask])
    console.log(todoList)
    setTask("")
    setDeadline(0)
  }

  const deleteTask = (taskNameToDelete:string):void =>{
    setTodoList(todoList.filter((task)=>{
      return task.taskName !== taskNameToDelete
    }))

  }

  return (
    <div className="App">
    <div className='header'>
      <div className='inputContainer'>
        <input 
          type="text" 
          placeholder='Task...' 
          name="task" 
          value={task}
          onChange={handleChange}>
        </input>
        <input 
          type="number" 
          placeholder='Deadline (in days)...' 
          name="deadline" 
          value={deadline}
          onChange={handleChange}>
        </input>
      </div>
      <button onClick={addTask}>Add Task</button>
    </div>
    <div className='todoList'>
      {todoList.map((task:ITask, key)=>{
        return <TodoTask key={key} task={task} deleteTask={deleteTask}/>
      })}
    </div>
    </div>
  );
}

export default App;
