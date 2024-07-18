import React, { useEffect, useState } from 'react'
import './MainSection.css'
import './App.css'
import Task from './Task'
function MainSection() {
  const arr = localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[]
  const[task,settask] = useState(arr);
  const[title,settitle] = useState("");
  const[Description,setDescription] = useState("");
  const DeleteTask = (index)=>{
    const filtered = task.filter((val,id)=>id!==index);
    settask(filtered)
  } 
  const submitHandeler=(e)=>{
    e.preventDefault();
    if(title!="" && Description!="") settask([...task,{title,Description}]);
  }
  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(task));
  },[task])
  return (
    <div className='main'>
        <form onSubmit={submitHandeler}>
        <input type="text" placeholder='Enter Title' className='internals' value={title} onChange={(e)=>(settitle(e.target.value))}/>
        <textarea name="" placeholder='Enter Description' className='internals' value={Description} onChange={(e)=>(setDescription(e.target.value))}></textarea>
        <button >Add</button>
        </form>
        {task.map((item,index)=>(<Task key={index} title={item.title} Description={item.Description}
        DeleteTask={DeleteTask}
        index = {index}
        />))}
    </div>
  )
}

export default MainSection