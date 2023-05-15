import React from 'react'
import {Link } from 'react-router-dom'

export default function Inputs({handleSubmit,task,date,status,setDate,setStatus,setTask}) {
  return (
    <form 
    onSubmit={(e)=>{
        e.preventDefault();
        handleSubmit(task.task,date.date,status.status)
        // Here in handlesubmit function we can pass the values of our states . like in task state i pass the value of task keyword. task.task means 1st task is our state and 2nd task is the key that is used in initialstate.
    }}
>
    <div className='form-input'>
        <label htmlFor="task">Enter Task Details: <br />
        <input type="text" name='task'  placeholder=' ✍ Enter Your Text Here' onChange={(e)=> setTask({task:e.target.value})} />
        </label>
        <label htmlFor="date"> Enter The Date: <br />
            <input type="date" name='date'  onChange={(e)=> setDate({date:e.target.value})}/>
        </label>
        <label htmlFor="status"  onChange={(e)=> setStatus({status:e.target.value})}> Choose The Status ✔: <br />
        <div className='display'>
            <input type="radio" name='status' value="InComplete" />InComplete
            <input type="radio" name='status' value="Completed" />Completed
            </div>
        </label>
    </div>

    <button className='btn'>Submit</button>

    
</form>
  )
}
