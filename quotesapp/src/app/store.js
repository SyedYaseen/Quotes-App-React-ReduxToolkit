import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '../features/taskslice'

export const store = configureStore({
  reducer: {
    task: {taskReducer},
  },
});
