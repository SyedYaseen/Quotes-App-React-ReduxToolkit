import React from 'react'
import './CreateTask.css'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import InputUnstyled from '@mui/base/InputUnstyled';

export default function Createtask() {
  return (
    <div className='input-create-task'>
      <TextField fullWidth id="standard-basic" label="Add task" variant="standard" />
    </div>
  )
}
