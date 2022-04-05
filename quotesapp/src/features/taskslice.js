import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {weatherAPI, weatherAPIKey} from '../common/APIs'


export const weatherData = createAsyncThunk(
  'weather',
  async ({lat, long}) => {
    const response = await weatherAPI.get(`?lat=${lat}&lon=${long}&appid=${weatherAPIKey}`)
    const {name, weather} = response.data
    const {description, icon, main} =weather[0]
    const iconLink = `http://openweathermap.org/img/wn/${icon}@2x.png`
    return {name, description, iconLink, main}
  }
)

const initialState = {
    
    weather: {},
    tasks: [],
    quotes: ["Testing this remove task with a sample quote"]
}

const task = createSlice({
    name: 'task',
    initialState,
    reducers: {
      addTask: (state, {payload})=> {
        state.tasks.push({note: payload, done: false})
      },
      removeTask: (state, {payload}) => {
        const filteredTasks = state.tasks.filter((task, index) => index!==payload)
        return {...state, tasks: filteredTasks}
      },
      taskDone: (state, {payload}) => {
        const currentState = state.tasks[payload].done
        state.tasks[payload].done = !currentState
      }
    },
    extraReducers: {
        [weatherData.fulfilled]: (state, {payload}) => ({...state, weather:payload})        
    }
  }
)

export const {addTask, removeTask, taskDone} = task.actions
export const selectTasks = (state) => state.task.tasks
export const selectWeather = (state) => state.task.weather
export default task.reducer