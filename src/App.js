
import { useState } from 'react';
import './App.css';
import Inputs from './Components/Inputs';
import Todo from './Components/Todo';
import {BrowserRouter, Routes ,Route} from 'react-router-dom'
import { Navbar } from './Components/Navbar';

function App() {
    // Lets declare a initial state of array to collect the objects. in this array we will push our data and store in it
    const initialState=[]; 
    // Now we can declare a state to get the value of task from user
    const[task,setTask]= useState('')
    // Now we can declare a state to get the value of date from user
    const [date,setDate]= useState('')
    // Now we can declare a state to get the value of status from user
    const [status, setStatus]= useState("Incomplete")
    const [getTask ,setGetTask]= useState(initialState)
    // lets create a function which can handle our submit

    const handleSubmit =(taskData,dateData,statusData)=>{
        // console.log(taskData,dateData,statusData)
        // Spread operater will store the last data and we will enter newone 
        let newItem = [...getTask]
        // All values will push in the form of object bcz we used the {}and store data in it
        if(task==='', date===''){
           alert("  Can't Add Empty Form ")
        }
        else{
        newItem.push({
            task:taskData,
            date:dateData,
            status:statusData,
        })

        setGetTask(newItem)
        setDate('')
        setTask('')
    }
    }
    
    const handleDel=(index)=>{
      const newItem = getTask.filter((ele,ind)=> {return ind!==index})
        setGetTask(newItem)
    }
  return (
    <>
    <BrowserRouter> 
      <Navbar/>
    <Routes> 
  <Route path='/' element={<Inputs handleDel={handleDel} handleSubmit={handleSubmit} task={task} setTask={setTask} date={date} setDate={setDate} status={status} setStatus={setStatus}/>}/>
    <Route path='todo' element={<Todo getTask={getTask} handleDel={handleDel} /> }/>
    </Routes> </BrowserRouter>
    </>
  );
}

export default App;
