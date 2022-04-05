import React from 'react'
import './Task.css'
import { Fab } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import { removeTask, taskDone } from '../../features/taskslice';
import {useDispatch} from 'react-redux'

export default function Task(props) {

  const {id, task} = props
  const {note, done} = task

  const dispatch = useDispatch()

  return (
    <div className={`task-wrapper ${done ? 'reduce-opacity' : null}`}>
      <div className='task'>
        <div className='task-text'>
          <p>
            {note}
          </p>
        </div>
      </div>

      <div className='fab-btn-wrapper' >
        <Fab size='small' sx={{mr:1}} onClick= {()=> dispatch(taskDone(id))}>
          <CheckIcon fontSize='small' ></CheckIcon>
        </Fab>
        <Fab size='small' sx={{mr:1}} onClick={()=> dispatch(removeTask(id))}>
          <ClearIcon fontSize='small'></ClearIcon>
        </Fab>
      </div>
    </div>
  )
}
