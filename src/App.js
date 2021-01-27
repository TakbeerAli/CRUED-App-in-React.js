import React,{useState, useEffect } from 'react';
import Header from './component/Header'
import Tasks from './component/Tasks'
import AddTask from './component/AddTask';
import './App.css';

function App() {

  const [tasks, setTask] = useState([])

  useEffect(() => {
    const getTasks = async () =>{
      const getDataFromServers = await fetchData();
      setTask(getDataFromServers);
    }
    getTasks();
  },[])

//API fetching from backend
  const fetchData = async ()=>{
    const response = await fetch('http://localhost:5000/tasks')
    const data = await response.json()
    return data;
  }

//Add
const addTask = async (task) => {
  // const id = (Math.floor(Math.random()* 1000) + 1); 
  // const newTask = { id, ...task}
  // setTask([...tasks, newTask])
  const response = await fetch('http://localhost:5000/tasks',{
    method:'POST',
    headers:{
      'Content-type': 'application/json',
    },
    body: JSON.stringify(task),
  })
  const data = await response.json();
  setTask([...tasks, data])

}

//delete

const deletTask = async (id) => {
  await fetch(`http://localhost:5000/tasks/${id}`,
 {method:'DELETE'})
  setTask(tasks.filter((task) =>{ return task.id !== id }))
}

  return (
    <>
    <div className="App">

    <AddTask onAdd={addTask}/>
    <Header/>

    {/* Message for if there is no data */}
    {tasks.length >0 ?(
    <Tasks  tasks={tasks}  onDelete={deletTask}/> ):'No Data to Show'
    }
     
    </div>
    </>
  );
}

export default App;
