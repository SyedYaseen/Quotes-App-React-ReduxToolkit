import React from 'react'
import './TaskList.css'
import Tasks from '../Task/Task'

export default function Tasklist(props) {
  
  const tasksList = props.taskList
  
  return (
    <div className='tasklist-wrapper'>
      <div className='task-grid'>
        {tasksList.map((task, index) => {
          return <Tasks key = {index} id={index} task= {task} ></Tasks>
        })}
      </div>
    </div>
  )
}
