import React from 'react';
import './App.css';
import Weather from './components/Weather/Weather'
import CreateTask from './components/CreateTask/Createtask'
import TaskList from './components/TaskList/Tasklist'
import Quote from './components/Quote/Quote'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {weatherData, selectWeather, selectTasks} from './features/taskslice'

function App() {
  const dispatch = useDispatch()
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [image, setImage] = useState(0)

  useEffect(()=> {
      navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });

    if (lat.length !==0 && long.length !==0) {
      dispatch(weatherData({lat,long}))
    }
  },[lat,long])

  
  const weather = useSelector(selectWeather)
  const tasksList = useSelector(selectTasks)

  const imgs = [11,13,2]
  const imgLength = imgs.length
  const chosenImage = imgs[image]

  const nextImage = () => {
    setImage(prevImg => {
      if (prevImg ===imgLength-1){
        return 0
      }
      return prevImg+1      
    })
  }

  const prevImage = () => {
    setImage(prevImg => {
      if (prevImg === 0 ){
        return imgLength-1
      }
      return prevImg-1      
    })
  }

  return (
   
    <div className="App" style={{ backgroundImage: `url(/img/${chosenImage}.jpg)`, opacity:0.5}} >
      <div className='btn-wrapper'>
        <ChevronLeftIcon fontSize='large' className='btn-arrow' onClick={prevImage}></ChevronLeftIcon>
      </div>

      <div className='content-wrapper' >
          <div className='top-section'>
            <div className='weather'>
              <Weather weather = {weather}/>
            </div>
            <div className='task-wrapper'>
              <div className='create-task-wrapper'>
              <CreateTask/>
              </div>
              <div className='task-list-wrapper'>
                <TaskList taskList = {tasksList} />
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
        <ChevronRightIcon fontSize= 'large' className='btn-arrow' onClick = {nextImage} ></ChevronRightIcon>
      </div>
    </div>
  );
}

export default App;
