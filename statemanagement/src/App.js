
import { useState } from 'react';
import './App.css';
import TaskForm from './taskform';
import TaskList from './tasklist';

function App() {
  const [Tasks,setTasks]=useState([]);
  const addTask = (Task)=>{
    setTasks([...Tasks,Task])
  }
  return (
    <div className="App">
     <TaskForm addTask={addTask}/>
     <TaskList Task={Tasks}/>
    </div>
  );
}

export default App;
