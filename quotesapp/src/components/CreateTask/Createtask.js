import React from 'react'
import './CreateTask.css'
// import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
// import InputUnstyled from '@mui/base/InputUnstyled';
import {addTask} from '../../features/taskslice'
import { useDispatch } from 'react-redux';
import { useState } from 'react';

export default function Createtask() {

  const [task, setTask] = useState("")
  const dispatch = useDispatch()

  const inputValue = (e) => {
    const taskvalue = e.target.value 
    setTask(()=> taskvalue)
  }
  
  const submitForm = (e) => {
    e.preventDefault()
    dispatch(addTask(task))
    setTask(()=> "")
  }

  return (
    <div className='input-create-task'>
      <form onSubmit={submitForm}>
        <TextField onChange={inputValue} fullWidth id="standard-basic" label="Add task" value={task} variant="standard" />
      </form>
    </div>
  )
}
