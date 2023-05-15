import React from 'react'

export default function Todo({getTask,handleDel}) {
  return (
    <div>
                <h1>Here our Task will display</h1>
        <div className='display-data'>
            {
                getTask.map((ele,index)=>{
                    return(
                        <div className='display-task' key={index}>
                            <p className=''>{ele.task} </p>
                            <small >{ele.date}</small>
                            <small style={{marginLeft:"5px"}}>{ele.status}</small>
                            <button className='btn' onClick={()=>{handleDel(index)}}> 🥱 Delete</button>
                            
                        </div>
                    )
                })
            }

        </div>
    </div>
  )
}
