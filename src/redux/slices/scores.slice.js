import { createSlice } from "@reduxjs/toolkit"

export const scoreSlice = createSlice({
  name: 'scores',
  initialState: {
    you: [0,0,0],
    them: [0,0,0]
  },
  reducers: {
    setScore: (state, action) => {
      state = { 
        ...state, 
        [action.payload.who]: state[action.payload.who].splice(action.payload.round, 1, action.payload.score),
      }
    } 
  }
})

export const selectScore = state => state.scores;

export const { setScore } = scoreSlice.actions

export default scoreSlice.reducer