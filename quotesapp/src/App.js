import React from 'react';
import './App.css';
import Weather from './components/Weather/Weather'
import CreateTask from './components/CreateTask/Createtask'
import TaskList from './components/TaskList/Tasklist'
import Quote from './components/Quote/Quote'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function App() {
  return (
    <div className="App">

      <div className='btn-wrapper'>
        <ChevronLeftIcon fontSize='large' className='btn-arrow'></ChevronLeftIcon>
      </div>

      <div className='content-wrapper'>
          <div className='top-section'>
            <div className='weather'>
              <Weather/>
            </div>
            <div className='task-wrapper'>
              <div className='create-task-wrapper'>
              <CreateTask/>
              </div>
              <div className='task-list-wrapper'>
                <TaskList/>
              </div>
            </div>
          </div>
          <div className='bottom-section'>
              <div className='quote-wrapper'>
                <Quote/>
              </div>
            </div>
        </div>
    
      <div className='btn-wrapper'>
        <ChevronRightIcon fontSize= 'large' className='btn-arrow' ></ChevronRightIcon>
      </div>
    </div>
  );
}

export default App;
