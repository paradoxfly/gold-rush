import { configureStore } from '@reduxjs/toolkit'
import actionSlice from './slices/action.slice'
import timeSlice from './slices/time.slice'
import scoreSlice from './slices/scores.slice'

export default configureStore({
  reducer: {
    action: actionSlice,
    time: timeSlice,
    scores: scoreSlice
  },
})