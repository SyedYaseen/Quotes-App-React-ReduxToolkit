import React from 'react'
import './TaskList.css'
import Tasks from '../Task/Task'

export default function Tasklist() {
  
  const tasksList = ["Eat food","Eat food","Eat food","Eat food","Eat food", "Drink water", "Poop everyday"]
  
  
  return (
    <div className='tasklist-wrapper'>
      <div className='task-grid'>
        {tasksList.map((task, index) => {
          return <Tasks key = {index} task= {task} ></Tasks>
        })}
      </div>
    </div>
  )
}
