import { configureStore } from '@reduxjs/toolkit'
import actionSlice from './slices/action.slice'
import timeSlice from './slices/time.slice'

export default configureStore({
  reducer: {
    action: actionSlice,
    time: timeSlice
  },
})