import { createSlice } from "@reduxjs/toolkit"

export const timeSlice = createSlice({
  name: 'time',
  initialState: {
    time: 0
  },
  reducers: {
    incrementTime : (state) => {
      state.time++
    },
    setTime: (state, action) => {
      state.time = action.payload
    } 
  }
})

export const selectTime = state => state.time.time;

export const { incrementTime, setTime } = timeSlice.actions

export default timeSlice.reducer