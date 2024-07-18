import React from 'react'
import './App.css'
function Task({title,Description,DeleteTask,index}) {
  return (
    <div className='tasks'>
        <div className="content">
            <p>{title}</p>
            <span>{Description}</span>
        </div>
        <button type="submit" onClick={()=>DeleteTask(index)}>-</button>
    </div>
  )
}

export default Task