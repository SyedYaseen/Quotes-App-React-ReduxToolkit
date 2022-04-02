import React from 'react'
import './Task.css'

export default function Task(props) {
  return (
    <div className='task'>
      <div className='task-header'>
          <h4>
            {props.task}
          </h4>
        </div>
      <div className='task-text'>
        <p>
          {props.task}
        </p>
        </div>
    </div>
  )
}
